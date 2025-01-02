// // src/scripts/models/admin.ts
// import { Schema } from 'mongoose';
// import { mongooseClient } from '@/scripts/db/mongoose-client';

// export interface IAdmin {
//   email: string;
//   name: string;
//   role: 'admin' | 'super-admin';
//   createdAt: Date;
//   updatedAt: Date;
// }

// const AdminSchema = new Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   role: {
//     type: String,
//     enum: ['admin', 'super-admin'],
//     default: 'admin',
//   },
// }, {
//   timestamps: true
// });

// export const Admin = mongooseClient.models.Admin || 
//   mongooseClient.model<IAdmin>('Admin', AdminSchema);




// src/models/admin.ts

import mongoose, { Schema, model, Model } from 'mongoose';
import bcrypt from 'bcryptjs';
import type { IAdmin } from '../../types/admin';

const adminSchema = new Schema<IAdmin>({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    select: false, // Don't include password by default in queries
  },
  role: {
    type: String,
    enum: ['admin', 'super-admin'],
    default: 'admin',
  }
}, {
  timestamps: true
});

// Hash password before saving
adminSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error as Error);
  }
});

// Method to compare password
adminSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw error;
  }
};

// Prevent mongoose from creating the model multiple times
export const Admin = (mongoose.models.Admin || model<IAdmin>('Admin', adminSchema)) as Model<IAdmin>;