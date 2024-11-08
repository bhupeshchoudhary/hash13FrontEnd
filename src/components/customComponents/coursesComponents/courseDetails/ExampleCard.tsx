import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const courseInfo = [
  {
    title: "AWS-Certified-Solutions-Architect-(CSA)-Training",
    rating: 4.8,
    totalRatings: 2103,
    duration: "3 Months",
    level:"Beginner",
    skills: ["Excel", "MySQL", "Data Visualization", "Data Reporting"],
    hours: "30+",
    backgroundImage: "/assets/cources/awsCourse.jpg"
  },
  {
    title: "Complete-Linux-v9-Training",
    rating: 4.7,
    totalRatings: 1856,
    duration: "2 Months",
    hours: "20+",
    level:"Beginner",
    skills: ["Excel", "MySQL", "Data Visualization", "Data Reporting"],
    backgroundImage: "/assets/cources/Complete-Linux-v9-Training-by-Mr.jpg"
  },
  {
    title: "Complete-Micro-Services-(378)-Training",
    rating: 4.9,
    totalRatings: 3201,
    duration: "4 Months",
    hours: "15+",
    level:"Beginner",
    skills: ["Excel", "MySQL", "Data Visualization", "Data Reporting"],
    backgroundImage: "/assets/cources/Complete-Micro-Services-(378)-Training.jpg"
  },
  {
    title: "Complete-NLP-Training-Basic-to-Advance-level",
    rating: 4.6,
    totalRatings: 1502,
    duration: "6 Weeks",
    hours: "50+",
    level:"Beginner",
    skills: ["Excel", "MySQL", "Data Visualization", "Data Reporting"],
    backgroundImage: "/assets/cources/Complete-NLP-Training-Basic-to-Advance-level.jpg"
  },
  {
    title: "Complete-System-Design-Training",
    rating: 4.8,
    totalRatings: 2405,
    duration: "3 Months",
    hours: "60+",
    level:"Beginner",
    skills: ["Excel", "MySQL", "Data Visualization", "Data Reporting"],
    backgroundImage: "/assets/cources/Complete-System-Design-Training-by-Mr.jpg"
  },
  {
    title: "Specialization in DevOps",
    rating: 4.7,
    totalRatings: 1987,
    duration: "10 Weeks",
    hours: "298",
    module:"155",
    level:"Beginner",
    skills: ["Excel", "MySQL", "Data Visualization", "Data Reporting"],
    backgroundImage: "/assets/cources/course1.jpg"
  }
]
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
            <h2 className="text-sm font-bold mb-4">{course.title}</h2>

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
