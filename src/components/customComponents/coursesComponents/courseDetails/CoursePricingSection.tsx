import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'
import { courseInfo } from "../../../../../data/courses/courses";
import { Course } from "../../../../../types/courses";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";



interface CoursePricingSectionProps {
  courseId: string;
}



export default function CoursePricingSection({courseId}: CoursePricingSectionProps) {
  const router = useRouter();
  const [course, setCourse ] = useState<Course | null>(null); 
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    if(!courseId){
      setLoading(false);
      return;
    }

    const findCourse = () => {
      const foundCourse = courseInfo.find(c => c.slug === courseId);
      setCourse(foundCourse || null);
      setLoading(false);
    };

    findCourse();
    }, [courseId]
  );

  if(!courseId){
    return <div> No course Id Provided</div>;
  }
  if(loading){
    return <div>Price not found</div>
  }
  if(!course){
    return <div>Course not found</div>
  }
  return (
    <section className="w-full bg-gradient-to-br from-gray-50 via-black-50 to-red-50 py-12" id="participatenow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center lg:text-left">
          Book your spot! We will be
          <span className="text-[#ff0000] block sm:inline sm:ml-2">
            increasing the price soon...
          </span>
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Pricing */}
          <Card className="flex-1 p-4 sm:p-6 bg-white">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              Globally Recognized Program
              <span className="block text-base sm:text-lg text-gray-600 mt-1">
                (Save ₹ {(course.originalPrice - course.price).toFixed(2)})
              </span>
            </h2>
            
            <div className="mb-6">
              <span className="text-3xl sm:text-4xl font-bold text-red-600"> ₹{course.price.toFixed(2)} </span>
              <span className="text-gray-500 line-through ml-2">₹{course.originalPrice.toFixed(2)}</span>
              <span className="text-gray-500 text-sm sm:text-base">(+ taxes)</span>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                <p className="text-sm sm:text-base text-gray-600">
                  Avail the discounted price of  ₹{course.price.toFixed(2)} and save a total of ₹ {(course.originalPrice - course.price).toFixed(2)} 
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                <p className="text-sm sm:text-base text-gray-600">
                  The launch offer expires in 24 hours
                </p>
              </div>
            </div>

            <div className="flex justify-center w-full">
              <Button className="w-full sm:w-2/3 bg-[#ff0000] hover:bg-[#ff0000]/90 hover:shadow-md hover:shadow-black text-white py-4 sm:py-6 text-sm sm:text-base">
                Yes! I want this insane deal for
                <br /> ₹{course.price.toFixed(2)} + taxes
              </Button>
            </div>
          </Card>

          {/* Right Column - Features */}
          <div className="flex-1 space-y-8 px-4 sm:px-0">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-4">
                What you will get...
              </h3>
              <div className="space-y-3">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {course.learningOutcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    {outcome}
                  </li>
                ))}
              </ul> 
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-4">
                And bonuses too...
              </h3>
              <div className="space-y-3">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {course.learningOutcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    {outcome}
                  </li>
                ))}
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}