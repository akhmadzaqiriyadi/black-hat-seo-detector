// components/ExplanationCard.tsx - Updated to match the theme (optional)
import { Explanation } from '@/types';

interface ExplanationCardProps {
  result: Explanation;
}

export default function ExplanationCard({ result }: ExplanationCardProps) {
  // Add default values to handle undefined properties
  const {
    prediction = 'Unknown prediction',
    confidence = 'Unknown',
    url = ''
  } = result || {};
  
  // Determine status color based on prediction
  const isBlackHat = (prediction || '').toLowerCase().includes('black hat') && 
                     !(prediction || '').toLowerCase().includes('no black hat');
  
  // Extract numeric confidence value
  const confidenceValue = parseFloat((confidence || '0').replace('%', ''));
  
  return (
    <div className={`${isBlackHat ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'} border rounded-lg p-6 mb-6`}>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          {isBlackHat ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
          <div>
            <h3 className={`${isBlackHat ? 'text-red-700' : 'text-green-700'} font-bold text-xl`}>{prediction}</h3>
            <p className="text-gray-500">Summary verdict based on machine learning analysis</p>
          </div>
        </div>
      </div>
    </div>
  );
}