import { Course } from "../../types/courses";

export const specialisationInDocker: Course = {
    _id: "docker-certified-associate-2024",
    title: "[B] Docker Certified Associate  [R] (DCA) Training  [/R] [/B] Kickstart Your DevOps Career with Docker",
    slug: "docker-certified-associate-2024",
    rating: 4.9,
    totalRatings: 10,
    duration: "20 Hours",
    hours: "20+",
    price: 1650,
    originalPrice: 7000,
    enrolledStudents: 12000,
    shortDescription: "Industry-Certified Docker DCA Training | Hands-On Labs | Real-World Projects | Best-In-Class Curriculum",
    paymentLink: "",
    backgroundImage: "/assets/cources/courseDetails/Hero.jpeg",

    learningOutcomes: [
        "Containerization Fundamentals & Docker Basics",
        "Multi-Container Application Management",
        "Docker Swarm Orchestration & Clustering",
        "Container Networking & Storage",
        "Security Best Practices",
        "Docker Enterprise Features"
    ],

    features: [
        "Industry-Recognized Docker Certification Training",
        "Technical Support for 90 days",
        "Real-World Container Projects",
        "Premium #13 Docker Community"
    ],

    skills: [
        "Container Management",
        "Docker CLI",
        "Docker Compose",
        "Docker Swarm",
        "Container Networking",
        "Storage Management",
        "Security Practices",
        "Container Orchestration"
    ],

    requirements: [
        "Basic understanding of Linux",
        "Familiarity with command line",
        "Basic knowledge of virtualization concepts"
    ],

    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-01",
    category: "Docker Certification",

    module: [
        {
            id: 1,
            title: "Docker Fundamentals",
            description: "Core concepts of containerization and Docker basics",
            content: [
                "Introduction to Containerization",
                "Docker Architecture",
                "Docker Installation & Setup",
                "Docker CLI Basics",
                "Container Lifecycle",
                "Docker Images",
                "Dockerfile Creation"
            ]
        },
        {
            id: 2,
            title: "Container Management",
            description: "Advanced container operations and management",
            content: [
                "Container Networking",
                "Volume Management",
                "Resource Constraints",
                "Container Security",
                "Logging & Monitoring",
                "Docker Registry",
                "Image Management"
            ]
        },
        {
            id: 3,
            title: "Multi-Container Applications",
            description: "Managing complex applications with Docker Compose",
            content: [
                "Docker Compose Basics",
                "Service Definition",
                "Network Configuration",
                "Volume Configuration",
                "Environment Variables",
                "Compose File Versions",
                "Multi-Container Deployment"
            ]
        }
        // Add more modules based on course content
    ],

    highlights: [
        {
            number: "11",
            description: "Modules"
        },
        {
            number: "20+",
            description: "Hours of learning"
        },
        {
            number: "3",
            description: "Capstone Projects"
        }
    ],

    certificateImage: "",

    project: [
        {
            icon: "",
            title: "Microservices Deployment",
            description: "Deploy a multi-container microservices application",
            skills: ["Docker Compose", "Networking", "Service Discovery"]
        },
        {
            icon: "",
            title: "Container Orchestration",
            description: "Build a scalable container cluster with Docker Swarm",
            skills: ["Docker Swarm", "Load Balancing", "High Availability"]
        },
        {
            icon: "",
            title: "CI/CD Pipeline",
            description: "Create a containerized CI/CD pipeline",
            skills: ["Docker Registry", "Automation", "DevOps Integration"]
        }
    ],

    programFor: [
        { src: "", alt: "DevOps Engineers", text: "DevOps Engineers" },
        { src: "", alt: "System Administrators", text: "System Administrators" },
        { src: "", alt: "Cloud Engineers", text: "Cloud Engineers" },
        { src: "", alt: "Software Developers", text: "Software Developers" },
        { src: "", alt: "SRE Engineers", text: "Site Reliability Engineers" },
        { src: "", alt: "Infrastructure Engineers", text: "Infrastructure Engineers" },
        { src: "", alt: "Technical Managers", text: "Technical Managers" },
        { src: "", alt: "College Students", text: "College Students" },
        { src: "", alt: "Security Engineers", text: "Security Engineers" },
        { src: "", alt: "Release Engineers", text: "Release Engineers" }
    ],

    toolsData: {
        sectionTitle: "Complete Docker Certification Program",
        category: "Container Technology",
        toolsCount: "10+",
        displayImage: "",
        tools: [
            {
                id: "basics",
                icon: "BarChart",
                title: "Docker Basics: Containers, Images, Dockerfile"
            },
            {
                id: "compose",
                icon: "TrendingUp",
                title: "Docker Compose: Multi-container applications"
            },
            {
                id: "swarm",
                icon: "Cpu",
                title: "Docker Swarm: Container orchestration"
            },
            {
                id: "networking",
                icon: "BarChart",
                title: "Networking: Container communication"
            },
            {
                id: "security",
                icon: "Cpu",
                title: "Security: Best practices & compliance"
            }
        ]
    },
}

