// "use client"

// import { useState } from "react";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { BriefcaseIcon } from "lucide-react";
// import ChartComponent from "./courseDetails/ChartComponent"; // Assuming the chart component is in the same folder

// // Define the types for your tab data
// type TabData = {
//   salary: { label: string; values: number[] };
//   companies: string[];
//   demand: number;
// };

// // Define the structure of the data for both "analyst" and "scientist" tabs
// const data: Record<string, TabData> = {
//   analyst: {
//     salary: { label: "Max (10L)", values: [1200, 2500, 1300] },
//     companies: ["Citibank", "Dell", "Deloitte", "Google", "IBM", "Infosys", "Intel", "JPMorgan"],
//     demand: 45,
//   },
//   scientist: {
//     salary: { label: "Max (15L)", values: [1500, 3000, 160] },
//     companies: ["Zoho", "Wipro", "TCS", "Syfe", "Searce", "Deloitte", "Redhat", "PwC"],
//     demand: 55,
//   },
// };

// const Analyst: React.FC = () => {
//   // Use state to manage the active tab
//   const [activeTab, setActiveTab] = useState<"analyst" | "scientist">("analyst");

//   // Get the corresponding data for the active tab
//   const { salary, companies, demand } = data[activeTab];

//   // Format data for chart (salary data, companies, demand)
//   const chartData = {
//     salaryData: salary.values,
//     companiesData: companies,
//     demandData: demand,
//   };

//   return (
//     <div className="bg-white px-4 py-8 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto space-y-8">
//         {/* Header */}
//         <div className="space-y-2">
//           <p className="text-xs sm:text-sm text-gray-700 font-semibold">
//             Why DS/ML/AI Industry & Why Data Science?
//           </p>
//           <h1 className="space-y-1">
//             <div className="text-2xl sm:text-3xl font-bold text-[#ff0000]">
//               Rising Demand
//             </div>
//             <div className="text-2xl sm:text-3xl font-bold">
//               for analytics and AI skills
//             </div>
//           </h1>
//         </div>

//         {/* Tabs */}
//         <Tabs defaultValue="analyst" className="w-full">
//           <TabsList className="h-auto p-0 bg-transparent flex space-x-4 sm:space-x-8">
//             <TabsTrigger
//               value="analyst"
//               className={`relative h-auto pb-2 bg-transparent transition duration-300 ${
//                 activeTab === "analyst" ? "text-red-500" : "text-gray-600"
//               }`}
//               onClick={() => setActiveTab("analyst")}
//             >
//               <span className="text-sm sm:text-base">Data Analyst</span>
//               <span
//                 className={`absolute bottom-0 left-0 w-full h-0.5 ${
//                   activeTab === "analyst" ? "bg-red-500" : "opacity-0"
//                 }`}
//               />
//             </TabsTrigger>
//             <TabsTrigger
//               value="scientist"
//               className={`relative h-auto pb-2 bg-transparent transition duration-300 ${
//                 activeTab === "scientist" ? "text-red-500" : "text-gray-600"
//               }`}
//               onClick={() => setActiveTab("scientist")}
//             >
//               <span className="text-sm sm:text-base">Data Scientist</span>
//               <span
//                 className={`absolute bottom-0 left-0 w-full h-0.5 ${
//                   activeTab === "scientist" ? "bg-red-500" : "opacity-0"
//                 }`}
//               />
//             </TabsTrigger>
//           </TabsList>
//         </Tabs>

//         {/* Main Content */}
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
//           {/* Salary Chart */}
//           <Card className="p-6 sm:p-6">
//             <h3 className="font-semibold mb-6 text-base sm:text-lg">
//               Annual Average Salaries
//             </h3>
//             <div className="space-y-4">
//               <div className="text-xs sm:text-sm text-gray-600">
//                 No. of Learners
//               </div>
//               <div className="relative h-48 sm:h-64">
//                 {/* Bar Chart for Salary */}
//                 <ChartComponent data={chartData.salaryData} label={salary.label}  />
//               </div>
//               <div className="text-xs sm:text-sm text-gray-600 mt-4 sm:mt-8">Salary</div>
//             </div>
//           </Card>

//           {/* Companies */}
//           <Card className="p-4 sm:p-6">
//             <h3 className="font-semibold mb-6 text-base sm:text-lg">Top Companies Hiring</h3>
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
//               {companies.map((company) => (
//                 <img
//                   key={company}
//                   src={`/assets/landingPage/companyLogo/${company}.png`}
//                   alt={company}
//                   className="h-6 sm:h-8 object-contain"
//                 />
//               ))}
//             </div>
//           </Card>

//           {/* Demand */}
//           <div className="flex flex-col space-y-2">
//             <Card className="p-4 sm:p-6 h-40 sm:h-48 md:h-52">
//               <CardContent className="flex flex-col items-center text-center justify-center h-full">
//                 <div className="text-center">
//                   <div className="text-3xl sm:text-4xl font-bold">{demand}%</div>
//                   <p className="text-xs sm:text-sm text-gray-600">
//                     Year-On-Year<br />
//                     Growth in Job Postings
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="p-4 sm:p-6 h-40 sm:h-48 md:h-52">
//               <CardContent className="flex flex-col items-center text-center justify-center h-full">
//                 <div className="flex flex-col items-center space-y-4">
//                   <div className="bg-red-50 rounded-full p-4">
//                     <BriefcaseIcon className="w-10 h-10 sm:w-12 sm:h-12 text-red-500" />
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>

//         {/* Footer Text */}
//         <p className="text-gray-600 text-xs sm:text-sm max-w-4xl">
//           Data scientists are highly valued for their ability to analyze big
//           data, generate insights, and tackle everyday challenges, enhancing
//           business profitability and improving society.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Analyst;




"use client"

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Search, User } from "lucide-react";
import ChartComponent from "./courseDetails/ChartComponent";

// Keep your existing types and data structure
type TabData = {
  salary: { label: string; values: number[] };
  companies: string[];
  demand: number;
};

const data: Record<string, TabData> = {
  analyst: {
    salary: { label: "Max (10L)", values: [1200, 2500, 1300] },
    companies: ["Citibank", "Dell", "Deloitte", "Google", "IBM", "Infosys", "Intel", "JPMorgan"],
    demand: 45,
  },
  scientist: {
    salary: { label: "Max (15L)", values: [1500, 3000, 160] },
    companies: ["Zoho", "Wipro", "TCS", "Syfe", "Searce", "Deloitte", "Redhat", "PwC"],
    demand: 55,
  },
};

const Analyst: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"analyst" | "scientist">("analyst");
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
          <p className="text-xs sm:text-sm text-gray-700 font-semibold">
            Why DS/ML/AI Industry & Why Data Science?
          </p>
          <div className="text-2xl sm:text-3xl font-bold text-[#ff0000]">
            Rising Demand <span className="text-black">for analytics and AI skills</span>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="analyst" className="w-full">
          <TabsList className="h-auto p-0 bg-transparent flex space-x-4 sm:space-x-8">
            <TabsTrigger
              value="analyst"
              className={`relative h-auto pb-2 bg-transparent transition duration-300 ${
                activeTab === "analyst" ? "text-red-500" : "text-gray-600"
              }`}
              onClick={() => setActiveTab("analyst")}
            >
              <span className="text-sm sm:text-base">Data Analyst</span>
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 ${
                  activeTab === "analyst" ? "bg-red-500" : "opacity-0"
                }`}
              />
            </TabsTrigger>
            <TabsTrigger
              value="scientist"
              className={`relative h-auto pb-2 bg-transparent transition duration-300 ${
                activeTab === "scientist" ? "text-red-500" : "text-gray-600"
              }`}
              onClick={() => setActiveTab("scientist")}
            >
              <span className="text-sm sm:text-base">Data Scientist</span>
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 ${
                  activeTab === "scientist" ? "bg-red-500" : "opacity-0"
                }`}
              />
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Salary Chart */}
          <Card className="h-72">
            <span className="font-semibold mb-6 text-base sm:text-md border-2 rounded-br-lg rounded-tl-lg pr-4 pl-4 bg-red-200 border-red-200">
              Average Salaries
            </span>
            <div className="space-y-4 p-4">
              <span className="text-[#ff0000] md:text-sm font-medium bg-red-100/50 px-3 py-1 rounded-full animate-pulse">
                After 2019
              </span>
              <div className="relative sm:h-64">
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
              {companies.map((company) => (
                <img
                  key={company}
                  src={`/assets/landingPage/companyLogo/${company}.png`}
                  alt={company}
                  className="h-6 sm:h-12 object-contain"
                />
              ))}
            </div>
          </Card>

          {/* Available Jobs Card */}
          <Card className="w-full max-w-sm bg-white">
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

              {/* Stats Section */}
              <div className="relative pt-8">
                <div
                  className="absolute inset-x-0 top-0 h-40 bg-red-50 rounded-full scale-[1.3]"
                  style={{
                    borderRadius: "200%/400% 400% 0 0",
                    transform: "scaleX(0.9)",
                  }}
                />
                <div className="relative text-center space-y-2">
                  <h2 className="text-4xl font-bold text-gray-900">{demand}%</h2>
                  <p className="text-gray-600">
                    Year-On-Year<br />
                    Growth in Job Postings
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer Text */}
        <p className="text-gray-600 text-xs sm:text-sm max-w-6xl">
          Data scientists are highly valued for their ability to analyze big data,
          generate insights, and tackle everyday challenges, enhancing business
          profitability and improving society.
        </p>
      </div>
    </div>
  );
}

export default Analyst;