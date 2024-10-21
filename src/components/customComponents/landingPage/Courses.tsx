import { Button } from "@/components/ui/button"
import Card from "@/components/customComponents/landingPage/ui/Card" // Import the default Card component
import { Clock, Star, BookOpen } from "lucide-react"

const courses = [
  {
    category: "Art & Design",
    title: "Basic Fundamentals of Interior & Graphics Design",
    price: "$29.28",
    lessons: 2,
    duration: "4h 30m",
    rating: 4.8,
    imageUrl: "/images/course1.jpg", // Add your image path here
  },
  {
    category: "Development",
    title: "Increasing Engagement with Instagram & Facebook",
    price: "Free",
    lessons: 2,
    duration: "4h 30m",
    rating: 4.8,
    imageUrl: "/images/course2.jpg", // Add your image path here
  },
  {
    category: "Drawing",
    title: "Introduction to Color Theory & Basic UI/UX",
    price: "$72.39",
    lessons: 2,
    duration: "4h 30m",
    rating: 4.8,
    imageUrl: "/images/course3.jpg", // Add your image path here
  },
  {
    category: "Technology",
    title: "Financial Security Thinking and Principles Theory",
    price: "$72.39",
    lessons: 2,
    duration: "4h 30m",
    rating: 4.8,
    imageUrl: "/images/course4.jpg", // Add your image path here
  },
  {
    category: "Data Science",
    title: "Logo Design: From Concept to Presentation",
    price: "Free",
    lessons: 2,
    duration: "4h 30m",
    rating: 4.8,
    imageUrl: "/images/course5.jpg", // Add your image path here
  },
  {
    category: "Development",
    title: "Professional Ceramic Moulding for Beginners",
    price: "$29.82",
    lessons: 2,
    duration: "4h 30m",
    rating: 4.8,
    imageUrl: "/images/course6.jpg", // Add your image path here
  },
]

export default function CoursesComponent() {
  return (
    <div className="container mx-auto px-6 lg:px-8 py-8 overflow-hidden ">
      <div className="text-center mb-10">
        <h2 className="text-sm text-muted-foreground mb-2 text-teal-500">Popular Courses</h2>
        <h1 className="text-3xl font-bold">
          Choose Our Top <span className="text-red-500 relative">
            Courses
            <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500"></span>
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <Card
            key={index}
            category={course.category}  
            title={course.title}
            price={course.price}
            lessons={course.lessons}
            duration={course.duration}
            rating={course.rating}
            imageUrl={course.imageUrl} // Pass the imageUrl prop
          />
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
