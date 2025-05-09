"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Search, Users } from "lucide-react";

const AboutSection = () => {
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const developerInfo = {
    name: "Akhmad Zaqi Riyadi",
    role: "Fullstack Engineer & AI Engineer",
    image: "/images/developer.jpg",
    skills: [
      "Next.js",
      "React",
      "AI/ML",
      "SEO",
      "Backend Development",
      "Frontend Development",
    ],
  };

  return (
    <div className="pb-16 pt-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* About Section Header */}
          <motion.div
            className="text-center max-w-3xl mx-auto"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center bg-red-50 px-3 py-1 rounded-full text-sm font-medium text-red-600 border border-red-100">
                <Users size={16} className="mr-1" />
                Tentang
              </span>
            </motion.div>

            <motion.h2
              className="mt-4 text-3xl md:text-4xl font-bold text-gray-900"
              variants={itemVariants}
            >
              Ahli dalam Mendeteksi{" "}
              <span className="text-red-600">Praktik SEO Berbahaya</span>
            </motion.h2>

            <motion.p
              className="mt-4 text-lg text-gray-600"
              variants={itemVariants}
            >
              SEO dan pengembang teknologi dengan misi melindungi situs web dari
              praktik Black Hat SEO yang dapat merusak peringkat dan reputasi
              online.
            </motion.p>
          </motion.div>

          {/* Our Story */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
          >
            <motion.div className="relative" variants={itemVariants}>
              <motion.div
                className="relative z-10 rounded-2xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-[4/3] relative bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  <div className="text-9xl text-white font-bold opacity-20">
                    SEO
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full p-8 z-10">
                      <Shield size={80} className="text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-200 rounded-full opacity-30 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute -top-8 -left-8 w-48 h-48 bg-blue-200 rounded-full opacity-30 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.2, 0.3],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>

            <motion.div className="space-y-6" variants={containerVariants}>
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-gray-900"
                variants={itemVariants}
              >
                Cerita Saya
              </motion.h3>

              <motion.p variants={itemVariants} className="text-gray-600">
                Berawal dari keprihatinan terhadap banyaknya situs web bisnis
                lokal yang terkena penalti Google karena praktik SEO yang salah,
                saya mengembangkan Black Hat SEO Detector sebagai bagian dari
                proyek studi saya di bidang Teknik Informatika.
              </motion.p>

              <motion.p variants={itemVariants} className="text-gray-600">
                Dengan menggabungkan pengetahuan tentang algoritma Google dan
                menganalisis pola dari berbagai website yang terkena penalti,
                saya berhasil menciptakan teknologi deteksi yang dapat mengenali
                lebih dari 40 jenis praktik Black Hat SEO yang sering digunakan.
              </motion.p>

              <motion.p variants={itemVariants} className="text-gray-600">
                Misi saya adalah membantu pemilik website, khususnya UKM dan
                konten kreator, untuk menerapkan strategi SEO yang etis dan
                berkelanjutan, serta melindungi mereka dari praktik berbahaya
                yang dapat merusak peringkat mereka dalam hasil pencarian.
              </motion.p>

              <motion.div className="pt-4" variants={itemVariants}>
                <Link
                  href="/workflow"
                  className="inline-flex items-center bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-stone-900 transition-colors"
                >
                  <motion.div
                    className="inline-flex items-center"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Search size={18} className="mr-2" />
                    Lihat Cara Kerja
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Developer Section */}
          <motion.div variants={containerVariants}>
            <motion.div className="text-center mb-12" variants={itemVariants}>
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-gray-900"
                variants={itemVariants}
              >
                Tentang Pengembang
              </motion.h3>

              <motion.p
                className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
                variants={itemVariants}
              >
                Black Hat SEO Detector dikembangkan oleh seorang Mahasiswa TI
                yang berdedikasi untuk membuat internet menjadi tempat yang
                lebih baik.
              </motion.p>
            </motion.div>

            <motion.div
              className="max-w-5xl mx-auto"
              variants={containerVariants}
            >
              <motion.div
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="md:w-2/5 bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full bg-gray-800 border-4 border-white/10 flex items-center justify-center mb-4">
                      <span className="text-4xl font-bold">ZR</span>
                    </div>
                    <h4 className="text-2xl font-bold">{developerInfo.name}</h4>
                    <p className="text-blue-300 mt-1">{developerInfo.role}</p>
                    <div className="mt-6 flex flex-wrap justify-center gap-2">
                      {developerInfo.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-white/10 px-3 py-1 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5 p-8">
                  <motion.h4 className="text-xl font-bold text-gray-900 mb-4">
                    Perjalanan Pengembangan
                  </motion.h4>

                  <motion.p className="text-gray-600 mb-4">
                    Sebagai seorang mahasiswa Teknik Informatika, saya memiliki
                    ketertarikan mendalam pada pengembangan web dan kecerdasan
                    buatan. Proyek Black Hat SEO Detector ini lahir dari
                    keprihatinan saya melihat banyak bisnis lokal yang terkena
                    penalti Google karena tidak memahami praktik SEO yang benar.
                  </motion.p>

                  <motion.p className="text-gray-600 mb-4">
                    Dengan menggabungkan pengetahuan di bidang pengembangan
                    fullstack dan AI, saya mengembangkan algoritma deteksi yang
                    dapat mengidentifikasi berbagai teknik Black Hat SEO secara
                    akurat.
                  </motion.p>

                  <motion.p className="text-gray-600">
                    Misi saya adalah membantu pemilik website, terutama UKM,
                    untuk dapat bersaing secara sehat di mesin pencari tanpa
                    harus menggunakan taktik yang melanggar pedoman Google.
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="bg-black rounded-2xl p-8 md:p-12 text-center text-white"
            variants={itemVariants}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <motion.div className="bg-white/10 rounded-full inline-flex p-3 mb-6">
                <Shield size={30} className="text-white" />
              </motion.div>

              <motion.h3 className="text-2xl md:text-3xl font-bold">
                Siap Melindungi Situs Web Anda?
              </motion.h3>

              <motion.p className="mt-4 text-lg text-gray-300">
                Jangan biarkan Black Hat SEO merusak peringkat dan reputasi
                online Anda. Mulai deteksi sekarang untuk mengidentifikasi
                praktik berbahaya.
              </motion.p>

              <motion.div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/detect"
                    className="inline-flex items-center justify-center bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto"
                  >
                    <Search size={18} className="mr-2" />
                    Mulai Deteksi Gratis
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-transparent text-white border border-white px-6 py-3 rounded-xl font-medium hover:bg-white/10 transition-colors w-full sm:w-auto"
                  >
                    Hubungi Kami
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
