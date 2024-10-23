import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

// Types for our data
type TopicCard = {
  title: string;
  courses: number;
  icon: string;
};



// Updated topics array with 6 unique entries
const topics: TopicCard[] = [
  { title: "Data Science", courses: 68, icon: "⌛" },
  { title: "UI/UX Design", courses: 27, icon: "📐" },
  { title: "Big Data", courses: 64, icon: "🌐" },
  { title: "Cloud Computing", courses: 45, icon: "☁️" },
  { title: "Cyber Security", courses: 32, icon: "🛡️" },
  { title: "Machine Learning", courses: 54, icon: "🤖" },
];



const PopularTopic = () => {
  return (
    <div className="container mx-auto  py-12 max-w-7xl px-6 lg:px-14">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-sm text-green-500 mb-2">Start Learning From Today</p>
        <h1 className="text-3xl font-bold">
          Popular <span className="text-red-500 relative">
            Topics
            <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 rounded-full"></span>
          </span> To Learn
        </h1>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
        {topics.map((topic, index) => (
          <Card 
            key={index} 
            className={`transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 bg-${index % 6 + 1}00`} 
            style={{ backgroundColor: getColor(index) }}
          >
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                  <span className="text-2xl">{topic.icon}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{topic.title}</h3>
                <p className="text-gray-500">{topic.courses} Courses</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

    
    </div>
  );
};

// Function to get colors based on index
const getColor = (index: number) => {
  const colors = [
    "#FEE2E2", // Red
    "#E0F2FE", // Light Blue
    "#D1FAE5", // Green
    "#FBCFE8", // Pink
    "#F9FAFB", // Gray
    "#FEF3C7", // Yellow
  ];
  return colors[index % colors.length];
};

export default PopularTopic;
