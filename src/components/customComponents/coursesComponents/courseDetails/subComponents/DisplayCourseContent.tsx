import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { modules } from "../../../../../../data/displayCourseContent/displayCourseContent"
 
  
  export default function DisplayCourseContent() {
    return (
      <div className="w-full  mx-auto space-y-4">
        <Accordion type="single" collapsible className="w-full">
          {modules.map((module) => (
            <AccordionItem
              key={module.id}
              value={`module-${module.id}`}
              className="border rounded-2xl mb-4 overflow-hidden data-[state=open]:bg-white"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="text-left">
                  <div className="text-sm text-[#ff0000]  mb-1">
                    MODULE {module.id}
                  </div>
                  <h3 className="font-bold text-[#ff0000] ">{module.title}</h3>
                  <p className="">
                    {module.description}
                  </p>
                </div>
                <div>
                    
                </div>

                
              </AccordionTrigger>
              {module.description && (
                <AccordionContent className="px-6 pb-4">
                  <p className=" text-green-700">
                    {module.content.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </p>
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    )
  }
  
  