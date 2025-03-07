"use client"
import React, { useState, CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "../../../../public/assets/landingPage/logohash13.svg";
import { menuData } from '../../../../data/Navbar/Navbar';
import { MenuData } from "../../../../types/Navbar";
import { ProgramCard, SideCategories, DropdownOverlay } from "./NavbarComponents";
import './styles/navbar.css';

const VISIBLE_MENU_ITEMS = ['workingProfessionals', 'collegeStudents'] as const;

interface DropdownPosition {
  transform: string;
  width: string;
}

const DROPDOWN_POSITIONS: Record<'workingProfessionals' | 'collegeStudents', DropdownPosition> = {
  workingProfessionals: {
    transform: 'translateX(-67%)',
    width: '1200px',
  },
  collegeStudents: {
    transform: 'translateX(-82%)',
    width: '1200px',
  },
};

const DropdownContent: React.FC<{ data: MenuData }> = ({ data }) => {
  const categoryKeys = Object.keys(data.categories);
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryKeys[0]);

  return (
    <div className="flex flex-col md:flex-row" style={{ minWidth: '750px' }}>
      <SideCategories 
        categories={categoryKeys} 
        selectedCategory={selectedCategory} 
        onCategorySelect={setSelectedCategory} 
      />
      <div className="flex-1 p-6">
        {/* <h2 className="text-xl font-medium mb-4">Content for {selectedCategory}</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            {/* <h3 className="text-lg font-semibold"></h3> */}
            {data.categories[selectedCategory].mentorshipPrograms.map((program) => (
              <ProgramCard key={program.title} {...program} />
            ))}
          </div>
          <div>
            {/* <h3 className="text-lg font-semibold"></h3> */}
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

  const getDropdownStyles = (key: string): React.CSSProperties => ({
    position: 'absolute',
    left: '0',
    top: '100%',
    maxHeight: '80vh',
    overflowY: 'auto',
    marginTop: '1.2rem',
    transform: DROPDOWN_POSITIONS[key as keyof typeof DROPDOWN_POSITIONS].transform,
    width: DROPDOWN_POSITIONS[key as keyof typeof DROPDOWN_POSITIONS].width
  });

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

        <div className="hidden md:flex flex-1 justify-end items-center space-x-6 h-full">
          <nav className="flex items-center space-x-6 h-full">
            {VISIBLE_MENU_ITEMS.map((key) => (
              <div key={key} className="relative dropdown-container">
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
                  <DropdownMenuContent 
                    className={`dropdown-menu-content dropdown-${key}`}
                    style={getDropdownStyles(key)}
                  >
                    <div className="bg-white rounded-lg shadow-lg p-4">
                      <DropdownContent data={menuData[key]} />
                    </div>
                  </DropdownMenuContent>
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