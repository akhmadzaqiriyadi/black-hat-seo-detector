// types/index.ts
export interface Explanation {
    confidence: string;
    prediction: string;
    reasons: string[];
    top_keywords: [string, number][];
    url: string;
  }

// Add an API response type
export interface ApiResponse {
    status: string;
    explanation: Explanation;
  }