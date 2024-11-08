"use client"
import React from 'react';

const MentorFeatured = () => {
  const logos = [
    { src: "/assets/landingPage/companyLogo/google.png", alt: "Google" },
    { src: "/assets/landingPage/companyLogo/tcs.png", alt: "TCS" },
    { src: "/assets/landingPage/companyLogo/infosys.png", alt: "Infosys" },
    { src: "/assets/landingPage/companyLogo/salesforce.png", alt: "Salesforce" },
    { src: "/assets/landingPage/companyLogo/intel.png", alt: "Intel" },
    { src: "/assets/landingPage/companyLogo/redhat.png", alt: "RedHat" },
    { src: "/assets/landingPage/companyLogo/razorpay.png", alt: "Razorpay" },
    { src: "/assets/landingPage/companyLogo/wipro.png", alt: "Wipro" },
    { src: "/assets/landingPage/companyLogo/zoho.png", alt: "Zoho" },
    { src: "/assets/landingPage/companyLogo/oracle.png", alt: "Oracle" },

    { src: "/assets/landingPage/companyLogo/searce.png", alt: "searce" },
    { src: "/assets/landingPage/companyLogo/syfe.png", alt: "syfe" },
    { src: "/assets/landingPage/companyLogo/paytm.png", alt: "paytm" },
    { src: "/assets/landingPage/companyLogo/pwc.png", alt: "pwc" },
    { src: "/assets/landingPage/companyLogo/nykaa.png", alt: "nykaa" },

    { src: "/assets/landingPage/companyLogo/npci.png", alt: "npci" },
    { src: "/assets/landingPage/companyLogo/accenture.png", alt: "accenture" },
    { src: "/assets/landingPage/companyLogo/jpmorgan.png", alt: "jpmorgan" },
    { src: "/assets/landingPage/companyLogo/mircosoft.png", alt: "microsoft" },
    { src: "/assets/landingPage/companyLogo/deloitte.png", alt: "deloitee" },

    { src: "/assets/landingPage/companyLogo/dell.png", alt: "dell" },
    { src: "/assets/landingPage/companyLogo/ibm.png", alt: "ibm" },

  ];

  return (
   
      
      <div className="relative overflow-hidden bg-white">
        <div className="w-full inline-flex flex-nowrap">
          {/* First scroll */}
          <div className="flex items-center justify-center animate-marquee">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="mx-2 w-32 flex-shrink-0"
              >
                <div className="w-28 h-16 flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Second scroll (duplicate) */}
          <div className="flex items-center justify-center animate-marquee2" 
               aria-hidden="true">
            {logos.map((logo, index) => (
              <div
                key={`duplicate-${index}`}
                className="mx-2 w-32 flex-shrink-0"
              >
                <div className="w-28 h-16 flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
   
  );
};

export default MentorFeatured;