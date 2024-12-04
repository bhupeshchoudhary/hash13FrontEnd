import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  interface Module {
    id: number
    title: string
    description?: string
    content:string[]
  }
  
  const modules: Module[] = [
    {
      id: 1,
      title: "Fundamentals of SEO & Algorithm",
      description: "The module covers SEO fundamentals, debunking myths, understanding Google's algorithm, decoding recent updates, staying ahead of algorithm changes, and analyzing ranking drops to optimize search engine performance effectively.",
      content:["Docker ","k8s","Java","MLOPS","DevOps"]
      
    },
    {
      id: 2,
      title: "Mastering Content for SEO",
      description:"The module covers SEO fundamentals, debunking myths, understanding Google's algorithm, decoding recent updates, staying ahead of algorithm changes, and analyzing ranking drops to optimize search engine performance effectively",
      content:["Docker ","k8s","Java","MLOPS","DevOps"]
    },
    {
      id: 3,
      title: "Mastering Technical SEO",
      description:"The module covers SEO fundamentals, debunking myths, understanding Google's algorithm, decoding recent updates, staying ahead of algorithm changes, and analyzing ranking drops to optimize search engine performance effectively",
      content:["Docker ","k8s","Java","MLOPS","DevOps"]
    },
    {
      id: 4,
      title: "Mastering Technical SEO - Part 2",
      description:"The module covers SEO fundamentals, debunking myths, understanding Google's algorithm, decoding recent updates, staying ahead of algorithm changes, and analyzing ranking drops to optimize search engine performance effectively",
      content:["Docker ","k8s","Java","MLOPS","DevOps"]
    }
  ]
  
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
  
  