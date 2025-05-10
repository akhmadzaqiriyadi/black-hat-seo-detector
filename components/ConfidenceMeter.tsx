// components/ConfidenceMeter.tsx
"use client";

import { useEffect, useState } from 'react';

interface ConfidenceMeterProps {
  confidence: number;
  isBlackHat: boolean;
}

export default function ConfidenceMeter({ confidence, isBlackHat }: ConfidenceMeterProps) {
  const [value, setValue] = useState(0);
  
  // Animate the meter on mount
  useEffect(() => {
    setValue(0);
    const timer = setTimeout(() => {
      setValue(confidence);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [confidence]);

  // Calculate color gradient based on confidence and prediction type
  const getColor = () => {
    if (isBlackHat) {
      if (confidence >= 80) return 'bg-red-600';
      if (confidence >= 60) return 'bg-red-500';
      return 'bg-red-400';
    } else {
      if (confidence >= 80) return 'bg-green-600';
      if (confidence >= 60) return 'bg-green-500';
      return 'bg-green-400';
    }
  };

  // Get label text based on confidence level
  const getConfidenceLabel = () => {
    if (confidence >= 90) return 'Sangat Tinggi';
    if (confidence >= 70) return 'Tinggi';
    if (confidence >= 50) return 'Sedang';
    if (confidence >= 30) return 'Rendah';
    return 'Sangat Rendah';
  };
  
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <div className="text-sm font-medium">
          <span className={isBlackHat ? 'text-red-600' : 'text-green-600'}>
            {confidence}% - {getConfidenceLabel()}
          </span>
        </div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-1000 ease-out ${getColor()}`}
          style={{ width: `${value}%` }}
        />
      </div>
      
      {/* Confidence Explanation */}
      <div className="mt-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-md">
        {isBlackHat ? (
          <p>
            Website ini terdeteksi menggunakan teknik Black Hat SEO dengan tingkat keyakinan {confidence}%. 
            {confidence >= 70 ? 
              'Disarankan untuk berhati-hati dengan konten dari situs ini.' : 
              'Mungkin mengandung beberapa praktik SEO yang kurang etis.'}
          </p>
        ) : (
          <p>
            Website ini terdeteksi menggunakan praktik SEO yang baik dengan tingkat keyakinan {confidence}%. 
            {confidence >= 70 ? 
              'Situs ini tampaknya mengikuti pedoman SEO yang direkomendasikan.' : 
              'Situs ini umumnya mengikuti praktik SEO yang baik, meskipun mungkin ada area yang dapat ditingkatkan.'}
          </p>
        )}
      </div>
    </div>
  );
}