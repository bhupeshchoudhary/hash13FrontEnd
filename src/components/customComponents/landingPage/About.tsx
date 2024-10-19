import React from 'react';
import { Card } from "@/components/ui/card";
import { Video, Globe, PlayCircle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white p-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-red-400 rounded-full" />
      <div className="absolute top-20 right-10 w-8 h-8 bg-pink-100 rounded-full" />
      <div className="absolute bottom-40 left-20 w-6 h-6 bg-blue-300 rounded-full" />
      <div className="absolute right-20 top-40 w-4 h-4 bg-purple-300 rounded-full" />
      
      {/* Dots Pattern */}
      <div className="absolute top-20 right-1/4 grid grid-cols-6 gap-2">
        {Array(24).fill(null).map((_, i) => (
          <div key={i} className="w-1 h-1 bg-emerald-200 rounded-full" />
        ))}
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Main Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-12">
          {/* Left Side - Images */}
          <div className="relative">
            {/* Play Button Circle */}
            <div className="absolute -left-4 top-0 w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center z-10">
              <PlayCircle className="text-white w-10 h-10" />
            </div>
            
            {/* Yellow Arrow */}
            <div className="absolute right-12 top-1/3 text-yellow-400 transform rotate-45">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>

            {/* Video Call Mockups */}
            <div className="space-y-4">
              <Card className="bg-gray-200 aspect-video flex items-center justify-center">
                <div className="bg-white rounded-full py-2 px-6 flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-gray-400" />
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-gray-400" />
                </div>
              </Card>
              
              <div className="relative">
                <Card className="bg-gray-200 aspect-video flex items-center justify-center">
                  <div className="bg-white rounded-full py-2 px-6 flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-gray-400" />
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-gray-400" />
                  </div>
                </Card>

                {/* Teacher Info Card */}
                <Card className="absolute -right-10 -bottom-10 bg-white p-4 w-64 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full" />
                    <div className="space-y-2">
                      <p className="font-semibold">Trained Teachers</p>
                      <div className="space-y-1">
                        <div className="h-2 w-32 bg-gray-200 rounded" />
                        <div className="h-2 w-24 bg-gray-200 rounded" />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-emerald-500 mb-4">About #13</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                You Can Learn<br />
                Anything, Anytime<br />
                From <span className="text-red-500 relative">
                  Anywhere
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500" />
                </span>
              </h1>
              <p className="text-gray-600 mt-4">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-red-100 rounded">
                  <Video className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">All Classes Video Provided</h3>
                  <p className="text-gray-600">
                    There are many variations of passages of but the majority have suffered.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded">
                  <Globe className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Online Class From Expert Teachers</h3>
                  <p className="text-gray-600">
                    There are many variations of passages of but the majority have suffered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="text-center my-20">
          <h2 className="text-xl font-bold mb-12">
            Trusted By 400k+ Students Around The World & Placed in Global Big 5!
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-50">
            <img src="/api/placeholder/120/40" alt="Coursera" className="h-8" />
            <img src="/api/placeholder/120/40" alt="HubSpot" className="h-8" />
            <img src="/api/placeholder/120/40" alt="Udemy" className="h-8" />
            <img src="/api/placeholder/120/40" alt="Trustpilot" className="h-8" />
            <img src="/api/placeholder/120/40" alt="British Council" className="h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;