'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";


export default function DiscordCommunity() {
  const useIntersectionObserver = (
    ref: React.RefObject<Element>,
    options: IntersectionObserverInit = {
      threshold: 0.1,
      root: null,
      rootMargin: "0px",
    }
  ): boolean => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting);
      }, options);

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        observer.disconnect();
      };
    }, [ref, options]);

    return isIntersecting;
  };

  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1 });

  // State for modal visibility and selected image
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Add these after existing useState declarations
  const [isVideoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Add this after handleImageClick function
      const handleVideoClick = (videoSrc: string) => {
        setSelectedVideo(videoSrc);
        setVideoModalOpen(true);
      };

    const closeVideoModal = () => {
      setVideoModalOpen(false);
      setSelectedVideo(null);
    };

      const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
  <div className="bg-[#ff0000]">
    <div className="flex max-w-5xl mx-auto flex-col lg:flex-row w-full gap-8 bg-[#ff0000] p-8 md:rounded-lg">
      <div className="container sm:px-6 mx-auto pt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center max-w-6xl">
        {/* Left side with code screenshots */}
        <div
          ref={ref}
          className={`relative grid grid-cols-2 gap-4 mt-20 mb-32 transition-transform duration-1000 ease-out`}
        >
          <div className="relative col-span-2">
    {/* First card - Image */}
    <Image
      src="/dis3.png"
      alt="Code editor screenshot"
      width={300}
      height={220}
      className={`border-4 rounded-lg shadow-lg ml-[30%] transform transition-all duration-1000 ease-out ${
      isIntersecting ? "translate-y-[-40px]" : "translate-y-[50px]"
        }`}
        onClick={() => handleImageClick("/dis3.png")}
      />

    {/* Fourth card - Image */}
    <Image
      src="/dis3.png"
      alt="Code editor screenshot"
      width={300}
      height={220}
      className={`border-4 rounded-lg shadow-lg ml-[50%] transform transition-all duration-1000 ease-out ${
      isIntersecting 
      ? "translate-y-[-20px] translate-x-[-30px]"
      : "translate-y-[30px] translate-x-0"
        }`}
        onClick={() => handleImageClick("/dis3.png")}
      />
  
      {/* Second card - Image */}
      <Image
        src="/dis4.png"
        alt="Code editor screenshot"
        width={300}
        height={220}
        className={`border-4 absolute bottom-[60%] left-[10%] rounded-lg shadow-lg transform transition-all duration-1000 ease-out ${
      isIntersecting
        ? "translate-y-[-0px] translate-x-[10px]"
        : "translate-y-[80px] translate-x-10"
     }`}
    onClick={() => handleImageClick("/dis4.png")}
    />
  
      {/* Third card - Video */}
      <div
    className={`border-4 absolute top-[60%] right-[40%] rounded-lg shadow-lg transform transition-all duration-1000 ease-out ${
      isIntersecting
        ? "translate-y-[-10px] translate-x-[-10px]"
        : "translate-y-[40px] translate-x-10"
    }`}
   >
    {/* todo  in Image we have onClick handler when user click on it then we open image in modal, I want to similar feature in video to, when user click on video then open in video in a modal */}
    <video
      width={300}
      height={220}
      autoPlay
      muted
      loop
      playsInline
      className="rounded-lg cursor-pointer"
      onClick={() => handleVideoClick("/assets/video.mp4")}
        >
        <source src="/assets/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
          </video>
            </div>
          </div>
        </div>

        {/* Right side with content */}
        <div className="space-y-6 text-center sm:px-0">
          <h1 className="text-2xl sm:text-3xl md:text-3xl text-white font-bold ">
            Exclusive{" "}
            <span className="text-[#ffffff] text-3xl font-bold">Discord Community</span>
          </h1>
          <p className="text-lg sm:text-lg pb-4 text-white">
            Get 1:1 technical doubt support from our team & elite Discord
            community for lifetime
          </p>
          <a href="https://bit.ly/41nbzpy" target="_blank" className="pt-8">
            <button className="bg-[#ffffff] text-black px-6 py-3 rounded-lg text-base sm:text-lg hover:shadow-white hover:shadow-md transition-all flex items-center font-bold justify-center mx-auto">
            Visit our Discord
              <span className="ml-2">→</span>
            </button>
          </a>
        </div>
      </div>

      {/* Modal for large image view */}
      {isModalOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Enlarged view"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}


      {/* Video Modal */}
      {isVideoModalOpen && selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeVideoModal}
        >
    <div className="relative">
      <video
        width={800}
        height={600}
        controls
        autoPlay
        className="rounded-lg"
      >
        <source src={selectedVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button
        className="absolute top-4 right-4 text-white text-2xl"
        onClick={closeVideoModal}
      >
        &times;
      </button>
    </div>
   </div>

)}
    </div>
    </div>
  );
}
