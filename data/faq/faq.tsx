import { FAQItem } from "../../types/faq";

export const faqContent: Record<string, FAQItem[]> = {
  curriculum: [
    {
      question: "What is the Master's in AI & Data Science with Linux World?",
      answer:
        "This program is an engaging yet rigorous 12-month online program designed specifically for working professionals to develop practical knowledge and skills, establish a professional network, and accelerate entry into data science careers. The certification is awarded by JGU.",
    },
    {
      question: "Which topics are going to be covered as part of the Master's in AI & Data Science program?",
      answer: (
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Machine Learning Algorithms</li>
          <li>Deep Learning and Neural Networks</li>
          <li>Natural Language Processing</li>
          <li>Computer Vision</li>
          <li>Big Data Analytics</li>
          <li>Data Visualization</li>
          <li>Statistical Analysis</li>
          <li>Ethical AI and Data Governance</li>
        </ul>
      ),
    },
  ],
  timeCommitment: [
    {
      question: "What type of learning experience should I expect?",
      answer:
        "Students can expect a blend of theoretical knowledge and practical applications through hands-on projects, live sessions, and industry case studies.",
    },
  ],
  selectionCriteria: [
    {
      question: "Is a Degree in Master's of Science granted at the end of the program?",
      answer:
        "Yes, upon successful completion of all program requirements, students are awarded a Master's of Science degree in AI & Data Science.",
    },
  ],
};