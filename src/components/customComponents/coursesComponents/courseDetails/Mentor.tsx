import React, { useEffect, useState, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { Youtube, Instagram, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MentorFeatured from './MentorFeatured';

const MentorProfile = () => { 
  const mentorImages = [
    "/assets/landingPage/vimalsir.png",
    "/assets/landingPage/vimalsir.png",
    "/assets/landingPage/vimalsir.png"
  ];

  // Social stats data
  const socialStats = [
    { icon: <Youtube className="w-6 h-6 text-red-600" />, targetCount: 3710000, label: "subscribers" },
    { icon: <Instagram className="w-6 h-6 text-pink-600" />, targetCount: 450000, label: "followers" },
    { icon: <Linkedin className="w-6 h-6 text-blue-600" />, targetCount: 58000, label: "followers" }
  ];

  // State to track if the component is in view
  const [isVisible, setIsVisible] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  // Use Intersection Observer to set isVisible to true when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      { threshold: 0.4 } // 30% of the component in view to trigger
    );

    if (profileRef.current) observer.observe(profileRef.current);
    return () => observer.disconnect();
  }, []);

  // Counter function to animate each number
  const useCounter = (target: number, duration: number, start: boolean) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!start) return; // Only start if the component is visible
      let startValue = 0;
      const increment = Math.ceil(target / (duration / 16)); // Calculate increment

      const counter = setInterval(() => {
        startValue += increment;
        if (startValue >= target) {
          setCount(target); // Snap to target count
          clearInterval(counter);
        } else {
          setCount(startValue);
        }
      }, 16); // Update every 16ms for 60fps

      return () => clearInterval(counter);
    }, [target, duration, start]);

    return count;
  };

  return (
    <div ref={profileRef} className="max-w-6xl mx-auto p-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column - Image Carousel and Mentor Details */}
        <div className="space-y-6">
          <div className="rounded-xl overflow-hidden border-2 border-gray-100 shadow-lg bg-white p-1">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
              pagination={{ clickable: true }}
              className="w-full aspect-[3/4] rounded-lg overflow-hidden"
            >
              {mentorImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`Mentor Image ${index + 1}`} className="w-full h-full object-cover" />
                </SwiperSlide>
              ))}
              <button className="swiper-button-prev absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition-all duration-200">
                <ChevronLeft className="w-5 h-6 text-gray-800" />
              </button>
              <button className="swiper-button-next absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition-all duration-200">
                <ChevronRight className="w-5 h-12 text-gray-800" />
              </button>
            </Swiper>
          </div>

          {/* Mentor Details Card */}
          <div className="bg-blue-50 rounded-xl p-6 shadow-sm border border-blue-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-blue-800 text-sm font-medium bg-blue-100/50 px-3 py-1 rounded-full">
                Technologist and Technology Motivational
              </span>
            </div>      
            <div className="space-y-1 pl-5">
              <h2 className="text-xl font-bold text-gray-900">Vimal Daga</h2>
              <p className="text-gray-600 font-medium">Founder of LinuxWorld</p>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Meet your <span className="text-[#ff0000]">Mentor</span> </h1>
            
            <div className="space-y-4 text-black-800">
              <p className="leading-relaxed font-bold">
                Vimal sir  is a public speaker and YouTuber who co-founded Think School, with Paras Kothari, an education startup that generated 4+ Billion video impressions in 24 months.
              </p>
              <p className="leading-relaxed">
                Vimal sir  has helped 27000+ students improve their communication to become effective public speakers, great salespeople, YouTubers and successful business people.
              </p>
              <p className="leading-relaxed">
                Vimal sir 's dedication to education has earned him the title of "Insightful Education Creator of the Year 2023" at the Global Startup Summit 2023. His vision is to make the Indian youth more employable by helping them learn practical and fundamental skills in life.
              </p>
            </div>
          </div>

          {/* Social Stats with Counter */}
          <div className="grid grid-cols-3 gap-4">
            {socialStats.map((stat, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-4 text-center border border-blue-100 shadow-sm hover:shadow-md transition-all duration-200">
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <div className="font-bold text-xl text-gray-900">
                  {useCounter(stat.targetCount, 2000, isVisible).toLocaleString()}+
                </div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Enhanced Featured Section */}
          <div className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white/50 backdrop-blur-sm">
     
              <h3 className='mb-2'>Featured In</h3>
              <img 
                src="/assets/featuredin.png" 
                alt="Money Control" 
                className="h-full object-contain w-full opacity-90 hover:opacity-100 transition-opacity duration-200"
              /> 
              {/* <MentorFeatured></MentorFeatured> */}
      
          </div>
          {/* company serverd by mentor */}

          <div className="border border-gray-200 rounded-xl p-6 pt-2 shadow-sm bg-white/50 backdrop-blur-sm">
            <p className="text-gray-800 font-medium mb-6 font-bold">Companies benefited with his <span className='text-[#ff0000]'>
            trainings & consultancy
              </span></p>
            <div className="grid grid-cols-1 gap-8">
              
              {/* <img 
                src="/assets/featuredin.png" 
                alt="Money Control" 
                className="h-full object-contain w-full opacity-90 hover:opacity-100 transition-opacity duration-200"
              />  */}
              <MentorFeatured></MentorFeatured>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;
