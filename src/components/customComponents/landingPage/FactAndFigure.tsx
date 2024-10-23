"use client";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Asset18 from "../../../../public/assets/landingPage/Asset 18.svg";

const features = [
  {
    number: "100+",
    title: "Technical Programs",
    description: "Industry relevant content with real use cases",
    image: "/assets/landingPage/Asset 18.svg"
  },
  {
    number: "1M+",
    title: "Students Taught",
    description: `Technical students lives changed <br> from across the globe`,
    image: "/placeholder.svg?height=120&width=180"
  },
  {
    number: "22+",
    title: "Years of Experience",
    description: "Learn from the Mentor having world Records",
    image: "/placeholder.svg?height=120&width=180"
  },
  {
    number: "65k+",
    title: "IT Professionals",
    description: "Working in various companies across the globe benefitted",
    image: "/placeholder.svg?height=120&width=180"
  },
  {
    number: "200+",
    title: "Companies Benefited",
    description: "With our technology-based services",
    image: "/placeholder.svg?height=120&width=180"
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
    <div className="container mx-auto max-w-7xl py-12 px-6 lg:px-14">
      <div className="flex flex-col lg:flex-row items-start">
        {/* Left Side Section */}
        <div className="mb-8 lg:mb-0 pr-8 sticky top-12 flex flex-col items-center w-200">
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
              className={`bg-white p-6 rounded-lg shadow-lg flex justify-between items-center relative border-b border-gray-200 card`}
              style={{
                width: cardWidths[index]?.width,
                borderTop: 'solid transparent',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1), 0 2px 20px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div className="flex-1 mr-4">
                <h3 className="text-3xl font-bold mb-2">{feature.number}</h3>
                <h4
                  className="text-sm font-semibold mb-2"
                  style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {feature.title}
                </h4>
                <p
                  className="text-sm text-gray-600"
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                ></p>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={120}
                  height={120}
                  className="rounded-md h-auto object-cover"
                />
              </div>
            </div>
          ))}

          {/* Extra CSS for the last card */}
          <style jsx>{`
            .card:last-child {
              position: relative;
              border-top: 2px solid red; /* Horizontal top line */
            }

            .card:last-child::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 2px;
              background-color: red; /* Horizontal line over the last card */
            }

            .card:last-child::after {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              width: 2px;
              height: 100%;
              background-color: red; /* Vertical line over the last card */
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}
