import React from "react";
import { FaCertificate, FaShareAlt, FaUserTie, FaSuitcase } from "react-icons/fa";
import Image from "next/image";
import certificateimage from "../../../../../public/assets/cources/courseDetails/certificateimage.png";

const CertificateDisplay: React.FC = () => {
  const certificationFeatures = [
    {
      icon: <FaCertificate className="text-red-500 text-xl" />,
      title: "Official and verified",
      description:
        "Receive an instructor signed certificate with institution's logo to verify your achievements and increase your job prospects.",
    },
    {
      icon: <FaShareAlt className="text-red-500 text-xl" />,
      title: "Easily shareable",
      description:
        "Add the certificate to your CV or Resume, or post it directly on LinkedIn, Instagram, and Twitter.",
    },
    {
      icon: <FaUserTie className="text-red-500 text-xl" />,
      title: "Enhances Credibility",
      description:
        "Use your certificate to enhance your professional credibility and stand out among your peers as an expert.",
    },
    {
      icon: <FaSuitcase className="text-red-500 text-xl" />,
      title: "Increase opportunities",
      description:
        "Showcase your achieved skill set using your certificate to attract employers for desired job opportunities.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-50 via-white to-red-50 py-6 sm:py-8 px-3">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
            Get Certified
          </h1>
          <p className="text-sm md:text-base text-gray-700 px-4">
            Earn your{" "}
            <span className="text-red-500 font-semibold">certification</span> upon
            completing the required tasks
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          {/* Features Grid */}
          <div className="w-full md:w-2/3 order-2 md:order-1">
            <div className="grid sm:grid-cols-2 gap-4">
              {certificationFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-col space-y-2">
                    <div className="p-2 bg-red-50 rounded-full w-fit">
                      {feature.icon}
                    </div>
                    <h3 className="text-base font-bold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificate Image */}
          <div className="w-full md:w-1/3 order-1 md:order-2 flex justify-center">
            <div className="w-[180px] sm:w-[220px] md:w-full max-w-[300px]">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white rounded-lg overflow-hidden">
                  <Image
                    src={certificateimage}
                    alt="Certificate Example"
                    width={300}
                    height={400}
                    className="object-cover w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
              </div>
              <div className="mt-3 text-center">
                <button className="bg-gradient-to-r from-red-600 to-red-400 text-white px-4 py-2 text-sm rounded-full font-medium hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto">
                  Preview Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateDisplay;