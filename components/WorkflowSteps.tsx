'use client';
import { motion } from 'framer-motion';

const steps = [
  {
    title: '1. Input URL',
    desc: 'Pengguna memasukkan URL situs yang ingin dianalisis melalui form sederhana.',
    icon: '🔗',
  },
  {
    title: '2. Web Scraping',
    desc: 'Sistem mengambil konten situs (teks, meta tags, link) menggunakan teknologi seperti requests atau Selenium.',
    icon: '🔍',
  },
  {
    title: '3. Text Analysis',
    desc: 'Konten dianalisis dengan TF-IDF untuk ekstraksi fitur teks dan deteksi kata kunci judi atau spam.',
    icon: '📝',
  },
  {
    title: '4. Feature Engineering',
    desc: 'Data diubah menjadi fitur numerik, seperti jumlah kata kunci atau rasio link, untuk diproses model.',
    icon: '⚙️',
  },
  {
    title: '5. Machine Learning Prediction',
    desc: 'Model SVM dan Random Forest memprediksi apakah situs menggunakan praktik Black Hat SEO.',
    icon: '🤖',
  },
  {
    title: '6. Result Display',
    desc: 'Hasil ditampilkan dengan confidence meter, alasan deteksi, dan kata kunci teratas.',
    icon: '📊',
  },
];

export default function WorkflowSteps() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Alur Kerja Program</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
        {/* Simple Flow Diagram */}
        <div className="mt-12 flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-12 h-1 bg-blue-600"></div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 text-gray-600">Alur kerja dari input hingga hasil analisis</p>
        </div>
      </div>
    </section>
  );
}