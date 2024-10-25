import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight, Clock, Users } from "lucide-react";

const CoursePage = () => {
  const categories = [
    { name: "Popular Programs", count: 13, highlight: true },
    { name: "ChatGPT & AI", count: 7 },
    { name: "Data Science", count: 18 },
    { name: "Technology", count: 16 },
    { name: "Management", count: 31 },
    { name: "Marketing", count: 15 },
    { name: "Career Planning", count: 8 },
    { name: "Soft Skills", count: 6 },
    { name: "Law", count: 5 },
  ];

  const courses = [
    {
      title: "Introduction to Data Analysis using Excel",
      image: "/api/placeholder/600/400",
      skills: ["Excel", "MySQL", "Data Visualization", "Data Reporting"],
      learners: "99k+",
      duration: "9 hrs of learning",
    },
    {
      title: "Learn Basic Python Programming",
      image: "/api/placeholder/600/400",
      skills: ["Python Programming", "Matplotlib", "Basics of Coding"],
      learners: "43k+",
      duration: "5 hrs of learning",
    },
    {
      title: "Analyzing Patterns in Data and Storytelling",
      image: "/api/placeholder/600/400",
      skills: ["Data Visualization", "Machine Learning", "Data Analysis"],
      learners: "41k+",
      duration: "6 hrs of learning",
    },
    {
      title: "JavaScript Basics from Scratch",
      image: "/api/placeholder/600/400",
      skills: ["Variables", "Policy Influence", "Conditionals", "Loops", "Arrays", "Objects"],
      learners: "41k+",
      duration: "19 hrs of learning",
    },
    {
      title: "Data Structures & Algorithm",
      image: "/api/placeholder/600/400",
      skills: ["Algorithms", "Blockchain", "Arrays", "Linked Lists", "Stacks", "Queues"],
      learners: "35k+",
      duration: "50 hrs of learning",
    },
    {
      title: "Basics of Search Engine Optimization",
      image: "/api/placeholder/600/400",
      skills: ["SEO", "Immutability", "Marketing"],
      learners: "33k+",
      duration: "6 hrs of learning",
    },
  ];

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
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`
                    flex items-center justify-between w-full p-4 
                    rounded-xl border border-gray-200
                    shadow-sm hover:shadow-md transition-all
                    ${category.highlight ? 'bg-pink-50' : 'bg-white'}
                  `}
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

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
          {courses.map((course) => (
            <Card key={course.title} className="overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">{course.title}</h3>
                
                <div className="mb-3">
                  <div className="text-sm text-gray-600 mb-2">Skills:</div>
                  <div className="flex flex-wrap gap-2">
                    {course.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.learners} learners
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    View Program
                  </Button>
                  <Button className="flex-1 bg-red-500 hover:bg-red-600">
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;