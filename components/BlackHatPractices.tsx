
'use client';
import { motion } from 'framer-motion';
import { ExclamationCircleIcon, LockClosedIcon, LinkIcon, DocumentDuplicateIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const practices = [
  {
    title: 'Keyword Stuffing',
    desc: 'Memasukkan kata kunci berlebihan di konten agar terdeteksi mesin pencari.',
    icon: <ExclamationCircleIcon className="w-12 h-12 text-red-600" />,
  },
  {
    title: 'Cloaking',
    desc: 'Menampilkan konten berbeda untuk bot pencari dan pengguna.',
    icon: <LockClosedIcon className="w-12 h-12 text-red-600" />,
  },
  {
    title: 'Hidden Text/Link',
    desc: 'Menyembunyikan teks atau link agar hanya terlihat oleh bot.',
    icon: <EyeSlashIcon className="w-12 h-12 text-red-600" />,
  },
  {
    title: 'Link Farming',
    desc: 'Membuat jaringan link tidak relevan untuk meningkatkan otoritas situs.',
    icon: <LinkIcon className="w-12 h-12 text-red-600" />,
  },
  {
    title: 'Doorway Pages',
    desc: 'Halaman yang dirancang hanya untuk mesin pencari, bukan pengguna.',
    icon: <DocumentDuplicateIcon className="w-12 h-12 text-red-600" />,
  },
];

export default function BlackHatPractices() {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-blue-900 mb-8 text-center">
        Praktik Black Hat SEO yang Umum
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {practices.map((practice, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="mb-4">{practice.icon}</div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">{practice.title}</h4>
            <p className="text-gray-600">{practice.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}