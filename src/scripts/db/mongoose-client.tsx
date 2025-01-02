// src/scripts/db/mongoose-client.ts
import mongoose from 'mongoose';

export const mongooseClient = mongoose;

export const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  bufferCommands: false,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
} as const;