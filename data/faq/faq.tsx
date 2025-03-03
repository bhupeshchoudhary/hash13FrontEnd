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

  // Using shared content for other specializations
  "specialisation-in-prometheus-grafana": {
    ...sharedSpecializationContent
  },

"specialisation-in-kubernetes" : {
    ...sharedSpecializationContent
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
 
};