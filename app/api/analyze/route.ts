// app/api/analyze/route.ts - Improved error handling
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    // Call the Flask API
    // Prioritize NEXT_PUBLIC_API_URL as that's what is being set in deployment
    let flaskApiUrl = process.env.NEXT_PUBLIC_API_URL || process.env.FLASK_API_URL || 'http://localhost:5001';
    
    // Remove trailing slash if present to ensure clean concatenation
    flaskApiUrl = flaskApiUrl.replace(/\/$/, '');

    console.log(`Using Backend API URL: ${flaskApiUrl}`);

    try {
      // Create independent target URL to handle potentially duplicate /api segments if the env var includes it
      // Users sometimes put '.../api' in the env var. 
      // If flaskApiUrl ends with '/api', and we append '/api/explain', we might get '/api/api/explain'
      // Ideally we'd strip one, but let's stick to simple concatenation for now but ensure we don't double slash the join.
      
      const targetUrl = `${flaskApiUrl}/api/explain`;
      console.log(`Target URL: ${targetUrl}`);

      const response = await fetch(targetUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
        cache: 'no-store'
      });

      const data = await response.json();

      if (!response.ok) {
        return NextResponse.json(
          { error: data.error || `Flask API returned status ${response.status}` },
          { status: response.status }
        );
      }

      // Validate the response structure
      if (!data.explanation) {
        console.error('Invalid API response:', data);
        return NextResponse.json(
          { error: 'Invalid response from analysis API' },
          { status: 500 }
        );
      }

      return NextResponse.json(data);
    } catch (fetchError) {
      console.error('Error connecting to Flask API:', fetchError);
      return NextResponse.json(
        { error: `Failed to connect to analysis API: ${fetchError instanceof Error ? fetchError.message : 'Unknown error'}` },
        { status: 503 }
      );
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}