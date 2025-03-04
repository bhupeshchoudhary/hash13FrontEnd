import { Course } from "../../types/courses";


export const specialisationInJenkins: Course = {
    _id: "specialisation-in-jenkins",
    title: "[B] Specialization in [R] Jenkins [/R] [/B] & Build Automation Become a Jenkins Expert",
    slug: "specialisation-in-jenkins",
    rating: 4.9,
    totalRatings: 10,
    duration: "30 Hours",
    hours: "30+",
    price: 3350,
    originalPrice: 7500,
    enrolledStudents: 12000,
    shortDescription: "Industry-Relevant & Recognized Training | Hands-On CI/CD Experience | Advanced Automation Techniques | Real-Time Industry Use Cases",
    paymentLink: "",
    backgroundImage: "/assets/cources/courseDetails/Hero.jpeg",

    learningOutcomes: [
        "Jenkins Fundamentals & Setup",
        "Build Automation & Version Control Integration",
        "Pipeline as Code with Groovy DSL",
        "CI/CD Implementation",
        "Jenkins Security & Scaling",
        "Plugin Management & Advanced Features"
    ],

    features: [
        "Industry-Recognized Jenkins Training",
        "Technical Support for 90 days",
        "Real-World Automation Projects",
        "Premium #13 Jenkins Community"
    ],

    skills: [
        "Build Automation",
        "CI/CD Pipeline",
        "Groovy Scripting",
        "Version Control Integration",
        "Jenkins Administration",
        "Pipeline as Code",
        "Security Configuration",
        "Plugin Management"
    ],

    requirements: [
        "Basic understanding of software development",
        "Familiarity with version control systems",
        "Basic Linux administration skills",
        "Command-line experience"
    ],

    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-01",
    category: "Specialisation in Jenkins",

    module: [
        {
            id: 1,
            title: "Introduction to Jenkins",
            description: "Understanding Jenkins, its role in DevOps, and setting up Jenkins on AWS Cloud.",
            content: [
                "What/Why/How of DevOps",
                "What is CI/CD",
                "Introduction to Jenkins",
                "How Jenkins helps in Automation",
                "Role of Jenkins in DevOps Pipeline",
                "Downloading and Installing Jenkins LTS in Linux over AWS Cloud",
                "Core Concepts of Jenkins:",
                "Jobs",
                "Projects",
                "Managing Jenkins",
                "Plugins",
                "Build Trigger",
                "Polling the SCM",
                "Maven Build Steps",
                "And much more"
            ]
        },
        {
            id: 2,
            title: "Master-Slave Architecture in Jenkins",
            description: "Understanding the benefits of a master-slave setup in Jenkins and configuring it with Linux and Docker.",
            content: [
                "Setting up a webserver with Jenkins and GitHub with PollSCM",
                "Master-Slave architecture (Manual and Dynamic) with slave as Linux and Docker",
                "Real-life example of continuous integration with Docker image updates: Rolling upgrades"
            ]
        },
        {
            id: 3,
            title: "Jenkins Pipeline",
            description: "Understanding Jenkins Pipelines and implementing Pipeline as Code for automation.",
            content: [
                "Jenkins Pipeline & Pipeline as a Code with Groovy language",
                "Setting up a web application with Pipeline as a Code"
            ]
        },
        {
            id: 4,
            title: "Integrating Kubernetes with Jenkins",
            description: "Learning Kubernetes basics and integrating it with Jenkins for deployment automation.",
            content: [
                "Integration Kubernetes with Jenkins",
                "Overview of Kubernetes",
                "Installing and configuring KOPS",
                "Using Jenkins through CLI and API",
                "IAM & RBAC in Jenkins"
            ]
        },
        {
            id: 5,
            title: "Projects/Use Case Solved",
            description: "Exploring real-world use cases by integrating Jenkins with various tools.",
            content: [
                "Setting up a web application with Pipeline as a Code",
                "Setting up a webserver with Jenkins and GitHub with PollSCM",
                "Master-Slave architecture (Manual and Dynamic) with slave as Linux and Docker",
                "Setting up Maven"
            ]
        },
        {
            id: 6,
            title: "Interview Questions",
            description: "Covering Jenkins fundamentals to advanced topics to help in interviews.",
            content: [
                "Interview questions on Jenkins fundamentals and advanced topics",
                "Understanding commonly asked questions and best answers"
            ]
        },
        {
            id: 7,
            title: "Preparation for Global Certification - Certified Jenkins Engineer",
            description: "Practical learning to prepare for the Jenkins certification exam.",
            content: [
                "Jenkins Administration",
                "Pipeline as a Code",
                "Hands-on practicals for certification preparation"
            ]
        }
    ],
    

    highlights: [
        {
            number: "7",
            description: "Modules"
        },
        {
            number: "30+",
            description: "Hours of learning"
        },
        {
            number: "3+",
            description: "Capstone Projects"
        }
    ],

    certificateImage: "/assets/certificate/Jenkins_certificate.jpg",

    project: [
        {
            icon: "",
            title: "Automated CI/CD Pipeline",
            description: "Build a complete CI/CD pipeline for application deployment",
            skills: ["Jenkins Pipeline", "CI/CD", "Automation"]
        },
        {
            icon: "",
            title: "Multi-Branch Pipeline",
            description: "Implement automated builds for multiple branches",
            skills: ["Branch Management", "Version Control", "Build Automation"]
        },
        {
            icon: "",
            title: "Distributed Build System",
            description: "Create a scalable distributed build environment",
            skills: ["Distributed Builds", "Master-Slave", "Performance"]
        }
    ],

    programFor: [
        { src: "", alt: "Engineering Graduates", text: "Engineering Graduates (CS/IT, ECE)" },
        { src: "", alt: "System Administrators", text: "Linux System Administrators" },
        { src: "", alt: "DevOps Engineers", text: "DevOps Engineers" },
        { src: "", alt: "Cloud Administrators", text: "Cloud Administrators" },
        { src: "", alt: "Web Developers", text: "Web Developers" },
        { src: "", alt: "Automation Engineers", text: "Automation Engineers" },
        { src: "", alt: "Server Administrators", text: "Server Administrators" },
        { src: "", alt: "Network Administrators", text: "Network Administrators" },
        { src: "", alt: "Freshers", text: "Freshers" },
        { src: "", alt: "Academicians", text: "Academicians" }
    ],

    toolsData: {
        sectionTitle: "Complete Jenkins Program",
        category: "CI/CD Automation",
        toolsCount: "10+",
        displayImage: "",
        tools: [
            {
                id: "basics",
                icon: "TrendingUp",
                title: "Jenkins Basics: Installation, Configuration, Jobs"
            },
            {
                id: "pipeline",
                icon: "BarChart",
                title: "Pipeline: Groovy DSL, Jenkinsfile, Stages"
            },
            {
                id: "automation",
                icon: "Cpu",
                title: "Build Automation: Triggers, Steps, Actions"
            },
            {
                id: "integration",
                icon: "TrendingUp",
                title: "Integration: Version Control, Tools, Plugins"
            },
            {
                id: "advanced",
                icon: "BarChart",
                title: "Advanced: Security, Scaling, Administration"
            }
        ]
    },
}