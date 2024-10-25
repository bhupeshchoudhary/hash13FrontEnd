"use client";

import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Clock, Star, BookOpen, ChartBar } from "lucide-react";
import curveLine from "../../../../public/assets/CurlLine.svg";

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
    category: "DevOps ",
    learners: "9000",
    title: "Complete DevOps Training",
    lessons: 2,
    duration: "298.67",
    rating: 5,
    imageUrl: "/assets/cources/aws.jpg"
  }
];

// Utility function to render stars based on the rating
const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating); // Number of full stars
  const halfStar = rating % 1 !== 0; // Determine if a half star is needed
  const totalStars = 5;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={i} className="h-4 w-4 text-yellow-400" />);
  }

  if (halfStar) {
    stars.push(<Star key="half" className="h-4 w-4 text-yellow-400 opacity-50" />);
  }

  const emptyStars = totalStars - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Star key={i + fullStars + 1} className="h-4 w-4 text-gray-300" />);
  }

  return stars;
};

function CardComponent({
  course,
  index,
  position,
}: {
  course: Course;
  index: number;
  position: CardPosition;
}) {
  return (
    <div className="relative">
      <Card className="max-w-sm overflow-hidden transition-all duration-300 ease-in-out">
        <CardHeader className="p-0 relative">
          <img className="w-full h-48 object-cover" src={course.imageUrl} alt={course.title} />
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
            <Star className="h-4 w-4 text-yellow-400 p-0" />
            <span className="ml-2 text-gray-600">{course.rating}</span>
              {/* <Clock className="h-4 w-4 mr-1" /> */}
              &nbsp;
              <span>{`(${course.learners})`} </span>
              {/* <Star className="h-4 w-4 text-yellow-400 p-0" />
              <span className="ml-2 text-gray-600">{course.rating}</span> */}
            </div>

            <div className="flex items-start text-muted-foreground">
              <ChartBar className="h-4 w-4 mr-1" />
              <span className="ml-2 text-gray-600">Beginner</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-6 pb-4 pt-0">
          <div className="text-center w-full mx-auto">
            <Button className="w-1/2 bg-[#ff0000] font-bold text-1xl" variant="default">
              Invest Now
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default function CoursesComponent() {
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
          <span className="text-[#ff0000] relative">
            Courses
            <span className="absolute bottom-0 left-0 w-full h-1">
              <Image src={curveLine} alt="curve line" className="w-full mb-4" width={100} height={300} />
            </span>
          </span>
        </h1>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {courses.map((course, index) => (
          <div key={index} className="relative">
            <CardComponent course={course} index={index} position={getCardPosition(index)} />
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button className="bg-[#ff0000]" variant="destructive" size="lg">
          View All Courses
        </Button>
      </div>
    </div>
  );
}
