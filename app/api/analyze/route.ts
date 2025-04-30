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
    const flaskApiUrl = process.env.FLASK_API_URL || 'http://localhost:5001';
    
    try {
      const response = await fetch(`${flaskApiUrl}/api/explain`, {
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