// components/DatabaseStatus.tsx
import { useMongoDB } from '../../contexts/MongoDBContext';

export function DatabaseStatus() {
  const { 
    isConnected, 
    isLoading, 
    error, 
    connect, 
    disconnect 
  } = useMongoDB();

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Database Status</h2>
      
      <div className="space-y-2">
        <p>
          Status:{' '}
          {isLoading ? (
            'Loading...'
          ) : isConnected ? (
            <span className="text-green-500">Connected</span>
          ) : (
            <span className="text-red-500">Disconnected</span>
          )}
        </p>
        
        {error && (
          <p className="text-red-500">
            Error: {error.message}
          </p>
        )}

        <div className="space-x-2">
          <button
            onClick={() => connect()}
            disabled={isConnected || isLoading}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Connect
          </button>
          
          <button
            onClick={() => disconnect()}
            disabled={!isConnected || isLoading}
            className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50"
          >
            Disconnect
          </button>
        </div>
      </div>
    </div>
  );
}