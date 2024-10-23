
import React from 'react';
import TestimonialCard from '@/components/customComponents/landingPage/ui/TestimonialCard'; // Adjust the path if necessary
import { Button } from "@/components/ui/button"; // Ensure Button component is imported
import { Heart } from "lucide-react";

const testimonials = [
  {
    quote: "First time in my life, I invested 30k/month consistently for 3 years. Result? 40% growth hacking mentorship with Vaibhav Sisinty and Growthschool.io. I invested in many courses, but this one was different. Hands-on learning, and it was mind-blowing. We built 4 businesses from scratch, learned about growth hacking, and many more things.",
    name: "Sandip Shinde",
    avatar: "/placeholder.svg?height=40&width=40",
    
  },

  {
    quote: "First time in my life, I invested 30k/month consistently for 3 years. Result? 40% growth hacking mentorship with Vaibhav Sisinty and Growthschool.io. I invested in many courses, but this one was different. Hands-on learning, and it was mind-blowing. We built 4 businesses from scratch, learned about growth hacking, and many more things.",
    name: "Sandip Shinde",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote: "First time in my life, I invested 30k/month consistently for 3 years. Result? 40% growth hacking mentorship with Vaibhav Sisinty and Growthschool.io. I invested in many courses, but this one was different. Hands-on learning, and it was mind-blowing. We built 4 businesses from scratch, learned about growth hacking, and many more things.",
    name: "Sandip Shinde",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote: "First time in my life, I invested 30k/month consistently for 3 years. Result? 40% growth hacking mentorship with Vaibhav Sisinty and Growthschool.io. I invested in many courses, but this one was different. Hands-on learning, and it was mind-blowing. We built 4 businesses from scratch, learned about growth hacking, and many more things.",
    name: "Sandip Shinde",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote: "First time in my life, I invested 30k/month consistently for 3 years. Result? 40% growth hacking mentorship with Vaibhav Sisinty and Growthschool.io. I invested in many courses, but this one was different. Hands-on learning, and it was mind-blowing. We built 4 businesses from scratch, learned about growth hacking, and many more things.",
    name: "Sandip Shinde",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote: "First time in my life, I invested 30k/month consistently for 3 years. Result? 40% growth hacking mentorship with Vaibhav Sisinty and Growthschool.io. I invested in many courses, but this one was different. Hands-on learning, and it was mind-blowing. We built 4 businesses from scratch, learned about growth hacking, and many more things.",
    name: "Sandip Shinde",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote: "First time in my life, I invested 30k/month consistently for 3 years. Result? 40% growth hacking mentorship with Vaibhav Sisinty and Growthschool.io. I invested in many courses, but this one was different. Hands-on learning, and it was mind-blowing. We built 4 businesses from scratch, learned about growth hacking, and many more things.",
    name: "Sandip Shinde",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  // Repeat the same structure for other testimonials...
  // Add more testimonials as needed
];

const Testimonials: React.FC = () => {
  return (
    <div className="container flex flex-col px-6 lg:px-14 mx-auto  py-16 bg-black text-white overflow-hidden">
      <div className="flex flex-col md:flex-row mb-12"> {/* Flex container for content and testimonials */}
        {/* Content section wrapped in a card-like div */}
        <div className="w-full"> {/* Full-width wrapper for testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> {/* Updated for 4 columns */}
            {/* Hardcoded demo card */}
            <div className="rounded-lg shadow-md mb-6 p-2 w-68"> {/* Removed bg-white for transparency */}
              <div className="mb-4 md:mr-6 w-full md:w-72 flex-shrink-0 p-6 rounded-lg shadow-lg flex flex-col justify-between"> 
                <h2 className="text-sm text-teal-400 mb-2">TESTIMONIALS</h2>
                <h1 className="text-4xl font-bold mb-4 flex items-center">
                  THAT&apos;S WHAT THEY SAID ❤️
                </h1>
                <p className="text-gray-400">
                  Lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                </p>
              </div>
            </div>

            {testimonials.slice(0, 6).map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                avatar={testimonial.avatar}
              />
            ))}

            {/* Conditionally render the View All card if there are more than 6 testimonials */}
            {testimonials.length > 6 && (
             <div className="flex justify-center mb-6"> {/* Center the button container */}
             <div className="mb-4 md:mr-3  w-full md:w-72 flex-shrink-0 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center"> 
               <Button variant="outline" className="bg-teal-500 text-black hover:bg-teal-600">
                 VIEW ALL
               </Button>
             </div>
           </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;