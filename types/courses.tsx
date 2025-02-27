



export interface Highlight {
  number: string;
  description: string;
}

export interface Instructor {
  name: string;
  title: string;
  image: string;
  bio: string;
  rating: number;
  totalStudents: number;
  courses: number;
}

export interface Module {
  id: number; // Made non-optional since all modules have an id
  title: string;
  description: string;
  content: string[];
}

export interface Project {
  icon: string;
  title: string;
  description: string;
  skills: string[];
}

export interface ProgramFor {
  src: string;
  alt: string;
  text: string;
}

export interface ToolData {
  icon: string;
  title: string;
  description: string;
  toolsImage: string;
}

export interface Course {
  _id: string;
  title: string;
  slug: string;
  rating: number;
  totalRatings: number;
  duration: string;
  hours: string;
  price: number;
  originalPrice: number;
  enrolledStudents: number;
  shortDescription: string;
  
  backgroundImage: string;
  
  learningOutcomes: string[];
  features: string[];
  skills: string[];
  requirements: string[];
  level: string;
  language: string;
  lastUpdated: string;
  category: string;
  module: Module[];
  highlights: Highlight[];
  certificateImage: string;
  project: Project[];
  programFor: ProgramFor[];
  toolsData: ToolData[];
  status?: 'draft' | 'published';
  createdAt?: Date;
  updatedAt?: Date;
} 

export type NewCourse = Omit<Course, '_id' | 'createdAt' | 'updatedAt'>;