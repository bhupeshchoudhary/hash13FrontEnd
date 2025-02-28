import { FAQItem } from "../../types/faq";

export const faqContent: Record<string, FAQItem[]> = {
  curriculum: [
    {
      question: "What is the DevOps program about?",
      answer:
        " The program provides hands-on, industry-relevant training in DevOps tools and practices, preparing participants to bridge the gap between development and operations.",
    },
    {
      question: " What makes this program unique?",
      answer: (
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Industry-oriented curriculum.</li>
          <li>Real-world projects.</li>
          <li>Mentorship by experts like Mr. Vimal Daga.</li>
          <li>Certification upon completion</li>
          <li>Supportive community of learners and mentors.</li>
        </ul>
      ),
    },
  ],
  timeCommitment: [
    {
      question: "Who can enroll in this program?",
      answer: (
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Students: Final-year or fresh graduates .</li>
          <li>Professionals: IT professionals looking to transition into DevOps roles.</li>
          <li>Beginners: Anyone interested in starting a career in DevOps.</li>
    
        </ul>
      ),
    },
    {
      question:"Is prior technical knowledge required?",
      answer:" No, prior knowledge is not mandatory. The program starts with basics and progresses to advanced topics.",
    },
  ],

  Program:[
    { 
      question:"What will I learn in this program?",
      answer:(
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>SVersion control (Git, GitHub).</li>
          <li>CI/CD pipelines (Jenkins, GitLab CI/CD).</li>
          <li>Containerization (Docker, Kubernetes).</li>
          <li>Infrastructure as Code (Terraform, Ansible).</li>
          <li>Monitoring and logging (Prometheus, Grafana).</li>
        </ul>
      ),
    },


  ],

  Duration:[
    {
      question:"How long does the program last?",
      answer:"The program has a duration of 3 months, designed to provide in-depth learning and practical exposure.",

    },
    {
      question:"What is the mode of delivery?",
      answer:"The program is delivered live through interactive sessions, ensuring real-time engagement and hands-on learning.",

    },
  ],

  Certification:[
    {
      question:" Will I get a certificate?",
      answer:" Yes, participants will receive an industry-recognized certificate upon completion."
    },
    {
      question:"Will there be placement assistance?",
      answer:"Yes, the program offers placement support through industry connections.",

    },

  ],


  selectionCriteria: [
    {
      question: "Can I access the content after the program ends?",
      answer:
        " Yes, participants have access to recorded sessions and materials for limited time.",
    },
    {
      question:"What is the fee structure?",
      answer:"The fees are mentioned on the website. Please visit the portal for detailed information. ",
    },
  ],
};