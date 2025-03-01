// components/customComponents/landingPage/CourseCard.tsx
import { useRouter } from 'next/navigation';
import { Card, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Course } from '../../../../types/courses';

// Define SimplifiedCourse type with only needed properties
type SimplifiedCourse = Pick<Course, '_id' | 'title' | 'category' | 'backgroundImage' | 'rating' | 'hours' | 'slug' | 'shortDescription'>;

interface CourseCardProps {
  course: SimplifiedCourse;
}

export default function CourseCard({ course }: CourseCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/courses/${course.slug}`);
  };

  const formatTitle = (title: string) => {
    const elements: JSX.Element[] = [];
    let currentIndex = 0;
    let boldStart = -1;
    let redStart = -1;

    const addText = (start: number, end: number, isBold: boolean, isRed: boolean) => {
      if (start < end) {
        const content = title.slice(start, end);
        elements.push(
          <span
            key={start}
            className={`${isBold ? 'font-bold' : ''} ${
              isRed ? 'text-red-500' : ''
            } leading-tight`}
          >
            {content}
          </span>
        );
      }
    };

    for (let i = 0; i < title.length; i++) {
      if (title.slice(i).startsWith('[B]')) {
        addText(currentIndex, i, false, false);
        boldStart = i + 3;
        i += 2;
        currentIndex = boldStart;
      } else if (title.slice(i).startsWith('[/B]')) {
        addText(currentIndex, i, true, redStart >= 0);
        i += 3;
        currentIndex = i + 1;
        boldStart = -1;
      } else if (title.slice(i).startsWith('[R]')) {
        addText(currentIndex, i, boldStart >= 0, false);
        redStart = i + 3;
        i += 2;
        currentIndex = redStart;
      } else if (title.slice(i).startsWith('[/R]')) {
        addText(currentIndex, i, boldStart >= 0, true);
        i += 3;
        currentIndex = i + 1;
        redStart = -1;
      }
    }

    addText(currentIndex, title.length, boldStart >= 0, redStart >= 0);
    return elements;
  };

  return (
    <Card
      onClick={handleClick}
      className="group relative overflow-hidden w-full cursor-pointer transition-transform hover:scale-105 flex flex-col h-[320px]"
    >
      {/* Image Container */}
      <div className="h-[160px] overflow-hidden">
        <img
          src={course.backgroundImage}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Container */}
      <CardFooter className="p-4 flex flex-col flex-1 bg-white">
        {/* Title Container */}
        <div className="h-[60px] mb-2 overflow-hidden">
          <h3 className="text-sm font-semibold line-clamp-3">
            {formatTitle(course.title.split(',')[0])}
          </h3>
        </div>

        {/* Stats Row */}
        <div className="flex items-center justify-between mt-auto w-full">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400 mr-1" />
              <span className="text-xs text-gray-600">
                {course.rating ? course.rating.toFixed(1) : 'N/A'}
              </span>
            </div>
            <span className="text-xs text-gray-600">
              {course.hours} hours
            </span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}