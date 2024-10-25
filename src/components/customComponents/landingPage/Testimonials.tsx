import React from 'react';
import TestimonialCard from '@/components/customComponents/landingPage/ui/TestimonialCard';
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Being the part of the workshop as a participant as well as Technical Volunteer was an amazing experience. Being a participant in a workshop helped me in learning new concepts and also brushing up my existing skills. Being a technical volunteer helped me in understanding what type of queries can be faced while setting up different tools and while integrating them together, also I helped many participants in solving their technical issues.. I want to thank Vimal Daga sir and LinuxWorld Informatics Pvt Ltd for providing me the opportunity. Looking for more such opportunities to learn , grow and help others also in upskilling.",
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
    quote: "What an incredible session it was! 🙌 The 4+ hour hands-on DSA masterclass with Vimal Daga Sir was nothing short of transformative. 🚀 Every topic, from performance tuning to complex algorithms like Dijkstra's, was covered in such detail, making it easier to grasp and apply in real-world coding challenges. I walked away feeling so much more confident in my understanding of DSA and its applications. The energy and passion Vimal Sir brings to every session is truly inspiring, and it’s amazing how he simplifies even the toughest concepts. 💡 Thank you, LinuxWorld Informatics Pvt Ltd and Vimal Daga Sir, for such an insightful and engaging masterclass! 💻🙏",
    name: "Jane Doe",
    avatar: "/placeholder.svg?height=40&width=40",
    dynamicText: "G"
  },
  {
    videoUrl: "https://www.youtube.com/embed/0V0fm-InffY",
    name: "Jane Doe",
    avatar: "/placeholder.svg?height=40&width=40",
    dynamicText: ""
  },
  {
    quote: "DSA workshop was amazing Vimal Daga sir always gives different content in every workshop that is not even available on the internet and which is very useful in the real world. even if you still don't know about any technology you can join any course or workshop of LinuxWorld Informatics Pvt Ltd because Vimal sir always starts from very basic... I think If we learned a lot in the free workshop, think how much more we can learn in any other course by Linux World ... Sir I'm feeling blessed & i think any student would feel very lucky to have a Guru like you sir lots of love sir and thank you so much sir and entire team of Linux World 👍",
    name: "Jane Doe",
    avatar: "/placeholder.svg?height=40&width=40",
    dynamicText: "Q"
  },
  {
    quote: "Na Shahrukh chahiye Na Salmaan chahiye Engineering students ko toh bss Vimal Daga sir se technology ka gyaan chahiye. Vimal Daga sir your every success feels personal because you are representing all of us. We are always with you. . I have always been a big fan of yours. As I always say you are hashtag#Chankya of 21st century. You are making your own army of #Chandragupta. I am with you. I believe in you. I am a hashtag#creator Every individual is a hashtag#creator. All of us just need someone who believes us and who can guide us.",
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
    <div className="w-full bg-black text-white py-16">
      <div className=" container max-w-screen-7xl mx-auto px-6 lg:px-14">
        <div className="flex flex-col md:flex-row mb-12">
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-lg shadow-md mb-6 p-2 w-68">
                <div className="mb-4 md:mr-6 w-full md:w-72 flex-shrink-0 p-6 rounded-lg shadow-lg flex flex-col justify-between">
                  <h2 className="text-sm text-teal-400 mb-2">TESTIMONIALS</h2>
                  <h1 className="text-4xl font-bold mb-4 flex items-center">
                    Ambitious People ❤️ #13
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
    </div>
  );
};

export default Testimonials;