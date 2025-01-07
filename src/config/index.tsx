// src/config/index.ts
export const config = {
  mongodb: {
    options: {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      // Add other MongoDB options here
    },
  },
} as const;