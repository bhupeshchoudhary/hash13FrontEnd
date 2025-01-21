// data/courses/courses.ts
import { Course } from "../../types/courses";
import { Project } from "../../types/courses";


export const courseInfo: Course[] = [
  {
    _id: "specialisation-in-devops",
    title: "Specialisation in DevOps - Become a DevOps Expert in 3 months",
    slug: "specialisation-in-devops",
    rating: 4.7,
    totalRatings: 10,
    duration: "2 Months",
    hours: "300+",
    price: 20000,
    originalPrice: 45000,
    enrolledStudents: 12000,
    shortDescription: "Industry Relevant & Recognized Training | Gain HandsOn Experience | Best-In-Class Content | Industry Use-Cases",
    longDescription: "Comprehensive Linux training covering system administration, shell scripting, networking, and security. Perfect for beginners and experienced users.",
    backgroundImage: "/assets/cources/Complete-Linux-v9-Training-by-Mr.jpg",
    instructor: {
      name: "Vimal Daga",
      title: "The World Record Holder, Founder at LinuxWorld & #13, Sr. Principal IT Consultant, TEDx Speaker & Philanthropist",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFXmcHM9qcV2A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684676554457?e=1740614400&v=beta&t=t80yG_QFLdEMXzVAWmuSas-BvSMy42wzpVMNg9mTKJc",
      bio: "22+ years of experience in Linux and Open Source technologies",
      rating: 4.9,
      totalStudents: 50000,
      courses: 15
    },
    learningOutcomes: [
      "Master Git and GitHub - From Beginner to Advanced Level",
      "Automation Using Ansible",
      "Jenkins & Build Automation",
      "Monitoring Tools : Prometheus & Grafana",
      "Docker, Container & Kubernetes",
      "And much more…"

    ],
    features: [
      "Most Relevant DevOps Tips & Tricks to become more productive",
      "Technical Support for 90 days",
      "Premium #13 DevOps Community Membership"
    ],
    skills: [
      "Linux Administration",
      "Shell Scripting",
      "System Security",
      "Networking"
    ],
    requirements: [
      "Basic computer knowledge",
      "Interest in system administration"
    ],
    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-01",
    category: "Specialisation in DevOps",
    module:  [
      {
        id: 1,
        title: "Master Git & GitHub",
        description: "A code hosting platform for version control and collaboration.",
        content: ["Git Basics", "Git Commands", "Clone a Repository", "Git Branching", "Merging", "Git Stash", "Git Add Interactive", "Reflog", "Cherry Picking", "Git Rebase", "Git Bisect", "Fetching and Pulling Content", "Working With Multiple Repositories", "Pushing Code", "Pull Requests", "Git Log", "Squashing Commits", "Cherry-Picking and Three-Way Merges", "Git Hooks", "Advanced: Beyond the Basics", "GitHub Overview", "SSH Authentication", "GitHub Repository", "GitHub Repository Branches", "GitHub Tags and Releases", "Comparing Differences", "Social Coding", "GitHub Issues", "GitHub Gists", "GitHub Organisations", "Git And Github Interview Questions"],
      },
      {
        id: 2,
        title: "Mastering Content ",
        description: "Create content that ranks well in search engines.",
        content: ["Keyword Research", "Content Strategy", "On-page SEO"],
      },
      {
        id: 3,
        title: "Mastering ",
        description: "Optimize the technical aspects of your website for SEO.",
        content: ["Site Speed", "Mobile Optimization", "Schema Markup"],
      },
      {
        id: 4,
        title: "Mastering Technical SEO ",
        description: "Advanced techniques for technical SEO.",
        content: ["Crawling & Indexing", "HTTPS", "Canonicalization"],
      },
    ],
    
    highlights: [
      {
        number: "15+",
        description: "Modules",
      },
      {
        number: "300+",
        description: "Hours of learning",
      },
      {
        number: "15+",
        description: "Programming Tools",
      },
      {
        number: "20+",
        description: "Capstone Projects",
      },

    ],
    
    certificateImage: "/assets/cources/courseDetails/certificateimage.png",

    project: [
       {
        icon: "/assets/Projects/container.png",
        title: "Setting up a Multi-Tier Application in Containers",
        description:
          "Containerize a multi-tier application with frontend, backend, and database components. Using Docker to create and manage containers.",
        skills: ["Docker", "Kubernetes", "DevOps", "Frontend", "Backend", "Database Management"],
      },
       {
        icon: "/assets/Projects/container.png",
        title: "Setting up a Multi-Tier Application in Containers",
        description:
          "Containerize a multi-tier application with frontend, backend, and database components. Using Docker to create and manage containers.",
        skills: ["Docker", "Kubernetes", "DevOps", "Frontend", "Backend", "Database Management"],
      },
       {
        icon: "/assets/Projects/container.png",
        title: "Setting up a Multi-Tier Application in Containers",
        description:
          "Containerize a multi-tier application with frontend, backend, and database components. Using Docker to create and manage containers.",
        skills: ["Docker", "Kubernetes", "DevOps", "Frontend", "Backend", "Database Management"],
      },
       {
        icon: "/assets/Projects/container.png",
        title: "Setting up a Multi-Tier Application in Containers",
        description:
          "Containerize a multi-tier application with frontend, backend, and database components. Using Docker to create and manage containers.",
        skills: ["Docker", "Kubernetes", "DevOps", "Frontend", "Backend", "Database Management"],
      },
    ],

    programFor : [
      { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
      { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
      { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
      { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
      { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
      { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
      { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
      { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
      { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
      { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },  
  ],

  toolsData: [
    {
      icon: "TrendingUp",
      title: "and Development Tools",
      description: "Tools: Python, SQL",
      toolsImage:"/assets/cources/tools.webp"
    },
    {
      icon: "BarChart",
      title: "Data Analysis and Visualization",
      description: "Tools: Excel, Power BI, Tableau, Matplotlib, Seaborn, NumPy, Pandas",
      toolsImage:"/assets/cources/tools.webp"
    },
    {
      icon: "Cpu",
      title: "Machine Learning and AI Frameworks",
      description: "Tools: Statsmodels, Sklearn, TensorFlow, Keras, NLTK, OpenAI, MLflow",
      toolsImage:"/assets/cources/tools.webp"
    }
  ],
  },





  {
    _id: "kubernetes-mastery",
    title: "Kubernetes for Enterprise DevOps",
    slug: "kubernetes-enterprise-devops-training",
    rating: 4.9,
    totalRatings: 2450,
    duration: "3 Months",
    hours: "45+",
    price: 599,
    originalPrice: 799,
    enrolledStudents: 18000,
    shortDescription: "Master Kubernetes orchestration for enterprise applications",
    longDescription: "Complete Kubernetes training covering container orchestration, microservices deployment, and enterprise-scale operations.",
    backgroundImage: "/assets/cources/awsCourse.jpg",
    instructor: {
      name: "Vimal Daga",
      title: "DevOps & Cloud Expert",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFXmcHM9qcV2A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684676554457?e=1740614400&v=beta&t=t80yG_QFLdEMXzVAWmuSas-BvSMy42wzpVMNg9mTKJc",
      bio: "Leading expert in container orchestration and cloud-native technologies",
      rating: 4.9,
      totalStudents: 45000,
      courses: 10
    },
    learningOutcomes: [
      "Deploy and manage Kubernetes clusters",
      "Implement microservices architecture",
      "Master container orchestration",
      "Handle enterprise-scale operations"
    ],
    features: [
      "Enterprise Projects",
      "Industry Case Studies",
      "Certification Path",
      "Expert Support"
    ],
    skills: [
      "Kubernetes",
      "Docker",
      "Microservices",
      "DevOps"
    ],
    requirements: [
      "Basic DevOps knowledge",
      "Container basics"
    ],
    level: "Intermediate",
    language: "English",
    lastUpdated: "2024-02",
    category: "DevOps",
    module:  [
      {
        id: 1,
        title: "Fundamentals of SEO & Algorithm",
        description: "Learn the basics of SEO and how algorithms work.",
        content: ["SEO Basics", "Google Algorithm", "Ranking Factors"],
      },
      {
        id: 2,
        title: "Mastering Content for SEO",
        description: "Create content that ranks well in search engines.",
        content: ["Keyword Research", "Content Strategy", "On-page SEO"],
      },
      {
        id: 3,
        title: "Mastering Technical SEO",
        description: "Optimize the technical aspects of your website for SEO.",
        content: ["Site Speed", "Mobile Optimization", "Schema Markup"],
      },
      {
        id: 4,
        title: "Mastering Technical SEO - Part 2",
        description: "Advanced techniques for technical SEO.",
        content: ["Crawling & Indexing", "HTTPS", "Canonicalization"],
      },
    ],
    highlights: [
      {
        number: "12+",
        description: "Modules",
      },
      {
        number: "250+",
        description: "Hours of learning",
      },
      {
        number: "10+",
        description: "DevOps Tools",
      },
      {
        number: "15+",
        description: "Enterprise Projects",
      },
    ],
    certificateImage: "/assets/cources/courseDetails/certificateimage.png",
    project: [
      {
       icon: "/assets/Projects/container.png",
       title: "Setting up a Multi-Tier Application in Containers",
       description:
         "Containerize a multi-tier application with frontend, backend, and database components. Using Docker to create and manage containers.",
       skills: ["Docker", "Kubernetes", "DevOps", "Frontend", "Backend", "Database Management"],
     },
   ],
   programFor : [
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },


],
toolsData: [
  {
    icon: "TrendingUp",
    title: "Data Management and Development Tools",
    description: "Tools: Python, SQL",
    toolsImage:"/assets/cources/tools.webp"
  },
  {
    icon: "BarChart",
    title: "Data Analysis and Visualization",
    description: "Tools: Excel, Power BI, Tableau, Matplotlib, Seaborn, NumPy, Pandas",
    toolsImage:"/assets/cources/tools.webp"
  },
  {
    icon: "Cpu",
    title: "Machine Learning and AI Frameworks",
    description: "Tools: Statsmodels, Sklearn, TensorFlow, Keras, NLTK, OpenAI, MLflow",
    toolsImage:"/assets/cources/tools.webp"
  }
],
  },
  {
    _id: "microservices-architecture",
    title: "Microservices Architecture & Implementation",
    slug: "complete-microservices-architecture-training",
    rating: 4.8,
    totalRatings: 1890,
    duration: "2.5 Months",
    hours: "35+",
    price: 449,
    originalPrice: 649,
    enrolledStudents: 13500,
    shortDescription: "Build scalable applications with microservices architecture",
    longDescription: "Learn to design, implement, and deploy microservices-based applications with modern architectural patterns and best practices.",
    backgroundImage: "/assets/cources/Complete-Micro-Services-(378)-Training.jpg",
    instructor: {
      name: "Vimal Daga",
      title: "Software Architecture Expert",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFXmcHM9qcV2A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684676554457?e=1740614400&v=beta&t=t80yG_QFLdEMXzVAWmuSas-BvSMy42wzpVMNg9mTKJc",
      bio: "Expert in distributed systems and modern architecture patterns",
      rating: 4.9,
      totalStudents: 40000,
      courses: 8
    },
    learningOutcomes: [
      "Design microservices architecture",
      "Implement service discovery",
      "Handle distributed systems challenges",
      "Deploy using containers"
    ],
    features: [
      "Architecture Patterns",
      "Real Projects",
      "Best Practices",
      "Industry Standards"
    ],
    skills: [
      "Microservices",
      "API Design",
      "System Design",
      "Cloud Native"
    ],
    requirements: [
      "Programming experience",
      "Basic system design knowledge"
    ],
    level: "Intermediate to Advanced",
    language: "English",
    lastUpdated: "2024-01",
    category: "Software Architecture",
    module:  [
      {
        id: 1,
        title: "Fundamentals of SEO & Algorithm",
        description: "Learn the basics of SEO and how algorithms work.",
        content: ["SEO Basics", "Google Algorithm", "Ranking Factors"],
      },
      {
        id: 2,
        title: "Mastering Content for SEO",
        description: "Create content that ranks well in search engines.",
        content: ["Keyword Research", "Content Strategy", "On-page SEO"],
      },
      {
        id: 3,
        title: "Mastering Technical SEO",
        description: "Optimize the technical aspects of your website for SEO.",
        content: ["Site Speed", "Mobile Optimization", "Schema Markup"],
      },
      {
        id: 4,
        title: "Mastering Technical SEO - Part 2",
        description: "Advanced techniques for technical SEO.",
        content: ["Crawling & Indexing", "HTTPS", "Canonicalization"],
      },
    ],
    highlights: [
      {
        number: "39+",
        description: "Modules",
      },
      {
        number: "280+",
        description: "Hours of learning",
      },
      {
        number: "18+",
        description: "DevOps Tools",
      },
      {
        number: "12+",
        description: "Enterprise Projects",
      },
    ],
    certificateImage: "/assets/cources/courseDetails/certificateimage.png",
    project: [
      {
       icon: "/assets/Projects/container.png",
       title: "Setting up a Multi-Tier Application in Containers",
       description:
         "Containerize a multi-tier application with frontend, backend, and database components. Using Docker to create and manage containers.",
       skills: ["Docker", "Kubernetes", "DevOps", "Frontend", "Backend", "Database Management"],
     },
   ],
   programFor : [
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },


], 
toolsData: [
  {
    icon: "TrendingUp",
    title: "Data Management and Development Tools",
    description: "Tools: Python, SQL",
    toolsImage:"/assets/cources/tools.webp"
  },
  {
    icon: "BarChart",
    title: "Data Analysis and Visualization",
    description: "Tools: Excel, Power BI, Tableau, Matplotlib, Seaborn, NumPy, Pandas",
    toolsImage:"/assets/cources/tools.webp"
  },
  {
    icon: "Cpu",
    title: "Machine Learning and AI Frameworks",
    description: "Tools: Statsmodels, Sklearn, TensorFlow, Keras, NLTK, OpenAI, MLflow",
    toolsImage:"/assets/cources/tools.webp"
  }
],
  },
  {
    _id: "nlp-specialist",
    title: "Natural Language Processing Specialist",
    slug: "nlp-specialist-training",
    rating: 4.7,
    totalRatings: 1650,
    duration: "4 Months",
    hours: "50+",
    price: 699,
    originalPrice: 999,
    enrolledStudents: 9800,
    shortDescription: "Master Natural Language Processing and Text Analytics",
    longDescription: "Comprehensive NLP training covering text processing, machine learning for NLP, and building intelligent language applications.",
    backgroundImage: "/assets/cources/Complete-NLP-Training-Basic-to-Advance-level.jpg",
    instructor: {
      name: "Vimal Daga",
      title: "AI & NLP Expert",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFXmcHM9qcV2A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684676554457?e=1740614400&v=beta&t=t80yG_QFLdEMXzVAWmuSas-BvSMy42wzpVMNg9mTKJc",
      bio: "Pioneering researcher in NLP and machine learning",
      rating: 4.8,
      totalStudents: 35000,
      courses: 6
    },
    learningOutcomes: [
      "Build NLP applications",
      "Implement text analytics",
      "Create chatbots",
      "Master language models"
    ],
    features: [
      "Advanced NLP Projects",
      "Research Papers",
      "Industry Applications",
      "Hands-on Labs"
    ],
    skills: [
      "Natural Language Processing",
      "Machine Learning",
      "Python",
      "Deep Learning"
    ],
    requirements: [
      "Python programming",
      "Basic ML knowledge"
    ],
    level: "Advanced",
    language: "English",
    lastUpdated: "2024-02",
    category: "Artificial Intelligence",
    module:  [
      {
        id: 1,
        title: "Fundamentals of SEO & Algorithm",
        description: "Learn the basics of SEO and how algorithms work.",
        content: ["SEO Basics", "Google Algorithm", "Ranking Factors"],
      },
      {
        id: 2,
        title: "Mastering Content for SEO",
        description: "Create content that ranks well in search engines.",
        content: ["Keyword Research", "Content Strategy", "On-page SEO"],
      },
      {
        id: 3,
        title: "Mastering Technical SEO",
        description: "Optimize the technical aspects of your website for SEO.",
        content: ["Site Speed", "Mobile Optimization", "Schema Markup"],
      },
      {
        id: 4,
        title: "Mastering Technical SEO - Part 2",
        description: "Advanced techniques for technical SEO.",
        content: ["Crawling & Indexing", "HTTPS", "Canonicalization"],
      },
    ],
    highlights: [
      {
        number: "12+",
        description: "Modules",
      },
      {
        number: "250+",
        description: "Hours of learning",
      },
      {
        number: "10+",
        description: "DevOps Tools",
      },
      {
        number: "15+",
        description: "Enterprise Projects",
      },
    ],
    certificateImage: "/assets/cources/courseDetails/certificateimage.png",
    project: [
      {
       icon: "/assets/Projects/container.png",
       title: "Setting up a Multi-Tier Application in Containers",
       description:
         "Containerize a multi-tier application with frontend, backend, and database components. Using Docker to create and manage containers.",
       skills: ["Docker", "Kubernetes", "DevOps", "Frontend", "Backend", "Database Management"],
     },
   ],
   programFor : [
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
],
toolsData: [
  {
    icon: "TrendingUp",
    title: "Data Management and Development Tools",
    description: "Tools: Python, SQL",
    toolsImage:"/assets/cources/tools.webp"
  },
  {
    icon: "BarChart",
    title: "Data Analysis and Visualization",
    description: "Tools: Excel, Power BI, Tableau, Matplotlib, Seaborn, NumPy, Pandas",
    toolsImage:"/assets/cources/tools.webp"
  },
  {
    icon: "Cpu",
    title: "Machine Learning and AI Frameworks",
    description: "Tools: Statsmodels, Sklearn, TensorFlow, Keras, NLTK, OpenAI, MLflow",
    toolsImage:"/assets/cources/tools.webp"
  }
],
  },




  {
    _id: "system-design",
    title: "Advanced System Design for Scale",
    slug: "advanced-system-design-training",
    rating: 4.9,
    totalRatings: 2200,
    duration: "3 Months",
    hours: "40+",
    price: 549,
    originalPrice: 799,
    enrolledStudents: 16500,
    shortDescription: "Master large-scale distributed systems design",
    longDescription: "Learn to design and implement scalable, reliable, and efficient distributed systems for enterprise applications.",
    backgroundImage: "/assets/cources/Complete-System-Design-Training-by-Mr.jpg",
    instructor: {
      name: "Vimal Daga",
      title: "System Design Expert",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFXmcHM9qcV2A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684676554457?e=1740614400&v=beta&t=t80yG_QFLdEMXzVAWmuSas-BvSMy42wzpVMNg9mTKJc",
      bio: "Expert in designing large-scale distributed systems",
      rating: 4.9,
      totalStudents: 42000,
      courses: 9
    },
    learningOutcomes: [
      "Design scalable systems",
      "Implement distributed databases",
      "Handle system reliability",
      "Optimize performance"
    ],
    features: [
      "System Design Patterns",
      "Case Studies",
      "Architecture Reviews",
      "Best Practices"
    ],
    skills: [
      "System Architecture",
      "Scalability",
      "Performance",
      "Reliability"
    ],
    requirements: [
      "Software development experience",
      "Basic distributed systems knowledge"
    ],
    level: "Advanced",
    language: "English",
    lastUpdated: "2024-01",
    category: "System Design",
    module:  [
      {
        id: 1,
        title: "Fundamentals of SEO & Algorithm",
        description: "Learn the basics of SEO and how algorithms work.",
        content: ["SEO Basics", "Google Algorithm", "Ranking Factors"],
      },
      {
        id: 2,
        title: "Mastering Content for SEO",
        description: "Create content that ranks well in search engines.",
        content: ["Keyword Research", "Content Strategy", "On-page SEO"],
      },
      {
        id: 3,
        title: "Mastering Technical SEO",
        description: "Optimize the technical aspects of your website for SEO.",
        content: ["Site Speed", "Mobile Optimization", "Schema Markup"],
      },
      {
        id: 4,
        title: "Mastering Technical SEO - Part 2",
        description: "Advanced techniques for technical SEO.",
        content: ["Crawling & Indexing", "HTTPS", "Canonicalization"],
      },
    ],
    highlights: [
      {
        number: "92+",
        description: "Modules",
      },
      {
        number: "280+",
        description: "Hours of learning",
      },
      {
        number: "80+",
        description: "DevOps Tools",
      },
      {
        number: "95+",
        description: "Enterprise Projects",
      },
    ],
    certificateImage: "/assets/cources/courseDetails/certificateimage.png",
    project: [
      {
       icon: "/assets/Projects/container.png",
       title: "Setting up a Multi-Tier Application in Containers",
       description:
         "Containerize a multi-tier application with frontend, backend, and database components. Using Docker to create and manage containers.",
       skills: ["Docker", "Kubernetes", "DevOps", "Frontend", "Backend", "Database Management"],
     },
   ],
   programFor : [
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },


],   
toolsData: [
  {
    icon: "TrendingUp",
    title: "Data Management and Development Tools",
    description: "Tools: Python, SQL",
    toolsImage:"/assets/cources/tools.webp"
  },
  {
    icon: "BarChart",
    title: "Data Analysis and Visualization",
    description: "Tools: Excel, Power BI, Tableau, Matplotlib, Seaborn, NumPy, Pandas",
    toolsImage:"/assets/cources/tools.webp"
  },
  {
    icon: "Cpu",
    title: "Machine Learning and AI Frameworks",
    description: "Tools: Statsmodels, Sklearn, TensorFlow, Keras, NLTK, OpenAI, MLflow",
    toolsImage:"/assets/cources/tools.webp"
  }
],
  },





  {
    _id: "dsa-expert",
    title: "Data Structures & Algorithms for FAANG",
    slug: "dsa-interview-preparation",
    rating: 4.8,
    totalRatings: 3100,
    duration: "4 Months",
    hours: "60+",
    price: 499,
    originalPrice: 799,
    enrolledStudents: 25000,
    shortDescription: "Master DSA for top tech company interviews",
    longDescription: "Comprehensive DSA training with focus on interview preparation for FAANG and other top tech companies.",
    backgroundImage: "/assets/cources/Data-Structure-&-Algorithms-(DSA)-for-FAANG.jpg",
    instructor: {
      name: "Vimal Daga",
      title: "DSA & Interview Expert",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFXmcHM9qcV2A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684676554457?e=1740614400&v=beta&t=t80yG_QFLdEMXzVAWmuSas-BvSMy42wzpVMNg9mTKJc",
      bio: "Ex-FAANG engineer with extensive interview experience",
      rating: 4.9,
      totalStudents: 55000,
      courses: 7
    },
    learningOutcomes: [
      "Master core data structures",
      "Solve complex algorithms",
      "Optimize code performance",
      "Ace technical interviews"
    ],
    features: [
      "Interview Patterns",
      "Problem Solving",
      "Mock Interviews",
      "Company Specific Prep"
    ],
    skills: [
      "Data Structures",
      "Algorithms",
      "Problem Solving",
      "Optimization"
    ],
    requirements: [
      "Programming basics",
      "Any programming language"
    ],
    level: "Intermediate to Advanced",
    language: "English",
    lastUpdated: "2024-02",
    category: "Programming",
    module:  [
      {
        id: 1,
        title: "Fundamentals of SEO & Algorithm",
        description: "Learn the basics of SEO and how algorithms work.",
        content: ["SEO Basics", "Google Algorithm", "Ranking Factors"],
      },
      {
        id: 2,
        title: "Mastering Content for SEO",
        description: "Create content that ranks well in search engines.",
        content: ["Keyword Research", "Content Strategy", "On-page SEO"],
      },
      {
        id: 3,
        title: "Mastering Technical SEO",
        description: "Optimize the technical aspects of your website for SEO.",
        content: ["Site Speed", "Mobile Optimization", "Schema Markup"],
      },
      {
        id: 4,
        title: "Mastering Technical SEO - Part 2",
        description: "Advanced techniques for technical SEO.",
        content: ["Crawling & Indexing", "HTTPS", "Canonicalization"],
      },
    ],
    highlights: [
      {
        number: "19+",
        description: "Modules",
      },
      {
        number: "290+",
        description: "Hours of learning",
      },
      {
        number: "19+",
        description: "DevOps Tools",
      },
      {
        number: "5+",
        description: "Enterprise Projects",
      },
    ],

    certificateImage: "/assets/cources/courseDetails/certificateimage.png",

    project: [
      {
       icon: "/assets/Projects/container.png",
       title: "Multi-Tier Application in Containers",
       description:
         "Containerize a multi-tier application with frontend, backend, and database components. Using Docker to create and manage containers.",
       skills: ["Docker", "Kubernetes", "DevOps", "Frontend", "Backend", "Database Management"],
     },
   ],

   programFor : [
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },
    { src: "/assets/cources/courseDetails/whatWillYouLearn1.webp", alt: "College Students", text: "College Students" },


],

toolsData: [
  {
    icon: "TrendingUp",
    title: "Data Management and Development Tools",
    description: "Tools: Python, SQL",
    toolsImage:"/assets/cources/tools.webp"
  },
  {
    icon: "BarChart",
    title: "Data Analysis and Visualization",
    description: "Tools: Excel, Power BI, Tableau, Matplotlib, Seaborn, NumPy, Pandas",
    toolsImage:"/assets/cources/tools.webp"
  },
  {
    icon: "Cpu",
    title: "Machine Learning and AI Frameworks",
    description: "Tools: Statsmodels, Sklearn, TensorFlow, Keras, NLTK, OpenAI, MLflow",
    toolsImage:"/assets/cources/tools.webp"
  }
],

  }
];