import Image from 'next/image';
import { Button } from "@/components/ui/button";

const features = [
  {
    number: "1400+",
    title: "Hiring Partners",
    description: "Discover your dream job with personalized career",
    image: "/placeholder.svg?height=120&width=180"
  },
  {
    number: "200+",
    title: "Courses",
    description: "Match your goals with the right course",
    image: "/placeholder.svg?height=120&width=180"
  },
  {
    number: "250+",
    title: "Industry Experts",
    description: "Elevate your learning with engaging live classes",
    image: "/placeholder.svg?height=120&width=180"
  },
  {
    number: "500+",
    title: "Career Coaches",
    description: "Get advice on picking the right course",
    image: "/placeholder.svg?height=120&width=180"
  },
  {
    number: "300+",
    title: "Industry Problems",
    description: "Get job-ready with practical knowledge & real-world experience",
    image: "/placeholder.svg?height=120&width=180"
  }
];

// Define different widths for the cards
const cardWidths = [
  { width: '300px' },
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
        <div className="mb-8 lg:mb-0 pr-8 sticky top-12 flex flex-col items-center w-200">
          <h2 className="text-sm font-semibold text-gray-500 mb-2 text-center">LEARNER SUPPORT & SUCCESS</h2>
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
              className={`bg-white p-6 rounded-lg shadow-lg flex justify-between items-center relative border-b border-gray-200`}
              style={{
                width: cardWidths[index]?.width,
                borderTop: '4px solid transparent', // Keep the top border transparent to blend with the page
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1), 0 2px 20px rgba(0, 0, 0, 0.05)' // Custom shadow
              }}
            >
              <div className="flex-1 mr-4"> {/* Adjusting margin for space between text and image */}
                <h3 className="text-3xl font-bold mb-2">{feature.number}</h3>
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={120} // Adjust width for your needs
                  height={120} // Adjust height for your needs
                  className="rounded-md h-auto object-cover" // Removed width class to maintain aspect ratio
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
