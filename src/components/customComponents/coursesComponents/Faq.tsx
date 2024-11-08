import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faq() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12">
        Frequently Asked{" "}
        <span className="text-red-500">Questions</span>
      </h1>

      <div className="grid lg:grid-cols-[300px,1fr] gap-8">
        {/* Sidebar */}
        <div className="space-y-4">
          <div className="p-4 rounded-lg border shadow-sm hover:shadow-md hover:bg-muted/50 cursor-pointer transition-all duration-300">
            <h2 className="text-lg font-medium text-red-500">
              Master's in AI & Data Science Course Curriculum
            </h2>
          </div>
          <div className="p-4 rounded-lg border shadow-sm hover:shadow-md hover:bg-muted/50 cursor-pointer transition-all duration-300">
            <h2 className="text-lg font-medium text-gray-600">
              Time Commitment in Master's in AI & Data Science Program
            </h2>
          </div>
          <div className="p-4 rounded-lg border shadow-sm hover:shadow-md hover:bg-muted/50 cursor-pointer transition-all duration-300">
            <h2 className="text-lg font-medium text-gray-600">
              Selection Criteria for MSc in AI & DS
            </h2>
          </div>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <AccordionTrigger className="text-xl font-semibold px-6 py-4 [&[data-state=open]]:text-red-500">
              What is the Master's in AI & Data Science with upGrad?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 px-6 pb-4">
              This program is an engaging yet rigorous 12-month online program designed specifically for working professionals to develop practical knowledge and skills, establish a professional network, and accelerate entry into data science careers. The certification is awarded by JGU.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <AccordionTrigger className="text-xl font-semibold px-6 py-4 [&[data-state=open]]:text-red-500">
              Which topics are going to be covered as part of the Master's in AI & Data Science program?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 px-6 pb-4">
              The program covers a wide range of topics in AI and Data Science, including:
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
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <AccordionTrigger className="text-xl font-semibold px-6 py-4 [&[data-state=open]]:text-red-500">
              What type of learning experience should I expect?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 px-6 pb-4">
              Students can expect a blend of theoretical knowledge and practical applications through hands-on projects, live sessions, and industry case studies.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <AccordionTrigger className="text-xl font-semibold px-6 py-4 [&[data-state=open]]:text-red-500">
              Is a Degree in Master's of Science granted at the end of the program?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 px-6 pb-4">
              Yes, upon successful completion of all program requirements, students are awarded a Master's of Science degree in AI & Data Science.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}