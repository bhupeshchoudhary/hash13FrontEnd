import React from "react";
import { TrendingUp, BarChart, Cpu } from "lucide-react"; // Import specific icons

// Section Component
interface SectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Section: React.FC<SectionProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4">
      {/* Icon with red background */}
      <div className="bg-[#ff0000]  rounded-full p-2 flex items-center justify-center">
        {icon}
      </div>
      {/* Text Content */}
      <div>
        <h3 className="text-lg sm:text-xl font-medium text-gray-800">{title}</h3>
        <p className="text-sm sm:text-base text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// Main DataScienceTools Component
const Tools: React.FC = () => {
  return (
    <div className="flex flex-col mt-4 lg:flex-row items-center max-w-6xl justify-between bg-white p-4 sm:p-6 lg:p-8 mx-auto">
      {/* Left Text Content */}
      <div className="lg:w-1/2 space-y-6 sm:space-y-8">
        <h2 className="text-gray-700 text-sm font-semibold">
          Most Hands-On Data Program
        </h2>
        <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
          Master 15+ Cutting-Edge <span className="text-[#ff0000]">Data Science Tools</span>
        </h1>

        {/* Tool Sections */}
        <Section
          icon={<TrendingUp size={24} color="white " />}
          title="Data Management and Development Tools"
          description="Tools: Python, SQL"
        />
        <Section
          icon={<BarChart size={24} color="white" />}
          title="Data Analysis and Visualization"
          description="Tools: Excel, Power BI, Tableau, Matplotlib, Seaborn, NumPy, Pandas"
        />
        <Section
          icon={<Cpu size={24} color="white" />}
          title="Machine Learning and AI Frameworks"
          description="Tools: Statsmodels, Sklearn, TensorFlow, Keras, NLTK, OpenAI, MLflow"
        />
      </div>

      {/* Right Image Section */}
      <div className="lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
        <div className="relative bg-gray-100 p-4 sm:p-8 rounded-lg shadow-lg">
          {/* Replace this image tag with your actual image */}
          <img
            src="/assets/cources/tools.webp"
            alt="Data Science Tools"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Tools;
