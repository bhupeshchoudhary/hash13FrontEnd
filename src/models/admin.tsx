// src/models/admin.ts
import mongoose, { Document, Model, Types } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IAdmin {
  email: string;
  password: string;
  name: string;
  role: 'admin' | 'super-admin';
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IAdminDocument extends IAdmin, Document {
  _id: Types.ObjectId;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

export interface IAdminModel extends Model<IAdminDocument> {
  findByEmail(email: string): Promise<IAdminDocument | null>;
}

const AdminSchema = new mongoose.Schema<IAdminDocument>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
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
  timestamps: true,
});

AdminSchema.pre<IAdminDocument>('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error as Error);
  }
});

AdminSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export const Admin = (mongoose.models.Admin as IAdminModel) || 
  mongoose.model<IAdminDocument, IAdminModel>('Admin', AdminSchema);