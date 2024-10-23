// src/components/ui/TestimonialCard.tsx
import React from 'react';
import CardContent from './TestimonialCardContent'; // Now imported from its own file
import { Avatar, AvatarFallback, AvatarImage } from './Avatart'; // Adjust path if necessary

interface TestimonialCardProps {
  quote: string;
  name: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, avatar }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-xl shadow-lg mb-6 p-2 w-68"> {/* Adjusted padding and width here */}
      <CardContent>
        {/* Added starting double quotes and styling */}
        <p className="text-sm text-gray-600 mb-6 relative">
          <span className="text-3xl font-bold text-teal-500 absolute top-0 left-0 -ml-6">“</span> {/* Larger double quote */}
          {quote}
        </p>
      </CardContent>
      
      {/* Separator dots */}
      <div className="flex justify-center mb-4">
        <span className="text-gray-400">•••••••••••••••••••••••••••••••••••• </span> {/* Dots as a separator */}
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
    </div>
  );
};

export default TestimonialCard;
