"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Search, AlertCircle, CheckCircle, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const blackHatPractices = [
    { icon: <AlertCircle size={20} />, text: "Keyword Stuffing" },
    { icon: <AlertCircle size={20} />, text: "Cloaking" },
    { icon: <AlertCircle size={20} />, text: "Hidden Text/Links" },
    { icon: <AlertCircle size={20} />, text: "Link Farming" }
  ];

  return (
    <div className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Left Content */}
          <motion.div className="flex-1 space-y-6 max-w-2xl" variants={itemVariants}>
            <motion.div variants={badgeVariants}>
              <span className="inline-flex items-center bg-red-50 px-3 py-1 rounded-full text-sm font-medium text-red-600 border border-red-100">
                <Shield size={16} className="mr-1" />
                SEO Protection
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              variants={itemVariants}
            >
              Deteksi <span className="text-red-600">Black Hat SEO</span> Sebelum Google Menghukum Anda
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mt-4"
              variants={itemVariants}
            >
              Lindungi peringkat situs Anda dari praktik SEO berbahaya dengan teknologi deteksi canggih kami. Identifikasi pelanggaran pedoman Google sebelum terlambat.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-3 mt-6"
              variants={itemVariants}
            >
              {blackHatPractices.map((practice, index) => (
                <motion.div
                  key={index}
                  className="flex items-center bg-white border border-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 shadow-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-red-500 mr-1">{practice.icon}</span>
                  {practice.text}
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mt-8"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/detect" className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-stone-900 transition-colors">
                  <Search size={18} className="mr-2" />
                  Mulai Deteksi Gratis
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/about" className="inline-flex items-center justify-center bg-white text-gray-800 border border-gray-300 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                  Pelajari Lebih Lanjut
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image/Illustration */}
          <motion.div 
            className="flex-1 relative"
            variants={itemVariants}
          >
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="absolute -top-3 -left-3 bg-red-500 text-white rounded-full p-2">
                  <AlertCircle size={24} />
                </div>
                <div className="absolute -top-3 -right-3 bg-green-500 text-white rounded-full p-2">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-lg font-bold mb-4">Hasil Deteksi SEO</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 bg-red-50 rounded-lg">
                    <span className="flex items-center text-sm">
                      <AlertCircle size={16} className="text-red-500 mr-2" />
                      Keyword Stuffing
                    </span>
                    <span className="text-red-500 font-medium">Terdeteksi</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-green-50 rounded-lg">
                    <span className="flex items-center text-sm">
                      <CheckCircle size={16} className="text-green-500 mr-2" />
                      Struktur Konten
                    </span>
                    <span className="text-green-500 font-medium">Baik</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-red-50 rounded-lg">
                    <span className="flex items-center text-sm">
                      <AlertCircle size={16} className="text-red-500 mr-2" />
                      Hidden Links
                    </span>
                    <span className="text-red-500 font-medium">Terdeteksi</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-green-50 rounded-lg">
                    <span className="flex items-center text-sm">
                      <CheckCircle size={16} className="text-green-500 mr-2" />
                      Meta Tags
                    </span>
                    <span className="text-green-500 font-medium">Baik</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Skor Keamanan SEO</span>
                    <span className="text-red-500 font-bold">65/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Background decorative elements */}
            <motion.div 
              className="absolute -bottom-12 -right-8 w-64 h-64 bg-red-100 rounded-full opacity-30 blur-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 1 }}
            />
            <motion.div 
              className="absolute -top-12 -left-8 w-48 h-48 bg-blue-100 rounded-full opacity-30 blur-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;