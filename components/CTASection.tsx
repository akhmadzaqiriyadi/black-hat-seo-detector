import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Siap Mencoba?</h2>
        <p className="text-lg mb-8">
          Uji situs Anda sekarang untuk memastikan bebas dari praktik Black Hat SEO.
        </p>
        <Link
          href="/"
          className="inline-block bg-yellow-400 text-blue-900 py-3 px-8 rounded-md font-medium hover:bg-yellow-500"
        >
          Analisis URL
        </Link>
      </div>
    </section>
  );
}