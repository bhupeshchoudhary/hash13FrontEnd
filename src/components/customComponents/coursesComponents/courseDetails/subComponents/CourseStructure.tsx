// // components/CourseStructure.tsx
// import { useState } from 'react';
// import { ChevronDown, ChevronUp, Calendar } from 'lucide-react';
// import { Card } from '@/components/ui/card';

// interface Module {
//   id: number;
//   title: string;
//   content: string[];
//   description?: string;
// }

// interface CourseStructureProps {
//   modules: Module[];
// }

// const CourseStructure: React.FC<CourseStructureProps> = ({ modules }) => {
//   const [expandedModule, setExpandedModule] = useState<number | null>(null);

//   return (
//     <div className="container mx-auto p-0">
//       <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
//         {modules.map((module) => (
//           <Card
//             key={module.id}
//             className={`bg-red-200 border-none text-white w-[650px] cursor-pointer transition-all duration-300 overflow-hidden relative ${
//               expandedModule === module.id ? 'h-auto' : 'h-[350px] w-[650px]'
//             }`}
//             onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
//           >
//             {/* Header with background */}
//             <div 
//               className="bg-[#ff0000] p-6 relative rounded-xl"
//               style={{
//                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 11.5V28.5L20 40L0 28.5V11.5L20 0Z' fill='rgba(255, 255, 255, 0.05)'/%3E%3C/svg%3E")`,
//                 backgroundRepeat: 'no-repeat',
//                 backgroundPosition: 'right 1rem center',
//                 backgroundSize: '40px'
//               }}
//             >
//               <div className="text-sm text-white font-bold mb-1">
//                 MODULE {module.id}
//               </div>
//               <h3 className="text-xl font-semibold text-white">{module.title}</h3>
//             </div>

//             {/* Content section */}
//             <div className="p-6">
//               {module.description && (
//                 <div className="mb-4 bg-red-200 rounded-xl p-4">
//                   <div className="flex items-center gap-2 mb-2">
//                     <span className="text-yellow-500">⚡</span>
//                     <span className="text-sm font-medium text-black font-bold">Why learn this</span>
//                   </div>
//                   <p className="text-sm text-black">{module.description}</p>
//                 </div>
//               )}

//               {/* Content items in grid */}
//               <div className="grid grid-cols-2 gap-2">
//                 {module.content
//                   .slice(0, expandedModule === module.id ? module.content.length : 6)
//                   .map((item, index) => (
//                     <div
//                       key={index}
//                       className="text-sm py-2 px-4 text-black bg-red-400 rounded-md hover:bg-red-300 transition-colors"
//                     >
//                       {item}
//                     </div>
//                   ))}
//               </div>

//               {/* Show expand/collapse button */}
//               {module.content.length > 6 && (
//                 <div className="absolute bottom-4 left-0 right-0 flex justify-center -mb-3">
//                   {expandedModule === module.id ? (
//                     <ChevronUp className="w-6 h-6 text-gray-400" />
//                   ) : (
//                     <ChevronDown className="w-6 h-6 text-gray-400" />
//                   )}
//                 </div>
//               )}
//             </div>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CourseStructure;





// components/CourseStructure.tsx
import { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';
import ModuleHeaderImage from "../../../../../../public/assets/cources/courseDetails/modulesHeaderImage.png"

interface Module {
  id: number;
  title: string;
  content: string[];
  description?: string;
  duration?: string;
}

interface CourseStructureProps {
  modules: Module[];
}

const CourseStructure: React.FC<CourseStructureProps> = ({ modules }) => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  return (
    <div className="container mx-auto p-0">
      
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {modules.map((module) => (
          <Card
            key={module.id}
            className={`bg-red-200 border-none text-white w-[650px] cursor-pointer transition-all duration-300 overflow-hidden relative ${
              expandedModule === module.id ? 'h-auto' : 'h-[350px] w-[650px]'
            }`}
            onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}


          >
            {/* Header with background */}
            <div 
  className="bg-white p-6 relative rounded-xl "
  style={{
    backgroundImage: `url('/assets/cources/courseDetails/moduleHeaderImage2.png')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right  center',
    backgroundSize: 'cover'
  }}
>
              <div className="text-sm text-white font-bold mb-1" >
                MODULE {module.id}
              </div>
              <h3 className="text-xl font-semibold text-white">{module.title}</h3>
              {module.duration && (
                <div className='flex gap-2 mt-2'>
                  <Calendar className='w-4 h-4 text-white'/>
                  <span className="text-sm text-white block">{module.duration}</span>
                </div>
              )}
            </div>

            {/* Content section */}
            <div className="p-6">
              {module.description && (
                <div className="mb-4 bg-red-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-500">⚡</span>
                    <span className="text-sm font-medium text-black font-bold">Why learn this</span>
                  </div>
                  <p className="text-sm text-black">{module.description}</p>
                </div>
              )}

              {/* Content items with flex wrap */}
              <div className="flex flex-wrap gap-2">
                {module.content
                  .slice(0, expandedModule === module.id ? module.content.length : 6)
                  .map((item, index) => (
                    <div
                      key={index}
                      className="text-sm py-2 px-4 text-black bg-red-400 rounded-md hover:bg-red-300 transition-colors flex-shrink-0 flex-grow-0 basis-auto max-w-full"
                    >
                      {item}
                    </div>
                  ))}
              </div>

              {/* Show expand/collapse button */}
              {module.content.length > 6 && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center -mb-3">
                  {expandedModule === module.id ? (
                    <ChevronUp className="w-6 h-6 text-gray-400" />
                  ) : (
                    <div className="flex flex-col items-center">
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CourseStructure;