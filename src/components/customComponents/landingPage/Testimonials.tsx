"use client"





import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/customComponents/landingPage/ui/Avatar";
import { Linkedin } from 'lucide-react';
import { landingPageTestimonialPosts } from "../../../../data/testimonials/posts"

export default function Component() {
  const [showAll, setShowAll] = useState(false);
  const initialDisplayCount = 10;
  const hasMoreTestimonials = landingPageTestimonialPosts.length > initialDisplayCount;

  const displayedTestimonials = showAll 
    ? landingPageTestimonialPosts 
    : landingPageTestimonialPosts.slice(0, initialDisplayCount);

  const handleToggleDisplay = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="bg-[#ffffff] p-6 mx-auto py-8 ">
      <div className="mx-auto max-w-6xl" >
        <h2 className="text-teal-500 text-md font-semibold text-center">
          HERE IT FROM THEM
        </h2>
        <h2 className="text-black text-2xl md:text-3xl font-bold mb-10 mt-2 text-center">
          Ambitious <span className ="text-[#ff0000]">Learner&apos;s</span> ❤️ #13
        </h2>
        
        <div className="columns-1 md:columns-4 lg:columns-4 gap-6 space-y-4 max-w-5xl mx-auto ">
          {displayedTestimonials.map((post) => (
            <Card
              key={post.id}
              className={`relative overflow-hidden bg-[#ffffff] text-black border border-gray-500 mb-4 break-inside-avoid`}
            >
              {post.videoUrl && post.id === 5 ? (
                /* Card with Short Video */
                <CardContent className="p-0">
                  <iframe
                    className="video-iframe "
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
                      <Avatar className="h-12 w-12 flex-shrink-0">
                        <AvatarImage src={post.author.avatar.toString()} alt={post.author.name} />
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

        {hasMoreTestimonials && (
          <div className="flex items-center mt-12">
            <button 
              className="mx-auto border bg-[#ff0000] text-white p-4 rounded hover:bg-[#ff0000] transition-colors"
              onClick={handleToggleDisplay}
            >
              {showAll ? 'View Less' : 'See our Wall of Love'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}