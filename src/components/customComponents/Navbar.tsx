import Link from 'next/link'
import Image from 'next/image' // Import Image from next/image
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import logo from '../../../public/assets/landingPage/logohash13.svg' // Imported logo

export default function Navbar() {
  return (
    <header className="relative w-full max-w-7xl px-6 lg:px-14 overflow-hidden h-16 sticky top-0 z-50 bg-white ">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between h-full"> {/* Full height for content */}
        <Link href="/">
          <div className="h-full"> {/* Ensure the logo fits within the navbar height */}
            <Image
              src={logo}
              alt="hash13 logo"
              width={50}  // Increase width as needed
              height={50} // Increase height as needed
              className="object-contain h-full" // Ensure the logo fits within the navbar's height
              priority     // Optional: Preloads the image for performance
            />
          </div>
        </Link>

        <div className="flex-1 flex justify-end items-center space-x-6 h-full">
          <nav className="hidden md:flex items-center space-x-6 h-full">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm">
                <span>For working professionals</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm">
                <span>For college students</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm">
                <span>More</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </nav>

          <div className="flex items-center space-x-4 h-full">
            <Button variant="outline" className="hidden md:inline-flex">
              Free Courses
            </Button>
            <Button className="bg-red-500 text-white hover:bg-red-600">Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  );
};
