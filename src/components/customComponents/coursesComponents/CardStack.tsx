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
import { modules, learners, benefits } from "../../../../data/cardStack/cardStack";
 

export default function CardStack() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isInView, setIsInView] = useState(false);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const swiperRef = useRef<any>(null);
  const componentRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef<number>(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);



 
  const defaultLearnerImg = "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736380800&v=beta&t=tvAlORqrjV22gAuI7g_OrtINGRbGnNQXkCUegqFyPow"
  const LinuxWorldUrl = "https://media.licdn.com/dms/image/v2/C4E0BAQER-Sage-ex_A/company-logo_200_200/company-logo_200_200/0/1639050566015/linuxworld_informatics_pvt_ltd_logo?e=1739404800&v=beta&t=7LaZjwQW277ZW-ooZe19e_aWSS1uQzZULZzYC7t1JHY"; // Example URL, replace with actual URL




  return (
    <div className="w-full overflow-x-hidden">
        <div className="flex col-2"></div>
    </div>
  );
}