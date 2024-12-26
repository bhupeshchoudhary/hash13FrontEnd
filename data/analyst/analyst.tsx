import { TabData } from "../../types/analyst";

export const data: Record<string, TabData> = {
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