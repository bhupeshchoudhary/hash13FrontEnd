import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

// Course data array
const courseInfo = [
  {
    title: "Advanced JavaScript",
    rating: 4.8,
    totalRatings: 2103,
    duration: "3 Months",
    level: "Advanced",
    backgroundImage: "/assets/cources/course1.jpg"
  },
  {
    title: "Advanced JavaScript",
    rating: 4.8,
    totalRatings: 2103,
    duration: "3 Months",
    level: "Advanced",
    backgroundImage: "/assets/cources/course1.jpg"
  },
  {
    title: "Advanced JavaScript",
    rating: 4.8,
    totalRatings: 2103,
    duration: "3 Months",
    level: "Advanced",
    backgroundImage: "/assets/cources/course1.jpg"
  },
  {
    title: "Advanced JavaScript",
    rating: 4.8,
    totalRatings: 2103,
    duration: "3 Months",
    level: "Advanced",
    backgroundImage: "/assets/cources/course1.jpg"
  },
  {
    title: "Advanced JavaScript",
    rating: 4.8,
    totalRatings: 2103,
    duration: "3 Months",
    level: "Advanced",
    backgroundImage: "/assets/cources/course1.jpg"
  },
  {
    title: "Advanced JavaScript",
    rating: 4.8,
    totalRatings: 2103,
    duration: "3 Months",
    level: "Advanced",
    backgroundImage: "/assets/cources/course1.jpg"
  }

];

export default function ExampleCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4 p-2">
      {courseInfo.map((course, index) => (
        <Card
          key={index}
          className="group relative overflow-hidden w-full h-[300px] cursor-pointer transition-transform hover:scale-105"
        >
          {/* Background Image */}
          <img
            src={course.backgroundImage}
            alt={course.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80"></div>

          {/* Content Container */}
          <div className="relative h-full flex flex-col justify-end p-6 text-white">
            <h2 className="text-xl font-bold mb-4">{course.title}</h2>

            {/* Static Star Rating */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-white fill-primary text-primary" />
                  ))}
              </div>
              <span className="text-sm text-muted-foreground">
                ({course.totalRatings})
              </span>
            </div>

            {/* Course Details */}
            <div className="text-sm text-muted-foreground">
              {course.duration}, {course.level}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
