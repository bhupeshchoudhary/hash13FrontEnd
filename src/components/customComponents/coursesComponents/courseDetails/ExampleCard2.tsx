import { Star } from "lucide-react"
import { Card, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { courseInfo } from "../../../../../data/ExampleCard/ExampleCard"
  

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