import React from 'react';
import { User2, GraduationCap, MonitorPlay, Video, Globe } from 'lucide-react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconBgColor: string;
  textColor: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description, bgColor, iconBgColor, textColor }) => (
  <div className={`w-64 h-64 rounded-2xl shadow-lg ${bgColor} ${textColor} flex flex-col items-center text-center overflow-hidden`}>
    <div className="w-full h-1/2 flex items-center justify-center">
      <div className={`rounded-lg p-3 ${iconBgColor} flex items-center justify-center`}>
        {icon}
      </div>
    </div>
    <div className="w-full h-1/2 p-4 flex flex-col justify-center">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  </div>
);

const CoreFeature = () => {
  return (
    <div className="w-full lg:px-14 h-[80vh] mx-auto px-6  relative overflow-hidden"> {/* Adjusted height here bg-[#fff6f4] */}
      {/* Decorative Elements */}
      <div className="absolute top-8 left-12">
        <div className="relative w-6 h-6">
          <div className="absolute w-4 h-px bg-[#ff0000] rotate-45 right-0"></div>
          <div className="absolute h-4 w-px bg-[#ff0000] rotate-45 right-0.5"></div>
        </div>
      </div>

      <div className="absolute bottom-20 left-20">
        <Globe className="w-24 h-24 text-[#ff0000]/20" />
      </div>

      <div className="absolute top-40 right-20">
        <div className="w-10 h-10 rounded-full border border-red-100/30"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-4"> {/* Changed py-10 to pt-10 pb-4 */}
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-teal-500 text-sm font-medium tracking-wide mb">Core Features</p>
          <h2 className="text-[32px] font-bold text-gray-800">
            Why <span className="text-[#ff0000]">Choose</span> #13
          </h2>
        </div>

        {/* Features Grid */}
        <div className="flex flex-wrap justify-center gap-6">  {/* Removed mb-0 */}
          <Card
            icon={<User2 className="w-12 h-12 text-white" />}
            title="Skillful Instructors"
            description="Start learning from experienced instructors."
            bgColor="bg-white"
            iconBgColor="bg-blue-400"
            textColor="text-gray-800"
          />
          <Card
            icon={<GraduationCap className="w-12 h-12 text-white" />}
            title="Happy Students"
            description="Enrolled in our courses and improved their skills."
            bgColor="bg-white"
            iconBgColor="bg-pink-500"
            textColor="text-gray-800"
          />
          <Card
            icon={<MonitorPlay className="w-12 h-12 text-white" />}
            title="Live Classes"
            description="Improve your skills using live knowledge flow."
            bgColor="bg-white"
            iconBgColor="bg-green-400"
            textColor="text-gray-800"
          />
          <Card
            icon={<Video className="w-12 h-12 text-white" />}
            title="Video Courses"
            description="Learn without any geographical & time limitations."
            bgColor="bg-white"
            iconBgColor="bg-[#ff0000]"
            textColor="text-gray-800"
          />
        </div>
      </div>
    </div>
  );
};

export default CoreFeature;