// components/DebugView.tsx
interface DebugViewProps {
    data: any;
  }
  
  export default function DebugView({ data }: DebugViewProps) {
    return (
      <div className="mt-6 p-4 bg-gray-100 rounded-md">
        <h3 className="text-sm font-mono text-gray-700 mb-2">Debug Data</h3>
        <pre className="text-xs font-mono bg-gray-800 text-gray-200 p-4 rounded overflow-auto max-h-96">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    );
  }