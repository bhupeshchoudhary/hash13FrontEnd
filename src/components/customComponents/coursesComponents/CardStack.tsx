import React, { useEffect, useRef, useState } from 'react';
import { Card } from "@/components/ui/card";
import { Check, Clock, Video } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

interface Module {
  number: string;
  title: string;
  videos: number;
  duration: string;
  features: string[];
  colors: {
    background: string;
    text: string;
    badge: string;
    badgeText: string;
  };
}

export default function CardStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);
  const lastScrollY = useRef(0);
  
  const modules: Module[] = [
    {
      number: "Module 1",
      title: "Build Your Foundation",
      videos: 7,
      duration: "32 mins",
      features: [
        "Clearing your fundamentals and unlearning BS",
        "Overcome communication challenges and speak fluently",
        "Common mistakes & roadblocks and how to avoid them",
      ],
      colors: {
        background: "bg-gradient-to-br from-blue-50 to-blue-100",
        text: "text-blue-900",
        badge: "bg-blue-100",
        badgeText: "text-blue-900",
      }
    },
    {
      number: "Module 2",
      title: "Learn the science behind communication",
      videos: 8,
      duration: "1.5 hour",
      features: [
        "Discover the science of storytelling to make your message memorable",
        "Breakdown Hitler's powerful speech tactics of that time using science of Story Part 1",
        "Learn from case studies of big brands like Coca-Cola and Cadbury",
      ],
      colors: {
        background: "bg-gradient-to-br from-purple-50 to-purple-100",
        text: "text-purple-900",
        badge: "bg-purple-100",
        badgeText: "text-purple-900",
      }
    },
    {
      number: "Module 3",
      title: "Craft and Structure Your Message",
      videos: 11,
      duration: "2 hour",
      features: [
        "Learn to structure your message and keep your audience engaged throughout",
        "The Spider Blue and Clear 3 keys structure that Sandeep uses to write his speeches",
        "Discover tips on how to craft your talk from great speakers like Simon Sinek",
      ],
      colors: {
        background: "bg-gradient-to-br from-emerald-50 to-emerald-100",
        text: "text-emerald-900",
        badge: "bg-emerald-100",
        badgeText: "text-emerald-900",
      }
    },
    {
      number: "Module 4",
      title: "Speak fearlessly and nail your body language",
      videos: 9,
      duration: "3.5 hour",
      features: [
        "Understand body language's role in communication",
        "Use eye contact, posture, and gestures to convey confidence and authority",
        "Overcome stage fear and build confidence with practical exercises",
      ],
      colors: {
        background: "bg-gradient-to-br from-amber-50 to-amber-100",
        text: "text-amber-900",
        badge: "bg-amber-100",
        badgeText: "text-amber-900",
      }
    },
    {
      number: "Module 5",
      title: "Observe and Learn from famous speakers",
      videos: 12,
      duration: "4.5 hour",
      features: [
        "Watch and implement tips shared by top speakers",
        "Learn from inspiring speakers like - Naval Ravikant and Gandhi",
      ],
      colors: {
        background: "bg-gradient-to-br from-rose-50 to-rose-100",
        text: "text-rose-900",
        badge: "bg-rose-100",
        badgeText: "text-rose-900",
      }
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!swiperRef.current?.swiper) return;

      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY.current;
      
      if (Math.abs(scrollDifference) > 50) {
        if (scrollDifference > 0 && activeIndex < modules.length - 1) {
          swiperRef.current.swiper.slideNext();
        } else if (scrollDifference < 0 && activeIndex > 0) {
          swiperRef.current.swiper.slidePrev();
        }
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex, modules.length]);

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start max-w-7xl mx-auto px-4 overflow-hidden">
      <div className="space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          What will you{" "}
          <span className="relative">
            <span className="text-[#ff4d00]">learn</span>
            <svg
              className="absolute -top-1 -right-2 w-4 h-4 text-[#ff4d00]/20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <circle cx="12" cy="12" r="12" />
            </svg>
          </span>
          ?
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Discover a comprehensive curriculum designed to empower you with the
          skills and knowledge needed to excel in communication. Throughout the
          Communication Masterclass, you'll explore the following modules in
          depth:
        </p>
      </div>

      <div className="relative h-[600px]">
        <Swiper
          ref={swiperRef}
          effect="cards"
          grabCursor={false}
          allowTouchMove={false}
          modules={[EffectCards]}
          className="h-full w-full"
          cardsEffect={{
            slideShadows: false,
            perSlideOffset: 6,
            perSlideRotate: 2,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {modules.map((module, index) => (
            <SwiperSlide key={index}>
              <Card
                className={`h-full p-6 transition-all duration-300 ${
                  module.colors.background
                } ${index === activeIndex ? "shadow-lg" : "opacity-90"}`}
              >
                <div className="space-y-6">
                  <div>
                    <div className={`text-sm font-medium ${module.colors.text}`}>{module.number}</div>
                    <h2 className={`text-2xl font-bold ${module.colors.text} mt-1`}>
                      {module.title}
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <div className={`flex items-center gap-2 text-sm font-medium px-4 py-2 
                      ${module.colors.badge} ${module.colors.badgeText} rounded-full`}>
                      <Video className="w-4 h-4" />
                      {module.videos} videos
                    </div>
                    <div className={`flex items-center gap-2 text-sm font-medium px-4 py-2 
                      ${module.colors.badge} ${module.colors.badgeText} rounded-full`}>
                      <Clock className="w-4 h-4" />
                      Time: {module.duration}
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {module.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex gap-3">
                        <Check className={`w-5 h-5 ${module.colors.text}`} />
                        <span className={module.colors.text}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}