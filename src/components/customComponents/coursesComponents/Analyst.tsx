// "use client";

// import { useState } from "react";
// //import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Card } from "@/components/ui/card";
// //import { BriefcaseIcon } from "lucide-react";
// import ChartComponent from "./courseDetails/ChartComponent"; // Assuming the chart component is in the same folder
// import { Search, User } from "lucide-react";

// // Define the types for your tab data
// type TabData = {
//   salary: { label: string; values: number[] };
//   companies: string[];
//   demand: number;
// };

// // Define the structure of the data for the "analyst" tab
// const data: Record<string, TabData> = {
//   analyst: {
//     salary: { label: "Jobs in DevOps", values: [700000, 1200000, 1800000] },
//     companies: ["Citibank", "Dell", "Deloitte", "Google", "IBM", "Infosys", "Intel", "JPMorgan", "Redhat"],
//     demand: 45,
//   },
// };

// // Mapping for company logos


// const Analyst: React.FC = () => {
//   // Use state to manage the active tab
//   const [activeTab, setActiveTab] = useState("analyst");

//   // Get the corresponding data for the active tab
//   const { salary, companies, demand } = data[activeTab];

//   const chartData = {
//     salaryData: salary.values,
//     companiesData: companies,
//     demandData: demand,
//   };

//   return (
//     <div className="bg-gradient-to-br from-gray-50 via-black-50 to-gray-100 px-4 py-8 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto space-y-8">
//         {/* Header */}
//         <div className="space-y-2">
           
          
//             <div className="text-3xl sm:text-3xl  font-bold text-[#ff0000] text-center">
//               Rising Demand <span className="text-black"> for DevOps since 2020 </span>
//             </div>
            
          
//         </div>

//         {/* Main Content */}
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
//           {/* Salary Chart */}
//           <Card className="h-72">
//             <span className="font-semibold mb-6 text-base sm:text-md border-2 rounded-br-lg rounded-tl-lg pr-4 pl-4 bg-red-200 border-red-200">
//               Average Salaries
//             </span>
//             <div className="space-y-4 p-4">
//               <span className="text-[#ff0000] md:text-sm  font-medium bg-gray-100/50 px-3 py-1 rounded-full animate-pulse">In 2025</span>
//               <div className="relative sm:h-64">
//                 {/* Bar Chart for Salary */}
//                 <ChartComponent data={chartData.salaryData} label={salary.label} />
//               </div>
//             </div>
//           </Card>

//           {/* Companies */}
//           <Card className="h-72">
//             <span className="font-semibold mb-6 text-base sm:text-md border-2 rounded-br-lg rounded-tl-lg pr-4 pl-4 bg-red-200 border-red-200">
//               Companies Hiring
//             </span>
//             <div className="grid grid-cols-2 p-4 sm:grid-cols-3 gap-4 pt-10 sm:gap-6">
//               {companies.map((company) => {
//                 const logoPath = companyLogos[company];
//                 return (
//                   <img
//                     key={company}
//                     src={logoPath.toString()}
//                     alt={company}
//                     height={80}
//                     width={80}
//                     className="h-6 sm:h-12 object-contain"
//                   />
//                 );
//               })}
//             </div>
//           </Card>

//           {/* Updated Jobs Card */}
//           <Card className="w-full max-w-sm  bg-white">
//             <div className="space-y-6">
//             <span className="font-semibold mb-6 text-base sm:text-md border-2 rounded-br-lg rounded-tl-lg pr-4 pl-4 bg-red-200 border-red-200">
//               Available Jobs
//             </span>

//               {/* Icons Row */}
//               <div className="flex justify-center items-center gap-2 relative">
//                 {/* Left side icons */}
//                 {[...Array(3)].map((_, i) => (
//                   <div
//                     key={`left-${i}`}
//                     className="w-8 h-8 rounded-full border-2 border-gray-100 bg-gray-50 flex items-center justify-center"
//                   >
//                     <User className="w-4 h-4 text-gray-400" />
//                   </div>
//                 ))}

//                 {/* Center search icon */}
//                 <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center relative z-10">
//                   <Search className="w-5 h-5 text-red-500" />
//                 </div>

//                 {/* Right side icons */}
//                 {[...Array(3)].map((_, i) => (
//                   <div
//                     key={`right-${i}`}
//                     className="w-8 h-8 rounded-full border-2 border-gray-100 bg-gray-50 flex items-center justify-center"
//                   >
//                     <User className="w-4 h-4 text-gray-400" />
//                   </div>
//                 ))}
//               </div>

//               {/* Stats Section with Curved Background */}
//               <div className="relative pt-8">
//                 <div
//                   className="absolute inset-x-0  top-0 h-40 bg-gray-50 rounded-full scale-[1.3]"
//                   style={{
//                     borderRadius: "200%/400% 400% 0 0",
//                     transform: "scaleX(0.9)",
//                   }}
//                 />  
//                 <div className="relative text-center  space-y-2 ">
//                   <h2 className="text-4xl font-bold text-gray-900">15,000+</h2>
//                   <p className="text-gray-600">
//                     Total jobs found online
//                     <br />
//                     for <span className="font-medium">DevOps</span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </Card>
//         </div>

//         {/* Footer Text */}
//         <p className="text-gray-600 text-sm sm:text-sm max-w-6xl">
//        The average salary for DevOps engineers in India has surged from ₹7 LPA in 2019 to ₹18 LPA by 2023, driven by growing demand for cloud computing, automation, and CI/CD practices. As industries adopt agile methodologies, DevOps expertise remains highly valued, offering lucrative career prospects.
//        </p>
//       </div>
//     </div>
//   );
// };

// export default Analyst;



"use client";

import { useState } from "react";
//import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
//import { BriefcaseIcon } from "lucide-react";
import ChartComponent from "./courseDetails/ChartComponent"; // Assuming the chart component is in the same folder
import { Search, User } from "lucide-react";

import citibank from "../../../../public/assets/landingPage/companyLogo/citibank.png"
import dell from "../../../../public/assets/landingPage/companyLogo/dell.png"
import deloitte from "../../../../public/assets/landingPage/companyLogo/deloitte.png"
import google from "../../../../public/assets/landingPage/companyLogo/google.png"
import ibm from "../../../../public/assets/landingPage/companyLogo/ibm.png"
import intel from "../../../../public/assets/landingPage/companyLogo/intel.png"
import infosys from "../../../../public/assets/landingPage/companyLogo/infosys.png"
import jpmorgan from "../../../../public/assets/landingPage/companyLogo/jpmorgan.png"
import redhat from "../../../../public/assets/landingPage/companyLogo/redhat.png"

// Define the types for your tab data
type TabData = {
  salary: { label: string; values: number[] };
  companies: string[];
  demand: number;
};

// Define the structure of the data for the "analyst" tab
const data: Record<string, TabData> = {
  analyst: {
    salary: { label: "Jobs in DevOps", values: [700000, 1200000, 1800000] },
    companies: ["Citibank", "Dell", "Deloitte", "Google", "IBM", "Infosys", "Intel", "JPMorgan", "Redhat"],
    demand: 45,
  },
};

const companyLogos: Record<string, string> = {
  Citibank: citibank.src,
  Dell: dell.src,
  Deloitte: deloitte.src,
  Google: google.src,
  IBM: ibm.src,
  Infosys: infosys.src,
  Intel: intel.src,
  JPMorgan: jpmorgan.src,
  Redhat: redhat.src,
};

const Analyst: React.FC = () => {
  // Use state to manage the active tab
  const [activeTab, setActiveTab] = useState("analyst");

  // Get the corresponding data for the active tab
  const { salary, companies, demand } = data[activeTab];

  const chartData = {
    salaryData: salary.values,
    companiesData: companies,
    demandData: demand,
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
           
          
            <div className="text-3xl sm:text-3xl  font-bold text-[#ff0000] text-center">
              Rising Demand <span className="text-black"> for DevOps since 2020 </span>
            </div>
            
          
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Salary Chart */}
          <Card className="h-72">
            <span className="font-semibold mb-6 text-base sm:text-md border-2 rounded-br-lg rounded-tl-lg pr-4 pl-4 bg-red-200 border-red-200">
              Average Salaries
            </span>
            <div className="space-y-4 p-4">
              <span className="text-[#ff0000] md:text-sm  font-medium bg-red-100/50 px-3 py-1 rounded-full animate-pulse">In 2025</span>
              <div className="relative sm:h-64">
                {/* Bar Chart for Salary */}
                <ChartComponent data={chartData.salaryData} label={salary.label} />
              </div>
            </div>
          </Card>

          {/* Companies */}
          <Card className="h-72">
            <span className="font-semibold mb-6 text-base sm:text-md border-2 rounded-br-lg rounded-tl-lg pr-4 pl-4 bg-red-200 border-red-200">
              Companies Hiring
            </span>
            <div className="grid grid-cols-2 p-4 sm:grid-cols-3 gap-4 pt-10 sm:gap-6">
              {companies.map((company) => {
                const logoPath = companyLogos[company];
                return (
                  <img
                    key={company}
                    src={logoPath.toString()}
                    alt={company}
                    height={80}
                    width={80}
                    className="h-6 sm:h-12 object-contain"
                  />
                );
              })}
            </div>
          </Card>

          {/* Updated Jobs Card */}
          <Card className="w-full max-w-sm  bg-white">
            <div className="space-y-6">
            <span className="font-semibold mb-6 text-base sm:text-md border-2 rounded-br-lg rounded-tl-lg pr-4 pl-4 bg-red-200 border-red-200">
              Available Jobs
            </span>

              {/* Icons Row */}
              <div className="flex justify-center items-center gap-2 relative">
                {/* Left side icons */}
                {[...Array(3)].map((_, i) => (
                  <div
                    key={`left-${i}`}
                    className="w-8 h-8 rounded-full border-2 border-gray-100 bg-gray-50 flex items-center justify-center"
                  >
                    <User className="w-4 h-4 text-gray-400" />
                  </div>
                ))}

                {/* Center search icon */}
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center relative z-10">
                  <Search className="w-5 h-5 text-red-500" />
                </div>

                {/* Right side icons */}
                {[...Array(3)].map((_, i) => (
                  <div
                    key={`right-${i}`}
                    className="w-8 h-8 rounded-full border-2 border-gray-100 bg-gray-50 flex items-center justify-center"
                  >
                    <User className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
              </div>

              {/* Stats Section with Curved Background */}
              <div className="relative pt-8">
                <div
                  className="absolute inset-x-0  top-0 h-40 bg-red-50 rounded-full scale-[1.3]"
                  style={{
                    borderRadius: "200%/400% 400% 0 0",
                    transform: "scaleX(0.9)",
                  }}
                />  
                <div className="relative text-center  space-y-2 ">
                  <h2 className="text-4xl font-bold text-gray-900">15,000+</h2>
                  <p className="text-gray-600">
                    Total jobs found online
                    <br />
                    for <span className="font-medium">DevOps</span>
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer Text */}
        <p className="text-gray-600 text-sm sm:text-sm max-w-6xl">
        DevOps engineers in India have seen rising salaries due to growing demand driven by cloud computing, automation, and CI/CD practices. In 2024, entry-level salaries range from ₹4.1–15 lakh annually, with experienced professionals earning ₹15 lakh or more, reflecting the industry&apos;s focus on agile methodologies and scalable infrastructure.
        </p>
      </div>
    </div>
  );
};

export default Analyst;
