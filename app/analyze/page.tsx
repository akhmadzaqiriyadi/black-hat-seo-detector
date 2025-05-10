'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UrlForm from '@/components/UrlForm';
import Results from '@/components/Results';
import { Explanation } from '@/types';
import { 
  Shield, 
  AlertCircle,
  Loader2,
  ExternalLink,
  Sparkles
} from "lucide-react";

export default function AnalyzePage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Explanation | null>(null);
  const [recentlyAnalyzed, setRecentlyAnalyzed] = useState<string[]>([]);

  const analyzeUrl = async (url: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to analyze URL');
      }
      
      // Validate response data
      if (!data.explanation) {
        throw new Error('Invalid API response: missing explanation data');
      }
      
      // Create a safe version of the explanation with defaults
      const safeExplanation: Explanation = {
        prediction: data.explanation.prediction || 'Unknown',
        confidence: data.explanation.confidence || 'Unknown',
        reasons: Array.isArray(data.explanation.reasons) ? data.explanation.reasons : [],
        top_keywords: Array.isArray(data.explanation.top_keywords) ? data.explanation.top_keywords : [],
        url: data.explanation.url || url
      };
      
      setResult(safeExplanation);
      
      // Add to recently analyzed URLs if it's not already there
      if (!recentlyAnalyzed.includes(url)) {
        setRecentlyAnalyzed(prev => [url, ...prev].slice(0, 5)); // Keep only the most recent 5
      }
    } catch (err) {
      console.error('Error analyzing URL:', err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Function to handle sample URL analysis
  const analyzeSampleUrl = (url: string) => {
    analyzeUrl(url);
  };

  // Animation variants for loading screen
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  const sparkleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: [0, 1, 0],
      scale: [0.2, 1.2, 0.2],
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const loaderVariants = {
    animate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: "linear"
      }
    }
  };

  return (
    <main className="container mx-auto px-4 pb-12 pt-24">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-flex items-center bg-red-50 px-3 py-1 rounded-full text-sm font-medium text-red-600 border border-red-100">
          <Shield size={16} className="mr-1" />
          Sistem Deteksi
        </span>
        
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
          <span className="text-red-600">Black Hat SEO</span> Detector
        </h1>
        
        <p className="mt-4 text-lg text-gray-600">
          Masukkan URL website untuk menganalisis praktik Black Hat SEO yang mungkin digunakan
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <UrlForm onSubmit={analyzeUrl} loading={loading} />
        
        {error && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 bg-red-50 text-red-700 p-4 rounded-md flex items-start"
          >
            <AlertCircle className="mt-0.5 mr-2 flex-shrink-0" size={20} />
            <div>
              <p className="font-medium">Error</p>
              <p className="mt-1">{error}</p>
            </div>
          </motion.div>
        )}
        
        <AnimatePresence>
          {loading && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-8 text-center py-12"
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative"
              >
                {/* Sparkles animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    variants={sparkleVariants}
                    className="absolute"
                    style={{ left: "45%", top: "-20%" }}
                  >
                    <Sparkles size={24} className="text-yellow-400" />
                  </motion.div>
                  <motion.div 
                    variants={sparkleVariants}
                    className="absolute"
                    style={{ right: "40%", top: "10%" }}
                  >
                    <Sparkles size={16} className="text-yellow-300" />
                  </motion.div>
                  <motion.div 
                    variants={sparkleVariants}
                    className="absolute"
                    style={{ left: "40%", bottom: "0%" }}
                  >
                    <Sparkles size={20} className="text-yellow-500" />
                  </motion.div>
                  <motion.div 
                    variants={sparkleVariants}
                    className="absolute"
                    style={{ right: "45%", bottom: "-20%" }}
                  >
                    <Sparkles size={18} className="text-yellow-400" />
                  </motion.div>

                  {/* Center spinning loader */}
                  <motion.div
                    variants={loaderVariants}
                    animate="animate"
                    className="relative z-10"
                  >
                    <div className="bg-red-50 p-6 rounded-full shadow-md">
                      <Loader2 size={48} className="text-red-600" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-16 text-gray-600"
              >
                Sedang menganalisis URL. Harap tunggu...
              </motion.p>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "easeInOut" }}
                className="h-1 bg-gradient-to-r from-red-300 via-red-600 to-red-300 rounded-full mt-4 max-w-md mx-auto"
              />
            </motion.div>
          )}
        </AnimatePresence>
        
        <AnimatePresence>
          {result && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <Results result={result} />
            </motion.div>
          )}
        </AnimatePresence>
        
        {!loading && !result && !error && (
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              Contoh URL untuk analisis:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => analyzeSampleUrl('https://www.kpu.go.id')}
                className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left"
              >
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <Shield size={18} className="text-green-600" />
                </div>
                <div className="flex-1">
                  <span className="font-medium block">KPU Indonesia</span>
                  <span className="text-sm text-gray-500">Website resmi dengan SEO clean</span>
                </div>
                <ExternalLink size={16} className="text-gray-400" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => analyzeSampleUrl('https://example-blackhat-seo.com')}
                className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left"
              >
                <div className="bg-red-100 p-2 rounded-full mr-3">
                  <AlertCircle size={18} className="text-red-600" />
                </div>
                <div className="flex-1">
                  <span className="font-medium block">Contoh Black Hat</span>
                  <span className="text-sm text-gray-500">Website dengan teknik Black Hat SEO</span>
                </div>
                <ExternalLink size={16} className="text-gray-400" />
              </motion.button>
            </div>
          </div>
        )}
        
        {recentlyAnalyzed.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 pt-6 border-t border-gray-200"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-3">URL yang Baru Dianalisis:</h3>
            <div className="space-y-2">
              {recentlyAnalyzed.map((url, idx) => (
                <motion.button 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  whileHover={{ x: 5 }}
                  onClick={() => analyzeUrl(url)}
                  className="flex items-center w-full text-left p-2 hover:bg-gray-50 rounded-md transition-colors"
                >
                  <ExternalLink size={14} className="text-gray-400 mr-2" />
                  <span className="text-blue-600 hover:underline text-sm truncate">{url}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}