


"use client"
import React, { useState, useMemo } from 'react'; // Add useMemo
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight, Clock, Users } from "lucide-react";
import { Star } from "lucide-react"
import Link from 'next/link';
import { courseInfo } from '../../../data/courses/courses';


interface Category {
  name: string;
  highlight?: boolean;
}

interface Course {
  title: string;
  category: string;
  backgroundImage: string;
  rating?: number;
  hours: string;
  slug: string;
}

const CoursePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Courses");

  // Calculate category counts using useMemo
  const categoriesWithCounts = useMemo(() => {
    // Get count of courses for each category
    const categoryCounts: { [key: string]: number } = courseInfo.reduce((acc, course) => {
      acc[course.category] = (acc[course.category] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });

    // Define base categories
    const baseCategories: Category[] = [
      { name: "All Courses", highlight: false },
      { name: "Popular Courses", highlight: true },
      { name: "Software Architecture", highlight: false },
      { name: "System Design", highlight: false },
      { name: "Programming", highlight: false },
      { name: "System Administration", highlight: false },
      { name: "Artificial Intelligence", highlight: false },
      { name: "Career Planning", highlight: false },
      { name: "Soft Skills", highlight: false },
      { name: "MLOPS", highlight: false },
    ];

    // Return categories with their actual counts
    return baseCategories.map(category => ({
      ...category,
      count: category.name === "All Courses" 
        ? courseInfo.length 
        : categoryCounts[category.name] || 0
    }));
  }, []);

  const handleCategoryClick = (categoryName: string): void => {
    setSelectedCategory(categoryName);
  };

  const filteredCourses = courseInfo.filter((course: Course) => {
    if (selectedCategory === "All Courses") return true;
    return course.category === selectedCategory;
  });

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">
        Discover Our <span className="text-red-500">Free Courses</span>
      </h1>
      
      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="w-64 flex-shrink-0">
          <ScrollArea className="h-[600px] pr-4">
            <div className="space-y-3">
              {categoriesWithCounts.map((category) => (
                <button
                  key={category.name}
                  onClick={() => handleCategoryClick(category.name)}
                  className={`
                    flex items-center justify-between w-full p-4 
                    rounded-xl border border-gray-200
                    shadow-sm hover:shadow-md transition-all
                    ${category.highlight ? 'bg-pink-50' : 'bg-white'}
                    ${selectedCategory === category.name ? 'border-red-500 bg-red-50' : ''}
                    ${category.count === 0 ? 'opacity-50' : ''}
                  `}
                  disabled={category.count === 0}
                >
                  <span className="text-sm font-medium">{category.name}</span>
                  <div className="flex items-center gap-2 text-gray-500">
                    <span className="text-sm">({category.count})</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Course Grid - Rest of the code remains the same */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 p-2 max-w-6xl mx-auto">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course: Course, index: number) => (
              <Link href={`/courses/${course.slug}`} key={index}>
                <Card className="group relative overflow-hidden w-full cursor-pointer transition-transform hover:scale-105 flex flex-col">
                  {/* Image Container */}
                  <div className="h-56 sm:h-56 overflow-hidden">
                    <img
                      src={course.backgroundImage}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Card Footer */}
                  <CardFooter className="p-4 flex flex-col items-start bg-white">
                    <h3 className="text-base sm:text-sm font-bold mb-2 text-gray-800">
                      {course.title}
                    </h3>

                    <div className="flex items-center gap-4 mb-4 text-sm sm:text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400 mr-1" />
                        <span className="text-sm sm:text-xs text-gray-600">
                          {course.rating.toFixed(1)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="mr-2 sm:mr-1">{course.hours} hours</span>
                      </div>
                    </div>
                    
                    <Badge variant="secondary" className="text-xs">
                      {course.category}
                    </Badge>
                  </CardFooter>
                </Card>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-8 text-gray-500">
              No courses found in this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;