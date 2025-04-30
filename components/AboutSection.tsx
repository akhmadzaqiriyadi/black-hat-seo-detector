
'use client';
import { motion } from 'framer-motion';
import BlackHatPractices from './BlackHatPractices';
import KnowThis from './KnowThis';
import CTASection from './CTASection';

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-100" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Apa Itu Black Hat SEO?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pelajari praktik SEO berbahaya yang dapat merusak situs Anda dan cara kami membantu
            mendeteksinya dengan teknologi canggih.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-blue-900 mb-4 text-center">
            Pengertian Black Hat SEO
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto text-center">
            Black Hat SEO adalah teknik manipulasi mesin pencari yang melanggar pedoman Google untuk
            meningkatkan peringkat situs secara tidak etis. Teknik ini sering digunakan untuk hasil
            cepat, tetapi berisiko tinggi, seperti penalti, penurunan peringkat, atau bahkan
            penghapusan dari hasil pencarian.
          </p>
        </motion.div>

        <BlackHatPractices />
        <KnowThis />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold text-blue-900 mb-4 text-center">
            Tentang Proyek Kami
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto text-center">
            Kami adalah tim pengembang dan peneliti cybersecurity yang berdedikasi untuk melindungi
            situs web dari praktik SEO tidak etis. Dikembangkan dengan teknologi modern seperti Python,
            Next.js, dan Azure, alat kami membantu Anda menjaga situs tetap aman dan sesuai pedoman
            mesin pencari. Misi kami adalah meningkatkan kesadaran tentang SEO etis dan memberikan
            solusi deteksi yang mudah digunakan.
          </p>
        </motion.div>
      </div>
      <CTASection />
    </section>
  );
}
