// src/hooks/useDatabase.ts
import { useState, useEffect } from 'react';
import { isConnected, dbConnect, disconnect } from '@/lib/mongodb';

interface DatabaseStatus {
  isConnected: boolean;
  isChecking: boolean;
  error: Error | null;
}

export function useDatabase() {
  const [status, setStatus] = useState<DatabaseStatus>({
    isConnected: false,
    isChecking: true,
    error: null
  });

  const connect = async () => {
    try {
      setStatus(prev => ({ ...prev, isChecking: true, error: null }));
      await dbConnect();
      setStatus(prev => ({ ...prev, isConnected: true }));
    } catch (error) {
      setStatus(prev => ({
        ...prev,
        error: error instanceof Error ? error : new Error('Failed to connect')
      }));
    } finally {
      setStatus(prev => ({ ...prev, isChecking: false }));
    }
  };

  const disconnectDb = async () => {
    try {
      setStatus(prev => ({ ...prev, isChecking: true, error: null }));
      await disconnect();
      setStatus(prev => ({ ...prev, isConnected: false }));
    } catch (error) {
      setStatus(prev => ({
        ...prev,
        error: error instanceof Error ? error : new Error('Failed to disconnect')
      }));
    } finally {
      setStatus(prev => ({ ...prev, isChecking: false }));
    }
  };

  const checkConnection = () => {
    try {
      const connectionStatus = isConnected();
      setStatus(prev => ({
        ...prev,
        isConnected: connectionStatus,
        error: null
      }));
    } catch (error) {
      setStatus(prev => ({
        ...prev,
        isConnected: false,
        error: error instanceof Error ? error : new Error('Failed to check connection')
      }));
    } finally {
      setStatus(prev => ({ ...prev, isChecking: false }));
    }
  };

  useEffect(() => {
    checkConnection();
    const interval = setInterval(checkConnection, 5000);

    return () => {
      clearInterval(interval);
      disconnectDb();
    };
  }, []);

  return {
    ...status,
    connect,
    disconnect: disconnectDb,
    checkConnection
  };
}