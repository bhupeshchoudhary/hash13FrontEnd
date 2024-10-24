// "use client";
// import Image from 'next/image';
// import { Button } from "@/components/ui/button";

// const features = [
//   {
//     number: "100+",
//     title: "Technical Programs",
//     description: "Industry relevant content with real use cases",
//     image: "/assets/FactsAndFigure/100+.png"
//   },
//   {
//     number: "1M+",
//     title: "Students Taught",
//     description: `Technical students lives changed <br> from across the globe`,
//     image: "/assets/FactsAndFigure/1-M.png"
//   },
//   {
//     number: "65k+",
//     title: "IT Professionals",
//     description: "Working in various companies across the globe benefitted",
//     image: "/assets/FactsAndFigure/65k-professionals.png"
//   },
//   {
//     number: "200+",
//     title: "Companies Benefited",
//     description: "With our technology-based services",
//     image: "/assets/FactsAndFigure/200+.png"
//   },
//   {
//     number: "300+",
//     title: "Industry Problems",
//     description: "Get job-ready with practical knowledge & real-world experience",
//     image: "/assets/FactsAndFigure/300-industry.png"
//   }
// ];

// // Define different widths for the cards
// const cardWidths = [
//   { width: '350px' },
//   { width: '500px' },
//   { width: '400px' },
//   { width: '400px' },
//   { width: '680px' }
// ];

// export default function FactsAndFigure() {
//   return (
//     <div className="container mx-auto max-w-7xl py-12 px-6 lg:px-14">
//       <div className="flex flex-col lg:flex-row items-start">
//         {/* Left Side Section */}
//         <div className="mb-8 lg:mb-0 pr-8 pl-6 sticky top-12 flex flex-col items-center w-200">
//           <h2 className="text-sm font-semibold text-gray-500 mb-2 text-center">
//             LEARNER SUPPORT & SUCCESS
//           </h2>
//           <h3 className="text-4xl font-bold mb-4 text-center">
//             What gives us <span className="text-red-500">an edge?</span>
//           </h3>
//           <Button className="bg-red-500 hover:bg-red-600 text-white">
//             Get started with hash13
//           </Button>
//         </div>

//         {/* Right Side Section with Card Contents */}
//         <div className="grid grid-cols-1 gap-6 ml-8" style={{ width: '1140px' }}>
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className={`bg-white pl-6 rounded-lg shadow-lg flex justify-between items-center relative border-b border-gray-200`}
//               style={{
//                 width: cardWidths[index]?.width,
//                 borderTop: 'solid transparent',
//                 boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1), 0 2px 20px rgba(0, 0, 0, 0.05)'
//               }}
//             >
//               {/* Container for Feature Data */}
//               <div className="flex-1 mr-4">
//                 <h3 className="text-3xl font-bold mb-2">{feature.number}</h3>
//                 <h4
//                   className="text-sm font-semibold mb-2"
//                   style={{
//                     whiteSpace: 'nowrap',
//                     overflow: 'hidden',
//                     textOverflow: 'ellipsis'
//                   }}
//                 >
//                   {feature.title}
//                 </h4>
//                 <p
//                   className="text-sm text-gray-600"
//                   dangerouslySetInnerHTML={{ __html: feature.description }}
//                 ></p>
//               </div>
              
//               {/* Container for Feature Image */}
//               <div className="flex-shrink-0 p-0">
//                 <Image
//                   src={feature.image}
//                   alt={feature.title}
//                   width={120}
//                   height={120}
//                   className="rounded-md h-auto object-cover w-full h-full rounded-br-8"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";
import Image from 'next/image';
import { Button } from "@/components/ui/button";

const features = [
  {
    number: "100+",
    title: "Technical Programs",
    description: "Industry relevant content with real use cases",
    image: "/assets/FactsAndFigure/100+.png"
  },
  {
    number: "1M+",
    title: "Students Taught",
    description: `Technical students' lives changed <br> from across the globe`,
    image: "/assets/FactsAndFigure/1-M.png"
  },
  {
    number: "65k+",
    title: "IT Professionals",
    description: "Working in various companies across the globe benefitted",
    image: "/assets/FactsAndFigure/65k-professionals.png"
  },
  {
    number: "200+",
    title: "Companies Benefited",
    description: "With our technology-based services",
    image: "/assets/FactsAndFigure/200+.png"
  },
  {
    number: "300+",
    title: "Industry Problems",
    description: "Get job-ready with practical knowledge & real-world experience",
    image: "/assets/FactsAndFigure/300-industry.png"
  }
];

// Define different widths for the cards
const cardWidths = [
  { width: '350px' },
  { width: '500px' },
  { width: '400px' },
  { width: '400px' },
  { width: '680px' }
];

export default function FactsAndFigure() {
  return (
    <div className="container mx-auto max-w-7xl py-12 pt-0 px-6 lg:px-14">
      <div className="flex flex-col lg:flex-row items-start">
        {/* Left Side Section */}
        <div className="mb-8 lg:mb-0 pr-8 pl-6 sticky top-12 flex flex-col items-center w-200">
          <h2 className="text-sm font-semibold text-gray-500 mb-2 text-center">
            LEARNER SUPPORT & SUCCESS
          </h2>
          <h3 className="text-4xl font-bold mb-4 text-center">
            What gives us <span className="text-red-500">an edge?</span>
          </h3>
          <Button className="bg-red-500 hover:bg-red-600 text-white">
            Get started with hash13
          </Button>
        </div>

        {/* Right Side Section with Card Contents */}
        <div className="grid grid-cols-1 gap-6 ml-8" style={{ width: '1140px' }}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white pl-6 rounded-lg shadow-lg flex justify-between items-center relative border-b border-gray-200`}
              style={{
                width: cardWidths[index]?.width,
                borderTop: 'solid transparent',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1), 0 2px 20px rgba(0, 0, 0, 0.05)',
              }}
            >
              {/* Container for Feature Data */}
              <div className="flex-1 mr-4">
                <h3 className="text-3xl font-bold mb-2 text-red-500">{feature.number}</h3>
                <h4
                  className="text-sm font-semibold mb-2 "
                  style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {feature.title}
                </h4>
                <p
                  className="text-sm text-gray-600"
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                ></p>
              </div>

              {/* Container for Feature Image */}
              <div className={`flex-shrink-0 p-0 ${index === 4 ? 'flex flex-col items-center' : ''}`}>
                {index === 4 ? (
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={400} // Increased width
                    height={180} // Increased height
                    className="rounded-md h-auto object-cover " // Added margin to separate from text
                  />
                ) : (
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={180}
                    height={120}
                    className="rounded-md h-auto object-cover"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
