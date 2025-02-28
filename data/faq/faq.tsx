// data/faq/faq.ts
import { FAQContent } from '../../types/faq';

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
  
  // Add Data Science Course FAQ
  "data-science-specialisation": {
    curriculum: [
      {
        question: "What is the Data Science program about?",
        answer: "This comprehensive program covers all aspects of data science, from statistical analysis to machine learning, preparing you for a career in data science.",
      },
      {
        question: "What makes this program special?",
        answer: (
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Comprehensive curriculum covering all major aspects of Data Science</li>
            <li>Hands-on projects with real datasets</li>
            <li>Industry expert mentorship</li>
            <li>Career support and placement assistance</li>
            <li>Access to premium tools and resources</li>
          </ul>
        ),
      },
    ],
    timeCommitment: [
      {
        question: "Who should take this course?",
        answer: (
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Graduates with basic mathematics background</li>
            <li>Professionals looking to transition to data science</li>
            <li>Anyone interested in pursuing a career in data analytics</li>
          </ul>
        ),
      },
      {
        question: "Do I need programming experience?",
        answer: "Basic programming knowledge is helpful but not mandatory. We cover Python from basics.",
      },
    ],
    Program: [
      {
        question: "What topics are covered?",
        answer: (
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Python Programming</li>
            <li>Statistical Analysis</li>
            <li>Machine Learning Algorithms</li>
            <li>Deep Learning & Neural Networks</li>
            <li>Data Visualization</li>
          </ul>
        ),
      },
    ],
    Duration: [
      {
        question: "What is the course duration?",
        answer: "The program runs for 4 months with flexible timing options.",
      },
      {
        question: "How are classes conducted?",
        answer: "Classes are conducted online with live instructor-led sessions and hands-on workshops.",
      },
    ],
    Certification: [
      {
        question: "Is certification provided?",
        answer: "Yes, you'll receive an industry-recognized certification upon successful completion.",
      },
      {
        question: "What about job assistance?",
        answer: "We provide comprehensive placement assistance including resume building and interview preparation.",
      },
    ],
    selectionCriteria: [
      {
        question: "How long can I access the course content?",
        answer: "You get lifetime access to recorded lectures and course materials.",
      },
      {
        question: "What are the payment options?",
        answer: "We offer flexible payment plans including EMI options. Contact our support team for details.",
      },
    ],
  },

  // Add Full Stack Development Course FAQ
  "full-stack-development": {
    curriculum: [
      {
        question: "What is Full Stack Development?",
        answer: "Full Stack Development covers both front-end and back-end technologies, enabling you to build complete web applications.",
      },
      {
        question: "What are the program highlights?",
        answer: (
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Complete web development coverage</li>
            <li>Project-based learning approach</li>
            <li>Industry-aligned curriculum</li>
            <li>Professional certification</li>
            <li>Portfolio development</li>
          </ul>
        ),
      },
    ],
    timeCommitment: [
      {
        question: "Who is this course for?",
        answer: (
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Aspiring web developers</li>
            <li>IT professionals wanting to upgrade skills</li>
            <li>Students interested in web development</li>
          </ul>
        ),
      },
      {
        question: "Are there any prerequisites?",
        answer: "Basic computer knowledge is sufficient. We start from the basics.",
      },
    ],
    Program: [
      {
        question: "What technologies will I learn?",
        answer: (
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>HTML, CSS, JavaScript</li>
            <li>React.js, Node.js</li>
            <li>MongoDB, Express.js</li>
            <li>REST APIs</li>
            <li>Development Tools & Deployment</li>
          </ul>
        ),
      },
    ],
    Duration: [
      {
        question: "How long is the course?",
        answer: "The program duration is 4 months with regular practical sessions.",
      },
      {
        question: "What is the class schedule?",
        answer: "Classes are held online with weekend options available.",
      },
    ],
    Certification: [
      {
        question: "What certification will I receive?",
        answer: "You'll get an industry-recognized Full Stack Developer certification.",
      },
      {
        question: "Is placement support provided?",
        answer: "Yes, we provide complete placement assistance and interview preparation.",
      },
    ],
    selectionCriteria: [
      {
        question: "What about course materials?",
        answer: "All learning materials and resources are provided with lifetime access.",
      },
      {
        question: "What are the fees?",
        answer: "Please check our website for current fee structure and EMI options.",
      },
    ],
  },
};