"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const WhatWillYouLearn = () => {
    const data = [
        { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "Working Professionals", text: "Working Professionals" },
        { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "Working Professionals", text: "Working Professionals" },
        { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "Working Professionals", text: "Working Professionals" },
        { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "Working Professionals", text: "Working Professionals" },
        { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "Working Professionals", text: "Working Professionals" },
        { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "Working Professionals", text: "Working Professionals" },
        { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "Working Professionals", text: "Working Professionals" },
        { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "Working Professionals", text: "Working Professionals" },
        { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "Working Professionals", text: "Working Professionals" },
        { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "Working Professionals", text: "Working Professionals" },


    ];

  return (
    <div className="text-center my-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold mb-8">
        Who is this program for?
      </h2>

      <div className="relative overflow-hidden bg-white">
        {/* Scrolling container */}
        <div className="w-full flex space-x-4 overflow-hidden no-scrollbar p-4">
          {/* First scroll */}
          <div className="flex items-center justify-center animate-marquee space-x-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-36 sm:w-40 md:w-48 lg:w-56 mx-2"
              >
                <Card className="rounded-2xl border-4 border-black-900 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4 sm:p-6 space-y-2 sm:space-y-4">
                    <div className="w-full aspect-video relative rounded-lg overflow-hidden">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm md:text-base font-medium text-center text-gray-800">
                        {item.text}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          {/* Second scroll (duplicate) */}
          <div
            className="flex items-center justify-center animate-marquee2 space-x-4"
            aria-hidden="true"
          >
            {data.map((item, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 w-36 sm:w-40 md:w-48 lg:w-56 mx-2"
              >
                <Card className="rounded-2xl border-4 border-black-900 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4 sm:p-6 space-y-2 sm:space-y-4">
                    <div className="w-full aspect-video relative rounded-lg overflow-hidden">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm md:text-base font-medium text-center text-gray-800">
                        {item.text}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWillYouLearn;
