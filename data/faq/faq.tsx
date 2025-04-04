// data/faq/faq.ts
import { FAQContent } from '../../types/faq';

// Shared content template for all specializations except DevOps
const sharedSpecializationContent = {
    curriculum: [
      {
        question: "What are the key topics covered in this training?",
        answer: "The course covers fundamental to advanced topics, practical hands-on exercises, and real-world applications related to the technology being taught."
      },
      {
        question: "How many modules are included in this program?",
        answer: "The number of modules varies by course, but each program is designed to cover all essential concepts comprehensively."
      },
      {
        question: "Does this training include hands-on labs and real-world projects?",
        answer: "Yes, learners will engage in hands-on exercises and projects to gain practical experience."
      },
      {
        question: "What are the major tools and technologies covered in this course?",
        answer: "The course covers industry-standard tools and technologies that are relevant to the subject matter."
      },
      {
        question: "Will this course include case studies or practical industry use cases?",
        answer: "Yes, learners will work on case studies and industry-related projects to understand real-world applications."
      }
    ],
    timeCommitment: [
      {
        question: "Who is this program designed for?",
        answer: "This program is designed for professionals looking to upskill, beginners exploring new career opportunities, and anyone interested in mastering automation, cloud computing, and DevOps-related technologies."
      },
      {
        question: "Do I need prior experience to enroll in this course?",
        answer: "No prior experience is required. The course is structured to accommodate both beginners and experienced professionals."
      },
      {
        question: "Can beginners with no prior experience join this training?",
        answer: "Yes, the course starts with fundamental concepts and gradually progresses to advanced topics, making it suitable for beginners."
      },
      {
        question: "What technical skills should I have before taking this course?",
        answer: "No specific technical skills are required. However, a basic understanding of IT concepts may be beneficial."
      },
      {
        question: "Is this course suitable for working professionals looking to upskill?",
        answer: "Yes, the self-paced format allows professionals to learn at their convenience without disrupting their work schedules."
      }
    ],
    Program: [
      {
        question: "What are the key topics covered in this training?",
        answer: "The course covers fundamental to advanced topics, practical hands-on exercises, and real-world applications related to the technology being taught."
      },
      {
        question: "How many modules are included in this program?",
        answer: "The number of modules varies by course, but each program is designed to cover all essential concepts comprehensively."
      },
      {
        question: "Does this training include hands-on labs and real-world projects?",
        answer: "Yes, learners will engage in hands-on exercises and projects to gain practical experience."
      },
      {
        question: "What are the major tools and technologies covered in this course?",
        answer: "The course covers industry-standard tools and technologies that are relevant to the subject matter."
      },
      {
        question: "Will this course include case studies or practical industry use cases?",
        answer: "Yes, learners will work on case studies and industry-related projects to understand real-world applications."
      }
    ],
    Duration: [
      {
        question: "How long is the training program?",
        answer: "The duration varies depending on the course, but learners can complete it at their own pace."
      },
      {
        question: "What is the mode of training?",
        answer: "The training is self-paced and available online."
      },
      {
        question: "Is the course self-paced or instructor-led?",
        answer: "The course is fully self-paced, allowing learners to study at their convenience."
      },
      {
        question: "Are live sessions recorded for future reference?",
        answer: "Since this is a self-paced course, all learning materials are pre-recorded and accessible anytime."
      },
      {
        question: "How much time should I dedicate weekly to complete this course successfully?",
        answer: "The recommended time commitment varies, but learners can study at their own pace based on their availability."
      }
    ],
    Certification: [
      {
        question: "Will I receive a certification upon completing the course?",
        answer: "Yes, a certificate of completion will be provided after successfully finishing the course."
      },
      {
        question: "Is the certification industry-recognized?",
        answer: "Yes, the certification validates your skills and can be added to your professional portfolio."
      },
      {
        question: "Does this program offer placement assistance?",
        answer: "While the course enhances job readiness, placement assistance is not included."
      },
      {
        question: "How does this training help with job opportunities in the market?",
        answer: "The program equips learners with practical skills and knowledge that are highly valued by employers."
      },
      {
        question: "Are there any partnerships with hiring companies for job placements?",
        answer: "No, there are no direct hiring partnerships, but the skills acquired can significantly improve job prospects."
      }
    ],
    selectionCriteria: [
      {
        question: "How can I enroll in this program?",
        answer: "You can enroll through our website by selecting the course of your choice."
      },
      {
        question: "What is the course fee, and are there any discounts available?",
        answer: "Course fees vary by program. Discounts may be available during special promotions."
      },
      {
        question: "Is there an option for EMI or installment payments?",
        answer: "No, EMI or installment payment options are not available."
      },
      {
        question: "Are there any free trial sessions before enrolling in the full course?",
        answer: "No, free trials are not available, but detailed course outlines are provided to help you make an informed decision."
      }
    ]
};

export const faqContent: FAQContent = {
  "specialisation-in-devops": {
    curriculum: [
      {
        question: "What is the DevOps program about?",
        answer:
          "The program provides hands-on, industry-relevant training in DevOps tools and practices, preparing participants to bridge the gap between development and operations.",
      },
      {
        question: "What makes this program unique?",
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
            <li>Students: Final-year or fresh graduates.</li>
            <li>Professionals: IT professionals looking to transition into DevOps roles.</li>
            <li>Beginners: Anyone interested in starting a career in DevOps.</li>
          </ul>
        ),
      },
      {
        question: "Is prior technical knowledge required?",
        answer: "No, prior knowledge is not mandatory. The program starts with basics and progresses to advanced topics.",
      },
    ],
    Program: [
      {
        question: "What will I learn in this program?",
        answer: (
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Version control (Git, GitHub).</li>
            <li>CI/CD pipelines (Jenkins, GitLab CI/CD).</li>
            <li>Containerization (Docker, Kubernetes).</li>
            <li>Infrastructure as Code (Terraform, Ansible).</li>
            <li>Monitoring and logging (Prometheus, Grafana).</li>
          </ul>
        ),
      },
    ],
    Duration: [
      {
        question: "How long does the program last?",
        answer: "The program has a duration of 3 months, designed to provide in-depth learning and practical exposure.",
      },
      {
        question: "What is the mode of delivery?",
        answer: "The program is delivered live through interactive sessions, ensuring real-time engagement and hands-on learning.",
      },
    ],
    Certification: [
      {
        question: "Will I get a certificate?",
        answer: "Yes, participants will receive an industry-recognized certificate upon completion.",
      },
      {
        question: "Will there be placement assistance?",
        answer: "Yes, the program offers placement support through industry connections.",
      },
    ],
    selectionCriteria: [
      {
        question: "Can I access the content after the program ends?",
        answer: "Yes, participants have access to recorded sessions and materials for limited time.",
      },
      {
        question: "What is the fee structure?",
        answer: "The fees are mentioned on the website. Please visit the portal for detailed information.",
      },
    ],
  },
  
  "specialisation-in-streamlit": {
    curriculum: [
      {
        question: "What is the Streamlit program about?",
        answer:
          "The program provides comprehensive training in building data applications using Streamlit, covering everything from basics to advanced deployment, preparing participants for modern data application development.",
      },
      {
        question: "What makes this program unique?",
        answer: (
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Industry-relevant data app development curriculum.</li>
            <li>Hands-on projects with real-world datasets.</li>
            <li>Expert mentorship and guidance.</li>
            <li>Professional certification.</li>
            <li>Active learning community and support network.</li>
          </ul>
        ),
      },
    ],
    timeCommitment: [
      {
        question: "Who can enroll in this program?",
        answer: (
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Data Scientists and Analysts seeking to create interactive apps.</li>
            <li>Python developers interested in data visualization.</li>
            <li>ML Engineers looking to deploy models with user interfaces.</li>
            <li>Anyone interested in building data applications.</li>
          </ul>
        ),
      },
      {
        question: "Is prior programming knowledge required?",
        answer: "Basic Python programming knowledge is recommended. Familiarity with data analysis concepts would be beneficial but not mandatory.",
      },
    ],
    Program: [
      {
        question: "What will I learn in this program?",
        answer: (
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Streamlit framework fundamentals and setup.</li>
            <li>Interactive data visualization and analytics.</li>
            <li>ML model deployment and integration.</li>
            <li>Custom components and advanced features.</li>
            <li>Production deployment and optimization.</li>
          </ul>
        ),
      },
    ],
    Duration: [
      {
        question: "How long does the program last?",
        answer: "The program spans 2 months, with 24+ hours of comprehensive learning and practical projects.",
      },
      {
        question: "What is the mode of delivery?",
        answer: "Live interactive sessions with hands-on coding practice, ensuring real-time learning and doubt resolution.",
      },
    ],
    Certification: [
      {
        question: "Will I get a certificate?",
        answer: "Yes, upon successful completion of the course and projects, participants receive an industry-recognized certification.",
      },
      {
        question: "Is there job assistance?",
        answer: "Yes, we provide career guidance and help connect participants with relevant job opportunities in data application development.",
      },
    ],
    selectionCriteria: [
      {
        question: "Can I access the course content after completion?",
        answer: "Yes, participants get extended access to course materials, recorded sessions, and resources for continued learning.",
      },
      {
        question: "What are the program fees?",
        answer: "Please check our website for current fee structure and available discounts. We offer flexible payment options.",
      },
    ],
  },

  // Using shared content for other specializations
  "specialisation-in-prometheus-grafana": {
    ...sharedSpecializationContent
  },

"specialisation-in-kubernetes" : {
    ...sharedSpecializationContent
},
"specialisation-in-n8n": {
  curriculum: [
    {
      question: "What is the n8n Automation course about?",
      answer:
        "This course provides hands-on training in building automation workflows using n8n. You will learn to integrate APIs, automate tasks, and streamline business processes without extensive coding.",
    },
    {
      question: "What makes this course unique?",
      answer: (
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Real-world automation projects.</li>
          <li>Step-by-step hands-on workflow creation.</li>
          <li>API integrations without coding.</li>
          <li>Learn both self-hosted and cloud versions of n8n.</li>
          <li>Certification upon completion.</li>
        </ul>
      ),
    },
  ],
  timeCommitment: [
    {
      question: "Who can enroll in this course?",
      answer: (
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Students: Those interested in automation and workflow management.</li>
          <li>Business Owners: Want to automate repetitive tasks.</li>
          <li>Developers: Looking to integrate APIs effortlessly.</li>
          <li>Freelancers: Seeking to offer automation services.</li>
          <li>Non-Tech Professionals: Want to automate work without coding.</li>
        </ul>
      ),
    },
    {
      question: "Is prior technical knowledge required?",
      answer:
        "No, this course starts from the basics. You don't need coding experience, but basic familiarity with SaaS tools and APIs will be helpful.",
    },
  ],
  Program: [
    {
      question: "What will I learn in this course?",
      answer: (
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>n8n workflow fundamentals.</li>
          <li>Triggering automations with webhooks.</li>
          <li>Connecting and integrating APIs (Google Sheets, Notion, Telegram, etc.).</li>
          <li>Using logic-based nodes (If, Merge, and Switch).</li>
          <li>Debugging, error handling, and performance optimization.</li>
        </ul>
      ),
    },
  ],
  Duration: [
    {
      question: "How long does the course last?",
      answer:
        "The course is designed to be completed in 4-6 weeks, depending on your learning pace.",
    },
    {
      question: "What is the mode of delivery?",
      answer:
        "The course is delivered through self-paced video lessons, hands-on projects, and live Q&A sessions.",
    },
  ],
  Certification: [
    {
      question: "Will I get a certificate?",
      answer:
        "Yes, upon successfully completing the course, you will receive an industry-recognized certificate.",
    },
    {
      question: "Will there be job placement support?",
      answer:
        "Yes, we provide career guidance and connect learners with automation-related job opportunities.",
    },
  ],
  selectionCriteria: [
    {
      question: "Can I access the content after the course ends?",
      answer:
        "Yes, you will have lifetime access to recorded lessons and resources.",
    },
    {
      question: "What is the fee structure?",
      answer:
        "The fees are listed on our website. Please visit the course page for more details.",
    },
  ],
},


  "specialisation-in-docker": {
    ...sharedSpecializationContent
  },

  "specialisation-in-jenkins": {
    ...sharedSpecializationContent
  },

  "specialisation-in-terraform": {
    ...sharedSpecializationContent
  },

  "specialisation-in-ansible": {
    ...sharedSpecializationContent
  },
  "specialisation-in-java": {
    ...sharedSpecializationContent
  },
  "specialisation-in-mongodb": {
    ...sharedSpecializationContent
  },
  "specialisation-in-shell-scripting": {
    ...sharedSpecializationContent
  },
  "specialisation-in-splunk": {
    ...sharedSpecializationContent
  },
  "specialisation-in-ai-ml": {
    ...sharedSpecializationContent
  },
 
};