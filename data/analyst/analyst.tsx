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
},






"specialisation-in-shell-scripting": {
  "title": "Rising Demand",
  "subtitle": "for Shell Scripting Engineers",
  "salary": {
    "label": "Jobs in Shell Scripting",
    "values": [729000, 982000, 2000000] // Converting 7.29L, 9.82L, 20L to actual numbers
  },
  "companies": [
    "TCS",
    "Infosys",
    "Wipro",
    "Capgemini",
    "Cognizant",
    "IBM",
    "Accenture",
    "HCL Technologies",
    "Oracle",
    "Tech Mahindra"
  ] as CompanyName[],
  "demand": 35, // Estimated based on job market data
  "jobCount": "37,962+", // Sum of jobs from all platforms (35,000 + 1,162 + 1,000 + 800)
  "description": "Shell scripting engineers in India are experiencing rising salaries due to the growing demand for automation, system administration, and infrastructure management. In 2025, entry-level salaries range from ₹4–10 lakh annually, while experienced professionals earn ₹12 lakh or more, highlighting the increasing reliance on scripting for process automation and system optimization.",
  "yearLabel": "In 2025",
  "salaryLabel": "Average Salaries",
  "companiesLabel": "Companies Hiring",
  "jobsLabel": "Available Jobs",
  "jobsDescription": "Total jobs found across Naukri, Glassdoor, Indeed, and AmbitionBox"
},




"specialisation-in-java": {
  "title": "Rising Demand",
  "subtitle": "for Java Developers",
  "salary": {
    "label": "Jobs in Java Development",
    "values": [1000000, 1800000, 3000000] // Converting 10L, 18L, 30L to actual numbers
  },
  "companies": [
    "Google",
    "Microsoft",
    "Amazon",
    "Paytm",
    "Flipkart",
    "Adobe",
    "JPMorgan Chase",
    "Goldman Sachs",
    "Zoho",
    "Infosys"
  ] as CompanyName[],
  "demand": 45, // Estimated based on job market data
  "jobCount": "59,500+", // Sum of jobs from Naukri (50,000), Glassdoor (5,000), Indeed (4,500)
  "description": "Java developers are in high demand due to the growing need for enterprise applications, cloud-based solutions, and backend development. In 2025, Java professionals can expect competitive salaries, with experienced developers earning ₹18 lakh or more, making Java a key skill for software development and microservices architecture.",
  "yearLabel": "In 2025",
  "salaryLabel": "Average Salaries",
  "companiesLabel": "Companies Hiring",
  "jobsLabel": "Available Jobs",
  "jobsDescription": "Total jobs found across Naukri, Glassdoor, Indeed, and LinkedIn"
},




"specialisation-in-terraform": {
  "title": "Rising Demand",
  "subtitle": "for Terraform Engineers",
  "salary": {
    "label": "Jobs in Terraform",
    "values": [1200000, 1800000, 2500000] // Converting 12L, 18L, 25L to actual numbers
  },
  "companies": [
    "TCS",
    "Infosys",
    "Wipro",
    "Capgemini",
    "Cognizant",
    "IBM",
    "Accenture",
    "HCL Technologies",
    "Oracle",
    "Tech Mahindra"
  ] as CompanyName[],
  "demand": 40, // Estimated based on job market data
  "jobCount": "43,600+", // Sum of jobs from Naukri (40,000), Glassdoor (1,500), Indeed (1,200), AmbitionBox (900)
  "description": "Terraform engineers in India are witnessing increasing salaries due to the rising demand for infrastructure automation, cloud provisioning, and DevOps practices. In 2025, entry-level salaries range from ₹6–12 lakh annually, while experienced professionals earn ₹15 lakh or more, highlighting Terraform's significance in cloud automation and infrastructure as code (IaC)",
  "yearLabel": "In 2025",
  "salaryLabel": "Average Salaries",
  "companiesLabel": "Companies Hiring",
  "jobsLabel": "Available Jobs",
  "jobsDescription": "Total jobs found across Naukri, Glassdoor, Indeed, and AmbitionBox"
},


















"specialisation-in-splunk": {
  "title": "Rising Demand",
  "subtitle": "for Splunk Engineers",
  "salary": {
    "label": "Jobs in Splunk",
    "values": [850000, 1230000, 2500000] // Converting 8.5L, 12.3L, 25L to actual numbers
  },
  "companies": [
    "Accenture",
    "TCS",
    "Infosys",
    "Wipro",
    "IBM",
    "HCL Technologies",
    "Cognizant",
    "Capgemini",
    "Oracle",
    "Tech Mahindra"
  ] as CompanyName[],
  "demand": 38, // Estimated based on job market data
  "jobCount": "21,450+", // Sum of jobs from Naukri (18,000), Glassdoor (1,350), Indeed (1,200), LinkedIn (900)
  "description": "Splunk Engineers in India are experiencing rising salaries due to the growing demand for data analysis, security monitoring, and log management. In 2025, entry-level salaries range from ₹6–12 lakh annually, while experienced professionals earn ₹15 lakh or more, highlighting the increasing reliance on Splunk for enterprise security, observability, and real-time data insights",
  "yearLabel": "In 2025",
  "salaryLabel": "Average Salaries",
  "companiesLabel": "Companies Hiring",
  "jobsLabel": "Available Jobs",
  "jobsDescription": "Total jobs found across Naukri, Glassdoor, Indeed, and LinkedIn"
},


"docker-certified-associate-2024": {
    title: "Docker Professionals – Salaries, Hiring Companies & Job Opportunities in India",
    subtitle: "High Demand for Docker Experts in 2025",
    salary: {
      label: "Salaries for Docker Professionals",
      values: [600000, 1200000, 2000000, 3000000]
    },
    companies: [
      "Amazon Web Services (AWS)",
      "Google Cloud (GCP)",
      "Microsoft (Azure)",
      "Netflix",
      "Adobe",
      "PayPal",
      "Infosys",
      "Tata Consultancy Services (TCS)",
      "Cognizant",
      "Zoho"
    ],
    demand: 40,
    jobCount: "20,500+",
    description: "Docker professionals are in high demand as organizations increasingly adopt containerization for scalable and efficient software deployment. Mastering Docker and container orchestration can significantly boost career opportunities in cloud-native environments, making it a must-have skill for DevOps and cloud engineers in 2025.",
    yearLabel: "In 2025",
    salaryLabel: "Average Salaries",
    companiesLabel: "Top Companies Hiring Docker Experts",
    jobsLabel: "Job Opportunities",
    jobsDescription: "Total jobs found across Naukri, Glassdoor, Indeed, and LinkedIn"
  },


"specialisation-in-mongodb": {
    title: "MongoDB Professionals – Salaries, Hiring Companies & Job Opportunities in India",
    subtitle: "High Demand for MongoDB Experts in 2025",
    salary: {
      label: "Salaries for MongoDB Professionals",
      values: [600000, 1000000, 1800000, 2800000]
    },
    companies: [
      "Google",
      "Amazon",
      "Netflix",
      "Uber",
      "Paytm",
      "Flipkart",
      "Salesforce",
      "Razorpay",
      "Swiggy",
      "Zomato"
    ],
    demand: 35,
    jobCount: "12,500+",
    description: "MongoDB professionals are in high demand as organizations shift towards NoSQL databases for high-performance, scalable applications. In 2025, MongoDB engineers can expect strong career growth, with salaries exceeding ₹18 lakh per annum for experienced professionals, making NoSQL expertise a key skill for modern database management.",
    yearLabel: "In 2025",
    salaryLabel: "Average Salaries",
    companiesLabel: "Top Companies Hiring MongoDB Professionals",
    jobsLabel: "Job Opportunities",
    jobsDescription: "Total jobs found across Naukri, Glassdoor, Indeed, and LinkedIn"
  },

  
  
"specialisation-in-jenkins": {
    title: "Jenkins Professionals – Salaries, Hiring Companies & Job Opportunities in India",
    subtitle: "High Demand for Jenkins Experts in 2025",
    salary: {
      label: "Salaries for Jenkins Professionals",
      values: [600000, 1200000, 1800000, 2500000]
    },
    companies: [
      "Amazon Web Services (AWS)",
      "Google Cloud (GCP)",
      "Microsoft (Azure)",
      "Red Hat",
      "Accenture",
      "Infosys",
      "TCS",
      "Cognizant",
      "Capgemini",
      "Wipro"
    ],
    demand: 45,
    jobCount: "38,500+",
    description: "With enterprises adopting CI/CD pipelines and automation-driven workflows, Jenkins expertise is a must-have skill for DevOps professionals, cloud engineers, and software automation specialists. Mastering Jenkins ensures career growth in cloud-based software development and continuous integration.",
    yearLabel: "In 2025",
    salaryLabel: "Average Salaries",
    companiesLabel: "Top Companies Hiring Jenkins Experts",
    jobsLabel: "Job Opportunities",
    jobsDescription: "Total jobs found across Naukri, Glassdoor, Indeed, and LinkedIn"
  },
  

"specialisation-in-ansible": {
    title: "Ansible Automation Professionals – Salaries, Hiring Companies & Job Opportunities in India",
    subtitle: "High Demand for Ansible Experts in 2025",
    salary: {
      label: "Salaries for Ansible Professionals",
      values: [600000, 1200000, 1800000, 2500000]
    },
    companies: [
      "Red Hat",
      "Amazon Web Services (AWS)",
      "Google Cloud (GCP)",
      "Microsoft (Azure)",
      "Accenture",
      "Infosys",
      "TCS",
      "Cognizant",
      "Capgemini",
      "Wipro"
    ],
    demand: 40,
    jobCount: "33,200+",
    description: "With the rise of infrastructure automation, Ansible expertise is becoming essential for DevOps engineers, cloud professionals, and IT administrators. Learning Ansible can boost your career in automation-driven workflows, hybrid cloud management, and enterprise-level orchestration.",
    yearLabel: "In 2025",
    salaryLabel: "Average Salaries",
    companiesLabel: "Top Companies Hiring Ansible Experts",
    jobsLabel: "Job Opportunities",
    jobsDescription: "Total jobs found across Naukri, Glassdoor, Indeed, and LinkedIn"
  },

  // ======================================================================

 "specialisation-in-kubernetes": {
    title: "Kubernetes Professionals – Salaries, Hiring Companies & Job Opportunities in India",
    subtitle: "High Demand for Kubernetes Experts in 2025",
    salary: {
      label: "Salaries for Kubernetes Professionals",
      values: [700000, 1200000, 2000000, 3000000]
    },
    companies: [
      "Google Cloud (GCP)",
      "Microsoft (Azure)",
      "Amazon Web Services (AWS)",
      "VMware",
      "Red Hat",
      "Salesforce",
      "PayPal",
      "Flipkart",
      "Zomato",
      "Infosys"
    ],
    demand: 50,
    jobCount: "31,300+",
    description: "With organizations shifting to cloud-native architectures and container orchestration, Kubernetes skills are essential for DevOps engineers, cloud architects, and automation professionals. Mastering Kubernetes can significantly enhance career prospects in modern IT environments.",
    yearLabel: "In 2025",
    salaryLabel: "Average Salaries",
    companiesLabel: "Top Companies Hiring Kubernetes Experts",
    jobsLabel: "Job Opportunities",
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