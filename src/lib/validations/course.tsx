// lib/validations/course.ts
import { z } from 'zod'

const highlightSchema = z.object({
  number: z.string(),
  description: z.string(),
})

const instructorSchema = z.object({
  name: z.string(),
  title: z.string(),
  image: z.string(),
  bio: z.string(),
  rating: z.number(),
  totalStudents: z.number(),
  courses: z.number(),
})

const moduleSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  content: z.array(z.string()),
})

const projectSchema = z.object({
  icon: z.string(),
  title: z.string(),
  description: z.string(),
  skills: z.array(z.string()),
})

const programForSchema = z.object({
  src: z.string(),
  alt: z.string(),
  text: z.string(),
})

const toolSectionSchema = z.object({
  icon: z.string(),
  title: z.string(),
  description: z.string(),
  toolsImage: z.string(),
})

export const courseSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  rating: z.number(),
  totalRatings: z.number(),
  duration: z.string(),
  hours: z.string(),
  price: z.number().min(0),
  originalPrice: z.number().min(0),
  enrolledStudents: z.number(),
  shortDescription: z.string(),
  longDescription: z.string(),
  backgroundImage: z.string(),
  instructor: instructorSchema,
  learningOutcomes: z.array(z.string()),
  features: z.array(z.string()),
  skills: z.array(z.string()),
  requirements: z.array(z.string()),
  level: z.string(),
  language: z.string(),
  lastUpdated: z.string(),
  category: z.string(),
  highlights: z.array(highlightSchema),
  module: z.array(moduleSchema),
  certificateImage: z.string(),
  project: z.array(projectSchema),
  programFor: z.array(programForSchema),
  toolsData: z.array(toolSectionSchema),
})