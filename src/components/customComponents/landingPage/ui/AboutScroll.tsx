// "use client"
// import React from 'react';

// const AboutScroll = () => {
//   const logos = [
//     { src: "/assets/landingPage/companyLogo/google.png", alt: "Google" },
//     { src: "/assets/landingPage/companyLogo/tcs.png", alt: "TCS" },
//     { src: "/assets/landingPage/companyLogo/infosys.png", alt: "Infosys" },
//     { src: "/assets/landingPage/companyLogo/salesforce.png", alt: "Salesforce" },
//     { src: "/assets/landingPage/companyLogo/intel.png", alt: "Intel" },
//     { src: "/assets/landingPage/companyLogo/redhat.png", alt: "RedHat" },
//     { src: "/assets/landingPage/companyLogo/razorpay.png", alt: "Razorpay" },
//     { src: "/assets/landingPage/companyLogo/wipro.png", alt: "Wipro" },
//     { src: "/assets/landingPage/companyLogo/zoho.png", alt: "Zoho" },
//     { src: "/assets/landingPage/companyLogo/oracle.png", alt: "Oracle" },

//     { src: "/assets/landingPage/companyLogo/searce.png", alt: "searce" },
//     { src: "/assets/landingPage/companyLogo/syfe.png", alt: "syfe" },
//     { src: "/assets/landingPage/companyLogo/paytm.png", alt: "paytm" },
//     { src: "/assets/landingPage/companyLogo/pwc.png", alt: "pwc" },
//     { src: "/assets/landingPage/companyLogo/nykaa.png", alt: "nykaa" },

//     { src: "/assets/landingPage/companyLogo/npci.png", alt: "npci" },
//     { src: "/assets/landingPage/companyLogo/accenture.png", alt: "accenture" },
//     { src: "/assets/landingPage/companyLogo/jpmorgan.png", alt: "jpmorgan" },
//     { src: "/assets/landingPage/companyLogo/mircosoft.png", alt: "microsoft" },
//     { src: "/assets/landingPage/companyLogo/deloitte.png", alt: "deloitee" },

//     { src: "/assets/landingPage/companyLogo/dell.png", alt: "dell" },
//     { src: "/assets/landingPage/companyLogo/ibm.png", alt: "ibm" },

//   ];

//   return (
//     <div className="text-center my-20">
//       <h2 className="text-3xl font-bold mb-8">
//         Trusted By 400k+ Students Around The World & Placed in Global Big 5!
//       </h2>
      
//       <div className="relative overflow-hidden bg-white">
//         <div className="w-full inline-flex flex-nowrap">
//           {/* First scroll */}
//           <div className="flex items-center justify-center animate-marquee">
//             {logos.map((logo, index) => (
//               <div
//                 key={index}
//                 className="mx-2 w-20 md:w-32 lg:w-32 flex-shrink-0"
//               >
//                 <div className="w-14 md:w-20 lg:w-20  h-16 flex items-center justify-center">
//                   <img
//                     src={logo.src}
//                     alt={logo.alt}
//                     className="max-h-16 w-auto object-contain"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//           {/* Second scroll (duplicate) */}
//           <div className="flex items-center justify-center animate-marquee2" 
//                aria-hidden="true">
//             {logos.map((logo, index) => (
//               <div
//                 key={`duplicate-${index}`}
//                 className="mx-2 w-32 flex-shrink-0"
//               >
//                 <div className="w-28 h-16 flex items-center justify-center">
//                   <img
//                     src={logo.src}
//                     alt={logo.alt}
//                     className="max-h-16 w-auto object-contain"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutScroll;




"use client"
import React from 'react';
import Image from 'next/image'; // Using Next.js Image for optimization

// Move logos data to a separate file or constant
const COMPANY_LOGOS = [
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
  { src: "/assets/landingPage/companyLogo/searce.png", alt: "Searce" },
  { src: "/assets/landingPage/companyLogo/syfe.png", alt: "Syfe" },
  { src: "/assets/landingPage/companyLogo/paytm.png", alt: "Paytm" },
  { src: "/assets/landingPage/companyLogo/pwc.png", alt: "PWC" },
  { src: "/assets/landingPage/companyLogo/nykaa.png", alt: "Nykaa" },
  { src: "/assets/landingPage/companyLogo/npci.png", alt: "NPCI" },
  { src: "/assets/landingPage/companyLogo/accenture.png", alt: "Accenture" },
  { src: "/assets/landingPage/companyLogo/jpmorgan.png", alt: "JP Morgan" },
  { src: "/assets/landingPage/companyLogo/mircosoft.png", alt: "Microsoft" },
  { src: "/assets/landingPage/companyLogo/deloitte.png", alt: "Deloitte" },
  { src: "/assets/landingPage/companyLogo/dell.png", alt: "Dell" },
  { src: "/assets/landingPage/companyLogo/ibm.png", alt: "IBM" },
] as const;

// Logo component for better reusability
const LogoItem = ({ src, alt }: { src: string; alt: string }) => (
  <div className="mx-2 w-20 md:w-28 lg:w-32 flex-shrink-0">
    <div className="w-14 md:w-20 lg:w-24 h-12 md:h-16 flex items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={96}
        height={64}
        className="max-h-12 md:max-h-16 w-auto object-contain"
        loading="lazy"
      />
    </div>
  </div>
);

const AboutScroll = () => {
  return (
    <section className="py-10 md:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 lg:mb-10 text-center max-w-4xl mx-auto">
          Trusted By 400k+ Students Around The World & Placed in Global Big 5!
        </h2>
        
        <div className="relative w-full overflow-hidden bg-white">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Scrolling Content */}
          <div className="w-full inline-flex flex-nowrap">
            {/* First Scroll */}
            <div className="flex items-center justify-center animate-marquee whitespace-nowrap">
              {COMPANY_LOGOS.map((logo, index) => (
                <LogoItem key={`scroll1-${index}`} {...logo} />
              ))}
            </div>
            
            {/* Second Scroll (duplicate) */}
            <div 
              className="flex items-center justify-center animate-marquee2 whitespace-nowrap"
              aria-hidden="true"
            >
              {COMPANY_LOGOS.map((logo, index) => (
                <LogoItem key={`scroll2-${index}`} {...logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutScroll;