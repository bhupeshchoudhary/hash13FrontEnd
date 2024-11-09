"use client"
import react from "react";
import { useParams  } from 'next/navigation'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Share } from "lucide-react";

const CourseDetailHero = ()=>{
    const params = useParams ();
    const {pid}  = params;

    return (
        <>
<div className="container mx-auto bg-gray-50 p-6 max-w-7xl px-6 lg:px-8">
      <Card className="max-w-6xl mx-auto rounded-[32px] overflow-hidden shadow-lg">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            {/* Left Column - Program Information */}
            <div className="flex-1 p-12">
              {/* Share Button */}
              {/* <div className="flex justify-end mb-8">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-transparent"
                >
                  <Share className="h-6 w-6 text-gray-600" />
                </Button>
              </div> */}

              {/* Title Section */}
              <div className="mb-12">
                <h1 className="text-[2.5rem] font-bold leading-tight  mb-6">
                  <span className="text-[#ff0000]">Doctorate of Business Administration</span>
                  <span className="text-black"> (DBA) from</span>
                  <div className="text-black">ESGCI', Paris</div>
                </h1>
                <p className="text-gray-600 text-sm font-bold leading-relaxed">
                  Enroll in this unique DBA program, designed for leaders to reach their potential. 
                  Focused on leadership, global immersion, & personalized guidance, it equips you 
                  with skills to thrive in today's dynamic business...
                </p>
              </div>

              {/* Program Details */}
              <div className="grid grid-cols-3 gap-8 mb-12">
                <div className="space-y-1">
                  <p className="text-gray-500 text-sm">Type</p>
                  <p className="text-[#ff0000] font-medium text-base">Doctorate</p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-500 text-sm">Start Date</p>
                  <p className="text-[#ff0000] font-medium text-base">Nov 14, 2024</p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-500 text-sm">Duration</p>
                  <p className="text-[#ff0000] font-medium text-base">36 Months</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  variant="outline" 
                  className="flex-1 h-12 text-sm font-medium rounded-full border hover:bg-transparent hover:text-black transition-colors"
                >
                  Download Brochure
                </Button>
                <Button 
                  className="flex-1 h-12 text-sm font-medium rounded-full bg-[#ff0000] hover:bg-red-600 shadow-md transition-colors"
                >
                  Apply Now
                </Button>
              </div>

              {/* Contact Information */}
              <div className="flex items-center gap-2 text-gray-600">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>For enquiries call: 1800 210 2020</span>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="md:w-[45%] relative overflow-hidden rounded-l-[32px]">
              {/* Professional photo with black background */}
              <img 
                src="/assets/cources/course1.jpg" 
                alt="Professional business woman"
                className="absolute inset-0 w-full h-full object-cover"
              />
             
            </div>
          </div>
        </CardContent>
      </Card>
     
     
    </div>
        </>
    )
}

export default CourseDetailHero;