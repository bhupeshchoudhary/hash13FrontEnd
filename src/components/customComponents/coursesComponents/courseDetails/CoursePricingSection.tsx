import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'

export default function CoursePricingSection() {
  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Book your spot ! We will be increasing the price soon...
        </h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - Pricing */}
          <Card className="flex-1 p-6 bg-white">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Mastering Git and Github Advanced Level Training
              <span className="block text-gray-600 text-lg mt-1">
                (Save ₹4,020)
              </span>
            </h2>
            
            <div className="mb-6">
              <span className="text-red-600 text-4xl font-bold">₹ 980</span>
              <span className="text-gray-500 line-through ml-2">₹ 5,000</span>
              <span className="text-gray-500">(+ taxes)</span>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-red-400 mt-1" />
                <p className="text-gray-600">
                  Avail the discounted price of ₹ 980 and save a total of ₹ 4,020
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-red-400 mt-1" />
                <p className="text-gray-600">The launch offer expires in 24 hours</p>
              </div>
            </div>
<div className=" flex w-full mx-auto">
            <Button className="w-1/2 mx-auto bg-red-600 hover:bg-red-700 text-white py-6">
              Yes! I want this insane deal for
              <br />₹ 980 + taxes
              
              {/* <span className="line-through">₹ 5000</span> */}
              
               {/* <span className="text-sm)</span> */}
            </Button>
            </div>
          </Card>

          {/* Right Column - Features */}
          <div className="flex-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-red-500 mb-4">
                What you'll learn...
              </h3>
              <div className="space-y-3">
                {[
                  "Git Basics and Git Commands",
                  "Git Branching and Merging",
                  "Git Rebase and Git Bisect",
                  "Squashing Commits, Cherry-Picking and Three-Way Merges"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="bg-red-100 rounded-sm p-0.5">
                      <Check className="h-4 w-4 text-red-500" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-500 mb-4">
                And bonuses too...
              </h3>
              <div className="space-y-3">
                {[
                  "Most Relevant Git and Github Training Tips & Tricks",
                  "Technical Support for 90 days",
                  "Real Industry Use Cases of Git and Github",
                  "Premium #13 Git and Github Training Community"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="bg-red-100 rounded-sm p-0.5">
                      <Check className="h-4 w-4 text-red-500" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

