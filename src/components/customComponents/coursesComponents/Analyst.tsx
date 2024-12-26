

"use client"

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Search, User } from "lucide-react";
import ChartComponent from "./courseDetails/ChartComponent";
import { data } from "../../../../data/analyst/analyst";
// Keep your existing types and data structure


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