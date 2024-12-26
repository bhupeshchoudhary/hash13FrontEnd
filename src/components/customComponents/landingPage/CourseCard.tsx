// components/customComponents/landingPage/CourseCard.tsx
import { useRouter } from 'next/navigation';
import { Card, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Course } from '../../../../types/courses';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/courses/${course.slug}`);
  };

  return (
    <Card
      onClick={handleClick}
      className="group relative overflow-hidden w-full cursor-pointer transition-transform hover:scale-105 flex flex-col"
    >
      <div className="h-56 sm:h-56 overflow-hidden">
        <img
          src={course.backgroundImage}
          alt={course.title}
          className="w-full h-full object-cover"
        />
      </div>

      <CardFooter className="p-4 flex flex-col items-start bg-white">
        <h3 className="text-base sm:text-sm font-bold mb-2 text-gray-800">
          {course.title}
        </h3>

        <div className="flex items-center gap-4 mb-4 text-sm sm:text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400 mr-1" />
            <span>{course.rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>{course.hours} hours</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}