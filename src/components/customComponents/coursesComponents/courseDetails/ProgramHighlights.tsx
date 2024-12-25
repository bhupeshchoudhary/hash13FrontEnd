import React from 'react';
import { Card } from "@/components/ui/card";

const ProgramHighlights = () => {
  const highlights = [
    {
      number: "15+",
      description: "Modules",
    },
    {
      number: "300+",
      description: "Hours of learning",
    },
    {
      number: "15+",
      description: "Programming Tools",
    },
    {
      number: "20+",
      description: "Capstone Projects",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-50 to-red-50">
      <div className="p-6 lg:px-8 max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-gray-700 text-sm font-semibold mb-2">
          Your Pathway To DevOps Career
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
                className={`text-center ${index !== 0 ? 'md:border-l md:border-gray-300 md:pl-8' : ''}`}
              >
                <div className="text-[#ff0000] text-3xl font-bold mb-2">
                  {item.number}
                </div>
                <div className="text-gray-600 text-md">{item.description}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProgramHighlights;
