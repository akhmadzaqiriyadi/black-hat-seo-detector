// components/Results.tsx
import { AlertTriangle, Check, ExternalLink, Info } from 'lucide-react';
import { Explanation } from '@/types';
import ConfidenceMeter from './ConfidenceMeter';

interface ResultsProps {
  result: Explanation;
}

export default function Results({ result }: ResultsProps) {
  // Ensure result has all required properties with defaults
  const {
    prediction = 'Unknown prediction',
    confidence = 'Unknown',
    reasons = [],
    top_keywords = [],
    url = ''
  } = result || {};
  
  // Determine status based on prediction
  const isBlackHat = (prediction || '').toLowerCase().includes('black hat') && 
                     !(prediction || '').toLowerCase().includes('no black hat');
  
  // Extract numeric confidence value (remove % sign if present)
  const confidenceValue = parseFloat((confidence || '0').replace('%', ''));
  
  return (
    <div className="mt-8 space-y-6">
      {/* Main Result Card */}
      <div className={`p-4 rounded-lg border-l-4 ${isBlackHat ? 'bg-red-50 border-red-600' : 'bg-green-50 border-green-600'}`}>
        <div className="flex items-start">
          <div className={`p-2 rounded-full ${isBlackHat ? 'bg-red-200' : 'bg-green-200'} mr-4`}>
            {isBlackHat ? (
              <AlertTriangle className="h-6 w-6 text-red-600" />
            ) : (
              <Check className="h-6 w-6 text-green-600" />
            )}
          </div>
          
          <div>
            <h2 className="text-xl font-bold">
              {isBlackHat ? 'Terdeteksi Black Hat SEO' : 'Tidak Terdeteksi Black Hat SEO'}
            </h2>
            <p className="mt-1 text-gray-700">
              {prediction}
            </p>
          </div>
        </div>
      </div>
      
      {/* Confidence Meter */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold mb-4">Tingkat Kepercayaan Prediksi</h3>
        <ConfidenceMeter confidence={confidenceValue} isBlackHat={isBlackHat} />
      </div>
      
      {/* URL Information */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold mb-4">Informasi Website</h3>
        <div className="flex items-center gap-2 pb-4 border-b border-gray-100">
          <Info size={16} className="text-gray-500" />
          <span className="text-gray-700 font-medium">URL yang Dianalisis:</span>
        </div>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-2 inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline"
        >
          {url}
          <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
      
      {/* Detection Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Reasons Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-4">Alasan Deteksi</h3>
          
          {Array.isArray(reasons) && reasons.length > 0 ? (
            <ul className="space-y-3">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className={`p-1 rounded-full ${isBlackHat ? 'bg-red-100' : 'bg-green-100'} mt-0.5`}>
                    {isBlackHat ? (
                      <AlertTriangle size={12} className="text-red-600" />
                    ) : (
                      <Check size={12} className="text-green-600" />
                    )}
                  </div>
                  <span className="text-gray-700">{reason}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-gray-500 italic">
              {isBlackHat 
                ? "Tidak ada alasan spesifik yang diberikan untuk deteksi Black Hat SEO."
                : "Tidak ada masalah Black Hat SEO yang terdeteksi pada website ini."}
            </div>
          )}
        </div>
        
        {/* Keywords Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-4">Kata Kunci Teratas</h3>
          
          {Array.isArray(top_keywords) && top_keywords.length > 0 ? (
            <div className="space-y-3">
              {top_keywords.map(([keyword, count], index) => (
                <div key={index} className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="font-medium text-gray-800">{keyword}</span>
                  <div className="flex items-center">
                    <span className="text-gray-500 text-sm">{count} kemunculan</span>
                    <div className="ml-2 w-12 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          isBlackHat && count > 20 ? 'bg-red-500' : 'bg-blue-500'
                        }`}
                        style={{ width: `${Math.min(count * 5, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-gray-500 italic">
              Tidak ada informasi kata kunci yang tersedia.
            </div>
          )}
        </div>
      </div>
      
      {/* Recommendations */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold mb-4">Rekomendasi</h3>
        
        {isBlackHat ? (
          <div className="space-y-3">
            <p className="text-gray-700">Berdasarkan analisis, website ini menggunakan teknik Black Hat SEO. Beberapa rekomendasi:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Hindari penggunaan kata kunci yang berlebihan (keyword stuffing)</li>
              <li>Pastikan konten yang dilihat pengguna sama dengan yang dilihat oleh search engine</li>
              <li>Hapus konten tersembunyi yang tidak relevan</li>
              <li>Bersihkan tautan yang mencurigakan atau spam</li>
              <li>Fokus pada pembuatan konten berkualitas dan relevan</li>
            </ul>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-gray-700">Website ini tampaknya menggunakan praktik SEO yang baik. Untuk mempertahankan dan meningkatkan:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Lanjutkan membuat konten berkualitas dan relevan</li>
              <li>Pastikan website tetap memiliki performa yang baik</li>
              <li>Tingkatkan pengalaman pengguna</li>
              <li>Perbarui konten secara berkala</li>
              <li>Pantau performa website di search engine</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}