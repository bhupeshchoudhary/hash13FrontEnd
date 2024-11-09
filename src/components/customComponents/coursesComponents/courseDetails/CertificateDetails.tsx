import React from "react";
import { FaCertificate, FaShareAlt, FaUserTie, FaSuitcase } from "react-icons/fa"; // Example icons
import Image from "next/image"; // If using Next.js for optimized image loading
import certificateimage  from "../../../../../public/assets/cources/courseDetails/certificateimage.png"


const CertificateDisplay: React.FC = () => {
  return (
    <div className="flex flex-col bg-white p-6 lg:p-12 rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* Title and Subtitle */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Get Certified</h1>
        <p className="text-lg">
          Yes! You will be <span className="text-red-500 font-semibold">certified</span> for this training once you submit the task given, if any.
        </p>
      </div>

      {/* Certification Info Cards */}
      <div className="space-y-6 mb-6">
        {/* Card 1 */}
        <div className="flex items-start space-x-4">
          <FaCertificate className="text-red-500 text-2xl" />
          <div>
            <h3 className="font-semibold text-xl">Official and verified:</h3>
            <p className="text-gray-600">
              Receive an instructor signed certificate with institution’s logo to verify your achievements and increase your job prospects.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start space-x-4">
          <FaShareAlt className="text-red-500 text-2xl" />
          <div>
            <h3 className="font-semibold text-xl">Easily shareable</h3>
            <p className="text-gray-600">
              Add the certificate to your CV or your Resume or post it directly on LinkedIn. You can even post it on Instagram and Twitter.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-start space-x-4">
          <FaUserTie className="text-red-500 text-2xl" />
          <div>
            <h3 className="font-semibold text-xl">Enhances Credibility</h3>
            <p className="text-gray-600">
              Use your certificate to enhance your professional credibility and stand out among your peers as an expert.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex items-start space-x-4">
          <FaSuitcase className="text-red-500 text-2xl" />
          <div>
            <h3 className="font-semibold text-xl">Increase potential opportunities</h3>
            <p className="text-gray-600">
              By showcasing your achieved skill set using your certificate, attracting the employer for the desired job opportunities becomes easy.
            </p>
          </div>
        </div>
      </div>

      {/* Certificate Image (Column View) */}
      <div className="mt-6 flex justify-center">
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={certificateimage} // Replace with actual path
            alt="Certificate Example"
            width={400}
            height={500}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CertificateDisplay;
