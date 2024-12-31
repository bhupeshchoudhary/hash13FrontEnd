// src/models/course.ts
import mongoose, { Schema, Model } from 'mongoose';
import { 
  Course as CourseType,
  Module,
  Instructor,
  Highlight,
  Project,
  ProgramFor,
  ToolData  // Changed from ToolSection to ToolData
} from '../../types/courses';

// Define interfaces for the model
interface CourseModel extends Model<CourseType> {}

// Sub-schemas
const InstructorSchema = new Schema<Instructor>({
  name: { type: String, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  bio: { type: String, required: true },
  rating: { type: Number, default: 0 },
  totalStudents: { type: Number, default: 0 },
  courses: { type: Number, default: 0 }
});

const ModuleSchema = new Schema<Module>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: [{ type: String }]
});

const HighlightSchema = new Schema<Highlight>({
  number: { type: String, required: true },
  description: { type: String, required: true }
});

const ProjectSchema = new Schema<Project>({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  skills: [{ type: String }]
});

const ProgramForSchema = new Schema<ProgramFor>({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  text: { type: String, required: true }
});

const ToolDataSchema = new Schema<ToolData>({  // Changed from ToolSection to ToolData
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  toolsImage: { type: String, required: true }
});

const CourseSchema = new Schema<CourseType>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  rating: { type: Number, default: 0 },
  totalRatings: { type: Number, default: 0 },
  duration: { type: String, required: true },
  hours: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number, required: true },
  enrolledStudents: { type: Number, default: 0 },
  shortDescription: { type: String, required: true },
  longDescription: { type: String, required: true },
  backgroundImage: { type: String, required: true },
  learningOutcomes: [{ type: String }],
  features: [{ type: String }],
  skills: [{ type: String }],
  requirements: [{ type: String }],
  level: { type: String, required: true },
  language: { type: String, required: true },
  lastUpdated: { type: String, required: true },
  category: { type: String, required: true },
  certificateImage: { type: String, required: true },
  instructor: InstructorSchema,
  module: [ModuleSchema],
  highlights: [HighlightSchema],
  project: [ProjectSchema],
  programFor: [ProgramForSchema],
  toolsData: [ToolDataSchema]  // Changed from toolsSection to toolsData
}, {
  timestamps: true
});

// Create indexes for better query performance
CourseSchema.index({ slug: 1 }, { unique: true });
CourseSchema.index({ title: 'text', shortDescription: 'text' });

export const Course = (mongoose.models.Course || mongoose.model<CourseType, CourseModel>('Course', CourseSchema));