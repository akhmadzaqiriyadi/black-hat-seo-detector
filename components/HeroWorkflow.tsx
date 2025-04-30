'use client';
import Link from 'next/link';

export default function HeroWorkflow() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Bagaimana Black Hat SEO Detector Bekerja?</h1>
        <p className="text-lg md:text-xl mb-8">
          Pelajari alur kerja teknologi kami untuk mendeteksi praktik SEO berbahaya dengan cepat dan akurat.
        </p>
        <Link
          href="/"
          className="inline-block bg-yellow-400 text-blue-900 py-3 px-8 rounded-md font-medium hover:bg-yellow-500"
        >
          Coba Analisis Sekarang
        </Link>
      </div>
    </section>
  );
}