import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqContent } from "../../../../data/faq/faq";



export default function Faq() {
  const [selectedItem, setSelectedItem] = useState<keyof typeof faqContent>("curriculum");

  return (
    <div className="bg-gradient-to-r from-gray-50 via-white to-red-50 ">
    <div className="container mx-auto max-w-6xl px-4 py-6">
      {/* Header */}
      <h1 className="sm:text-2xl lg:text-3xl font-bold mb-8 sm:mb-12 text-center ">
        Frequently Asked <span className="text-[#ff0000]">Questions</span>
      </h1>

      {/* Main Grid */}
      <div className="grid gap-8 lg:grid-cols-[300px,1fr] lg:gap-12">
        {/* Sidebar */}
        <div className="space-y-4">
          {Object.keys(faqContent).map((key) => (
            <div
              key={key}
              className={`p-4 rounded-lg border shadow-sm cursor-pointer transition-all duration-300 
              ${selectedItem === key ? "bg-red-200 border-red-500 text-red-600" : "bg-white text-gray-600"}`}
              onClick={() => setSelectedItem(key as keyof typeof faqContent)}
            >
              <h2 className="text-md md:text-md font-medium">
                {key === "curriculum"
                  ? "Master's in AI & Data Science Course Curriculum"
                  : key === "timeCommitment"
                  ? "Time Commitment in Master's in AI & Data Science Program"
                  : "Selection Criteria for MSc in AI & DS"}
              </h2>
            </div>
            
          ))}
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqContent[selectedItem].map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <AccordionTrigger className="text-base sm:text-md font-semibold px-4 sm:px-6 py-3 sm:py-4 [&[data-state=open]]:text-[#ff0000]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600 px-4 sm:px-6 pb-3 sm:pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
    </div>    
  );
}
