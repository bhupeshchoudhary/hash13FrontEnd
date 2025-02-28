// data/analyst/analyst.ts
import { ReactNode } from 'react';

// Import company logos
import citibank from "../../public/assets/landingPage/companyLogo/citibank.png";
import dell from "../../public/assets/landingPage/companyLogo/dell.png";
import deloitte from "../../public/assets/landingPage/companyLogo/deloitte.png";
import google from "../../public/assets/landingPage/companyLogo/google.png";
import ibm from "../../public/assets/landingPage/companyLogo/ibm.png";
import intel from "../../public/assets/landingPage/companyLogo/intel.png";
import infosys from "../../public/assets/landingPage/companyLogo/infosys.png";
import jpmorgan from "../../public/assets/landingPage/companyLogo/jpmorgan.png";
import redhat from "../../public/assets/landingPage/companyLogo/redhat.png";
import microsoft from "../../public/assets/landingPage/companyLogo/mircosoft.png";
import {SalaryData, AnalystData, CourseAnalystData} from "../../types/analyst"




// Define company names type
export type CompanyName = 
  | "Citibank"
  | "Dell"
  | "Deloitte"
  | "Google"
  | "IBM"
  | "Intel"
  | "Infosys"
  | "JPMorgan"
  | "Redhat"
  | "Microsoft"
 



// Company logos mapping
export const companyLogos: Record<CompanyName, string> = {
  Citibank: citibank.src,
  Dell: dell.src,
  Deloitte: deloitte.src,
  Google: google.src,
  IBM: ibm.src,
  Intel: intel.src,
  Infosys: infosys.src,
  JPMorgan: jpmorgan.src,
  Redhat: redhat.src,
  Microsoft: microsoft.src,
 
 
};

// Analyst data for all courses
export const analystData: CourseAnalystData = {
  "specialisation-in-devops": {
    title: "Rising Demand",
    subtitle: "for DevOps since 2020",
    salary: {
      label: "Jobs in DevOps",
      values: [700000, 1200000, 1800000]
    },
    companies: [
      "Google",
      "Amazon",
      "Microsoft",
      "IBM",
      "Intel",
      "Redhat",
      "JPMorgan",
      "Deloitte",
      "Infosys"
    ] as CompanyName[],
    demand: 45,
    jobCount: "15,000+",
    description: "DevOps engineers in India have seen rising salaries due to growing demand driven by cloud computing, automation, and CI/CD practices. In 2024, entry-level salaries range from ₹4.1–15 lakh annually, with experienced professionals earning ₹15 lakh or more, reflecting the industry's focus on agile methodologies and scalable infrastructure.",
    yearLabel: "In 2025",
    salaryLabel: "Average Salaries",
    companiesLabel: "Companies Hiring",
    jobsLabel: "Available Jobs",
    jobsDescription: "Total jobs found online for DevOps"
  },

  
"specialisation-in-prometheus-grafana": {
  title: "Rising Demand",
  subtitle: "for Monitoring & Observability Experts",
  salary: {
    label: "Jobs in Prometheus & Grafana",
    values: [700000, 1200000, 1800000] // Entry, Mid, Senior level salaries in INR
  },
  companies: [
    "Accenture",
    "TCS",
    "Infosys",
    "Wipro",
    "IBM",
    "HCL",
    "Cognizant",
    "Capgemini",
    "Oracle",
    "Microsoft"
  ] as CompanyName[],
  demand: 35, // Percentage increase in demand
  jobCount: "3,900+", // Total of all job listings mentioned (750 + 1469 + 900 + 800)
  description: "Grafana & Prometheus Engineers in India are experiencing rising salaries due to the increasing demand for monitoring, observability, and real-time data visualization. In 2025, entry-level salaries range from ₹6–12 lakh annually, while experienced professionals earn ₹18 lakh or more, highlighting the critical role of Grafana in infrastructure monitoring, performance optimization, and data-driven decision-making.",
  yearLabel: "In 2025",
  salaryLabel: "Average Salaries",
  companiesLabel: "Companies Hiring",
  jobsLabel: "Available Jobs",
  jobsDescription: "Total jobs found across Naukri, Glassdoor, Indeed, and LinkedIn"
}
 
 
};

// Optional: Add validation function
export function isValidCompany(company: string): company is CompanyName {
  return company in companyLogos;
}

// Optional: Add helper function to get course data
export function getCourseAnalystData(courseId: string): AnalystData | undefined {
  return analystData[courseId];
}