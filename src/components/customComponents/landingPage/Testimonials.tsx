"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/customComponents/landingPage/ui/Avatar";
import { Linkedin } from 'lucide-react';
import Image from 'next/image';
import { landingPageTestimonialPosts } from "../../../../data/testimonials/posts";
import yerrowArrow from "../../../../public/assets/landingPage/floatingCurveArrow.svg"
// import Line from "../../../../public/assets/line.svg"
import curveLine from "../../../../public/assets/CurlLine.svg"

// Define interfaces
interface Author {
    name: string;
    title: string;
    avatar: string;
    linkedin?: string;
}

interface Post {
    id: number;
    author: Author;
    content: string;
    timestamp: string;
    videoUrl?: string;
}

export default function Component() {
  const [showAll, setShowAll] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const initialDisplayCount = 10;
  const wordLimit = 60;
  const hasMoreTestimonials = landingPageTestimonialPosts.length > initialDisplayCount;

  const displayedTestimonials = showAll 
    ? landingPageTestimonialPosts 
    : landingPageTestimonialPosts.slice(0, initialDisplayCount);

  const handleToggleDisplay = () => {
    setShowAll(!showAll);
  };

  const handleToggleContent = (postId: number) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const renderContent = (content: string, postId: number) => {
    const words = content.split(' ');
    const isExpanded = expandedCards.has(postId);
    const shouldTruncate = words.length > wordLimit && !isExpanded;

    if (shouldTruncate) {
      const truncatedText = words.slice(0, wordLimit).join(' ') + '...';
      return (
        <div className="space-y-2 text-sm">
          <p>
            {truncatedText.split(' ').map((word, wordIndex) => (
              word.startsWith('@') || word.startsWith('#') 
                ? <span key={wordIndex} className="text-[#63B3ED]">{word} </span>
                : word + ' '
            ))}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleToggleContent(postId);
            }}
            className="text-[#ff0000] text-sm font-semibold hover:underline mt-2"
          >
            View more
          </button>
        </div>
      );
    }

    return (
      <div className="space-y-2 text-sm">
        {content.split('\n\n').map((paragraph, index) => (
          <p key={index}>
            {paragraph.split(' ').map((word, wordIndex) => (
              word.startsWith('@') || word.startsWith('#')
                ? <span key={wordIndex} className="text-[#63B3ED]">{word} </span>
                : word + ' '
            ))}
          </p>
        ))}
        {words.length > wordLimit && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleToggleContent(postId);
            }}
            className="text-[#ff0000] text-sm font-semibold hover:underline mt-2"
          >
            View less
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="bg-[#ffffff] p- mx-auto py-8 ">
      <div className="mx-auto max-w-6xl" >
        <h2 className="text-teal-500 text-md font-semibold text-center">
          HERE IT FROM THEM
        </h2>
        <h2 className="text-black text-2xl md:text-3xl font-bold mb-10 mt-2 text-center">
          Ambitious <span className ="text-[#ff0000]">Learner&apos;s <span className="text-[#ff0000] relative">
                  <div className="absolute -bottom-0.5 left-0 w-full h-0.5 " >
                     {/* eslint-disable-next-line react/jsx-no-undef */}
                     
                     <Image src={curveLine} alt="curve line" className='w-full mb-4' width={100} height={300}></Image>
                      {/* <curveLine></curveLine>  */}
                    </div>
                  </span> </span> ❤️ #13
        </h2>
        
        <div className="columns-1 md:columns-4 lg:columns-4 gap-4 space-y-4 max-w-5xl mx-auto ">
          {displayedTestimonials.map((post: Post) => (
            <Card
              key={post.id}
              className={`relative overflow-hidden bg-[#ffffff] text-black border border-gray-500 mb-4 break-inside-avoid`}
            >
              {post.videoUrl && post.id === 5 ? (
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
                <>
                  <CardHeader className="pb-2">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-12 w-12 flex-shrink-0">
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
                    {renderContent(post.content, post.id)}
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