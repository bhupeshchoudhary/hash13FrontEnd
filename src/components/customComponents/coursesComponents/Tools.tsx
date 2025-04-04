
// components/customComponents/coursesComponents/Tools.tsx

import React from "react";
import { TrendingUp, BarChart, Cpu } from "lucide-react";
import { courseInfo } from "../../../../data/courses/courses";

// Icon mapping
const IconMap = {
  TrendingUp: <TrendingUp size={18} color="white" />,
  BarChart: <BarChart size={18} color="white" />,
  Cpu: <Cpu size={18} color="white" />
};

// Section Component
interface SectionProps {
  icon: React.ReactNode;
  title: string;
}

const Section: React.FC<SectionProps> = ({ icon, title }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-[#ff0000] rounded-full p-2 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <span className="text-md sm:text-md font-medium text-gray-800">
          {title}
        </span>
      </div>
    </div>
  );
};

interface ToolsProps {
  courseId?: string;
}

const Tools: React.FC<ToolsProps> = ({ courseId }) => {
  // Find the specific course or use the first one as default
  const course = courseId 
    ? courseInfo.find(c => c._id === courseId) 
    : courseInfo[0];

  if (!course || !course.toolsData) {
    return null;
  }

  const { toolsData } = course;

  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50">
      <div className="flex flex-col lg:flex-row items-center max-w-6xl justify-between p-4 md:p-6 lg:p-8 mx-auto">
        {/* Left Text Content */}
        <div className="lg:w-1/2 md:space-y-6 lg:space-y-6 space-y-2">
          <h2 className="text-gray-700 text-sm font-semibold">
            {toolsData.sectionTitle}
          </h2>

          <h1 className="text-3xl md:text-3xl lg:text-3xl md:mb-0 mb-8 lg:mb-0 font-bold text-gray-900">
            Master {toolsData.toolsCount} Industry Required {toolsData.category}{' '}
            <span className="text-[#ff0000]">Tools & Technologies</span>
          </h1>

          {/* Tool Sections */}
          {toolsData.tools.map((tool) => (
            <Section 
              key={tool.id}
              icon={IconMap[tool.icon]}
              title={tool.title}
            />
          ))}
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0 md:p-6">
          <div className="relative bg-white md:p-4 sm:p-8 rounded-lg shadow-lg">
            <img
              src={toolsData.displayImage}
              alt={`${toolsData.category} Tools and Technologies`}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;