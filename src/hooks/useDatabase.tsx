// src/hooks/useDatabase.ts
import { useState, useEffect, useCallback } from 'react';
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

  const connect = useCallback(async () => {
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
  }, []);

  const disconnectDb = useCallback(async () => {
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
  }, []);

  const checkConnection = useCallback(() => {
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
  }, []);

  useEffect(() => {
    let mounted = true;
    let interval: NodeJS.Timeout;

    const init = async () => {
      if (mounted) {
        checkConnection();
        interval = setInterval(checkConnection, 5000);
      }
    };

    init();

    return () => {
      mounted = false;
      if (interval) {
        clearInterval(interval);
      }
      disconnectDb().catch(console.error);
    };
  }, [checkConnection, disconnectDb]);

  return {
    ...status,
    connect,
    disconnect: disconnectDb,
    checkConnection
  };
}