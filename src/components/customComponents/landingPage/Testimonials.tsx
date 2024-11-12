import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/customComponents/landingPage/ui/Avatar";
import { Linkedin } from 'lucide-react';

interface Post {
  id: number;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  videoUrl?: string;
}

const posts = [
  {
    id: 1,
    author: {
      name: "Akshata Tiwari",
      title: "MERN Enthusiast Seeking Opportunities to Develop and Enhance my Skills",
      avatar: "https://example.com/avatar1.jpg"
    },
    content: `Hey Folks...`,
    timestamp: "8 Mar 2023",
    videoUrl: "https://www.youtube.com/embed/ppsz2KYpu7E"
  },
  {
    id: 2,
    author: {
      name: "Ayushi Jain",
      title: "Branding | Marketing and Strategy",
      avatar: "https://example.com/avatar2.jpg"
    },
    content: `From Google searches...`,
    timestamp: "10 Mar 2023"
  },
  {
    id: 3,
    author: {
      name: "Prashant Hada",
      title: "Student at Ronald University of Applied Sciences",
      avatar: "https://example.com/avatar3.jpg"
    },
    content: `Happy to announce the completion of the Power BI workshop. Thanks to @LinuxWorld and @DeekshaAnand for the guidance and knowledge transfer. #PowerBI #DataAnalytics`,
    timestamp: "15 Mar 2023"
  },
  {
    id: 4,
    author: {
      name: "Nikita Chawre",
      title: "Data Analysis Enthusiast",
      avatar: "https://example.com/avatar4.jpg"
    },
    content: `Updated my dashboard with a new color scheme for better UX! Appreciate the feedback from the community. #DataVisualization #UserExperience`,
    timestamp: "18 Mar 2023"
  },
  
  {
    id: 4,
    author: {
      name: "Nikita Chawre",
      title: "Data Analysis Enthusiast",
      avatar: "https://example.com/avatar4.jpg"
    },
    content: `Updated my dashboard with a new color scheme for better UX! Appreciate the feedback from the community. #DataVisualization #UserExperience`,
    timestamp: "18 Mar 2023"
  },
  {
    id: 5,
    author: {
      name: "Akshata Tiwari",
      title: "MERN Enthusiast Seeking Opportunities to Develop and Enhance my Skills",
      avatar: "https://example.com/avatar1.jpg"
    },
    content: `Hey Folks...`,
    timestamp: "8 Mar 2023",
    videoUrl: "https://www.youtube.com/embed/2l-05_6o3eQ"
  },
  {
    id: 4,
    author: {
      name: "Nikita Chawre",
      title: "Data Analysis Enthusiast",
      avatar: "https://example.com/avatar4.jpg"
    },
    content: `Updated my dashboard with a new color scheme for better UX! Appreciate the feedback from the community. #DataVisualization #UserExperience`,
    timestamp: "18 Mar 2023"
  },
  {
    id: 4,
    author: {
      name: "Nikita Chawre",
      title: "Data Analysis Enthusiast",
      avatar: "https://example.com/avatar4.jpg"
    },
    content: `Updated my dashboard with a new color scheme for better UX! Appreciate the feedback from the community. #DataVisualization #UserExperience`,
    timestamp: "18 Mar 2023"
  },
  {
    id: 5,
    author: {
      name: "Akshata Tiwari",
      title: "MERN Enthusiast Seeking Opportunities to Develop and Enhance my Skills",
      avatar: "https://example.com/avatar1.jpg"
    },
    content: `Hey Folks...`,
    timestamp: "8 Mar 2023",
    videoUrl: "https://www.youtube.com/embed/2l-05_6o3eQ"
  }
];

export default function Component() {
  return (
    <div className="bg-[#ffffff] p-6 mx-auto">
      <div className="mx-auto " style={{ width: '1080px' }}>
      <h2 className="text-gray-700 text-md font-semibold">
        HERE IT FROM THEM
      </h2>
        <h2 className="text-black text-3xl font-bold mb-10 mt-2">Ambitious People ❤️ #13</h2>
        
        <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-4 ">
          {posts.map((post) => (
            <Card
              key={post.id}
              className={`relative overflow-hidden bg-[#ffffff] text-black border border-gray-500 mb-4 break-inside-avoid`}
            >
              {post.videoUrl && post.id === 5 ? (
                /* Card with Short Video */
                <CardContent className="p-0">
                  <iframe
                    className="video-iframe"
                    src={post.videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ 
                      width: '100%', 
                      height: '450px', 
                      borderRadius: '0' 
                    }}
                  ></iframe>
                </CardContent>
              ) : post.videoUrl ? (
                /* Regular Video Card */
                <CardContent className="p-0">
                  <iframe
                    className="video-iframe"
                    src={post.videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ 
                      width: '100%', 
                      height: '400px', 
                      borderRadius: '0' 
                    }}
                  ></iframe>
                </CardContent>
              ) : (
                /* Other Content Cards */
                <>
                  <CardHeader className="pb-2">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={post.author.avatar} alt={post.author.name} />
                        <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-grow">
                        <h3 className="text-sm font-semibold">{post.author.name}</h3>
                        <p className="text-xs text-gray-400">{post.author.title}</p>
                      </div>
                      <Linkedin className="h-5 w-5 text-gray-400" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="space-y-2 text-sm">
                      {post.content.split('\n\n').map((paragraph, index) => (
                        <p key={index}>
                          {paragraph.split(' ').map((word, wordIndex) => {
                            if (word.startsWith('@') || word.startsWith('#')) {
                              return <span key={wordIndex} className="text-[#63B3ED]">{word} </span>;
                            }
                            return word + ' ';
                          })}
                        </p>
                      ))}
                    </div>
                    <p className="mt-4 text-xs text-gray-400">{post.timestamp}</p>
                  </CardContent>
                </>
              )}
            </Card>
          ))}
       
        </div>  
        
    

      </div>
      <div className="flex items-center mt-12">
  <button className="mx-auto border border-gray-500 p-4 rounded">See our Wall of Love</button>
</div>
    </div>
  );
}
