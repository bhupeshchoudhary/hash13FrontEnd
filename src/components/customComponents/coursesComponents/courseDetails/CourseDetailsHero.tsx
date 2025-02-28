




"use client";
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Share2, Phone } from "lucide-react";
import Image from 'next/image';
import { courseInfo } from "../../../../../data/courses/courses";


interface CourseHeroProps {
  courseId: string;
}

const CourseHero: React.FC<CourseHeroProps> = ({ courseId }) => {
  const course = courseInfo.find(c => c._id === courseId) || courseInfo[0]; // Fallback to first course if ID not found

  const formatTitle = (title: string) => {
    const words = title.split(' ');
    const firstTwoWords = words.slice(0, 2).join(' ');
    const thirdWord = words[2];
    const remainingWords = words.slice(3).join(' ');

    return (
      <h1 className="text-2xl sm:text-3xl lg:text-4xl">
        <span className="font-bold leading-tight">{firstTwoWords}</span>{' '}
        <span className="text-red-500 font-bold leading-tight">{thirdWord}</span>
        {remainingWords && <><br /><span className="text-3xl">{remainingWords}</span></>}
      </h1>
    );
  };

  // Share functionality
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: course.title,
          text: course.shortDescription,
          url: window.location.href
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50" id="hero">
      <div className="min-h-[80vh] w-full p-4 sm:p-6 md:p-8 flex items-center justify-center">
        <div className="max-w-6xl w-full overflow-hidden relative flex flex-col lg:block">
          {/* Right Image Section */}
          <div className="relative lg:absolute lg:right-0 lg:top-0 h-[300px] lg:h-full w-full lg:w-[40%] order-1">
            <Image
              src={course.backgroundImage}
              alt={course.title}
              fill
              className="object-cover rounded-[2rem]"
              sizes="(max-width: 768px) 100vw, 45vw"
              priority
              quality={100}
            />
          </div>

          {/* Left Content Section */}
          <div className="relative lg:w-[65%] p-6 sm:p-8 lg:p-10 bg-white rounded-[2rem] z-10 order-2 mt-4 lg:mt-0">
            <div className="space-y-4 relative">
              {/* Badge and Share Button */}
              <div className="flex items-center gap-3">
                <Badge 
                  className="bg-red-100 text-[#ff0000] hover:bg-red-200 px-3 py-1 text-xs sm:text-sm rounded-full font-medium"
                >
                  GLOBALLY RECOGNISED PROGRAM
                </Badge>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="rounded-full hover:bg-gray-100 w-7 h-7"
                  onClick={handleShare}
                >
                  <Share2 className="h-3 w-3 text-gray-600" />
                </Button>
              </div>

              {/* Dynamic Title */}
              {formatTitle(course.title)}

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {course.shortDescription}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <Badge 
                  variant="secondary" 
                  className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  <Clock className="h-4 w-4" /> &nbsp; {course.hours} hours of learning
                </Badge>
                <Badge 
                  variant="secondary" 
                  className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  <Clock className="h-4 w-4" /> &nbsp; Duration: {course.duration}
                </Badge>
              </div>

              {/* Price Section
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold">₹{course.price}</span>
                <span className="text-gray-500 line-through">₹{course.originalPrice}</span>
              </div> */}

              <div className="flex">
                <a href={course.paymentLink} target="_blank">
                  <Button className="bg-[#ff0000] hover:bg-red-600 text-white px-6 py-2 rounded-lg">
                    Enroll Now
                  </Button>
                </a>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="h-3 w-3" />
                  <a 
                    href="tel:+919829105960" 
                    className="text-xs hover:text-[#ff0000] transition-colors cursor-pointer"
                  >
                    For enquiries call: +91 98291 05960
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;