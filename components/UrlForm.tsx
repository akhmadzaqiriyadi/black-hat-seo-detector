// components/UrlForm.tsx
"use client";

import { useState } from 'react';
import { Loader2, Search } from 'lucide-react';

interface UrlFormProps {
  onSubmit: (url: string) => void;
  loading: boolean;
}

export default function UrlForm({ onSubmit, loading }: UrlFormProps) {
  const [url, setUrl] = useState('');
  const [isValid, setIsValid] = useState(true);
  
  const validateUrl = (value: string) => {
    if (!value) return false;
    
    try {
      // Check if URL has protocol, if not add https://
      const urlWithProtocol = value.match(/^https?:\/\//) ? value : `https://${value}`;
      new URL(urlWithProtocol);
      return true;
    } catch (e) {
      return false;
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      setIsValid(false);
      return;
    }
    
    const isValidUrl = validateUrl(url);
    setIsValid(isValidUrl);
    
    if (isValidUrl) {
      // Add https:// if it's missing
      const urlWithProtocol = url.match(/^https?:\/\//) ? url : `https://${url}`;
      onSubmit(urlWithProtocol);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          
          <input
            type="text"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              setIsValid(true); // Reset validation on change
            }}
            className={`block w-full pl-10 pr-3 py-3 rounded-lg border ${
              isValid ? 'border-gray-300 focus:border-red-500' : 'border-red-500'
            } focus:outline-none focus:ring-2 focus:ring-red-200`}
            placeholder="Masukkan URL website (contoh: www.example.com)"
            disabled={loading}
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin h-5 w-5 mr-2" />
              Menganalisis...
            </>
          ) : (
            <>
              Analisis
            </>
          )}
        </button>
      </div>
      
      {!isValid && (
        <p className="mt-2 text-sm text-red-600">
          URL tidak valid. Pastikan URL dimulai dengan http:// atau https://.
        </p>
      )}
    </form>
  );
}