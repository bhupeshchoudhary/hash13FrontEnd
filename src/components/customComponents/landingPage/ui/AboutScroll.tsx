"use client"
import React from 'react';

const AboutScroll = () => {
    const logos = [
        { src: "/assets/landingPage/companyLogo/google.png", alt: "Coursera" },
        { src: "/assets/landingPage/companyLogo/tcs.png", alt: "HubSpot" },
        { src: "/assets/landingPage/companyLogo/infosys.png", alt: "Udemy" },
        { src: "/assets/landingPage/companyLogo/salesforce.png", alt: "Trustpilot" },
        { src: "/assets/landingPage/companyLogo/intel.png", alt: "British Council" },
    
        // { src: "/assets/landingPage/companyLogo/redhat.png", alt: "Coursera" },
        // { src: "/assets/landingPage/companyLogo/razorpay.png", alt: "HubSpot" },
        // { src: "/assets/landingPage/companyLogo/wipro.png", alt: "Udemy" },
        // { src: "/assets/landingPage/companyLogo/zoho.png", alt: "Trustpilot" },
        // { src: "/assets/landingPage/companyLogo/oracle.png", alt: "British Council" }
      ];

  return (
    <div className="text-center my-20">
      <h2 className="text-xl font-bold mb-4">
        Trusted By 400k+ Students Around The World & Placed in Global Big 5!
      </h2>
      
      <div className="relative overflow-hidden bg-white">
        {/* First scroll container */}
        <div className="flex animate-marquee whitespace-nowrap">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="mx-4 flex items-center opacity-100"  // Updated spacing and removed hover effect
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-20 object-contain"  // Increased size
              />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div 
              key={`duplicate-${index}`}
              className="mx-4 flex items-center opacity-100"  // Updated spacing and removed hover effect
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-20 object-contain"  // Increased size
              />
            </div>
          ))}
        </div>

        {/* Second scroll container for seamless loop */}
        <div className="flex absolute top-0 animate-marquee2 whitespace-nowrap">
          {logos.map((logo, index) => (
            <div 
              key={`second-${index}`}
              className="mx-4 flex items-center opacity-100"  // Updated spacing and removed hover effect
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-20 object-contain"  // Increased size
              />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div 
              key={`second-duplicate-${index}`}
              className="mx-4 flex items-center opacity-100"  // Updated spacing and removed hover effect
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-20 object-contain"  // Increased size
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutScroll;
