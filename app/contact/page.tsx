"use client";
import { useState, useEffect } from "react";
import { 
  Mail, 
  Send,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  User,
  MessageSquare,
  Building
} from "lucide-react";

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formStatus, setFormStatus] = useState("idle"); // idle, sending, success, error
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setFormStatus("sending");
    
    // Simulate form submission
    setTimeout(() => {
      // In a real implementation, you would handle the form submission to your backend here
      setFormStatus("success");
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus("idle");
        setFormData({
          name: "",
          email: "",
          company: "",
          message: ""
        });
      }, 3000);
    }, 1500);
  };


  const faqs = [
    {
      question: "Bagaimana cara kerja sistem Black Hat SEO Detector?",
      answer: "Sistem kami menggunakan kombinasi web scraping, analisis teks, dan machine learning untuk menganalisis konten website dan mengidentifikasi praktik Black Hat SEO seperti keyword stuffing, cloaking, dan tautan tersembunyi."
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk analisis satu website?",
      answer: "Waktu analisis bervariasi tergantung ukuran dan kompleksitas website, namun umumnya sekitar 2-5 menit untuk hasil lengkap. Hasil awal biasanya tersedia dalam 1-2 detik."
    },
    {
      question: "Apakah layanan ini tersedia untuk website berbahasa selain Indonesia?",
      answer: "Ya, sistem kami dapat menganalisis website dalam berbagai bahasa. Meskipun beberapa fitur seperti analisis kontekstual memiliki performa terbaik untuk konten berbahasa Indonesia dan Inggris."
    },
    {
      question: "Bagaimana cara mendapatkan akses ke API Black Hat SEO Detector?",
      answer: "Untuk akses API, silakan hubungi tim kami melalui formulir kontak di halaman ini atau kirim email ke api@blackhatdetector.com. Kami akan mengirimkan informasi harga dan dokumentasi."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-4">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 to-red-900 text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
            <p className="text-lg text-gray-200">
              Tim kami siap membantu menjawab pertanyaan dan memberikan informasi lebih lanjut tentang layanan deteksi Black Hat SEO
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
              
              {formStatus === "success" ? (
                <div className="bg-green-50 border border-green-100 rounded-lg p-6 text-center">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800">Pesan Terkirim!</h3>
                  <p className="text-green-700 mt-2">
                    Terima kasih telah menghubungi kami. Kami akan segera merespon pesan Anda.
                  </p>
                </div>
              ) : formStatus === "error" ? (
                <div className="bg-red-50 border border-red-100 rounded-lg p-6 text-center">
                  <AlertCircle size={48} className="text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-red-800">Pengiriman Gagal</h3>
                  <p className="text-red-700 mt-2">
                    Maaf, terjadi kesalahan. Silakan coba lagi atau hubungi kami melalui email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nama Lengkap
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="pl-10 block w-full rounded-md border border-gray-300 py-3 px-4 shadow-sm focus:border-red-500 focus:ring-red-500"
                        placeholder="Masukkan nama lengkap"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-10 block w-full rounded-md border border-gray-300 py-3 px-4 shadow-sm focus:border-red-500 focus:ring-red-500"
                        placeholder="nama@perusahaan.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Perusahaan (Opsional)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Building size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="pl-10 block w-full rounded-md border border-gray-300 py-3 px-4 shadow-sm focus:border-red-500 focus:ring-red-500"
                        placeholder="Nama perusahaan"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Pesan
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none">
                        <MessageSquare size={18} className="text-gray-400" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="pl-10 block w-full rounded-md border border-gray-300 py-3 px-4 shadow-sm focus:border-red-500 focus:ring-red-500"
                        placeholder="Ceritakan keperluan Anda..."
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={formStatus === "sending"}
                      className={`w-full inline-flex justify-center items-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors ${formStatus === "sending" ? "opacity-75 cursor-not-allowed" : ""}`}
                    >
                      {formStatus === "sending" ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Mengirim...
                        </>
                      ) : (
                        <>
                          Kirim Pesan
                          <Send size={18} className="ml-2" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
          
          {/* FAQs */}
          <div className={`space-y-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* FAQs */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Pertanyaan Umum</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details 
                    key={index} 
                    className="group border-b border-gray-200 pb-4 last:border-0"
                  >
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      <ChevronRight className="h-5 w-5 text-red-500 group-open:rotate-90 transition-transform" />
                    </summary>
                    <div className="mt-3 text-gray-600 ml-1">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;