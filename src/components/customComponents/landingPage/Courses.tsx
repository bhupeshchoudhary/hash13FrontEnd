"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Clock, Star, BookOpen,ChartBar } from "lucide-react";
import Line from "../../../../public/assets/line.svg"
import curveLine from "../../../../public/assets/CurlLine.svg"

interface Course {
  category: string;
  learners: string;
  title: string;
  lessons: number;
  duration: string;
  rating: number;
  imageUrl: string;
}

interface CardPosition {
  isRightmost: boolean;
}

const courses = [
  {
    category: "Art & Design",
    learners:"9k",
    title: "Basic Fundamentals of Interior & Graphics Design",
    lessons: 2,
    duration: "4",
    rating: 5,
    imageUrl: "/assets/cources/Courses-banner.jpg",
  },
  {
    category: "Development",
    learners:"9k",
    title: "Increasing Engagement with Instagram & Facebook",
    lessons: 2,
    duration: "4",
    rating: 3.5,
    imageUrl: "/assets/cources/Courses-banner1.jpg",
  },
  {
    category: "Drawing",
    learners:"9k",
    title: "Introduction to Color Theory & Basic UI/UX",
    lessons: 2,
    duration: "4",
    rating: 2,
    imageUrl: "/assets/cources/Course-banner2.jpg",
  },
  {
    category: "Technology",
    learners:"9k",
    title: "Financial Security Thinking and Principles Theory",
    lessons: 2,
    duration: "4",
    rating: 4.8,
    imageUrl:"/assets/cources/Course-banner2.jpg",
  },
  {
    category: "Data Science",
    learners:"9k",
    title: "Logo Design: From Concept to Presentation",
    lessons: 2,
    duration: "4",
    rating: 4.8,
    imageUrl: "/assets/cources/Course-banner3.jpg",
  },
  {
    category: "Development",
    learners:"9k",
    title: "Professional Ceramic Moulding for Beginners",
    lessons: 2,
    duration: "4",
    rating: 4.8,
    imageUrl: "/assets/cources/Course-banner4.jpg",
  },
]


// Utility function to render stars based on the rating
const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating); // Number of full stars
  const halfStar = rating % 1 !== 0; // Determine if a half star is needed
  const totalStars = 5;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star key={i} className="h-4 w-4 text-yellow-400" />
    );
  }

  if (halfStar) {
    stars.push(
      <Star key="half" className="h-4 w-4 text-yellow-400 opacity-50" />
    );
  }

  const emptyStars = totalStars - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <Star key={i + fullStars + 1} className="h-4 w-4 text-gray-300" />
    );
  }

  return stars;
};

function CardComponent({
  course,
  index,
  isHovered,
  onHover,
  position,
}: {
  course: Course;
  index: number;
  isHovered: boolean;
  onHover: (index: number | null) => void;
  position: CardPosition;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      <Card className={`max-w-sm overflow-hidden transition-all duration-300 ease-in-out ${isHovered ? "z-20" : "z-10"}`}>
        <CardHeader className="p-0 relative">
          <img className="w-full h-48 object-cover" src={course.imageUrl} alt={course.title} />
          {isHovered && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <Button variant="secondary">View Course</Button>
            </div>
          )}
        </CardHeader>
        <CardContent className="p-6">
          <div className="text-sm text-muted-foreground mb-2">{course.category}</div>
          <h2 className="font-bold text-xl mb-2 line-clamp-2">{course.title}</h2>
          <div className="flex items-center justify-between text-sm mb-2">
            <div className="flex items-center text-muted-foreground">
              <BookOpen className="h-4 w-4 mr-1" />
              <span>{course.lessons} Lessons</span>
            </div>

            <div className="flex items-center text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              <span>{course.duration}+hrs of learning</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm mb-2">
            <div className="flex items-center text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              <span>{course.learners} learners </span>
              <Star className="h-4 w-4 text-yellow-400 p-0"  />
              <span className="ml-2 text-gray-600">{course.rating}</span> 
            </div>

            <div className="flex items- justify-items-start  text-muted-foreground ">
              {/* Render stars dynamically based on course rating */}
              {/* {renderStars(course.rating)} */}
              <ChartBar className="h-4 w-4 mr-1"/>
              <span className="ml-2 text-gray-600">Beginner </span> 

            </div>
          </div>
        </CardContent>
        <CardFooter className="px-6 pb-4 pt-0">
          <div className="text-center  w-full mx-auto">
          <Button className="  w-1/2 bg-red-500 font-bold text-1xl" variant="default">
            Invest
          </Button>
          </div>
        </CardFooter>
      </Card>

      {isHovered && <HoverCard course={course} position={position} />}
    </div>
  );
}

function HoverCard({ course, position }: { course: Course; position: CardPosition }) {
  return (
    <div
      className={`absolute top-0 w-64 bg-white shadow-lg p-4 rounded-lg z-30 transition-all duration-300 ease-in-out ${position.isRightmost ? "right-full mr-4" : "left-full ml-4"}`}
    >
      <h3 className="text-xl font-bold mb-2 line-clamp-2">{course.title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{course.category}</p>
      <div className="space-y-2">
        <p className="flex items-center text-sm">
          <BookOpen className="h-4 w-4 mr-2" />
          {course.lessons} Lessons
        </p>
        <p className="flex items-center text-sm">
          <Clock className="h-4 w-4 mr-2" />
          {course.duration}
        </p>
        <p className="flex items-center text-sm">
          <Clock className="h-4 w-4 mr-2" />
          {course.learners} learners 
        </p>
        <div className="flex items-center text-yellow-400">
          {renderStars(course.rating)}
          <span className="ml-2">{course.rating}</span>
        </div>
      </div>
    </div>
  );
}

export default function CoursesComponent() {
  const [hoveredCourseIndex, setHoveredCourseIndex] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const getCardPosition = (index: number): CardPosition => {
    if (!gridRef.current) return { isRightmost: false };

    const gridColumns = window.getComputedStyle(gridRef.current).gridTemplateColumns.split(" ").length;

    // Check if card is in the last column
    const isRightmost = (index + 1) % gridColumns === 0;

    return { isRightmost };
  };

  return (
    <div className="container max-w-7xl mx-auto px-6 lg:px-14 py-8">
      <div className="text-center mb-10">
        <h2 className="text-sm text-muted-foreground mb-2 text-teal-500">Popular Courses</h2>
        <h1 className="text-3xl font-bold">
          Choose Our Top{" "}
          <span className="text-red-500 relative">
            Courses
            <span className="absolute bottom-0 left-0 w-full h-1 ">

            <Image src={curveLine} alt="curve line" className='w-full mb-4' width={100} height={300}></Image>
            </span>
          </span>
        </h1>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {courses.map((course, index) => (
          <div key={index} className="relative" style={{ zIndex: hoveredCourseIndex === index ? 20 : 10 }}>
            <CardComponent
              course={course}
              index={index}
              isHovered={hoveredCourseIndex === index}
              onHover={setHoveredCourseIndex}
              position={getCardPosition(index)}
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button variant="destructive" size="lg">
          View All Courses
        </Button>
      </div>
    </div>
  );
}
