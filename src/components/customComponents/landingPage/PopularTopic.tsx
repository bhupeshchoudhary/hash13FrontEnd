import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

// Types for our data
type TopicCard = {
  title: string;
  courses: number;
  icon: string;
};

type Statistic = {
  value: string;
  label: string;
};

const topics: TopicCard[] = [
  { title: "Data Science", courses: 68, icon: "⌛" },
  { title: "UI/UX Design", courses: 27, icon: "📐" },
  { title: "Data Science", courses: 68, icon: "📊" },
  { title: "AWS", courses: 68, icon: "🎵" },
  { title: "Data Science", courses: 45, icon: "📱" },
  { title: "Big Data", courses: 64, icon: "🌐" },
  { title: "Global Science", courses: 75, icon: "🌍" },
  { title: "Linux Training", courses: 12, icon: "💻" },
];

const statistics: Statistic[] = [
  { value: "82K+", label: "Enrolled Students" },
  { value: "348+", label: "Academic Programs" },
  { value: "125+", label: "Winning Award" },
  { value: "37+", label: "Certified Students" },
];

const PopularTopic = () => {
  return (
    <div className="container mx-auto px-4 py-12">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {topics.map((topic, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
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

      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statistics.map((stat, index) => (
          <div key={index} className="text-center">
            <h2 className="text-3xl font-bold text-cyan-500 mb-2">
              {stat.value}
            </h2>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTopic;