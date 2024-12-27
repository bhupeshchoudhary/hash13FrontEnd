import React from "react";
import { TrendingUp, BarChart, Cpu } from "lucide-react"; // Import specific icons
import { Course } from "../../../../types/courses"; // Adjust the path as necessary

// Define the ToolSection type
interface ToolSection {
  icon: string;
  title: string;
  description: string;
  toolsImage: string;
}

// Map icon names to components
const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp size={24} color="white" />,
  BarChart: <BarChart size={24} color="white" />,
  Cpu: <Cpu size={24} color="white" />
};

// Section Component
interface SectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Section: React.FC<SectionProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-[#ff0000] rounded-full p-2 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-lg sm:text-xl font-medium text-gray-800">{title}</h3>
        <p className="text-sm sm:text-base text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// Main DataScienceTools Component
interface ToolsProps {
  course: Course;
}

const Tools: React.FC<ToolsProps> = ({ course }) => {
  return (
    <div className="flex flex-col mt-4 lg:flex-row items-center max-w-6xl justify-between bg-white p-4 sm:p-6 lg:p-8 mx-auto">
      <div className="lg:w-1/2 space-y-6 sm:space-y-8">
        <h2 className="text-gray-700 text-sm font-semibold">
          Most Hands-On {course.category} Training
        </h2>
        <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
          Master 15+ Cutting-Edge <span className="text-[#ff0000]">{course.category} Tools</span>
        </h1>

        {/* Render Tool Sections Dynamically */}
        {course.toolsData.map((tool: ToolSection, index) => (
          <Section
            key={index}
            icon={iconMap[tool.icon] || <div />} // Fallback for missing icon
            title={tool.title}
            description={tool.description}
          />
        ))}
      </div>

      {/* Last tool image section */}
      <div className="lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
        {course.toolsData.length > 0 && (
          <div className="relative bg-gray-100 p-4 sm:p-8 rounded-lg shadow-lg">
            <img
              src={course.toolsData[course.toolsData.length - 1].toolsImage}
              alt="Data Science Tools"
              className="w-full h-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tools;