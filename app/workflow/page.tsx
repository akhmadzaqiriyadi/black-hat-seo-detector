"use client";
import { useState, useEffect } from "react";
import { 
  Shield, 
  GitMerge, 
  Code,
  Cpu,
  ArrowRight,
  Bot,
  Network,
  AlertTriangle,
  Key,
  LinkIcon,
  Search,
  Database,
  BarChart,
  FileText,
  Server
} from "lucide-react";

const AlurKerjaSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto rotate through steps
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);


  // Define workflow steps
  const workflowSteps = [
    {
      id: 0,
      title: "Pengumpulan Data (Web Scraping)",
      description: "Sistem menggunakan BeautifulSoup dan Selenium untuk mengumpulkan konten dari situs web, termasuk teks, meta tag, tautan, dan struktur HTML dari URL yang diklasifikasikan.",
      icon: <Bot size={32} className="text-red-500" />,
      details: [
        "Ekstraksi teks, meta tag, dan struktur HTML",
        "Pengumpulan tautan masuk dan keluar",
        "Pemeriksaan konten tersembunyi dan teknik cloaking",
        "Penggunaan proxy jika scraping diblokir"
      ]
    },
    {
      id: 1,
      title: "Pembangunan Dataset",
      description: "Data yang dikumpulkan dilabeli sebagai 'bersih' (0) atau 'black hat' (1) dan disimpan dalam format CSV untuk pelatihan model.",
      icon: <Database size={32} className="text-red-500" />,
      details: [
        "Pelabelan URL sebagai bersih (contoh: kpu.go.id) atau black hat (contoh: togelonline88.net)",
        "Penyimpanan fitur seperti teks, jumlah kata kunci, dan jumlah tautan",
        "Kombinasi data dari URL manual dan hasil scraping",
        "Struktur data dalam format CSV untuk analisis lebih lanjut"
      ]
    },
    {
      id: 2,
      title: "Analisis Teks dan Ekstraksi Fitur",
      description: "Sistem menganalisis teks menggunakan teknik NLP untuk mendeteksi pola Black Hat SEO dan mengekstrak fitur-fitur penting.",
      icon: <FileText size={32} className="text-red-500" />,
      details: [
        "Pendeteksian keyword stuffing dengan menghitung frekuensi kata kunci",
        "Perbandingan konten untuk user dan bot (deteksi cloaking)",
        "Analisis meta tag untuk kata kunci berlebihan",
        "Identifikasi tautan ke situs berkualitas rendah"
      ]
    },
    {
      id: 3,
      title: "Pelatihan Model Machine Learning",
      description: "Dataset digunakan untuk melatih model seperti SVM atau Random Forest untuk mengklasifikasikan situs sebagai bersih atau black hat.",
      icon: <Cpu size={32} className="text-red-500" />,
      details: [
        "Penggunaan Scikit-learn untuk SVM dan Random Forest",
        "Opsional: IndoBERT untuk analisis kontekstual",
        "Evaluasi dengan metrik akurasi (85.19%) dan AUC (0.9444)",
        "Penyesuaian bobot untuk domain pendidikan (.edu, .ac.id)"
      ]
    },
    {
      id: 4,
      title: "Prediksi dan Deteksi",
      description: "Model yang terlatih digunakan untuk memprediksi URL baru dan menentukan apakah termasuk praktik Black Hat SEO.",
      icon: <Search size={32} className="text-red-500" />,
      details: [
        "Penggunaan API Flask untuk integrasi dengan antarmuka pengguna",
        "Output berupa probabilitas dan label (bersih/black hat)",
        "Klasifikasi situs berdasarkan fitur yang diekstrak",
        "Pelaporan hasil dengan visualisasi dan rekomendasi"
      ]
    }
  ];

  // Define detection features from original component
  const detectionFeatures = [
    {
      title: "Cloaking",
      description: "Membandingkan konten untuk user dan bot.",
      icon: <Network size={24} />
    },
    {
      title: "Keyword Stuffing",
      description: "Mendeteksi penggunaan kata kunci berlebihan.",
      icon: <Key size={24} />
    },
    {
      title: "Hidden Content",
      description: "Mengidentifikasi teks atau link tersembunyi.",
      icon: <AlertTriangle size={24} />
    },
    {
      title: "Suspicious Links",
      description: "Memeriksa link eksternal ke situs judi/spam.",
      icon: <LinkIcon size={24} />
    },
    {
      title: "Redirects",
      description: "Melacak rantai redirect yang mencurigakan.",
      icon: <ArrowRight size={24} />
    }
  ];

  // Tech stack from original component with some additions
  const techStack = [
    { 
      category: "Back-end", 
      tech: "Python dengan Flask untuk API, di-deploy di Azure.", 
      icon: <Server size={24} /> 
    },
    { 
      category: "Front-end", 
      tech: "Next.js 15 untuk antarmuka responsif dan cepat.", 
      icon: <Code size={24} /> 
    },
    { 
      category: "Machine Learning", 
      tech: "Scikit-learn (SVM, Random Forest) dan opsional Transformers (IndoBERT).", 
      icon: <Cpu size={24} /> 
    },
    { 
      category: "Scraping", 
      tech: "BeautifulSoup dan Selenium untuk ekstraksi konten.", 
      icon: <Bot size={24} /> 
    },
    { 
      category: "Analitik", 
      tech: "Visualisasi hasil dengan Chart.js dan analisis statistik.", 
      icon: <BarChart size={24} /> 
    }
  ];

  return (
    <div className="pb-16 pt-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700`}>
          <span className="inline-flex items-center bg-red-50 px-3 py-1 rounded-full text-sm font-medium text-red-600 border border-red-100">
            <Shield size={16} className="mr-1" />
            Sistem Deteksi
          </span>
          
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Alur Kerja <span className="text-red-600">Black Hat SEO Detector</span>
          </h2>
          
          <p className="mt-4 text-lg text-gray-600">
            Teknologi canggih yang dirancang khusus untuk mengidentifikasi praktik SEO berbahaya dengan menggunakan machine learning dan analisis konten mendalam.
          </p>
        </div>

        {/* Main Workflow Diagram */}
        <div className={`mb-16 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-1000`}>
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-gray-900 text-white p-6">
              <h3 className="text-xl font-bold flex items-center">
                <GitMerge size={24} className="mr-2" />
                Alur Kerja Sistem Deteksi
              </h3>
            </div>
            
            {/* Step Navigation */}
            <div className="grid grid-cols-5 bg-gray-50">
              {workflowSteps.map((step) => (
                <button
                  key={step.id}
                  className={`py-4 px-2 lg:text-sm text-xs font-medium border-b-2 transition-all ${
                    activeStep === step.id 
                      ? 'border-red-600 text-red-600 bg-red-50' 
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveStep(step.id)}
                >
                  Langkah {step.id + 1}
                </button>
              ))}
            </div>
            
            {/* Active Step Content */}
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-4 rounded-lg">
                  {workflowSteps[activeStep].icon}
                </div>
                
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900">{workflowSteps[activeStep].title}</h4>
                  <p className="mt-2 text-gray-600">{workflowSteps[activeStep].description}</p>
                  
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {workflowSteps[activeStep].details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="mt-1 bg-red-500 rounded-full p-1 text-white">
                          <ArrowRight size={12} />
                        </div>
                        <p className="text-sm text-gray-700">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Progress Indicator */}
              <div className="mt-8 flex justify-between items-center">
                <button 
                  className="text-red-600 font-medium flex items-center"
                  onClick={() => setActiveStep((prev) => (prev - 1 + 5) % 5)}
                >
                  <ArrowRight size={16} className="transform rotate-180 mr-1" />
                  Langkah Sebelumnya
                </button>
                
                <div className="flex gap-1">
                  {workflowSteps.map((step) => (
                    <div 
                      key={step.id}
                      className={`h-2 w-2 lg:w-4  rounded-full ${
                        activeStep === step.id ? 'bg-red-600' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
                
                <button 
                  className="text-red-600 font-medium flex items-center"
                  onClick={() => setActiveStep((prev) => (prev + 1) % 5)}
                >
                  Langkah Selanjutnya
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Technology and Features Section */}
        <div className={`grid md:grid-cols-2 gap-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 delay-300`}>
          {/* Tech Stack Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all">
            <div className="bg-gray-900 text-white p-6">
              <h4 className="text-xl font-bold flex items-center">
                <Code size={24} className="mr-2" />
                Teknologi yang Digunakan
              </h4>
            </div>
            
            <div className="p-6 space-y-4">
              {techStack.map((item, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="bg-red-100 text-red-600 p-2 rounded-lg h-fit">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">{item.category}</h5>
                    <p className="text-gray-600 text-sm">{item.tech}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Detection Features Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all">
            <div className="bg-red-600 text-white p-6">
              <h4 className="text-xl font-bold flex items-center">
                <Shield size={24} className="mr-2" />
                Fitur Deteksi
              </h4>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {detectionFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-all hover:-translate-y-1"
                  >
                    <div className="text-red-500 mb-2">
                      {feature.icon}
                    </div>
                    <h5 className="font-bold text-gray-900">{feature.title}</h5>
                    <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Performance Metrics */}
        <div className={`mt-12 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 delay-500`}>
          <div className="bg-gradient-to-r from-gray-900 to-red-900 text-white p-6">
            <h4 className="text-xl font-bold flex items-center">
              <BarChart size={24} className="mr-2" />
              Metrik Performa Model
            </h4>
          </div>
          
          <div className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-red-600">85.19%</div>
                <div className="text-gray-600 mt-2">Akurasi Model</div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-red-600">0.9444</div>
                <div className="text-gray-600 mt-2">AUC Score</div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-red-600">~2 Detik</div>
                <div className="text-gray-600 mt-2">Waktu Prediksi</div>
              </div>
            </div>
            
            <div className="mt-6 text-sm text-gray-600 border-t border-gray-200 pt-4">
              <p>Model machine learning telah dilatih dengan dataset yang mencakup berbagai jenis situs web, termasuk situs pemerintah yang "bersih" dan situs dengan teknik black hat SEO. Hasil evaluasi menunjukkan kemampuan diskriminasi yang baik dengan AUC sebesar 0.9444 untuk model berbasis teks.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlurKerjaSection;