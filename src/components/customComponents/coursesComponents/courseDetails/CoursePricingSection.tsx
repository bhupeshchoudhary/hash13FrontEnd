import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'

export default function CoursePricingSection() {
  return (
    <section className="w-full bg-gradient-to-br from-gray-50 via-black-50 to-red-50 py-12" id="participatenow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center lg:text-left">
          Book your spot! We will be
          <span className="text-[#ff0000] block sm:inline sm:ml-2">
            increasing the price soon...
          </span>
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Pricing */}
          <Card className="flex-1 p-4 sm:p-6 bg-white">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              Globally Recognized Program
              <span className="block text-base sm:text-lg text-gray-600 mt-1">
                (Save ₹4,020)
              </span>
            </h2>
            
            <div className="mb-6">
              <span className="text-3xl sm:text-4xl font-bold text-red-600">₹ 980</span>
              <span className="text-gray-500 line-through ml-2">₹ 5,000</span>
              <span className="text-gray-500 text-sm sm:text-base">(+ taxes)</span>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                <p className="text-sm sm:text-base text-gray-600">
                  Avail the discounted price of ₹ 980 and save a total of ₹ 4,020
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                <p className="text-sm sm:text-base text-gray-600">
                  The launch offer expires in 24 hours
                </p>
              </div>
            </div>

            <div className="flex justify-center w-full">
              <Button className="w-full sm:w-2/3 bg-[#ff0000] hover:bg-[#ff0000]/90 hover:shadow-md hover:shadow-black text-white py-4 sm:py-6 text-sm sm:text-base">
                Yes! I want this insane deal for
                <br />₹ 980 + taxes
              </Button>
            </div>
          </Card>

          {/* Right Column - Features */}
          <div className="flex-1 space-y-8 px-4 sm:px-0">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-4">
                What you will get...
              </h3>
              <div className="space-y-3">
                {[
                  "Master Git and GitHub - From Beginner to Advanced Level",
                  "Automation Using Ansible",
                  "Jenkins & Build Automation",
                  "Monitoring Tools : Prometheus & Grafana",
                  "Monitoring Tools : Prometheus & Grafana",
                  "Docker, Container & Kubernetes",
                  "And much more…"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="bg-red-100 rounded-sm p-0.5 flex-shrink-0">
                      <Check className="h-4 w-4 text-red-500" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-4">
                And bonuses too...
              </h3>
              <div className="space-y-3">
                {[
                  "Most Relevant DevOps Tips & Tricks to become more productive",
                  "Technical Support for 90 days",
                  "Premium #13 DevOps Community Membership",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="bg-red-100 rounded-sm p-0.5 flex-shrink-0">
                      <Check className="h-4 w-4 text-red-500" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}