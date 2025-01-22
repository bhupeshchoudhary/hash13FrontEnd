
// // components/customComponents/coursesComponents/courseDetails/CourseDetailsHero.tsx
// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from 'next/navigation';
// import { Star, Clock, Users, Share2, CheckCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Course } from "../../../../../types/courses";
// import { courseInfo } from "../../../../../data/courses/courses";

// interface CourseDetailHeroProps {
//   courseId: string;
// }

// export default function CourseDetailHero({ courseId }: CourseDetailHeroProps) {
//   const router = useRouter();
//   const [course, setCourse] = useState<Course | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!courseId) {
//       setLoading(false);
//       return;
//     }

//     const findCourse = () => {
//       try {
//         const foundCourse = courseInfo.find(c => c.slug === courseId);
//         setCourse(foundCourse || null);
//       } catch (error) {
//         console.error('Error finding course:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     findCourse();
//   }, [courseId]);

//   const calculateDiscount = () => {
//     if (!course) return 0;
//     return Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100);
//   };

//   const handleShare = async () => {
//     if (navigator.share) {
//       try {
//         await navigator.share({
//           title: course?.title,
//           text: course?.shortDescription,
//           url: window.location.href,
//         });
//       } catch (error) {
//         console.error('Error sharing:', error);
//       }
//     }
//   };

//   if (!courseId) {
//     return <div>No course ID provided</div>;
//   }

//   if (loading) {
//     return <CourseDetailHeroSkeleton />;
//   }

//   if (!course) {
//     return <CourseNotFound />;
//   }

//   return (
//     <div className="bg-white">
//       <div className="container mx-auto px-4 py-8 max-w-6xl">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
//           {/* Left Column */}
//           <div className="space-y-6">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                   {course.title}
//                 </h1>
//                 <p className="text-lg text-gray-600">{course.shortDescription}</p>
//               </div>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={handleShare}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 <Share2 className="h-5 w-5" />
//               </Button>
//             </div>

//             {/* <div className="flex flex-wrap gap-4">
//               <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
//                 <Star className="w-5 h-5 text-yellow-400 mr-1" />
//                 <span className="font-semibold">{course.rating}</span>
//                 <span className="text-gray-600 ml-1">
//                   ({course.totalRatings.toLocaleString()})
//                 </span>
//               </div>

//               <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
//                 <Users className="w-5 h-5 text-blue-400 mr-1" />
//                 <span>{course.enrolledStudents.toLocaleString()} students</span>
//               </div>

//               <div className="flex items-center bg-green-50 px-3 py-1 rounded-full">
//                 <Clock className="w-5 h-5 text-green-400 mr-1" />
//                 <span>{course.duration}</span>
//               </div>
//             </div> */}

//             <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
//               <img
//                 src={course.instructor.image}
//                 alt={course.instructor.name}
//                 className="w-16 h-16 rounded-full border-2 border-white shadow-md"
//               />
//               <div>
//                 <p className="font-semibold text-lg">{course.instructor.name}</p>
//                 <p className="text-gray-600">{course.instructor.title}</p>
//                 <p className="text-sm text-gray-500 mt-1">
//                   {course.instructor.bio}
//                 </p>
//               </div>
//             </div>

//             <div className="space-y-4 bg-white p-6 rounded-lg border">
//               <h3 className="font-semibold text-xl">What you`&apos;ll learn</h3>
//               <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                 {course.learningOutcomes.map((outcome, index) => (
//                   <li key={index} className="flex items-start gap-2">
//                     <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
//                     <span>{outcome}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="flex gap-4">
             
//               {/* <Button size="lg" variant="outline" className="flex-1">
//                 Try For Free
//               </Button> */}
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="lg:sticky lg:top-8">
//             <div className="relative rounded-xl overflow-hidden shadow-lg">
//               <img
//                 src={course.backgroundImage}
//                 alt={course.title}
//                 className="w-full aspect-video object-cover"
//               />
//               {/* <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                 <Button
//                   size="lg"
//                   className="bg-white text-black hover:bg-white/90"
//                 >
//                   Preview Course
//                 </Button>
//               </div> */}
//             </div>

//             <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
//               <div className="space-y-4">
//                 <div className="flex items-baseline gap-3">
//                   <span className="text-3xl font-bold">₹{course.price}</span>
//                   <span className="text-lg text-gray-500 line-through">
//                     ₹{course.originalPrice}
//                   </span>
//                   <span className="text-green-600 font-semibold">
//                     {calculateDiscount()}% off
//                   </span>
//                 </div>

//                 <div className="pt-4 border-t">
//                   <h4 className="font-semibold mb-3">This course includes:</h4>
//                   {course.features.map((feature, index) => (
//                     <div key={index} className="flex items-center gap-2 mb-2">
//                       <CheckCircle className="w-5 h-5 text-green-500" />
//                       <span>{feature}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="space-y-3 pt-4">
//                   {/* <Button className="w-full" size="lg">
//                     Enroll Now
//                   </Button> */}


// <Button
//                 size="lg"
//                 className="bg-[#ff0000] hover:bg-red-600 text-white flex-1 w-full"
//               >
//                 <a href="https://rzp.io/rzp/2asghU9u" target="_blank">                Enroll Now</a>

//               </Button>
//                   <p className="text-center text-sm text-gray-500">
//                     30-Day Money-Back Guarantee
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function CourseDetailHeroSkeleton() {
//   return (
//     <div className="animate-pulse bg-white">
//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           <div className="space-y-6">
//             <div className="h-12 bg-gray-200 rounded w-3/4"></div>
//             <div className="h-4 bg-gray-200 rounded w-1/2"></div>
//             <div className="flex gap-4">
//               <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
//               <div className="h-8 bg-gray-200 rounded w-1/4"></div>
//             </div>
//           </div>
//           <div className="aspect-video bg-gray-200 rounded-xl"></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function CourseNotFound() {
//   const router = useRouter();
  
//   return (
//     <div className="text-center py-12">
//       <h2 className="text-2xl font-bold">Course Not Found</h2>
//       <p className="text-gray-600 mt-2">
//         The course you`&apos;re looking for doesn`&apos;t exist.
//       </p>
//       <Button
//         onClick={() => router.push('/courses')}
//         className="mt-6"
//       >
//         Back to Courses
//       </Button>
//     </div>
//   );
// }














"use client";
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Share2, Phone } from "lucide-react";
import Image from 'next/image';
import CourseHeroImage from "../../../../../public/assets/courseHeroImage.jpg"

const CourseHero = () => {
  // Share functionality
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'DevOps Training Course',
          text: 'Check out this DevOps Expert course - Become a DevOps Expert in 3 months',
          url: window.location.href
        });
      } else {
        // Fallback for browsers that don't support Web Share API
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
          <div className="relative lg:absolute lg:right-0 lg:top-0 h-[300px] lg:h-full w-full lg:w-[45%] order-1">
            <Image
              src={CourseHeroImage}
              alt="DevOps Training"
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

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                Specialisation in <span className="text-red-500">DevOps</span> - Become a DevOps Expert in 3 months
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Industry Relevant & Recognized Training | Gain HandsOn Experience | Best-In-Class Content | Industry Use-Cases
              </p>


              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {['DevOps', 'Basic to Advance'].map((tag) => (
                  <Badge 
                    key={tag}
                    variant="secondary" 
                    className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              {/* Duration */}
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="h-4 w-4" />
                <span className="text-xs sm:text-sm">310 hours of learning</span>
              </div>
              <div className="flex">
                <a href="https://rzp.io/rzp/2asghU9u" target="_blank">
                  <Button className="bg-[#ff0000] hover:bg-red-600 text-white px-6 py-2 rounded-lg">
                    Apply Now
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