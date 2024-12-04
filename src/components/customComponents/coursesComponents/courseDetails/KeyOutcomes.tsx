'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import DisplayCourseContent from './subComponents/DisplayCourseContent'

// Define types for learner data
interface Learner {
  name: string
  company: string
}

export default function KeyOutcomes() {
  const [isSticky, setIsSticky] = useState<boolean>(false)

  const rightSectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (rightSectionRef.current) {
        const scrollPosition = window.scrollY
        const rightSectionTop = rightSectionRef.current.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        if (scrollPosition >= rightSectionTop - windowHeight) {
          setIsSticky(true)
        } else {
          setIsSticky(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const learners: Learner[] = [
    { name: "ShareChat Learner", company: "ShareChat" },
    { name: "Google Learner", company: "Google" },
    { name: "Apna Learner", company: "Apna" },
    { name: "Capgemini Learner", company: "Capgemini" },
  ]

  const benefits: string[] = [
    "Stay ahead in your field by mastering industry relevant skills through our online sessions",
    "Dive into real challenges from today's businesses, gaining hands-on experience",
    "Tap into a wealth of career opportunities through our established network",
  ]

  const defaultLearnerImg = "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736380800&v=beta&t=tvAlORqrjV22gAuI7g_OrtINGRbGnNQXkCUegqFyPow"
  const LinuxWorldUrl = "https://media.licdn.com/dms/image/v2/C4E0BAQER-Sage-ex_A/company-logo_200_200/company-logo_200_200/0/1639050566015/linuxworld_informatics_pvt_ltd_logo?e=1739404800&v=beta&t=7LaZjwQW277ZW-ooZe19e_aWSS1uQzZULZzYC7t1JHY";

  return (
    <div className="flex flex-col lg:flex-row mt-4 max-w-6xl mx-auto pt-2">
      {/* Left Section */}
      <div className="lg:w-2/3 p-6">
      <h1 className="sm:text-2xl lg:text-3xl font-bold tracking-tight">
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
          <p className="text-sm font-bold pb-8 leading-relaxed">
            Discover a comprehensive curriculum designed to empower you with the
            skills and knowledge needed to excel in communication.
          </p>

        <DisplayCourseContent />
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 p-6">
        {/* Sticky Card 1 */}
        <div
          ref={rightSectionRef}
          className={`sticky top-4 transition-all duration-300 ${isSticky ? "opacity-100" : "opacity-0"}`}
        >
          <Card className="mb-6 ">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold">5.4M+ Learners</CardTitle>
              <p className="text-muted-foreground">have reaped benefits from our programs</p>
            </CardHeader>
            <CardContent className="space-y-6">
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
            </CardContent>
          </Card>

          <Card className="p-4 ">
            {/* <CardHeader> */}
              <h2 className="text-xl font-semibold"> <span className='text-[#ff0000]'>LinuxWorld </span>Accreditation</h2>
            {/* </CardHeader> */}
            <div className="flex items-center gap-4">
              <Image
                src={LinuxWorldUrl}
                alt="Linux World"
                width={200}
                height={60}
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
          </Card>
        </div>
      </div>
    </div>
  )
}
