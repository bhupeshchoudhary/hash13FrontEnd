// "use client";

// import { useRef } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
// import { Clock, Star, BookOpen, ChartBar } from "lucide-react";
// import curveLine from "../../../../public/assets/CurlLine.svg";
// import { courseInfo } from "../../../../data/courses/courses";
// import { CardPosition } from "../../../../types/courses";





// // Utility function to render stars based on the rating
// const renderStars = (rating: number) => {
//   const fullStars = Math.floor(rating); // Number of full stars
//   const halfStar = rating % 1 !== 0; // Determine if a half star is needed
//   const totalStars = 5;

//   const stars = [];

//   for (let i = 0; i < fullStars; i++) {
//     stars.push(<Star key={i} className="h-4 w-4 text-yellow-400" />);
//   }

//   if (halfStar) {
//     stars.push(<Star key="half" className="h-4 w-4 text-yellow-400 opacity-50" />);
//   }

//   const emptyStars = totalStars - stars.length;
//   for (let i = 0; i < emptyStars; i++) {
//     stars.push(<Star key={i + fullStars + 1} className="h-4 w-4 text-gray-300" />);
//   }

//   return stars;
// };

// function CardComponents() {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-4 p-2 max-w-6xl mx-auto">
//       {courseInfo.map((course, index) => (
//         <Card
//           key={index}
//           className="group relative overflow-hidden w-full cursor-pointer transition-transform hover:scale-105 flex flex-col"
//         >
//           {/* Image Container */}
//           <div className="h-56 sm:h-56 overflow-hidden">
//             <img
//               src={course.backgroundImage}
//               alt={course.title}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Card Footer */}
//           <CardFooter className="p-4 flex flex-col items-start bg-white">
//             <h3 className="text-base sm:text-sm font-bold mb-2 text-gray-800">{course.title}</h3>

//             <div className="flex items-center gap-4 mb-4 text-sm sm:text-xs text-gray-600">
//               <div className="flex items-center gap-1">
//                 <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400 mr-1" />
//                 <span className="text-sm sm:text-xs text-gray-600">{course.rating.toFixed(1)}</span>
//               </div>
//               <div className="flex items-center gap-1">
//                 <span className="mr-2 sm:mr-1">{course.hours} hours</span>
//               </div>
//             </div>
//           </CardFooter>
//         </Card>
//       ))}
//     </div>
//   )
// }
// export default function CoursesComponent() {
//   const gridRef = useRef<HTMLDivElement>(null);

//   const getCardPosition = (index: number): CardPosition => {
//     if (!gridRef.current) return { isRightmost: false };

//     const gridColumns = window.getComputedStyle(gridRef.current).gridTemplateColumns.split(" ").length;

//     // Check if card is in the last column
//     const isRightmost = (index + 1) % gridColumns === 0;

//     return { isRightmost };
//   };

//   return (
//     <div className="container max-w-7xl mx-auto px-6 lg:px-14 py-8">
//       <div className="text-center mb-10">
//         <h2 className="text-sm text-muted-foreground mb-2 text-teal-500">Popular Courses</h2>
//         <h1 className="text-3xl font-bold">
//           Choose Our Top{" "}
//           <span className="text-[#ff0000] relative">
//             Courses
//             <span className="absolute bottom-0 left-0 w-full h-1">
//               <Image src={curveLine} alt="curve line" className="w-full mb-4" width={100} height={300} />
//             </span>
//           </span>
//         </h1>
//       </div>

//     <CardComponents></CardComponents>
     

//       <div className="text-center mt-10">
//         <Button className="bg-[#ff0000]" variant="destructive" size="lg">
//           View All Courses
//         </Button>
//       </div>
//     </div>
//   );
// }




// components/customComponents/landingPage/Courses.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import CourseCard from "./CourseCard";
import { courseInfo } from "../../../../data/courses/courses";
import curveLine from "@../../../public/assets/CurlLine.svg";
import Link from "next/link";
export default function CoursesComponent() {
  return (
    <div className="container max-w-7xl mx-auto px-6 lg:px-14 py-8">
      <div className="text-center mb-10">
        <h2 className="text-sm text-muted-foreground mb-2 text-teal-500">
          Popular Courses
        </h2>
        <h1 className="text-3xl font-bold">
          Choose Our Top{" "}
          <span className="text-[#ff0000] relative">
            Courses
            <span className="absolute bottom-0 left-0 w-full h-1">
              <Image 
                src={curveLine} 
                alt="curve line" 
                className="w-full mb-4" 
                width={100}
                height={100}
                style={{ height: 'auto' }}
              />
            </span>
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-4 p-2">
        {courseInfo.map((course, index) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <div className="text-center mt-10">
        <Link className="bg-[#ff0000] p-4 curson-pointer rounded-lg text-white" href="/courses" >
          View All Courses
        </Link>
      </div>
    </div>
  );
}