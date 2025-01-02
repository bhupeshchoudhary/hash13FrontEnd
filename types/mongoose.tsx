// src/types/mongoose.ts
import { Document, Types } from 'mongoose';

export type LeanDocument<T> = Omit<T, keyof Document> & {
  _id: Types.ObjectId;
};

