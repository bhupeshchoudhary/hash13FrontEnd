// components/CourseStructure.tsx
import { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

const CourseStructure = () => {
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  const courseModules = [
    {
      title: 'LANGUAGE',
      duration: '1 month',
      description: 'Python is non-negotiable skill for DevOps Engineer. It allows you to build your foundation essential for automating and streamlining DevOps processes.',
      topics: [
        'Introduction, Data Types and Operators',
        'Control Statements',
        'Loops (While and For)',
        'Advanced Looping',
        'Functions 1',
        'Functions 2',
        'Lists',
        'List Slicing and List 2D',
        'Strings',
        'Tuples and Sets',
        'Dictionaries'
      ]
    },
    // ... other modules
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-white">Expert-Designed Course Structure</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courseModules.map((module) => (
          <Card
            key={module.title}
            className={`bg-[#0A1628] border-none text-white cursor-pointer transition-all duration-300 overflow-hidden relative ${
              expandedModule === module.title ? 'h-auto' : 'h-[400px]'
            }`}
            onClick={() => setExpandedModule(expandedModule === module.title ? null : module.title)}
          >
            {/* Header with background */}
            <div 
              className="bg-[#1A2737] p-6 relative rounded-xl"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 11.5V28.5L20 40L0 28.5V11.5L20 0Z' fill='rgba(255, 255, 255, 0.05)'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
                backgroundSize: '40px'
              }}
            >
              <h3 className="text-xl font-semibold text-[#4C7BFE]">{module.title}</h3>
              <div className='flex gap-2 mt-2'>
                <Calendar className='w-4 h-4'/>
                <span className="text-sm text-gray-400 block">{module.duration}</span>
              </div>
            </div>

            {/* Content section */}
            <div className="p-6">
              <div className="mb-4 bg-[#1A2737] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-500">⚡</span>
                  <span className="text-sm font-medium text-white">Why learn this</span>
                </div>
                <p className="text-sm text-gray-400">{module.description}</p>
              </div>

              {/* Always show first few topics */}
             {/* Topics section with dynamic sizing */}
<div className="flex flex-wrap gap-2">
  {module.topics.slice(0, expandedModule === module.title ? module.topics.length : 3).map((topic) => (
    <div
      key={topic}
      className="text-sm py-2 px-4 bg-[#1A2737] rounded-md hover:bg-[#243447] transition-colors flex-shrink-0 flex-grow-0 basis-auto max-w-full"
    >
      {topic}
    </div>
  ))}
</div>

              {/* Show expand/collapse button */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center -mb-3">
                {expandedModule === module.title ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <>
                    {module.topics.length > 3 && (
                      <div className="flex flex-col items-center   ">
                        
                        <ChevronDown className="w-6 h-6  text-gray-400" />
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CourseStructure;