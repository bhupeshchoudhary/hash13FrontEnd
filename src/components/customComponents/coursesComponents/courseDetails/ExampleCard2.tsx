import { Star } from "lucide-react"
import { Card, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const courseInfo = [
    {
      title: "AWS-Certified-Solutions-Architect-(CSA)-Training",
      rating: 4.8,
      totalRatings: 2103,
      duration: "3 Months",
     
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
      skills: ["Excel", "MySQL", "Data Visualization", "Data Reporting"],
      backgroundImage: "/assets/cources/Complete-Linux-v9-Training-by-Mr.jpg"
    },
    {
      title: "Data-Structure-&-Algorithms-(DSA)",
      rating: 4.9,
      totalRatings: 3201,
      duration: "4 Months",
      hours: "15+",
      skills: ["Excel", "MySQL", "Data Visualization", "Data Reporting"],
      backgroundImage: "/assets/cources/Data-Structure-&-Algorithms-(DSA)-for-FAANG.jpg"
    },
    {
      title: "Complete-NLP-Training-Basic-to-Advance-level",
      rating: 4.6,
      totalRatings: 1502,
      duration: "6 Weeks",
      hours: "50+",
      skills: ["Excel", "MySQL", "Data Visualization", "Data Reporting"],
      backgroundImage: "/assets/cources/Complete-NLP-Training-Basic-to-Advance-level.jpg"
    },
    {
      title: "Complete-System-Design-Training",
      rating: 4.8,
      totalRatings: 2405,
      duration: "3 Months",
      hours: "60+",
      skills: ["Excel", "MySQL", "Data Visualization", "Data Reporting"],
      backgroundImage: "/assets/cources/Complete-System-Design-Training-by-Mr.jpg"
    },
    {
      title: "Specialization in devops",
      rating: 4.7,
      totalRatings: 1987,
      duration: "10 Weeks",
      hours: "298",
      module:"155",
      skills: ["Excel", "MySQL", "Data Visualization", "Data Reporting"],
      backgroundImage: "/assets/cources/course1.jpg"
    }
  ]
  

export default function ExampleCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-4 p-2 max-w-6xl mx-auto">
      {courseInfo.map((course, index) => (
        <Card
          key={index}
          className="group relative overflow-hidden w-full cursor-pointer transition-transform hover:scale-105 flex flex-col"
        >
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
            <h3 className="text-base sm:text-sm font-bold mb-2 text-gray-800">{course.title}</h3>

            <div className="flex items-center gap-4 mb-4 text-sm sm:text-xs text-gray-600">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400 mr-1" />
                <span className="text-sm sm:text-xs text-gray-600">{course.rating.toFixed(1)}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="mr-2 sm:mr-1">{course.hours} hours</span>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}