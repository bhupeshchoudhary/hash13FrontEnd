import React, { useEffect, useRef, useState } from "react";
import { Card,CardHeader,CardTitle,CardContent } from "@/components/ui/card";
import { Check, Clock, Video } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { motion } from 'framer-motion'
import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";


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

interface Learner {
  name: string;
  company: string;
}

export default function CardStack() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isInView, setIsInView] = useState(false);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const swiperRef = useRef<any>(null);
  const componentRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef<number>(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

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
        
  ];



  const learners: Learner[] = [
    { name: "ShareChat Learner", company: "ShareChat" },
    { name: "Google Learner", company: "Google" },
    { name: "Apna Learner", company: "Apna" },
    { name: "Capgemini Learner", company: "Capgemini" },
  ];

  const benefits: string[] = [
    "Stay ahead in your field by mastering industry relevant skills through our online sessions",
    "Dive into real challenges from today's businesses, gaining hands-on experience",
    "Tap into a wealth of career opportunities through our established network",
  ]

  const defaultLearnerImg = "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736380800&v=beta&t=tvAlORqrjV22gAuI7g_OrtINGRbGnNQXkCUegqFyPow"
  const LinuxWorldUrl = "https://media.licdn.com/dms/image/v2/C4E0BAQER-Sage-ex_A/company-logo_200_200/company-logo_200_200/0/1639050566015/linuxworld_informatics_pvt_ltd_logo?e=1739404800&v=beta&t=7LaZjwQW277ZW-ooZe19e_aWSS1uQzZULZzYC7t1JHY"; // Example URL, replace with actual URL



  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
          setIsScrollLocked(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5, // Reduced threshold for earlier triggering
        rootMargin: "0px 0px -100px 0px" // Trigger before element is fully in view
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleWindowScroll = (event: WheelEvent) => {
      if (!isInView || !swiperRef.current) return;

      const now = Date.now();
      if (now - lastScrollTime.current < 150) return; // Increased debounce time
      lastScrollTime.current = now;

      const deltaY = event.deltaY;
      const isAtStart = activeIndex === 0;
      const isAtEnd = activeIndex === modules.length - 1;

      if (deltaY > 0) { // Scrolling down
        if (!isAtEnd) {
          event.preventDefault();
          swiperRef.current.slideNext();
        } else if (isScrollLocked) {
          setIsScrollLocked(false);
          if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
          scrollTimeout.current = setTimeout(() => {
            window.scrollBy({
              top: window.innerHeight / 2,
              behavior: 'smooth'
            });
          }, 100);
        }
      } else if (deltaY < 0) { // Scrolling up
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (!isAtStart) {
          event.preventDefault();
          swiperRef.current.slidePrev();
        } else if (scrollTop > 0) {
          setIsScrollLocked(false);
        }
      }
    };

    window.addEventListener('wheel', handleWindowScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWindowScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [activeIndex, isInView, modules.length, isScrollLocked]);

  return (
    <div className="w-full overflow-x-hidden">
      <div 
        ref={componentRef}
        className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start max-w-6xl mx-auto px-4 py-16 relative"
      >
        <div className="space-y-6 lg:sticky lg:top-8 w-full">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            What will you{" "}
            <span className="relative">
              <span className="text-[#ff0000]">learn</span>
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
          <p className="text-sm font-bold leading-relaxed">
            Discover a comprehensive curriculum designed to empower you with the
            skills and knowledge needed to excel in communication.
          </p>
          
          <div className="w-full max-w-md">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              effect="cards"
              direction="vertical"
              grabCursor={false}
              allowTouchMove={false}
              modules={[EffectCards]}
              className="w-full"
              style={{ height: '400px' }}
              cardsEffect={{
                slideShadows: false,
                perSlideOffset: 8,
                perSlideRotate: 2,
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {modules.map((module, index) => (
                <SwiperSlide key={index}>
                  <Card
                    className={`h-full p-6 transition-all duration-300 ${module.colors.background} ${
                      index === activeIndex ? "shadow-lg" : "opacity-90 transform"
                    }`}
                    style={{
                      transform: `translateY(${(index - activeIndex) * 8}px)`,
                    }}
                  >
                    <div className="space-y-6">
                      <div>
                        <div className={`text-sm font-medium ${module.colors.text}`}>
                          {module.number}
                        </div>
                        <h2 className={`text-2xl font-bold ${module.colors.text} mt-1`}>
                          {module.title}
                        </h2>
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <div
                          className={`flex items-center gap-2 text-sm font-medium px-4 py-2 ${module.colors.badge} ${module.colors.badgeText} rounded-full`}
                        >
                          <Video className="w-4 h-4" />
                          {module.videos} videos
                        </div>
                        <div
                          className={`flex items-center gap-2 text-sm font-medium px-4 py-2 ${module.colors.badge} ${module.colors.badgeText} rounded-full`}
                        >
                          <Clock className="w-4 h-4" />
                          Time: {module.duration}
                        </div>
                      </div>

                      <ul className="space-y-4">
                        {module.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex gap-3">
                            <Check className={`w-5 h-5 flex-shrink-0 ${module.colors.text}`} />
                            <span className={`${module.colors.text}`}>{feature}</span>
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

        <div className="h-[600px] w-full" >
        <Card className="h-auto"> {/* Set height to auto to allow expansion */}
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold">5.4M+ Learners</CardTitle>
            <p className="text-muted-foreground">have reaped benefits from our programs</p>
          </CardHeader>
          <CardContent className="space-y-6"> {/* Removed overflow-y-auto */}
            <div className="overflow-hidden">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 5,
                    ease: "linear",
                  },
                }}
                className="flex gap-4"
              >
                {[...learners, ...learners].map((learner, index) => (
                  <div key={index} className="flex flex-col items-center flex-shrink-0">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                      <Image
                        src={defaultLearnerImg}
                        alt={learner.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <Image
                      src={`/placeholder.svg?text=${learner.company}`}
                      alt={learner.company}
                      width={64}
                      height={20}
                      className="h-5 w-auto object-contain"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <Image
                src={LinuxWorldUrl}
                alt="Linux World"
                width={200}  // Increased width
                height={60}  // Increased height
                className="h-15 w-auto"
              />
              <div className="flex items-center gap-2">
                <Image
                  src="https://d3kl8zsmmx4oop.cloudfront.net/linkedin_symbol_svg_1_087168127b.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="h-6 w-6 grayscale"
                />
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">LinkedIn</span>
                  <span className="text-sm font-semibold">Top Startup India 2023</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
          </div>
       
      </div>
    </div>
  );
}