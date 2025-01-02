// src/models/course.ts
import mongoose, { Schema, Document, Model, Types } from 'mongoose';

export interface ICourse {
  title: string;
  slug: string;
  price: number;
  enrolledStudents: number;
  status: 'draft' | 'published';
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICourseDocument extends ICourse, Document {
  _id: Types.ObjectId;
}

export interface ICourseLean extends Omit<ICourse, 'createdAt' | 'updatedAt'> {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface RevenueStats {
  _id: null;
  total: number;
}

export interface CourseStats {
  totalCourses: number;
  totalRevenue: number;
}

export interface ICourseModel extends Model<ICourseDocument> {
  getStats(): Promise<CourseStats>;
}

const CourseSchema = new Schema<ICourseDocument>({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  slug: {
    type: String,
    required: [true, 'Slug is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: 0,
    default: 0,
  },
  enrolledStudents: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft',
  },
}, {
  timestamps: true,
});

// Indexes
CourseSchema.index({ slug: 1 }, { unique: true });
CourseSchema.index({ title: 'text' });

// Static methods
CourseSchema.statics.getStats = async function(): Promise<CourseStats> {
  const [totalCourses, revenueResults] = await Promise.all([
    this.countDocuments(),
    this.aggregate<RevenueStats>([
      {
        $group: {
          _id: null,
          total: { $sum: '$price' }
        }
      }
    ])
  ]);

  return {
    totalCourses,
    totalRevenue: revenueResults[0]?.total || 0
  };
};

export const Course = (mongoose.models.Course as ICourseModel) || 
  mongoose.model<ICourseDocument, ICourseModel>('Course', CourseSchema);