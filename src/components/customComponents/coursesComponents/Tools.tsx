import React from "react";
import { TrendingUp, BarChart, Cpu } from "lucide-react"; // Import specific icons

// Section Component
interface SectionProps {
  icon: React.ReactNode;
  title: string;
  
}

const Section: React.FC<SectionProps> = ({ icon, title }) => {
  return (
    <div className="flex items-start space-x-4">
      {/* Icon with red background */}
      <div className="bg-[#ff0000]  rounded-full p-2 flex items-center justify-center">
        {icon}
      </div>
      {/* Text Content */}
      <div>
        <span className="text-md sm:text-md font-medium text-gray-800">{title}</span>
       {/* <p className="text-sm sm:text-base text-gray-600">{description}</p> */}
      </div>
    </div>
  );
};

// Main DataScienceTools Component
const Tools: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50">
    <div className="flex flex-col  lg:flex-row items-center max-w-6xl justify-between  p-4 sm:p-6 lg:p-8 mx-auto">
      {/* Left Text Content */}
      <div className="lg:w-1/2 space-y-6 sm:space-y-4">
        <h2 className="text-gray-700 text-sm font-semibold">
          Most Hands-On DevOps Program
        </h2>

         

        <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
        Master 15+ Industry Required DevOps <span className="text-[#ff0000]">Tools & Technologies</span>
        </h1>

        {/* Tool Sections */}
        <Section
          icon={<TrendingUp size={18} color="white " />}
          title="Infrastructure & Automation: Terraform, Ansible, AWS CloudFormation"
        />
        <Section
          icon={<BarChart size={18} color="white" />}
          title="CI/CD: Jenkins &  GitLab CI
"
        
        />
        <Section
          icon={<Cpu size={18} color="white" />}
          title="Containers & Orchestration: Docker, Kubernetes"
        
        />

<Section
          icon={<TrendingUp size={18} color="white" />}
          title="Cloud Platforms: AWS, Azure, GCP"
        
        />

<Section
          icon={<BarChart size={18} color="white" />}
          title="Monitoring & Logging: Prometheus, Grafana, ELK"
        
        />

<Section
          icon={<Cpu size={18} color="white" />}
          title="Version Control: Git, GitHub"
        
        />
      </div>

      {/* Right Image Section */}
      <div className="lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0 md:p-6">
        <div className="relative bg-white md:p-4 sm:p-8 rounded-lg shadow-lg">
          {/* Replace this image tag with your actual image */}
          <img
            src="/assets/cources/tools.jpeg"
            alt="Data Science Tools"
            className="w-full h-auto "
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Tools;
