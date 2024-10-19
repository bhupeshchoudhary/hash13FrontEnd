"use client"
import React, { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const FloatingShape = ({ children, className, animationDuration = 20 }:any) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setPosition({
      x: Math.random() * 100,
      y: Math.random() * 100
    })
  }, [])

  return (
    <div
      className={`absolute opacity-30 ${className}`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `translate(-50%, -50%)`,
        animation: `float ${animationDuration}s infinite ease-in-out`
      }}
    >
      {children}
    </div>
  )
}

const ReactLogo = ({ className }:any) => (
  <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
)

const CurvedLine = ({ className }:any) => (
  <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

export default function Hero() {
  return (
    <div className="bg-white overflow-hidden">
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translateY(-20px) rotate(10deg); }
        }
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
      
      {/* Floating background elements */}
      <div className="absolute inset-0 z-0">
        <FloatingShape className="text-orange-200">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
            <circle cx="20" cy="20" r="20" />
          </svg>
        </FloatingShape>
        <FloatingShape className="text-orange-200">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
            <path d="M20 0 L40 30 L0 30 Z" />
          </svg>
        </FloatingShape>
        <FloatingShape className="text-orange-200">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
            <rect width="40" height="40" />
          </svg>
        </FloatingShape>
        <FloatingShape className="text-blue-300" animationDuration={25}>
          <ReactLogo className="w-16 h-16" />
        </FloatingShape>
        <FloatingShape className="text-green-200" animationDuration={30}>
          <CurvedLine className="w-24 h-24" />
        </FloatingShape>
        <FloatingShape className="text-red-200" animationDuration={35}>
          <CurvedLine className="w-32 h-32 transform rotate-90" />
        </FloatingShape>
      </div>

      <header className="container mx-auto px-4 py-4 flex justify-between items-center relative z-10">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-2xl font-bold">
            #<span className="text-red-600">13</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/masterclasses" className="text-gray-600 hover:text-gray-900">
              Masterclasses
            </Link>
            <Link href="/courses" className="text-gray-600 hover:text-gray-900">
              Courses
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">
              Blog
            </Link>
            <Link href="/contacts" className="text-gray-600 hover:text-gray-900">
              Contacts
            </Link>
          </nav>
        </div>
        <Button variant="destructive">Login/Register</Button>
      </header>
      <main className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Upskill to <span className="text-red-600 underline">future-proof</span> your career with our industry-relevant technology training programs!
          </h1>
          <p className="text-gray-600 mb-6">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
          </p>
          <div className="flex">
            <Input type="email" placeholder="Enter your email" className="mr-2" />
            <Button variant="destructive">Get Started Now</Button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="grid grid-cols-4 gap-2">
            {[...Array(16)].map((_, i) => (
              <Image
                key={i}
                src="/assets/videocall.jpg"
                alt="Video call participant"
                width={100}
                height={100}
                className="rounded-lg"
              />
            ))}
          </div>
          <Image
            src="/placeholder.svg?height=400&width=300"
            alt="Featured instructor"
            width={300}
            height={400}
            className="absolute bottom-0 right-0 rounded-lg shadow-lg"
          />
        </div>
      </main>
    </div>
  )
}