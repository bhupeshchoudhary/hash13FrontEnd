import { Course } from "../../types/courses";


export const specialisationInJenkins: Course = {
    _id: "specialisation-in-jenkins",
    title: "Specialization in Jenkins & Build Automation",
    slug: "specialisation-in-jenkins",
    rating: 4.9,
    totalRatings: 10,
    duration: "30 Hours",
    hours: "30+",
    price: 2000,
    originalPrice: 7000,
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
            title: "Jenkins Fundamentals",
            description: "Core concepts and setup",
            content: [
                "Introduction to Jenkins",
                "Installation & Configuration",
                "Jenkins Architecture",
                "Basic Job Creation",
                "Jenkins Dashboard",
                "User Management",
                "Basic Configuration"
            ]
        },
        {
            id: 2,
            title: "Build Automation",
            description: "Managing build processes",
            content: [
                "Creating Build Jobs",
                "Version Control Integration",
                "Build Triggers",
                "Build Steps",
                "Post-build Actions",
                "Artifacts Management",
                "Build Environment"
            ]
        },
        {
            id: 3,
            title: "Pipeline as Code",
            description: "Jenkins pipeline implementation",
            content: [
                "Pipeline Basics",
                "Jenkinsfile Creation",
                "Groovy DSL",
                "Pipeline Syntax",
                "Stages & Steps",
                "Parallel Execution",
                "Shared Libraries"
            ]
        }
        // Add more modules based on course content
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

    certificateImage: "",

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