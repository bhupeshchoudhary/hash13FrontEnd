import React from 'react';
import CardContent from './TestimonialCardContent'; // Now imported from its own file
import { Avatar, AvatarFallback, AvatarImage } from './Avatart'; // Adjust path if necessary

interface TestimonialCardProps {
  quote?: string; // Make quote optional since video may be present
  videoUrl?: string; // New prop for video URL
  name: string;
  avatar: string;
  dynamicText?: string; // Optional prop for dynamic text (e.g., "in", "g", or anything)
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, videoUrl, name, avatar, dynamicText = "in" }) => {
  // Default video URL (You can change this to any default video you want)
  const defaultVideoUrl = "https://www.youtube.com/shorts/Lnssbtd7YvU"; // Example default video URL



  return (
    <div className="bg-white border-2 border-gray-300 rounded-xl shadow-lg mb-6 relative w-full h-auto">
      {/* Dynamic text background at the top right corner */}
      <div className="absolute top-2 right-2 bg-gray-500 text-white text-lg font-semibold px-2 py-1 rounded-bl-lg rounded-tr-lg z-10 translate-x-2 -translate-y-2 transition-all duration-300 hover:bg-teal-500 hover:scale-110 hover:translate-x-1 hover:-translate-y-1 cursor-pointer">
        {dynamicText}
      </div>

      <CardContent>
        {videoUrl ? (
          // Render the YouTube video using an iframe
          <div className="relative w-full h-0" style={{ paddingBottom: '156.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        ) : (
          // Otherwise, render the quote text with padding
          <p className="text-sm text-gray-600 mb-6 relative p-4"> {/* Add padding only for quote */}
            {quote}
          </p>
        )}
      </CardContent>

      {/* Show separator dots and name only if videoUrl is not provided */}
      {!videoUrl && (
        <>
          {/* Separator dots */}
          <div className="flex justify-center mb-4">
            <span className="text-gray-400">•••••••••••••••••••••••••••••••••••• </span>
          </div>

          {/* Avatar and name section */}
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold text-gray-800">{name}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TestimonialCard;
