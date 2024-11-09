import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from '../../../public/assets/landingPage/logohash13.svg' // Imported logo







const ProgramCard = ({ title, description, mentor, duration, status, type }:any) => (
  <div className="p-4 hover:bg-gray-50 rounded-lg transition-colors">
    <div className="flex gap-4">
      <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
        <img src="/api/placeholder/64/64" alt="mentor" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-lg">{title}</h3>
        <p className="text-sm text-gray-600">{mentor}</p>
        <div className="flex flex-wrap gap-4 mt-2">
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-600">⏱️ {duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-600">📅 {status}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-600">🎥 {type}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SideCategories = () => (
  <div className="w-48 bg-gray-50 p-4 space-y-2 md:block">
    <div className="bg-[#ff0000] text-white rounded-md p-2">
      <span>Marketing</span>
    </div>
         

    
    {['Business', 'Data', 'Design', 'Tech', 'Product', 'Growth', 'Gen AI'].map((category) => (
      <div key={category} className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
        <span>{category}</span>
      </div>
    ))}
  </div>
);

const DropdownContent = () => (
  <div className="flex flex-col md:flex-row">
    <SideCategories />
    <div className="flex-1 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-medium mb-2">Mentorship Programs</h2>
          <p className="text-gray-600 mb-6">Get personalized guidance from industry experts</p>
          
          <div className="space-y-4">
            <ProgramCard
              title="SEO"
              mentor="by Kaushal, Founder & MD, Infidigit"
              duration="8 Weeks"
              status="Coming Soon"
              type="Live"
            />
            <ProgramCard
              title="Digital Marketing"
              mentor="Multiple mentors from Dunzo, Amazon and 1 more"
              duration="6 Months"
              status="Coming Soon"
              type="Live And Recorded"
            />
            <ProgramCard
              title="Performance Marketing"
              mentor="Multiple mentors from Google and Amazon Mini"
              duration="10 Weeks"
              status="Coming Soon"
              type="Live"
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-medium mb-2">Self-Paced Programs</h2>
          <p className="text-gray-600 mb-6">Programs to give you a perfect overview at your own speed</p>
          
          <div className="space-y-4">
            <ProgramCard
              title="SEO"
              mentor="by Kaushal Founder & MD, Infidigit"
              duration="Self-paced"
              status="Available Now"
              type="Recorded"
            />
            <ProgramCard
              title="Digital Marketing Kickstarter"
              mentor="Multiple mentors from OTO, Google and 2 more"
              duration="Self-paced"
              status="Available Now"
              type="Recorded"
            />
            <ProgramCard
              title="B2B Marketing"
              mentor="by Aadil Bandukwala Vice President: Demand Generation"
              duration="Self-paced"
              status="Available Now"
              type="Recorded"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function Navbar() {
  return (
    <header className="flex w-full mx-auto items-center max-w-7xl px-6 lg:px-14 overflow-visible h-16 sticky top-0 z-50 bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between h-full">
        <Link href="/">
          <div className="h-full">
            <Image
              src={logo}
              alt="#13 logo"
              width={50}
              height={50}
              className="object-contain h-full"
              priority
            />
          </div>
        </Link>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:w-[540px]">
              <div className="mt-6 space-y-4">
                <DropdownContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-end items-center space-x-6 h-full">
          <nav className="flex items-center space-x-6 h-full">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-sm hover:text-[#ff0000]">
                <span>For working professionals</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="w-screen max-w-6xl mt-4 p-0" 
                align="center"
                style={{
                  position: 'fixed',
                  left: '50%',
                  transform: 'translateX(-48%)',
                  maxHeight: 'calc(100vh - 100px)',
                  overflowY: 'auto'
                }}
              >
                <DropdownContent />
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 text-sm hover:text-[#ff0000]">
                <span>For college students</span>
                <ChevronDown className="w-4 h-4" />

                </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="w-screen max-w-6xl mt-4 p-0" 
                align="center"
                style={{
                  position: 'fixed',
                  left: '50%',
                  transform: 'translateX(-64%)',
                  maxHeight: 'calc(100vh - 100px)',
                  overflowY: 'auto'
                }}
              >
                <DropdownContent />
              </DropdownMenuContent>
            </DropdownMenu>
              
            <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 text-sm hover:text-[#ff0000]">
                <span>More</span>
                <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="w-screen max-w-6xl mt-4 p-0" 
                align="center"
                style={{
                  position: 'fixed',
                  left: '50%',
                  transform: 'translateX(-75%)',
                  maxHeight: 'calc(100vh - 100px)',
                  overflowY: 'auto'
                }}
              >
                <DropdownContent />
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="flex items-center space-x-4 h-full">
            <Button variant="outline" className="hidden md:inline-flex">
              Free Courses
            </Button>
            <Button className="bg-[#ff0000] text-white hover:bg-red-600">Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  );
}




























