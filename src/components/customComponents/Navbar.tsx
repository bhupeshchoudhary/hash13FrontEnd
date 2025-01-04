import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from '../../../public/assets/landingPage/logohash13.svg';

//  import dynamic data 
import  {menuData ,Program,MenuData} from '../../../data/Navbar/Navbar';


// ProgramCard Component
type ProgramCardProps = Program;
const ProgramCard: React.FC<ProgramCardProps> = ({ title, mentor, duration, status, type }) => (
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

// SideCategories Component
type SideCategoriesProps = {
  categories: string[];
};
const SideCategories: React.FC<SideCategoriesProps> = ({ categories }) => (

  <div className="w-48 bg-gray-50 p-4 space-y-2 md:block">
    {categories.map((category) => (
      <div key={category} className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
        <span>{category}</span>
      </div>
    ))}
  </div>
);

// DropdownContent Component
type DropdownContentProps = {
  data: MenuData;
};

const DropdownContent: React.FC<DropdownContentProps> = ({ data }) => (

  <div className="flex flex-col md:flex-row">
    <SideCategories categories={data.categories} />
    <div className="flex-1 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-medium mb-2">Mentorship Programs</h2>
          <p className="text-gray-600 mb-6">Get personalized guidance from industry experts</p>
          <div className="space-y-4">
            {data.mentorshipPrograms.map((program: any) => (
              <ProgramCard key={program.title} {...program} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-medium mb-2">Self-Paced Programs</h2>
          <p className="text-gray-600 mb-6">Learn at your own pace</p>
          <div className="space-y-4">
            {data.selfPacedPrograms.map((program: any) => (
              <ProgramCard key={program.title} {...program} />
            ))}
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
                    {key === 'workingProfessionals'
                      ? 'For working professionals'
                      : key === 'collegeStudents'
                      ? 'For college students'
                      : 'More'}
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
