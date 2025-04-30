export default function TechnicalDetails() {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Detail Teknis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Teknologi yang Digunakan</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>
                  <strong>Back-end</strong>: Python dengan Flask untuk API, di-deploy di Azure.
                </li>
                <li>
                  <strong>Front-end</strong>: Next.js 15 untuk antarmuka responsif dan cepat.
                </li>
                <li>
                  <strong>Machine Learning</strong>: Scikit-learn (SVM, Random Forest) dan opsional
                  Transformers (IndoBERT).
                </li>
                <li>
                  <strong>Scraping</strong>: BeautifulSoup dan Selenium untuk ekstraksi konten.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Fitur Deteksi</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>
                  <strong>Cloaking</strong>: Membandingkan konten untuk user dan bot.
                </li>
                <li>
                  <strong>Keyword Stuffing</strong>: Mendeteksi penggunaan kata kunci berlebihan.
                </li>
                <li>
                  <strong>Hidden Content</strong>: Mengidentifikasi teks atau link tersembunyi.
                </li>
                <li>
                  <strong>Suspicious Links</strong>: Memeriksa link eksternal ke situs judi/spam.
                </li>
                <li>
                  <strong>Redirects</strong>: Melacak rantai redirect yang mencurigakan.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }