import React from 'react';
import { Card } from "@/components/ui/card";

const ProgramHighlights = () => {
  const highlights = [
    {
      number: "10+",
      description: "Modules"
    },
    {
      number: "40+",
      description: "Hours of learning"
    },
    {
      number: "10+",
      description: "Programming Tools"
    },
    {
        number:"15+",
        description:"Capstone Projects"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 lg:px-8">
      {/* Title */}
      <h2 className="text-gray-700 text-sm font-semibold mb-2">
        MSc AI & Data Science: Your Pathway To AI Career
      </h2>

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6">
        Key <span className="text-[#ff0000]">Program</span> Highlights
      </h1>

      {/* Stats Card */}
      <Card className="p-8 bg-white rounded-2xl shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="text-center"
            >
              <div className="text-[#ff0000] text-4xl font-bold mb-2">
                {item.number}
              </div>
              <div className="text-gray-600 text-lg">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ProgramHighlights;