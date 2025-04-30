'use client';
import { motion } from 'framer-motion';

const facts = [
  {
    title: 'Risiko Penalti',
    desc: 'Google menghukum lebih dari 400.000 situs setiap tahun karena praktik Black Hat SEO.',
    highlight: '400K+',
  },
  {
    title: 'Kerugian Bisnis',
    desc: 'Situs yang terdeteksi dapat kehilangan hingga 90% traffic organik.',
    highlight: '90%',
  },
  {
    title: 'Keunggulan Kami',
    desc: 'Alat kami menggunakan machine learning untuk deteksi akurat dan cepat.',
    highlight: 'ML-Powered',
  },
  {
    title: 'Pencegahan',
    desc: 'Deteksi dini membantu memperbaiki masalah sebelum penalti terjadi.',
    highlight: 'Proaktif',
  },
];

export default function KnowThis() {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-blue-900 mb-8 text-center">
        Yang Perlu Anda Ketahui
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {facts.map((fact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="text-3xl font-bold text-red-600 mb-2">{fact.highlight}</div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">{fact.title}</h4>
            <p className="text-gray-600">{fact.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}