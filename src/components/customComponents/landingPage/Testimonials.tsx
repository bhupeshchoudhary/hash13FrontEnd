import React from 'react';
import TestimonialCard from '@/components/customComponents/landingPage/ui/TestimonialCard';
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "First time in my life, I invested 30k/month consistently for 3 years. Result? 40% growth hacking mentorship with Vaibhav Sisinty and life, I invested 30k/month consistently for 3 years. Result? 40% growth hacking mentorship with Vaibhav Sisinty and life, I invested 30k/month consistently for 3 years. Result? 40% growth hacking mentorship with Vaibhav Sisinty and life, I invested 30k/month consistently for 3 years. Result? 40% growth hacking mentorship with Vaibhav Sisinty and ",
    name: "Sandip Shinde",
    avatar: "/placeholder.svg?height=40&width=40",
    dynamicText: "in"
  },
  {
    videoUrl: "https://www.youtube.com/embed/2l-05_6o3eQ", // Example video testimonial
    name: "John Doe",
    avatar: "/placeholder.svg?height=40&width=40",
    dynamicText: ""
  },
  {
    quote: "We built 4 businesses from scratch, learned about growth hacking, and many more things 4 businesses from scratch, learned about growth hacking, and many more things 4 businesses from scratch, learned about growth hacking, and many more things 4 businesses from scratch, learned about growth hacking, and many more things 4 businesses from scratch, learned about growth hacking, and many more things 4 businesses from ",
    name: "Jane Doe",
    avatar: "/placeholder.svg?height=40&width=40",
    dynamicText: "q"
  },
  {
    videoUrl: "https://www.youtube.com/embed/0V0fm-InffY",
    name: "Jane Doe",
    avatar: "/placeholder.svg?height=40&width=40",
    dynamicText: ""
  },
  {
    quote: "We built 4 businesses from scratch, learned about growth hacking, and many more things 4 businesses from scratch, learned about growth hacking, and many more things 4 businesses from scratch, learned about growth hacking, and many more things 4 businesses from scratch, learned about growth hacking, and many more things 4 businesses from scratch, learned about growth hacking, and many more things 4 businesses from ",
    name: "Jane Doe",
    avatar: "/placeholder.svg?height=40&width=40",
    dynamicText: "Q"
  },
  {
    quote: "We built 4 businesses from scratch, learned about growth hacking, and many more things 4 businesses from scratch, learned about growth hacking, and many more things 4 businesses from scratch, learned about growth hacking, and many more things 4 businesses from scratch, learned about growth hacking, and many more things 4 businesses from scratch, learned about growth hacking, and many more things 4 businesses from ",
    name: "Jane Doe",
    avatar: "/placeholder.svg?height=40&width=40",
    dynamicText: "in"
  },
  {
    quote: "First time in my life, I invested 30k/month consistently for 3 years. Result? 40% growth hacking mentorship with Vaibhav Sisinty and life, I invested 30k/month consistently for 3 years. Result? 40% growth hacking mentorship with Vaibhav Sisinty and life, I invested 30k/month consistently for 3 years. Result? 40% growth hacking mentorship with Vaibhav Sisinty and life, I invested 30k/month consistently for 3 years. Result? 40% growth hacking mentorship with Vaibhav Sisinty and ",
    name: "Sandip Shinde",
    avatar: "/placeholder.svg?height=40&width=40",
    dynamicText: "in"
  },
  // Add more testimonials as needed...
];

const Testimonials: React.FC = () => {
  return (
    <div className="container flex flex-col px-6 lg:px-14 mx-auto py-16 bg-black text-white overflow-hidden">
      <div className="flex flex-col md:flex-row mb-12">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-lg shadow-md mb-6 p-2 w-68">
              <div className="mb-4 md:mr-6 w-full md:w-72 flex-shrink-0 p-6 rounded-lg shadow-lg flex flex-col justify-between">
                <h2 className="text-sm text-teal-400 mb-2">TESTIMONIALS</h2>
                <h1 className="text-4xl font-bold mb-4 flex items-center">
                Amibitious People ❤️ #13
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
                videoUrl={testimonial.videoUrl} // Pass the video URL if available
                name={testimonial.name}
                avatar={testimonial.avatar}
                dynamicText={testimonial.dynamicText}
              />
            ))}

            {testimonials.length > 6 && (
              <div className="flex justify-center mb-6">
                <div className="mb-4 md:mr-3 w-full md:w-72 flex-shrink-0 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
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
