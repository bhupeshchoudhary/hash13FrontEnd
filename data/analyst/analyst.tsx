// data/analyst/analyst.ts
import { ReactNode } from 'react';

// Import company logos
import citibank from "../../../public/assets/landingPage/companyLogo/citibank.png";
import dell from "../../../public/assets/landingPage/companyLogo/dell.png";
import deloitte from "../../../public/assets/landingPage/companyLogo/deloitte.png";
import google from "../../../public/assets/landingPage/companyLogo/google.png";
import ibm from "../../../public/assets/landingPage/companyLogo/ibm.png";
import intel from "../../../public/assets/landingPage/companyLogo/intel.png";
import infosys from "../../../public/assets/landingPage/companyLogo/infosys.png";
import jpmorgan from "../../../public/assets/landingPage/companyLogo/jpmorgan.png";
import redhat from "../../../public/assets/landingPage/companyLogo/redhat.png";
import microsoft from "../../../public/assets/landingPage/companyLogo/microsoft.png";
import amazon from "../../../public/assets/landingPage/companyLogo/amazon.png";
import meta from "../../../public/assets/landingPage/companyLogo/meta.png";
import adobe from "../../../public/assets/landingPage/companyLogo/adobe.png";
import salesforce from "../../../public/assets/landingPage/companyLogo/salesforce.png";
import oracle from "../../../public/assets/landingPage/companyLogo/oracle.png";

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
  | "Amazon"
  | "Meta"
  | "Adobe"
  | "Salesforce"
  | "Oracle";

// Define interfaces
export interface SalaryData {
  label: string;
  values: number[];
}

export interface AnalystData {
  title: string;
  subtitle: string;
  salary: SalaryData;
  companies: CompanyName[];
  demand: number;
  jobCount: string;
  description: string;
  yearLabel: string;
  salaryLabel: string;
  companiesLabel: string;
  jobsLabel: string;
  jobsDescription: string;
}

export interface CourseAnalystData {
  [courseId: string]: AnalystData;
}

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
  Amazon: amazon.src,
  Meta: meta.src,
  Adobe: adobe.src,
  Salesforce: salesforce.src,
  Oracle: oracle.src,
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

  "data-science-specialisation": {
    title: "Growing Demand",
    subtitle: "for Data Scientists",
    salary: {
      label: "Jobs in Data Science",
      values: [800000, 1500000, 2200000]
    },
    companies: [
      "Google",
      "Microsoft",
      "Amazon",
      "Meta",
      "IBM",
      "JPMorgan",
      "Deloitte",
      "Adobe",
      "Oracle"
    ] as CompanyName[],
    demand: 60,
    jobCount: "20,000+",
    description: "Data Scientists are experiencing unprecedented demand across industries. The field offers competitive salaries ranging from ₹5-25 lakhs for entry to mid-level positions, with senior roles commanding even higher compensation. The surge in AI and machine learning applications has created a sustained need for skilled data professionals.",
    yearLabel: "In 2025",
    salaryLabel: "Average Salaries",
    companiesLabel: "Companies Hiring",
    jobsLabel: "Available Jobs",
    jobsDescription: "Total jobs found online for Data Science"
  },

  "full-stack-development": {
    title: "High Demand",
    subtitle: "for Full Stack Developers",
    salary: {
      label: "Jobs in Full Stack",
      values: [600000, 1000000, 1600000]
    },
    companies: [
      "Google",
      "Microsoft",
      "Amazon",
      "Meta",
      "Salesforce",
      "Adobe",
      "IBM",
      "Infosys",
      "Deloitte"
    ] as CompanyName[],
    demand: 55,
    jobCount: "25,000+",
    description: "Full Stack Developers continue to be among the most sought-after tech professionals. Entry-level salaries start from ₹3.5 lakhs, while experienced developers can earn upwards of ₹12 lakhs annually. The demand is driven by companies seeking versatile developers who can handle both front-end and back-end development.",
    yearLabel: "In 2025",
    salaryLabel: "Average Salaries",
    companiesLabel: "Companies Hiring",
    jobsLabel: "Available Jobs",
    jobsDescription: "Total jobs found online for Full Stack"
  },

  "cloud-computing": {
    title: "Increasing Demand",
    subtitle: "for Cloud Engineers",
    salary: {
      label: "Jobs in Cloud Computing",
      values: [750000, 1300000, 2000000]
    },
    companies: [
      "Amazon",
      "Microsoft",
      "Google",
      "IBM",
      "Oracle",
      "Salesforce",
      "Deloitte",
      "Infosys",
      "JPMorgan"
    ] as CompanyName[],
    demand: 50,
    jobCount: "18,000+",
    description: "Cloud Computing professionals are seeing strong demand with the increasing adoption of cloud services. Salaries range from ₹4.5-20 lakhs based on experience and expertise. The field offers excellent growth opportunities with the continuous evolution of cloud technologies and services.",
    yearLabel: "In 2025",
    salaryLabel: "Average Salaries",
    companiesLabel: "Companies Hiring",
    jobsLabel: "Available Jobs",
    jobsDescription: "Total jobs found online for Cloud Computing"
  },

  "cyber-security": {
    title: "Critical Demand",
    subtitle: "for Cybersecurity Experts",
    salary: {
      label: "Jobs in Cybersecurity",
      values: [800000, 1400000, 2100000]
    },
    companies: [
      "IBM",
      "Microsoft",
      "Amazon",
      "Deloitte",
      "JPMorgan",
      "Intel",
      "Oracle",
      "Google",
      "Meta"
    ] as CompanyName[],
    demand: 65,
    jobCount: "12,000+",
    description: "Cybersecurity professionals are in critical demand as organizations prioritize digital security. Entry-level positions start at ₹5 lakhs, with experienced professionals earning ₹15-30 lakhs annually. The field offers specialized roles in threat detection, security architecture, and incident response.",
    yearLabel: "In 2025",
    salaryLabel: "Average Salaries",
    companiesLabel: "Companies Hiring",
    jobsLabel: "Available Jobs",
    jobsDescription: "Total jobs found online for Cybersecurity"
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