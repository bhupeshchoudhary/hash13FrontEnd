// // components/customComponents/coursesComponents/courseDetails/KeyOutcomes.tsx
// 'use client'

// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Check } from "lucide-react";
// import DisplayCourseContent from './subComponents/DisplayCourseContent';
// import { learners, benefits, defaultLearnerImg, LinuxWorldUrl } from '../../../../../data/keyOutComes/keyOutComes';
// import { Course } from '../../../../../types/courses'; // Ensure this type includes modules


// interface KeyOutcomesProps {
//   course: Course;
// }

// export default function KeyOutcomes({ course }: KeyOutcomesProps) {
//   const [isSticky, setIsSticky] = useState<boolean>(false);
//   const rightSectionRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (rightSectionRef.current) {
//         const scrollPosition = window.scrollY;
//         const rightSectionTop = rightSectionRef.current.getBoundingClientRect().top;
//         const windowHeight = window.innerHeight;

//         setIsSticky(scrollPosition >= rightSectionTop - windowHeight);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className='bg-gradient-to-r from-gray-50 to-red-50'>
//       <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-8">
//         {/* Left Section */}
//         <div className="w-full lg:w-2/3">
//           <div className="space-y-4 mb-8">
//             <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold tracking-tight">
//               What will you{" "}
//               <span className="relative">
//                 <span className="text-[#ff0000]">learn</span>
//                 <svg
//                   className="absolute -top-1 -right-2 w-4 h-4 text-[#ff4d00]/20"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <circle cx="12" cy="12" r="12" />
//                 </svg>
//               </span>
//               ?
//             </h1>
//             <p className="text-sm md:text-base font-medium text-muted-foreground">
//               {course.shortDescription}
//             </p>
//           </div>
//           {/* Pass the modules from the course prop to DisplayCourseContent */}
//           <DisplayCourseContent modules={course.module} />
//         </div>

//         {/* Right Section */}
//         <div className="w-full lg:w-1/3">
//           <div
//             ref={rightSectionRef}
//             className={`transition-all duration-300 space-y-6 ${
//               isSticky ? "lg:sticky lg:top-4" : ""
//             }`}
//           >
//             {/* Learners Card */}
//             <Card className="w-full">
//               <CardHeader className="space-y-1">
//                 <CardTitle className="text-xl sm:text-2xl font-bold">
//                   5.4M+ Learners
//                 </CardTitle>
//                 <p className="text-sm text-muted-foreground">
//                   have reaped benefits from our programs
//                 </p>
//               </CardHeader>
//               <CardContent className="space-y-6">


//                 {/* Learners Carousel */}
//                 <div className="overflow-hidden">
//                   <motion.div
//                     animate={{ x: ["0%", "-50%"] }}
//                     transition={{
//                       x: {
//                         repeat: Infinity,
//                         repeatType: "loop",
//                         duration: 10,
//                         ease: "linear",
//                       },
//                     }}
//                     className="flex gap-4"
//                   >
//                     {[...learners, ...learners].map((learner, index) => (
//                       <div key={index} className="flex flex-col items-center flex-shrink-0">
//                         <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden mb-2">
//                           <Image
//                             src={defaultLearnerImg}
//                             alt={learner.name}
//                             width={64}
//                             height={64}
//                             className="object-cover w-full h-full"
//                           />
//                         </div>
//                         <div className="h-4 sm:h-5">
//                           <span className="text-xs sm:text-sm text-gray-600">
//                             {learner.company}
//                           </span>
//                         </div>
//                       </div>
//                     ))}
//                   </motion.div>
//                 </div>

//                 {/* Benefits List */}
//                 <ul className="space-y-4">
//                   {benefits.map((benefit, index) => (
//                     <li key={index} className="flex items-start gap-3">
//                       <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
//                       <span className="text-sm sm:text-base text-muted-foreground">
//                         {benefit}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </CardContent>
//             </Card>

//             {/* Accreditation Card */}
//             <Card className="w-full p-4">
//               <h2 className="text-lg sm:text-xl font-semibold mb-4">
//                 <span className='text-[#ff0000]'>LinuxWorld </span>Accreditation
//               </h2>
//               <div className="flex flex-col sm:flex-row items-center gap-4">
//                 <Image
//                   src={LinuxWorldUrl}
//                   alt="Linux World"
//                   width={200}
//                   height={60}
//                   className="h-12 sm:h-15 w-auto"
//                 />
//                 <div className="flex items-center gap-2">
//                   <Image
//                     src="/assets/linkedin-logo.svg"
//                     alt="LinkedIn"
//                     width={24}
//                     height={24}
//                     className="h-5 w-5 sm:h-6 sm:w-6 grayscale"
//                   />
//                   <div className="flex flex-col">
//                     <span className="text-xs sm:text-sm text-muted-foreground">
//                       LinkedIn
//                     </span>
//                     <span className="text-xs sm:text-sm font-semibold">
//                       Top Startup India 2023
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
 








// // 'use client'

// // import React, { useState, useEffect, useRef } from 'react';
// // import Image from 'next/image';
// // import { motion } from 'framer-motion';
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Check } from "lucide-react";
// // import DisplayCourseContent from './subComponents/DisplayCourseContent';
// // import { learners, benefits, defaultLearnerImg, LinuxWorldUrl } from '../../../../../data/keyOutComes/keyOutComes';
// // import { Course } from '../../../../../types/courses';

// // interface KeyOutcomesProps {
// //   course: Course;
// // }

// // export default function KeyOutcomes({ course }: KeyOutcomesProps) {
// //   const [isSticky, setIsSticky] = useState<boolean>(false);
// //   const rightSectionRef = useRef<HTMLDivElement | null>(null);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (rightSectionRef.current) {
// //         const scrollPosition = window.scrollY;
// //         const rightSectionTop = rightSectionRef.current.getBoundingClientRect().top;
// //         const windowHeight = window.innerHeight;

// //         setIsSticky(scrollPosition >= rightSectionTop - windowHeight);
// //       }
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   return (
// //     <div className="bg-gradient-to-r from-gray-50 to-red-50" id="trainingcontent">
// //     <div className=' max-w-6xl mx-auto '>
// //       <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //         {/* Header Section */}
// //         <div className="space-y-4 mb-8">
// //           <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
// //             What will you{" "}
// //             <span className="relative">
// //               <span className="text-[#ff0000]">learn</span>
// //               <svg
// //                 className="absolute -top-1 -right-2 w-4 h-4 text-[#ff4d00]/20"
// //                 viewBox="0 0 24 24"
// //                 fill="currentColor"
// //               >
// //                 <circle cx="12" cy="12" r="12" />
// //               </svg>
// //             </span>
// //             ?
// //           </h1>
// //           <p className="text-sm md:text-base font-medium text-muted-foreground max-w-3xl">
// //             {course.shortDescription}
// //           </p>
// //         </div>

// //         {/* Course Content Section */}
// //         <div className="w-full">
// //           <DisplayCourseContent modules={course.module} />
// //         </div>
// //       </div>
// //     </div>
// //     </div>
// //   );
// // }



// components/customComponents/coursesComponents/courseDetails/KeyOutcomes.tsx
'use client'

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import DisplayCourseContent from './subComponents/DisplayCourseContent';
import { learners, benefits, images } from '../../../../../data/keyOutComes/keyOutComes';
import { Course } from '../../../../../types/courses';

interface KeyOutcomesProps {
  course: Course;
}

export default function KeyOutcomes({ course }: KeyOutcomesProps) {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const rightSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rightSectionRef.current) {
        const scrollPosition = window.scrollY;
        const rightSectionTop = rightSectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        setIsSticky(scrollPosition >= rightSectionTop - windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='bg-gradient-to-r from-gray-50 to-red-50'  id="Modules">
      <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-8">
        {/* Left Section */}
        <div className="w-full lg:w-2/3">
          <div className="space-y-4 mb-8">
            <h1 className="text-3xl sm:text-3xl lg:text-3xl font-bold tracking-tight">
              What will you{" "}
              <span className="relative">
                <span className="text-[#ff0000]">learn</span>
                <svg
                  className="absolute -top-1 -right-2 w-4 h-4 text-[#ff4d00]/20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <circle cx="12" cy="12" r="12" />
                </svg>
              </span>
              ?
            </h1>
            <p className="text-sm md:text-base font-bold text-muted-foreground">
              {course.shortDescription}
            </p>
          </div>
          <DisplayCourseContent modules={course.module} />
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/3">
          <div
            ref={rightSectionRef}
            className={`transition-all duration-300 space-y-6 ${
              isSticky ? "lg:sticky lg:top-4" : ""
            }`}
          >
            {/* Learners Card */}
            <Card className="w-full">
              <CardHeader className="space-y-1">
                <CardTitle className="text-xl sm:text-2xl font-bold">
                  5.4M+ Learners
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  have reaped benefits from our programs
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Learners Carousel */}
                <div className="overflow-hidden">
                  <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 10,
                        ease: "linear",
                      },
                    }}
                    className="flex gap-4"
                  >
                    {[...learners, ...learners].map((learner, index) => (
                      <div key={index} className="flex flex-col items-center flex-shrink-0">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden mb-2">
                          <Image
                            src={learner.image}
                            alt={learner.name}
                            width={64}
                            height={64}
                            className="object-cover w-full h-full"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = images.defaultLearner;
                            }}
                          />
                        </div>
                        <div className="h-4 sm:h-5">
                          <span className="text-xs sm:text-sm text-gray-600">
                            {learner.company}
                          </span>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Benefits List */}
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm sm:text-base text-muted-foreground">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Accreditation Card */}
            <Card className="w-full p-4">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">
                <span className='text-[#ff0000]'>LinuxWorld </span>Accreditation
              </h2>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Image
                  src="/assets/cources/LWlogo.png"
                  alt="Linux World"
                  width={200}
                  height={60}
                  className="h-12 sm:h-15 w-auto"
                />
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/cources/linkdin.png"
                    alt="Linkdin"
                    width={24}
                    height={24}
                    className="h-5 w-auto sm:h-6 sm:w-6"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      LinkedIn
                    </span>
                    <span className="text-xs sm:text-sm font-semibold">
                      Top Startup India 2023
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}