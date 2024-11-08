'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

// Define types for learner data
interface Learner {
  name: string
  company: string
}

export default function KeyOutcomes() {
  const [isSticky, setIsSticky] = useState<boolean>(false)
  const [isEndReached, setIsEndReached] = useState<boolean>(false)

  // Define refs for the left and right sections
  const leftSectionRef = useRef<HTMLDivElement | null>(null)
  const rightSectionRef = useRef<HTMLDivElement | null>(null)

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (leftSectionRef.current && rightSectionRef.current) {
        const leftSectionTop = leftSectionRef.current.getBoundingClientRect().top
        const leftSectionHeight = leftSectionRef.current.scrollHeight
        const scrollPosition = window.scrollY
        const windowHeight = window.innerHeight

        // Make right card sticky when left section scrolls into view
        if (scrollPosition >= leftSectionTop) {
          setIsSticky(true)
        }

        // Stop the sticky behavior when the left section reaches its end
        if (scrollPosition + windowHeight >= leftSectionTop + leftSectionHeight) {
          setIsSticky(false)
          setIsEndReached(true)
        } else {
          setIsEndReached(false)
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
  const LinuxWorldUrl = "https://media.licdn.com/dms/image/v2/C4E0BAQER-Sage-ex_A/company-logo_200_200/company-logo_200_200/0/1639050566015/linuxworld_informatics_pvt_ltd_logo?e=1739404800&v=beta&t=7LaZjwQW277ZW-ooZe19e_aWSS1uQzZULZzYC7t1JHY"; // Example URL, replace with actual URL

  return (
    <div className="flex flex-col lg:flex-row min-h-screen mt-4 max-w-6xl mx-auto pt-2">
      {/* Left scrollable section */}
      <div ref={leftSectionRef} className="lg:w-2/3 p-6 overflow-y-auto max-h-[calc(100vh-2rem)]">
        <h2 className="text-3xl font-bold mb-6">Key Outcomes</h2>
        <p className="mb-4 text-muted-foreground">
          The SEO Mentorship Program is an 8-week intensive course designed to teach
          participants the steps to dominate search rankings and boost online visibility through
          proven methods and strategies. This program provides guided learning from industry
          experts, combining self-paced videos and live Q&A sessions to master SEO concepts
          hands-on.
          lorem899
        </p>
        <ul className="space-y-2 mb-6">
          {[
            "Understand SEO fundamentals",
            "Create high-performing, search engine-friendly content",
            "Improve technical aspects of websites",
            "Enhance website link profiles with ethical practices",
            "Drive online sales and engage local customers",
            "Plan and manage international SEO strategies",
            "Leverage Generative AI for SEO",
            "Conduct SEO audits and implement optimizations",
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right sticky section with Card */}
      <div
        ref={rightSectionRef}
        className={`lg:w-1/3 p-6 ${isSticky && !isEndReached ? 'sticky top-4' : ''}`}
      >
        <Card className="h-[600px] overflow-hidden">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold">5.4M+ Learners</CardTitle>
            <p className="text-muted-foreground">have reaped benefits from our programs</p>
          </CardHeader>
          <CardContent className="space-y-6 overflow-y-auto h-[calc(100%-5rem)]">
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
                width={120}
                height={40}
                className="h-10 w-auto"
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
  )
}
