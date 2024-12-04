import React, { useEffect, useRef, useState } from "react";
import { Card,CardHeader,CardTitle,CardContent } from "@/components/ui/card";
import { Check, Clock, Video } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { motion } from 'framer-motion'
import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";
import DisplayCourseContent from "./courseDetails/subComponents/DisplayCourseContent";


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




  return (
    <div className="w-full overflow-x-hidden">
        <div className="flex col-2"></div>
    </div>
  );
}