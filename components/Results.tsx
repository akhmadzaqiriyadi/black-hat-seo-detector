// components/Results.tsx - Enhanced with confidence visualization diagram
import { Explanation } from '@/types';
import ExplanationCard from './ExplanationCard';
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
  const statusColor = isBlackHat ? 'red' : 'green';
  const statusIcon = isBlackHat ? 
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg> : 
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>;
  
  // Extract numeric confidence value (remove % sign if present)
  const confidenceValue = parseFloat((confidence || '0').replace('%', ''));
  
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <span className="mr-2">Analysis Results</span>
        {statusIcon}
      </h2>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{prediction}</h3>
          <p className="text-lg mb-4">Confidence Level</p>
          
          <ConfidenceMeter 
            confidence={confidenceValue} 
            isBlackHat={isBlackHat} 
          />
          
          <div className="mt-4">
            <p className="text-gray-700">
              <span className="font-medium">Analyzed URL:</span>{' '}
              <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {url}
              </a>
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Detailed Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-gray-700">Top Keywords</h4>
              {Array.isArray(top_keywords) && top_keywords.length > 0 ? (
                <ul className="mt-2 space-y-1">
                  {top_keywords.map(([keyword, count], index) => (
                    <li key={index} className="flex justify-between">
                      <span>{keyword}</span>
                      <span className="text-gray-500">{count} occurrences</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 mt-2">No keywords data available</p>
              )}
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700">Detection Reasons</h4>
              {Array.isArray(reasons) && reasons.length > 0 ? (
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  {reasons.map((reason, index) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 mt-2">
                  {isBlackHat ? "No specific reasons provided" : "Website appears clean"}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}