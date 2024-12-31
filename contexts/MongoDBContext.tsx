// contexts/MongoDBContext.tsx
import { 
    createContext, 
    useContext, 
    ReactNode, 
    useState, 
    useCallback, 
    useEffect 
  } from 'react';
  import mongoose from 'mongoose';
  import dbConnect from '@/lib/mongodb';
  
  interface DatabaseState {
    isConnected: boolean;
    isLoading: boolean;
    error: Error | null;
  }
  
  interface MongoDBContextType extends DatabaseState {
    connect: () => Promise<void>;
    disconnect: () => Promise<void>;
    checkConnection: () => boolean;
  }
  
  const MongoDBContext = createContext<MongoDBContextType | undefined>(undefined);
  
  export function MongoDBProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<DatabaseState>({
      isConnected: false,
      isLoading: false,
      error: null,
    });
  
    const checkConnection = useCallback(() => {
      const isConnected = mongoose.connection.readyState === 1;
      setState(prev => ({ ...prev, isConnected }));
      return isConnected;
    }, []);
  
    const connect = useCallback(async () => {
      try {
        setState(prev => ({ ...prev, isLoading: true, error: null }));
        await dbConnect();
        setState(prev => ({ ...prev, isConnected: true }));
      } catch (error) {
        setState(prev => ({
          ...prev,
          error: error instanceof Error ? error : new Error('Failed to connect to database')
        }));
      } finally {
        setState(prev => ({ ...prev, isLoading: false }));
      }
    }, []);
  
    const disconnect = useCallback(async () => {
      try {
        setState(prev => ({ ...prev, isLoading: true, error: null }));
        await mongoose.disconnect();
        setState(prev => ({ ...prev, isConnected: false }));
      } catch (error) {
        setState(prev => ({
          ...prev,
          error: error instanceof Error ? error : new Error('Failed to disconnect from database')
        }));
      } finally {
        setState(prev => ({ ...prev, isLoading: false }));
      }
    }, []);
  
    // Check connection status periodically
    useEffect(() => {
      checkConnection();
      const interval = setInterval(checkConnection, 5000);
      return () => clearInterval(interval);
    }, [checkConnection]);
  
    // Cleanup on unmount
    useEffect(() => {
      return () => {
        if (state.isConnected) {
          disconnect();
        }
      };
    }, [state.isConnected, disconnect]);
  
    const value: MongoDBContextType = {
      ...state,
      connect,
      disconnect,
      checkConnection,
    };
  
    return (
      <MongoDBContext.Provider value={value}>
        {children}
      </MongoDBContext.Provider>
    );
  }
  
  export function useMongoDB() {
    const context = useContext(MongoDBContext);
    if (context === undefined) {
      throw new Error('useMongoDB must be used within a MongoDBProvider');
    }
    return context;
  }