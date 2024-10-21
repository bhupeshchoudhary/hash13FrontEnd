import React from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Navbar = ()=>{
    return (
    <>
     <header className="max-w-7xl bg-[#fff6f4] mx-auto px-6 lg:px-8 py-4 flex justify-between items-center relative z-10">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-red-600">#13</span>
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
    </>
    )

}

export default Navbar

