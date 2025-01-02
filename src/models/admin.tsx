// src/scripts/models/admin.ts
import { Schema } from 'mongoose';
import { mongooseClient } from '@/scripts/db/mongoose-client';

export interface IAdmin {
  email: string;
  name: string;
  role: 'admin' | 'super-admin';
  createdAt: Date;
  updatedAt: Date;
}

const AdminSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'super-admin'],
    default: 'admin',
  },
}, {
  timestamps: true
});

export const Admin = mongooseClient.models.Admin || 
  mongooseClient.model<IAdmin>('Admin', AdminSchema);