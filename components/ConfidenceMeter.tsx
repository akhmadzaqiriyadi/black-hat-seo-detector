// components/ConfidenceMeter.tsx - Visual confidence meter inspired by the image
import React from 'react';

interface ConfidenceMeterProps {
  confidence: number;
  isBlackHat: boolean;
}

export default function ConfidenceMeter({ confidence, isBlackHat }: ConfidenceMeterProps) {
  // Make sure confidence is between 0-100
  const validConfidence = Math.min(Math.max(confidence, 0), 100);
  
  // Create tick marks
  const ticks = Array.from({ length: 11 }, (_, i) => i * 10);
  
  return (
    <div className="w-full max-w-3xl mx-auto my-12">
      <div className="relative">
        {/* Grid Lines */}
        <div className="w-full h-16 flex items-center justify-between">
          {ticks.map((tick) => (
            <div key={tick} className="h-full w-px bg-gray-200 relative">
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">
                {tick}
              </span>
            </div>
          ))}
        </div>
        
        {/* Confidence Value */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center">
          <div className="relative w-full h-8">
            {/* Bar Background */}
            <div className="absolute left-0 top-0 w-full h-full bg-gray-100 rounded-full"></div>
            
            {/* Red or Green Bar */}
            <div 
              className={`absolute left-0 top-0 h-full rounded-full ${isBlackHat ? 'bg-red-500' : 'bg-green-500'}`} 
              style={{ width: `${validConfidence}%` }}
            ></div>
            
            {/* Confidence Label */}
            <div 
              className="absolute top-1/2 transform -translate-y-1/2 flex items-center"
              style={{ left: `${validConfidence}%` }}
            >
              <div 
                className={`text-lg font-bold ${isBlackHat ? 'text-white' : 'text-green-600'} ml-2`}
                style={{ marginLeft: validConfidence > 50 ? '-60px' : '10px' }}
              >
                {validConfidence.toFixed(1)}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}