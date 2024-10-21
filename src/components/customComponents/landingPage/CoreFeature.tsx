import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Globe, User, Clock } from "lucide-react";

const CoreFeature = () => {
  const features = [
    {
      icon: Globe,
      title: "Learn More Anywhere",
      description: "Learn from anywhere in world on desktop, mobile or tablet with an Internet connection.",
      bgColor: "bg-white"
    },
    {
      icon: User,
      title: "Expert Instructor",
      description: "Learn from anywhere in world on desktop, mobile or tablet with an Internet connection.",
      bgColor: "bg-red-500"
    },
    {
      icon: Clock,
      title: "24/7 Strong Support",
      description: "Learn from anywhere in world on desktop, mobile or tablet with an Internet connection.",
      bgColor: "bg-white"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-pink-50/30 via-white to-pink-50/20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-12 left-12">
        <div className="relative w-6 h-6">
          <div className="absolute w-4 h-px bg-red-200 rotate-45 right-0"></div>
          <div className="absolute h-4 w-px bg-red-200 rotate-45 right-0.5"></div>
        </div>
      </div>
      
      <div className="absolute bottom-20 left-20">
        <Globe className="w-24 h-24 text-red-100/20" />
      </div>
      
      <div className="absolute top-40 right-20">
        <div className="w-10 h-10 rounded-full border border-red-100/30"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-wide mb-3">Core Features</p>
          <h2 className="text-[32px] font-bold text-gray-800">
            Why <span className="text-red-500">Choose</span> #13
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className={`${feature.bgColor} border-none ${
                  index === 1 
                    ? 'shadow-lg text-white' 
                    : 'shadow-md text-gray-600'
                } transition-all duration-200 hover:shadow-xl`}
              >
                <CardContent className="p-8">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 ${
                    index === 1 
                      ? 'bg-red-400' 
                      : 'bg-cyan-50'
                  }`}>
                    <Icon 
                      className={`w-5 h-5 ${
                        index === 1 
                          ? 'text-white' 
                          : 'text-cyan-400'
                      }`} 
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className={`text-lg font-bold mb-3 ${
                    index === 1 
                      ? 'text-white' 
                      : 'text-gray-800'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`text-[15px] leading-relaxed ${
                    index === 1 
                      ? 'text-white/90' 
                      : 'text-gray-500'
                  }`}>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CoreFeature;