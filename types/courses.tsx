




// types/courses.ts
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
  id: number;
  title: string;
  description: string;
  content: string[];
}

export interface Course {
  id: string;
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
  longDescription: string;
  backgroundImage: string;
  instructor: Instructor;
  learningOutcomes: string[];
  features: string[];
  skills: string[];
  requirements: string[];
  level: string;
  language: string;
  lastUpdated: string;
  category: string;
  highlights: Highlight[];
  module: Module[];
  certificateImage: string;
  project:Project[];
  programFor: ProgramFor[]; 
  toolsData: ToolSection[];
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

// types.ts
export interface ToolSection {
  icon: string;
  title: string;
  description: string;
  toolsImage: string;
}