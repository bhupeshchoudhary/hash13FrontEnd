import React from 'react';
import { Video, Globe } from "lucide-react";
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AboutScroll from './ui/AboutScroll';
import yerrowArrow from "../../../../public/assets/landingPage/floatingCurveArrow.svg"
// import Line from "../../../../public/assets/line.svg"
import curveLine from "../../../../public/assets/CurlLine.svg"
const About = () => {
  return (
    <div className=" lg:px-14 bg-white p-8 pb-0 relative overflow-hidden">
      {/* Decorative Elements - Refined positions */}
      <div className="absolute top-8 left-8 w-2 h-2 bg-[#ff0000]/60 rounded-full" />
      <div className="absolute top-16 right-16 w-12 h-12 bg-pink-100/60 rounded-full" />
      <div className="absolute bottom-32 left-16 w-3 h-3 bg-emerald-200/60 rounded-full" />
      <div className="absolute right-24 top-32 w-2 h-2 bg-purple-300/60 rounded-full" />

      {/* Dots Pattern - Adjusted position to match Figma */}
      <div className="absolute top-6 right-1/4 grid grid-cols-8 gap-1.5">
        {Array(32).fill(null).map((_, i) => (
          <div key={i} className="w-0.5 h-0.5 bg-sky-200/70 rounded-full" />
        ))}
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center my-12">
          {/* Left Side - Images */}
          <div className="relative">
            {/* Top Row - Adjusted sizing and spacing */}
            <div className="flex gap-6 mb-6">
              {/* Making India Future Ready - Adjusted size and position */}
              <div className="w-1/3 relative flex items-center justify-center">
                <div className="w-20 h-20 relative"> {/* Reduced size */}
                  <Image
                    className="animate-spin-slow"
                    src="/assets/landingPage/MakingIndiafutureReady.svg"
                    layout="fill"
                    objectFit="contain"
                    alt="Making India future ready"
                  />
                </div>
                {/* Yellow Arrow - Refined position */}
                <div className="absolute -right-3 top-3/4 transform -translate-y-1/2">
                  {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4 L20 12 L12 20" stroke="#FCD34D" strokeWidth="2" fill="none" />
                  </svg> */}
                  <Image src={yerrowArrow} alt="yellow Arrow " width={50} height={50}></Image>
                  {/* {yerrowArrow} */}
                </div>
              </div>
              

              {/* Top Right Card */}
              <div className="w-2/3">
      <Card 
        className="bg-gray-100/80 aspect-video flex items-center justify-center relative overflow-hidden"
        
      >
        <div className="w-full h-full relative">
          <Image
            src="/assets/file_2025-03-07_13.08.30.png"
             width={400}
             height={200}
            
            objectFit="contain"
            alt="Card image"
            
          />
        </div>
      </Card>
    </div>
            </div>

            {/* Bottom Row - Refined spacing */}
            <div className="flex gap-6">
              {/* Bottom Left Card */}
              <div className="w-2/3">
                <Card className="bg-gray-100/80 aspect-video flex items-center justify-center relative overflow-hidden">
                <div className="w-full h-full relative">
                  <Image
                    src="/assets/file_2025-03-07_12.54.08.png"
                     width={400}
                     height={200}
                    objectFit="contain"
                    alt="Card image"
                  />
                </div>
                </Card>
              </div>

              {/* Trained Teachers Card - Refined to match Figma */}
              <div className="w-1/3 ">
                <Card className="bg-white shadow-lg border-0 h-full rounded-lg relative overflow-hidden">
                  <CardHeader className="p-1">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-gradient-to-br from-emerald-400 to-sky-400 p-1">
                        <Globe className="h-3.5 w-3.5 text-white" />
                      </div>
                      <CardTitle className="text-xs font-medium">Trained Teachers</CardTitle>
                      
                    </div>
                   
              
                  </CardHeader>
                  <CardContent className="p-3 pt-0">
                    
                   
                  
                  </CardContent>
          <div className="w-full h-full relative">
          <Image
            src="/assets/file_2025-03-07_13.01.28.png"
             width={400}
             height={200}
            
            objectFit="contain"
            alt="Card image"
            
          />
        </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-teal-500 text-sm font-semibold mb-2">ABOUT #13</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
               Real-World Learning,<br />
              
                <span className="text-[#ff0000] relative">
                Always 
                  <div className="absolute -bottom-0.5 left-0 w-full h-0.5 " >
                     <Image src={curveLine} alt="curve line" className='w-full mb-4' width={100} height={300}></Image>
                      {/* <curveLine></curveLine>  */}
                    </div>
                  </span> 
                  &nbsp;Up-to-Date
              </h1>
              <p className="text-gray-500 text-sm">
                Learn while working or studying from any place, across any device.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className='bg-white shadow-lg p-1 rounded-full'>
                  <div className="p-2   rounded-sm">
                    <Video className="w-4 h-4 text-[#ff0000]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Learn Anytime, Stay Industry-Ready

                  </h3>  
                  <p className="text-xs text-gray-500">
                  Master the latest tech skills at your own pace with up-to-date, real-world use case-based learning.

                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">

                <div className='bg-white shadow-lg p-1 rounded-full'>
                  <div className="p-2   rounded-sm"><Globe className="w-4 h-4    text-emerald-500" />
                  </div>
                </div>



                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Flexible Learning, Real-World Impact </h3>
                  <p className="text-xs text-gray-500">
                  Upgrade your skills with industry-relevant, hands-on content—learn anywhere, anytime, with practical applications.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AboutScroll></AboutScroll>
      </div>
    </div>
  );
};

export default About;