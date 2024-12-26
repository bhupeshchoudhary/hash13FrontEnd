// types/courses.ts
export interface Instructor {
    name: string;
    title: string;
    image: string;
    bio: string;
    rating: number;
    totalStudents: number;
    courses: number;
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
    longDescription?: string;
    backgroundImage: string;
    instructor: Instructor;
    learningOutcomes: string[];
    features: string[];
    skills: string[];
    requirements?: string[];
    level: string;
    language: string;
    lastUpdated: string;
    category: string;
  }
  
  export interface CardPosition {
    isRightmost: boolean;
  }