import { Course } from "../../types/courses";
export const specialisationInKubernetes: Course = {
    _id: "specialisation-in-kubernetes",
    title: "Specialization in Kubernetes - Become a Kubernetes Expert",
    slug: "specialisation-in-kubernetes",
    rating: 4.9,
    totalRatings: 10,
    duration: "60 Hours",
    hours: "60+",
    price: 2000,
    originalPrice: 7000,
    enrolledStudents: 12000,
    shortDescription: "Industry-Relevant & Recognized Training | Hands-On Orchestration Experience | Advanced Deployment Techniques | Real-Time Industry Use Cases",
    paymentLink: "",
    backgroundImage: "/assets/cources/courseDetails/Hero.jpeg",

    learningOutcomes: [
        "Kubernetes Architecture & Components",
        "Advanced Deployment Strategies",
        "Container Orchestration & Scaling",
        "Networking & Service Discovery",
        "Storage Management & Persistence",
        "Security Best Practices & RBAC"
    ],

    features: [
        "Industry-Recognized Kubernetes Training",
        "Technical Support for 90 days",
        "Real-World Cloud-Native Projects",
        "Premium #13 Kubernetes Community"
    ],

    skills: [
        "Container Orchestration",
        "Cluster Management",
        "Deployment Strategies",
        "Kubernetes Networking",
        "Storage Management",
        "Security Configuration",
        "Service Mesh",
        "Cloud-Native Practices"
    ],

    requirements: [
        "Basic understanding of containers",
        "Familiarity with Docker",
        "Basic Linux administration skills",
        "Command-line experience"
    ],

    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-01",
    category: "Specialisation in Kubernetes",

    module: [
        {
            id: 1,
            title: "Kubernetes Fundamentals",
            description: "Core concepts and architecture",
            content: [
                "Kubernetes Architecture",
                "API Server & Components",
                "Cluster Setup",
                "kubectl CLI",
                "Pods & Containers",
                "Controllers & ReplicaSets",
                "Deployments"
            ]
        },
        {
            id: 2,
            title: "Advanced Deployment Strategies",
            description: "Complex deployment patterns and techniques",
            content: [
                "Rolling Updates",
                "Blue-Green Deployments",
                "Canary Releases",
                "StatefulSets",
                "DaemonSets",
                "Jobs & CronJobs",
                "Resource Management"
            ]
        },
        {
            id: 3,
            title: "Networking & Services",
            description: "Kubernetes networking concepts",
            content: [
                "Service Types",
                "Ingress Controllers",
                "Network Policies",
                "Load Balancing",
                "Service Discovery",
                "DNS Management",
                "Container Network Interface"
            ]
        }
        // Add more modules based on course content
    ],

    highlights: [
        {
            number: "17",
            description: "Modules"
        },
        {
            number: "60+",
            description: "Hours of learning"
        },
        {
            number: "4+",
            description: "Capstone Projects"
        }
    ],

    certificateImage: "",

    project: [
        {
            icon: "",
            title: "Microservices Platform",
            description: "Build a complete microservices platform on Kubernetes",
            skills: ["Kubernetes", "Microservices", "Service Mesh"]
        },
        {
            icon: "",
            title: "High-Availability Cluster",
            description: "Deploy and manage a highly available Kubernetes cluster",
            skills: ["Cluster Management", "HA Configuration", "Scaling"]
        },
        {
            icon: "",
            title: "CI/CD Pipeline",
            description: "Implement a complete CI/CD pipeline with Kubernetes",
            skills: ["DevOps", "Automation", "Continuous Deployment"]
        },
        {
            icon: "",
            title: "Multi-Cloud Setup",
            description: "Create a multi-cloud Kubernetes infrastructure",
            skills: ["Cloud Integration", "Federation", "Multi-cluster Management"]
        }
    ],

    programFor: [
        { src: "", alt: "Engineering Graduates", text: "Engineering Graduates (CS/IT, ECE)" },
        { src: "", alt: "System Administrators", text: "System Administrators" },
        { src: "", alt: "DevOps Engineers", text: "DevOps Engineers" },
        { src: "", alt: "Cloud Administrators", text: "Cloud Administrators" },
        { src: "", alt: "Software Developers", text: "Software Developers" },
        { src: "", alt: "Automation Engineers", text: "Automation Engineers" },
        { src: "", alt: "Network Administrators", text: "Network Administrators" },
        { src: "", alt: "Academicians", text: "Academicians" },
        { src: "", alt: "Freshers", text: "Freshers" }
    ],

    toolsData: {
        sectionTitle: "Complete Kubernetes Program",
        category: "Container Orchestration",
        toolsCount: "15+",
        displayImage: "",
        tools: [
            {
                id: "fundamentals",
                icon: "TrendingUp",
                title: "Core Concepts: Architecture, Components, API"
            },
            {
                id: "deployment",
                icon: "Cpu",
                title: "Deployments: Strategies, Scaling, Updates"
            },
            {
                id: "networking",
                icon: "BarChart",
                title: "Networking: Services, Ingress, Policies"
            },
            {
                id: "storage",
                icon: "TrendingUp",
                title: "Storage: PV, PVC, StorageClasses"
            },
            {
                id: "security",
                icon: "BarChart",
                title: "Security: RBAC, Policies, Authentication"
            }
        ]
    },
}