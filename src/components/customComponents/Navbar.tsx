"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "../../../public/assets/landingPage/logohash13.svg";

/// --- Types ---
type Program = {
  title: string;
  mentor: string;
  duration: string;
  status: string;
  type: "Live" | "Recorded";
};

type CategoryData = {
  mentorshipPrograms: Program[];
  selfPacedPrograms: Program[];
};

type MenuData = {
  categories: Record<string, CategoryData>;
};

/// --- JSON Data ---
const menuData: Record<"workingProfessionals" | "collegeStudents" | "more", MenuData> = {
  workingProfessionals: {
    categories: {
      Business: {
        mentorshipPrograms: [
          { title: "Leadership", mentor: "by John Doe", duration: "6 Weeks", status: "Coming Soon", type: "Live" },
          { title: "Data Science", mentor: "by Jane Smith", duration: "8 Weeks", status: "Available Now", type: "Live" },
        ],
        selfPacedPrograms: [
          { title: "Agile Management", mentor: "by Alice", duration: "Self-paced", status: "Available Now", type: "Recorded" },
        ],
      },
      Tech: {
        mentorshipPrograms: [
          { title: "Cloud Computing", mentor: "by Sarah Connor", duration: "10 Weeks", status: "Coming Soon", type: "Live" },
        ],
        selfPacedPrograms: [
          { title: "Kubernetes Basics", mentor: "by Bruce Banner", duration: "Self-paced", status: "Available Now", type: "Recorded" },
        ],
      },
      Growth: {
        mentorshipPrograms: [
          { title: "Personal Branding", mentor: "by Tony Stark", duration: "4 Weeks", status: "Coming Soon", type: "Live" },
        ],
        selfPacedPrograms: [
          { title: "Goal Setting", mentor: "by Natasha Romanoff", duration: "Self-paced", status: "Available Now", type: "Recorded" },
        ],
      },
    },
  },
  collegeStudents: {
    categories: {
      Design: {
        mentorshipPrograms: [
          { title: "Graphic Design", mentor: "by Emily Clark", duration: "4 Weeks", status: "Coming Soon", type: "Live" },
        ],
        selfPacedPrograms: [
          { title: "Illustrator Basics", mentor: "by Steve Rogers", duration: "Self-paced", status: "Available Now", type: "Recorded" },
        ],
      },
      Marketing: {
        mentorshipPrograms: [
          { title: "Social Media Marketing", mentor: "by Alex Brown", duration: "5 Weeks", status: "Coming Soon", type: "Live" },
        ],
        selfPacedPrograms: [
          { title: "SEO Strategies", mentor: "by Peter Parker", duration: "Self-paced", status: "Available Now", type: "Recorded" },
        ],
      },
      Product: {
        mentorshipPrograms: [
          { title: "Product Management", mentor: "by Clint Barton", duration: "6 Weeks", status: "Coming Soon", type: "Live" },
        ],
        selfPacedPrograms: [
          { title: "Roadmap Building", mentor: "by Wanda Maximoff", duration: "Self-paced", status: "Available Now", type: "Recorded" },
        ],
      },
    },
  },
  more: {
    categories: {
      AI: {
        mentorshipPrograms: [
          { title: "AI for Beginners", mentor: "by Chris Green", duration: "12 Weeks", status: "Coming Soon", type: "Live" },
        ],
        selfPacedPrograms: [
          { title: "Machine Learning Basics", mentor: "by Bruce Wayne", duration: "Self-paced", status: "Available Now", type: "Recorded" },
        ],
      },
      Robotics: {
        mentorshipPrograms: [
          { title: "Robotics Engineering", mentor: "by Victor Stone", duration: "14 Weeks", status: "Coming Soon", type: "Live" },
        ],
        selfPacedPrograms: [
          { title: "Arduino Programming", mentor: "by Diana Prince", duration: "Self-paced", status: "Available Now", type: "Recorded" },
        ],
      },
      Blockchain: {
        mentorshipPrograms: [
          { title: "Blockchain Fundamentals", mentor: "by Sarah White", duration: "10 Weeks", status: "Coming Soon", type: "Live" },
        ],
        selfPacedPrograms: [
          { title: "Ethereum Basics", mentor: "by Clark Kent", duration: "Self-paced", status: "Available Now", type: "Recorded" },
        ],
      },
    },
  },
};

/// --- Components ---
const ProgramCard: React.FC<Program> = ({ title, mentor, duration, status, type }) => (
  <div className="p-4 hover:bg-gray-50 rounded-lg transition-colors">
    <div className="flex gap-4">
      <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
        <img src="/api/placeholder/64/64" alt="mentor" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-lg">{title}</h3>
        <p className="text-sm text-gray-600">{mentor}</p>
        <div className="flex flex-wrap gap-4 mt-2">
          <span className="text-sm text-gray-600">⏱️ {duration}</span>
          <span className="text-sm text-gray-600">📅 {status}</span>
          <span className="text-sm text-gray-600">🎥 {type}</span>
        </div>
      </div>
    </div>
  </div>
);

const SideCategories: React.FC<{
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}> = ({ categories, selectedCategory, onCategorySelect }) => (
  <div className="w-48 bg-gray-50 p-4 space-y-2 md:block">
    {categories.map((category) => (
      <div
        key={category}
        className={`p-2 rounded-md cursor-pointer ${
          selectedCategory === category ? "bg-gray-100 font-semibold" : "hover:bg-gray-100"
        }`}
        onClick={() => onCategorySelect(category)}
      >
        {category}
      </div>
    ))}
  </div>
);

const DropdownContent: React.FC<{ data: MenuData }> = ({ data }) => {
  const categoryKeys = Object.keys(data.categories);
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryKeys[0]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <SideCategories categories={categoryKeys} selectedCategory={selectedCategory} onCategorySelect={handleCategorySelect} />
      <div className="flex-1 p-6">
        <h2 className="text-xl font-medium mb-4">Content for {selectedCategory}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold">Mentorship Programs</h3>
            {data.categories[selectedCategory].mentorshipPrograms.map((program) => (
              <ProgramCard key={program.title} {...program} />
            ))}
          </div>
          <div>
            <h3 className="text-lg font-semibold">Self-Paced Programs</h3>
            {data.categories[selectedCategory].selfPacedPrograms.map((program) => (
              <ProgramCard key={program.title} {...program} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Navbar() {
  return (
    <header className="flex w-full mx-auto items-center max-w-7xl px-6 lg:px-14 overflow-visible h-16 sticky top-0 z-50 bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between h-full">
        <Link href="/">
          <Image src={logo} alt="#13 logo" width={50} height={50} className="object-contain h-full" priority />
        </Link>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:w-[540px]">
              <DropdownContent data={menuData.workingProfessionals} />
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:flex flex-1 justify-end items-center space-x-6 h-full">
          <nav className="flex items-center space-x-6 h-full">
            {Object.keys(menuData).map((key) => (
              <DropdownMenu key={key}>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-sm hover:text-[#ff0000]">
                  <span>
                    {key === "workingProfessionals"
                      ? "For working professionals"
                      : key === "collegeStudents"
                      ? "For college students"
                      : "More"}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-screen max-w-6xl mt-4 p-0" align="center">
                  <DropdownContent data={menuData[key]} />
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </nav>
          <div className="flex items-center space-x-4 h-full">
            <Button variant="outline">Free Courses</Button>
            <Button className="bg-[#ff0000] text-white hover:bg-red-600">Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
