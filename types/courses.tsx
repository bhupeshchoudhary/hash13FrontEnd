



// export interface Highlight {
//   number: string;
//   description: string;
// }

// export interface Instructor {
//   name: string;
//   title: string;
//   image: string;
//   bio: string;
//   rating: number;
//   totalStudents: number;
//   courses: number;
// }

// export interface Module {
//   id: number; // Made non-optional since all modules have an id
//   title: string;
//   description: string;
//   content: string[];
// }

// export interface Project {
//   icon: string;
//   title: string;
//   description: string;
//   skills: string[];
// }

// export interface ProgramFor {
//   src: string;
//   alt: string;
//   text: string;
// }

// export interface ToolData {
//   icon: string;
//   title: string;
//   description: string;
//   toolsImage: string;
// }

// export interface Course {
//   _id: string;
//   title: string;
//   slug: string;
//   rating: number;
//   totalRatings: number;
//   duration: string;
//   hours: string;
//   price: number;
//   originalPrice: number;
//   enrolledStudents: number;
//   shortDescription: string;
  
//   backgroundImage: string;
  
//   learningOutcomes: string[];
//   features: string[];
//   skills: string[];
//   requirements: string[];
//   level: string;
//   language: string;
//   lastUpdated: string;
//   category: string;
//   module: Module[];
//   highlights: Highlight[];
//   certificateImage: string;
//   project: Project[];
//   programFor: ProgramFor[];
//   toolsData: ToolData[];
//   status?: 'draft' | 'published';
//   createdAt?: Date;
//   updatedAt?: Date;
// } 

// export type NewCourse = Omit<Course, '_id' | 'createdAt' | 'updatedAt'>;


// types/courses.ts

// Tool-related interfaces
export interface Tool {
  id: string;
  icon: "TrendingUp" | "BarChart" | "Cpu";
  title: string;
}

export interface ToolData {
  sectionTitle: string;
  category: string;
  toolsCount: string;
  displayImage: string;
  tools: Tool[];
}

// Highlight interface
export interface Highlight {
  number: string;
  description: string;
}

// Instructor interface
export interface Instructor {
  name: string;
  title: string;
  image: string;
  bio: string;
  rating: number;
  totalStudents: number;
  courses: number;
}

// Module interface
export interface Module {
  id: number;
  title: string;
  description: string;
  content: string[];
}

// Project interface
export interface Project {
  icon: string;
  title: string;
  description: string;
  skills: string[];
}

// ProgramFor interface
export interface ProgramFor {
  src: string;
  alt: string;
  text: string;
}

// Main Course interface
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
  paymentLink: string;
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
  toolsData: ToolData; // Updated to single ToolData object
  status?: 'draft' | 'published';
  createdAt?: Date;
  updatedAt?: Date;
}

// NewCourse type for creating new courses
export type NewCourse = Omit<Course, '_id' | 'createdAt' | 'updatedAt'>;

// Optional: Add some utility types if needed
export type CourseStatus = 'draft' | 'published';
export type IconType = "TrendingUp" | "BarChart" | "Cpu";

// Optional: Add validation types
export interface CourseValidation {
  isValid: boolean;
  errors: {
    [K in keyof Course]?: string;
  };
}

// Optional: Add response types for API
export interface CourseResponse {
  success: boolean;
  data?: Course;
  error?: string;
}

export interface CoursesResponse {
  success: boolean;
  data?: Course[];
  error?: string;
  pagination?: {
    total: number;
    page: number;
    pages: number;
  };
}