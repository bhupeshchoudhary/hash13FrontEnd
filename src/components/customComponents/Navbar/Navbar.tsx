"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "../../../../public/assets/landingPage/logohash13.svg";
import { menuData } from '../../../../data/Navbar/Navbar';
import { MenuData, MenuKey } from "../../../../types/Navbar";
import { ProgramCard, SideCategories, DropdownOverlay, CenteredDropdown } from "./NavbarComponents";
import './styles/navbar.css';

// Define menu positions - now with more customizable properties
const MENU_POSITIONS = {
  workingProfessionals: {
    translateX: "-50%",
    left: "50%",
    offsetY: "1rem", // Added vertical offset
  },
  collegeStudents: {
    translateX: "-35%",
    left: "50%",
    offsetY: "1rem",
  },
  // Keeping 'more' in the configuration but not using it in the navigation
  more: {
    translateX: "-40%",
    left: "50%",
    offsetY: "1rem",
  }
} as const;

// Added type for visible menu keys
type VisibleMenuKey = 'workingProfessionals' | 'collegeStudents';

// Array of visible menu items
const VISIBLE_MENU_ITEMS: VisibleMenuKey[] = ['workingProfessionals', 'collegeStudents'];

const DropdownContent: React.FC<{ data: MenuData }> = ({ data }) => {
  const categoryKeys = Object.keys(data.categories);
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryKeys[0]);

  return (
    <div className="flex flex-col md:flex-row">
      <SideCategories 
        categories={categoryKeys} 
        selectedCategory={selectedCategory} 
        onCategorySelect={setSelectedCategory} 
      />
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // Updated getDropdownPosition to include custom positioning
  const getDropdownPosition = (key: string) => {
    const position = MENU_POSITIONS[key as MenuKey] || MENU_POSITIONS.workingProfessionals;
    return {
      left: position.left,
      transform: `translateX(${position.translateX})`,
      top: position.offsetY,
    };
  };

  return (
    <header className="flex w-full mx-auto items-center max-w-7xl px-6 lg:px-14 overflow-visible h-16 sticky top-0 z-50 bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between h-full relative">
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
            <SheetContent side="left" className="w-full sm:w-[540px] mx-auto">
              <DropdownContent data={menuData.workingProfessionals} />
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden md:flex flex-1 justify-end items-center space-x-6 h-full static">
          <nav className="flex items-center space-x-6 h-full static">
            {VISIBLE_MENU_ITEMS.map((key) => (
              <div key={key} className="relative">
                <DropdownMenu
                  open={activeDropdown === key}
                  onOpenChange={(open) => {
                    setActiveDropdown(open ? key : null);
                  }}
                >
                  <DropdownOverlay isOpen={activeDropdown === key} />
                  <DropdownMenuTrigger className="flex items-center mx-auto space-x-1 text-sm hover:text-[#ff0000] relative z-50">
                    <span>
                      {key === "workingProfessionals"
                        ? "For working professionals"
                        : "For college students"}
                    </span>
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <div 
                    className="absolute w-screen"
                    style={getDropdownPosition(key)}
                  >
                    <DropdownMenuContent 
                      className={`w-full max-w-6xl mx-auto dropdown-menu-content dropdown-${key}`}
                      style={{
                        position: 'relative',
                      }}
                    >
                      <div className="bg-white rounded-lg shadow-lg w-full">
                        <DropdownContent data={menuData[key]} />
                      </div>
                    </DropdownMenuContent>
                  </div>
                </DropdownMenu>
              </div>
            ))}
          </nav>
          <div className="flex items-center space-x-4 h-full">
            <a href="#contactus">
              <Button className="bg-[#ff0000] text-white hover:bg-red-600">Query</Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}