
  
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DisplayCourseContentProps } from '../../../../../../types/displayCourseContent';

// Define the Module type


const DisplayCourseContent: React.FC<DisplayCourseContentProps> = ({ modules }) => {
  return (
    <div className="w-full mx-auto space-y-4">
      <Accordion type="single" collapsible className="w-full">
        {modules.map((module) => (
          <AccordionItem
            key={module.id}
            value={`module-${module.id}`}
            className="border rounded-2xl mb-4 overflow-hidden data-[state=open]:bg-white"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="text-left">
                <div className="text-sm text-[#ff0000] mb-1">
                  MODULE {module.id}
                </div>
                <h3 className="font-bold text-[#ff0000]">{module.title}</h3>
                <p>{module.description}</p>
              </div>
            </AccordionTrigger>
            {module.content && (
              <AccordionContent className="px-6 pb-4">
                <ul className="text-green-700">
                  {module.content.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </AccordionContent>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default DisplayCourseContent;