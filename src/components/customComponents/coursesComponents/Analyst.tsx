

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { BriefcaseIcon } from "lucide-react";

type TabData = {
  salary: { label: string; values: number[] };
  companies: string[];
  demand: number;
};

const data: Record<string, TabData> = {
  analyst: {
    salary: { label: "Max (10L)", values: [1200, 2500, 130] },
    companies: ["Citibank", "Dell", "Deloitte", "google", "IBM", "Infosys", "Intel", "JPMorgan"],
    demand: 45,
  },
  scientist: {
    salary: { label: "Max (15L)", values: [1500, 3000, 160] },
    companies: ["Zoho", "Wipro", "TCS", "Syfe", "Searce", "Deloitte", "Redhat", "PwC"],
    demand: 55,
  },
};

export default function Analyst() {
  const [activeTab, setActiveTab] = useState<"analyst" | "scientist">("analyst");

  const { salary, companies, demand } = data[activeTab];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-1">
          <p className="text-sm text-gray-600">Why DS/ML/AI Industry & Why Data Science?</p>
          <h1 className="space-y-1">
            <div className="text-3xl font-bold text-red-500">Rising Demand</div>
            <div className="text-3xl font-bold">for analytics and AI skills</div>
          </h1>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="analyst" className="w-full">
          <TabsList className="h-auto p-0 bg-transparent space-x-8">
            <TabsTrigger
              value="analyst"
              className={`relative h-auto px-0 pb-2 bg-transparent transition duration-300 ${
                activeTab === "analyst" ? "text-red-500" : "text-gray-600"
              }`}
              onClick={() => setActiveTab("analyst")}
            >
              <span className="text-base">Data Analyst</span>
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 ${
                  activeTab === "analyst" ? "bg-red-500" : "opacity-0"
                }`}
              />
            </TabsTrigger>
            <TabsTrigger
              value="scientist"
              className={`relative h-auto px-0 pb-2 bg-transparent transition duration-300 ${
                activeTab === "scientist" ? "text-red-500" : "text-gray-600"
              }`}
              onClick={() => setActiveTab("scientist")}
            >
              <span className="text-base">Data Scientist</span>
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 ${
                  activeTab === "scientist" ? "bg-red-500" : "opacity-0"
                }`}
              />
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Main Content - Shown for Both Tabs */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Salary Chart */}
          <Card className="p-6">
            <h3 className="font-semibold mb-6">Annual Average Salaries</h3>
            <div className="space-y-4">
              <div className="text-sm text-gray-600">No. of Learners</div>
              <div className="relative h-64">
                {/* Y-axis Labels */}
                <div className="absolute left-0 bottom-0 w-full h-[1px] bg-gray-200"></div>
                <div className="absolute -left-6 p-4 bottom-0 h-full flex flex-col justify-between text-xs text-gray-600">
                  <span>2.6K</span>
                  <span>1.95K</span>
                  <span>1.3K</span>
                  <span>0.65K</span>
                  <span>0K</span>
                </div>
                {/* Bar Chart */}
                <div className="absolute bottom-0 left-8 flex items-end space-x-6">
                  {salary.values.map((value, index) => (
                    <div key={index} className="space-y-2">
                      <div
                        className={`w-12 ${
                          index % 2 === 0 ? "bg-teal-500" : "bg-teal-300"
                        } rounded-t-lg`}
                        style={{
                          height: `${(value / 3000) * 100}%`, // Dynamically adjust height
                        }}
                      ></div>
                      <span className="text-xs text-gray-600">{value}K</span>
                    </div>
                  ))}
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-600">
                  {salary.label}
                </div>
              </div>
              <div className="text-sm text-gray-600 mt-8">Salary</div>
            </div>
          </Card>

          {/* Companies */}
          <Card className="p-6">
            <h3 className="font-semibold mb-6">Top Companies Hiring</h3>
            <div className="grid grid-cols-2 gap-6">
              {companies.map((company) => (
                <img
                  key={company}
                  // src={`/images/${company.toLowerCase()}.svg`} // Adjust path to your actual company logos
                  src={`/assets/landingPage/companyLogo/${company}.png` } // Adjust path to your actual company logos
                  alt={company}
                  className="h-8 object-contain"
                />
              ))}
            </div>
          </Card>

          {/* Demand */}
          <Card className="p-6">
            <h3 className="font-semibold mb-6">Demand</h3>
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-red-50 rounded-full p-4">
                <BriefcaseIcon className="w-12 h-12 text-red-500" />
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">{demand}%</div>
                <p className="text-sm text-gray-600">Year-On-Year<br />Growth in Job Postings</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer Text */}
        <p className="text-gray-600 text-sm max-w-4xl">
          Data scientists are highly valued for their ability to analyze big data, generate insights, and tackle everyday challenges, enhancing business profitability and improving society.
        </p>
      </div>
    </div>
  );
}











