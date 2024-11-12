"use client"
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
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
        <div className="mx-auto justify-center text-center my-20">
            <h2 className="text-3xl font-bold mb-8">
                Who is this <span className="text-[#ff0000]">program </span>for?
            </h2>

            <div className="relative overflow-hidden bg-white">
                <div className="w-full inline-flex flex-nowrap p-4">
                    {/* First scroll */}
                    <div className="flex items-center justify-center animate-marquee">
                        {data.map((data, index) => (
                            <div
                                key={index}
                                className="mx-2 w-32 flex-shrink-0"
                            >
                                <Card className="max-w-[280px] rounded-2xl border-4 border-black-900 shadow-black shadow-md hover:shadow-lg transition-all duration-300">
                                    <CardContent className="p-6 space-y-4">
                                        <div className="w-full aspect-video relative rounded-lg overflow-hidden">
                                            <img
                                                src={data.src}
                                                alt={data.alt}
                                                className="w-full h-full object-fit"
                                            />
                                        </div>
                                        <div className="pb-2">
                                            <h3 className="text-sm font-medium text-center text-gray-800">
                                                {data.text}
                                            </h3>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                    {/* Second scroll (duplicate) */}
                    <div className="flex items-center justify-center animate-marquee2"
                        aria-hidden="true">
                        {data.map((data, index) => (
                            <div
                                key={`duplicate-${index}`}
                                className="mx-2 w-32 flex-shrink-0"
                            >
<Card className="max-w-[280px] rounded-2xl border-4 border-black-900 shadow-black shadow-md hover:shadow-lg transition-all duration-300">
                                    <CardContent className="p-6 space-y-4">
                                        <div className="w-full aspect-video relative rounded-lg overflow-hidden">
                                            <img
                                                src={data.src}
                                                alt={data.alt}
                                                className="w-full h-full object-fit"
                                            />
                                        </div>
                                        <div className="pb-2">
                                            <h3 className="text-sm font-medium text-center text-gray-800">
                                                {data.text}
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