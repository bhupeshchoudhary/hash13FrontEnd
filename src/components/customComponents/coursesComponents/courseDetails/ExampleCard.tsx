import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"

interface CourseCardProps {
  title?: string
  rating?: number
  totalRatings?: number
  duration?: string
  level?: string
  backgroundImage?: string
}

export default function ExampleCard({
  title = "Introduction to Programming",
  rating = 4.5,
  totalRatings = 1338,
  duration = "5 Months",
  level = "Beginner",
  backgroundImage = "/assets/cources/course1.jpg"
}: CourseCardProps) {
  // Generate array of stars based on rating
  const stars = Array.from({ length: 5 }, (_, i) => {
    if (i < Math.floor(rating)) return "full"
    if (i === Math.floor(rating) && rating % 1 !== 0) return "half"
    return "empty"
  })

  return (
    <Card className="group relative overflow-hidden w-[300px] h-[400px] cursor-pointer transition-transform hover:scale-105">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url(${backgroundImage})`
        }}
      />

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-end p-6 text-white">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        
        {/* Star Rating */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex">
            {stars.map((type, index) => (
              <Star
                key={index}
                className={`w-5 h-5 ${
                  type === "full"
                    ? "fill-primary text-primary"
                    : type === "half"
                    ? "fill-primary/50 text-primary"
                    : "fill-muted text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({totalRatings})</span>
        </div>

        {/* Course Details */}
        <div className="text-sm text-muted-foreground">
          {duration}, {level}
        </div>
      </div>
    </Card>
  )
}