import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string | JSX.Element;
};

const faqContent: Record<string, FAQItem[]> = {
  curriculum: [
    {
      question: "What is the Master's in AI & Data Science with Linux World?",
      answer:
        "This program is an engaging yet rigorous 12-month online program designed specifically for working professionals to develop practical knowledge and skills, establish a professional network, and accelerate entry into data science careers. The certification is awarded by JGU.",
    },
    {
      question: "Which topics are going to be covered as part of the Master's in AI & Data Science program?",
      answer: (
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Machine Learning Algorithms</li>
          <li>Deep Learning and Neural Networks</li>
          <li>Natural Language Processing</li>
          <li>Computer Vision</li>
          <li>Big Data Analytics</li>
          <li>Data Visualization</li>
          <li>Statistical Analysis</li>
          <li>Ethical AI and Data Governance</li>
        </ul>
      ),
    },
  ],
  timeCommitment: [
    {
      question: "What type of learning experience should I expect?",
      answer:
        "Students can expect a blend of theoretical knowledge and practical applications through hands-on projects, live sessions, and industry case studies.",
    },
  ],
  selectionCriteria: [
    {
      question: "Is a Degree in Master's of Science granted at the end of the program?",
      answer:
        "Yes, upon successful completion of all program requirements, students are awarded a Master's of Science degree in AI & Data Science.",
    },
  ],
};

export default function Faq() {
  const [selectedItem, setSelectedItem] = useState<keyof typeof faqContent>("curriculum");

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      {/* Header */}
      <h1 className="sm:text-2xl lg:text-3xl font-bold mb-8 sm:mb-12 text-center sm:text-left">
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
  );
}
