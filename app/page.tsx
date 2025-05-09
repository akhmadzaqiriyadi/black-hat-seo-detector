// app/page.tsx - Fix for API response handling
'use client';

"use client";
import { useState, useEffect } from "react";
import UrlForm from '@/components/UrlForm';
import Results from '@/components/Results';
import HeroSection from '@/components/HeroSection';
import { Explanation } from '@/types';
import { 
  Shield, 
  GitMerge, 
  Code,
  Cpu,
  ArrowRight,
  Bot,
  Network,
  AlertTriangle,
  Key,
  LinkIcon,
  Search,
  Database,
  BarChart,
  FileText,
  Server
} from "lucide-react";
 // Define detection features from original component
  const detectionFeatures = [
    {
      title: "Cloaking",
      description: "Membandingkan konten untuk user dan bot.",
      icon: <Network size={24} />
    },
    {
      title: "Keyword Stuffing",
      description: "Mendeteksi penggunaan kata kunci berlebihan.",
      icon: <Key size={24} />
    },
    {
      title: "Hidden Content",
      description: "Mengidentifikasi teks atau link tersembunyi.",
      icon: <AlertTriangle size={24} />
    },
    {
      title: "Suspicious Links",
      description: "Memeriksa link eksternal ke situs judi/spam.",
      icon: <LinkIcon size={24} />
    },
    {
      title: "Redirects",
      description: "Melacak rantai redirect yang mencurigakan.",
      icon: <ArrowRight size={24} />
    }
  ];

  // Tech stack from original component with some additions
  const techStack = [
    { 
      category: "Back-end", 
      tech: "Python dengan Flask untuk API, di-deploy di Azure.", 
      icon: <Server size={24} /> 
    },
    { 
      category: "Front-end", 
      tech: "Next.js 15 untuk antarmuka responsif dan cepat.", 
      icon: <Code size={24} /> 
    },
    { 
      category: "Machine Learning", 
      tech: "Scikit-learn (SVM, Random Forest) dan opsional Transformers (IndoBERT).", 
      icon: <Cpu size={24} /> 
    },
    { 
      category: "Scraping", 
      tech: "BeautifulSoup dan Selenium untuk ekstraksi konten.", 
      icon: <Bot size={24} /> 
    },
    { 
      category: "Analitik", 
      tech: "Visualisasi hasil dengan Chart.js dan analisis statistik.", 
      icon: <BarChart size={24} /> 
    }
  ];

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Explanation | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
      setIsVisible(true);
      
      // Auto rotate through steps
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 5);
      }, 5000);
      
      return () => clearInterval(interval);
    }, []);

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
    } catch (err) {
      console.error('Error analyzing URL:', err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <HeroSection/>  
    {/* <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Black Hat SEO Detector</h1>
      
      <div className="max-w-3xl mx-auto">
        <UrlForm onSubmit={analyzeUrl} loading={loading} />
        
        {error && (
          <div className="mt-6 bg-red-100 text-red-700 p-4 rounded-md">
            <p className="font-medium">Error</p>
            <p>{error}</p>
          </div>
        )}
        
        {result && <Results result={result} />}
      </div>
    </main> */}
        <div className="pb-16 pt-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700`}>
          <span className="inline-flex items-center bg-red-50 px-3 py-1 rounded-full text-sm font-medium text-red-600 border border-red-100">
            <Shield size={16} className="mr-1" />
            Sistem Deteksi
          </span>
          
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Alur Kerja <span className="text-red-600">Black Hat SEO Detector</span>
          </h2>
          
          <p className="mt-4 text-lg text-gray-600">
            Teknologi canggih yang dirancang khusus untuk mengidentifikasi praktik SEO berbahaya dengan menggunakan machine learning dan analisis konten mendalam.
          </p>
        </div>
        
        {/* Technology and Features Section */}
        <div className={`grid md:grid-cols-2 gap-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 delay-300`}>
          {/* Tech Stack Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all">
            <div className="bg-gray-900 text-white p-6">
              <h4 className="text-xl font-bold flex items-center">
                <Code size={24} className="mr-2" />
                Teknologi yang Digunakan
              </h4>
            </div>
            
            <div className="p-6 space-y-4">
              {techStack.map((item, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="bg-red-100 text-red-600 p-2 rounded-lg h-fit">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">{item.category}</h5>
                    <p className="text-gray-600 text-sm">{item.tech}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Detection Features Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all">
            <div className="bg-red-600 text-white p-6">
              <h4 className="text-xl font-bold flex items-center">
                <Shield size={24} className="mr-2" />
                Fitur Deteksi
              </h4>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {detectionFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-all hover:-translate-y-1"
                  >
                    <div className="text-red-500 mb-2">
                      {feature.icon}
                    </div>
                    <h5 className="font-bold text-gray-900">{feature.title}</h5>
                    <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    
      </div>
    </div>
    </>
  );
}
