// src/models/student.ts
import mongoose, { Document, Model, Types } from 'mongoose';

export interface IStudent {
  name: string;
  email: string;
  phone?: string;
  enrollmentDate: Date;
  status: 'active' | 'inactive';
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IStudentDocument extends IStudent, Document {
  _id: Types.ObjectId;
}

const StudentSchema = new mongoose.Schema<IStudentDocument>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
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

export const Student = (mongoose.models.Student as Model<IStudentDocument>) || 
  mongoose.model<IStudentDocument>('Student', StudentSchema);