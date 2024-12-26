'use client'

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { TrendingUp,Search  } from "lucide-react"
import { jsonData } from '../../../../../data/leftLandingPage/leftLandingPage'


export default function SearchComponent() {
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  return (
    <div className="md:max-w-4xl lg:max-w-4xl w-full mx-auto md:px-4 lg:px-4  pt-16 pb-8">
      <h1 className="text-4xl font-bold mb-2">
        <span className="text-[#ff0000]">{jsonData.headings.main}</span>
      </h1>

      <h2 className="text-2xl font-bold mb-8">{jsonData.headings.sub}</h2>

      <div className="relative mb-8 w-11/12">
        <Input
          placeholder={jsonData.search.placeholder}
          className="w-full py-6 bg-white px-4 text-lg text-gray-600 rounded-xl shadow-sm"
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
        />
        <Button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#ff0000] hover:bg-red-600 rounded-lg p-2"
        >
          <Search className="h-6 w-6" />
        </Button>
        
        {isSearchFocused && (
          <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-lg p-4 z-10">
            <h4 className="mb-2 text-sm font-semibold">Trending searches</h4>
            <div className="flex flex-wrap gap-2">
              {jsonData.trendingSearches.map((search, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700"
                >
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {search}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mb-8">
        <p className="text-sm font-bold mb-4 flex items-center gap-2">
          Or select your <span className='m-0 p-0 text-[#ff0000]'>Profile</span> <span className="cursor-pointer">🎯</span>
        </p>

        <div className="flex flex-wrap gap-2">
          {jsonData.goals.map((goal, index) => (
            <Button
              key={index}
              variant="outline"
              className="rounded-xl shadow-sm border-2 hover:bg-gray-50"
            >
              {goal}
            </Button>
          ))}
        </div>
      </div>

      <div className="text-lg">
        {jsonData.community.text}{" "}
        <span className="text-[#ff0000] font-medium">
          
          {jsonData.community.learnersCount}</span> learners.
      </div>
    </div>
  )
}