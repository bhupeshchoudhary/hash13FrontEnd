
export interface Course {
    title: string;
    rating: number;
    totalRatings: number;
    duration: string;
    skills: string[];
    hours: string;
    backgroundImage?: string;
    
  }
  
export interface CardPosition {
    isRightmost: boolean;
  }