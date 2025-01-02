// src/models/student.ts
import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IStudent {
  name: string;
  email: string;
  phone?: string;
  enrollmentDate: Date;
  status: 'active' | 'inactive';
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IStudentDocument extends IStudent, Document {}

const StudentSchema = new Schema<IStudentDocument>({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  phone: {
    type: String,
  },
  enrollmentDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
}, {
  timestamps: true,
});

StudentSchema.index({ email: 1 }, { unique: true });
StudentSchema.index({ name: 'text', email: 'text' });

export const Student = (mongoose.models.Student as Model<IStudentDocument>) || 
  mongoose.model<IStudentDocument>('Student', StudentSchema);