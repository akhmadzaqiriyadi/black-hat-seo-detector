// app/page.tsx - Fix for API response handling
'use client';

import { useState } from 'react';
import UrlForm from '@/components/UrlForm';
import Results from '@/components/Results';
import { Explanation } from '@/types';

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Explanation | null>(null);

  const analyzeUrl = async (url: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to analyze URL');
      }
      
      // Validate response data
      if (!data.explanation) {
        throw new Error('Invalid API response: missing explanation data');
      }
      
      // Create a safe version of the explanation with defaults
      const safeExplanation: Explanation = {
        prediction: data.explanation.prediction || 'Unknown',
        confidence: data.explanation.confidence || 'Unknown',
        reasons: Array.isArray(data.explanation.reasons) ? data.explanation.reasons : [],
        top_keywords: Array.isArray(data.explanation.top_keywords) ? data.explanation.top_keywords : [],
        url: data.explanation.url || url
      };
      
      setResult(safeExplanation);
    } catch (err) {
      console.error('Error analyzing URL:', err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Black Hat SEO Detector</h1>
      
      <div className="max-w-3xl mx-auto">
        <UrlForm onSubmit={analyzeUrl} loading={loading} />
        
        {error && (
          <div className="mt-6 bg-red-100 text-red-700 p-4 rounded-md">
            <p className="font-medium">Error</p>
            <p>{error}</p>
          </div>
        )}
        
        {result && <Results result={result} />}
      </div>
    </main>
  );
}
