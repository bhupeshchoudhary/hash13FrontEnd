// components/customComponents/coursesComponents/courseDetails/subComponents/LearnersCarousel.tsx
'use client'

import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { images, learners } from '../../../../../../data/keyOutComes/keyOutComes';

const LearnersCarousel = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  useEffect(() => {
    if (carouselRef.current) {
      // Get the total width of a single set of items
      const singleSetWidth = carouselRef.current.scrollWidth / 2;
      setWidth(singleSetWidth);

      // Start the animation
      controls.start({
        x: -singleSetWidth,
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      });
    }
  }, [controls]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        const singleSetWidth = carouselRef.current.scrollWidth / 2;
        setWidth(singleSetWidth);
        
        // Reset animation on resize
        controls.start({
          x: -singleSetWidth,
          transition: {
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          },
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [controls]);

  // Triple the items to ensure smooth infinite loop
  const tripleItems = [...learners, ...learners, ...learners];

  return (
    <div className="overflow-hidden relative">
      <motion.div
        ref={carouselRef}
        animate={controls}
        className="flex gap-4"
        onHoverStart={() => controls.stop()}
        onHoverEnd={() => {
          if (width) {
            controls.start({
              x: -width,
              transition: {
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              },
            });
          }
        }}
      >
        {tripleItems.map((learner, index) => (
          <div 
            key={`${learner.name}-${index}`} 
            className="flex flex-col items-center flex-shrink-0"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden mb-2">
              <Image
                src={learner.image}
                alt={learner.name}
                width={64}
                height={64}
                className="object-cover w-full h-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = images.defaultLearner;
                }}
                priority={index < learners.length} // Prioritize loading first set
              />
            </div>
            <div className="h-4 sm:h-5">
              <span className="text-xs sm:text-sm text-gray-600">
                {learner.company}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LearnersCarousel;