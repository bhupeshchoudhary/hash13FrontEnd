"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Clock, Star, BookOpen } from "lucide-react"

const courses = [
  {
    category: "Art & Design",
    learners:"9K",
    title: "Basic Fundamentals of Interior & Graphics Design",
    lessons: 2,
    duration: "4h 30m",
    rating: 4.8,
    imageUrl: "/assets/landingPageBlog.jpg",
  },
  
 
 


]


function CardComponent({ category, title, lessons, duration, rating, imageUrl, learners, onHover, index, isHovered }: any) {
  return (
    <div 
      className="relative"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      <Card className="max-w-sm overflow-hidden transition-all duration-300 ease-in-out">
        <CardHeader className="p-0 relative">
          <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
          {isHovered && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <Button variant="secondary">View Course</Button>
            </div>
          )}
        </CardHeader>
        <CardContent className="p-6">
          <div className="text-sm text-muted-foreground mb-2">{category}</div>
          <h2 className="font-bold text-xl mb-2">{title}</h2>
          <div className="flex items-center justify-between text-sm mb-2">
            <div className="flex items-center text-muted-foreground">
              <BookOpen className="h-4 w-4 mr-1" />
              <span>{lessons} Lessons</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm mb-2">
            <div className="flex items-center text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              <span>{duration} hrs of learning</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm mb-2">
            <div className="flex items-center text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              <span>{learners} learners</span>
            </div>
          </div>
          <div className="flex items-center text-muted-foreground text-sm">
            <Star className="h-4 w-4 mr-1 text-yellow-400" />
            <span>{rating}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function HoverCard({ course }: any) {
  return (
    <div className="absolute top-0 left-full ml-4 w-64 bg-white shadow-lg p-4 transition-all duration-300">
      <h3 className="text-xl font-bold mb-2">{course.title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{course.category}</p>
      <p>{course.lessons} Lessons</p>
      <p>{course.duration} hrs of learning</p>
      <p>{course.learners} learners</p>
      <div className="flex items-center text-yellow-400">
        <Star className="h-4 w-4 mr-1" />
        <span>{course.rating}</span>
      </div>
    </div>
  )
}

export default function CoursesComponent() {
  const [hoveredCourseIndex, setHoveredCourseIndex] = useState<number | null>(null)

  return (
    <div className="container max-w-7xl mx-auto px-6 lg:px-14 py-8">
      <div className="text-center mb-10">
        <h2 className="text-sm text-muted-foreground mb-2 text-teal-500">Popular Courses</h2>
        <h1 className="text-3xl font-bold">
          Choose Our Top <span className="text-red-500 relative">
            Courses
            <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500"></span>
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {courses.map((course, index) => (
          <div key={index} className="relative">
            <CardComponent
              category={course.category}
              title={course.title}
              lessons={course.lessons}
              duration={course.duration}
              rating={course.rating}
              imageUrl={course.imageUrl}
              learners={course.learners}
              index={index}
              isHovered={hoveredCourseIndex === index}
              onHover={setHoveredCourseIndex}
            />
            {hoveredCourseIndex === index && <HoverCard course={course} />}
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button variant="destructive" size="lg">
          View All Courses
        </Button>
      </div>
    </div>
  )
}
