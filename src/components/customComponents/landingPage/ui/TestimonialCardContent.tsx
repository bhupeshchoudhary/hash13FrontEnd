// src/components/ui/CardContent.tsx
import React from 'react';

const TestimonialCardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="p-6">{children}</div>;
};

export default TestimonialCardContent