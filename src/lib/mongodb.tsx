// src/lib/mongodb.ts
import mongoose from 'mongoose';
import { config } from '@/config';

if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

interface Cached {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: Cached;
}

const cached: Cached = (global.mongooseCache || {
  conn: null,
  promise: null,
}) as Cached;

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

// Export connection status checker
export const isConnected = (): boolean => {
  return mongoose.connection.readyState === 1;
};

// Export disconnect function
export const disconnect = async (): Promise<void> => {
  if (cached.conn) {
    await mongoose.disconnect();
    cached.conn = null;
    cached.promise = null;
  }
};

// Export connect function
export async function dbConnect(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      ...config.mongodb.options,
    };

    cached.promise = mongoose.connect(process.env.MONGODB_URI!, opts);
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

// Event listeners
mongoose.connection.on('connected', () => {
  console.log('✅ MongoDB connected successfully');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('⚠️ MongoDB disconnected');
});

// Graceful shutdown
process.on('SIGINT', async () => {
  if (mongoose.connection.readyState === 1) {
    await disconnect();
    process.exit(0);
  }
});

export default dbConnect;