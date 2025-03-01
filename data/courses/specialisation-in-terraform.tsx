import { Course } from "../../types/courses";

export const specialisationInTerraform: Course = {
    _id: "specialisation-in-terraform",
    title: "[B]Specialisation in [R]Terraform & Infrastructure Automation[/B][/R] Become a Terraform Expert",
    slug: "specialisation-in-terraform",
    rating: 4.9,
    totalRatings: 10,
    duration: "45 Hours",
    hours: "45+",
    price: 2000,
    originalPrice: 7000,
    enrolledStudents: 12000,
    shortDescription: "Industry-Certified Training | Hands-On Labs | Real-World Projects | Best-In-Class Curriculum",
    paymentLink: "",
    backgroundImage: "/assets/cources/courseDetails/Hero.jpeg",

    learningOutcomes: [
        "Infrastructure as Code (IaC) fundamentals and best practices",
        "AWS resource deployment and management with Terraform",
        "Provisioners and configuration management",
        "Module creation and reuse for efficient infrastructure",
        "State management and remote state storage"
    ],

    features: [
        "Industry-Relevant Infrastructure Automation Training",
        "Technical Support for 90 days",
        "Real-World Infrastructure Projects",
        "Premium #13 Terraform Community"
    ],

    skills: [
        "Infrastructure as Code",
        "Cloud Automation",
        "AWS Resource Management",
        "State Management",
        "Module Development",
        "Configuration Management",
        "Version Control",
        "CI/CD Integration"
    ],

    requirements: [
        "Basic understanding of cloud concepts",
        "Familiarity with command line interface",
        "Basic programming knowledge"
    ],

    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-01",
    category: "Specialisation in Terraform",

    module: [
        {
            id: 1,
            title: "Introduction to Infrastructure as Code",
            description: "Fundamentals of IaC and Terraform basics",
            content: [
                "What is Infrastructure as Code?",
                "Terraform Overview",
                "Installation and Setup",
                "Basic Terraform Commands",
                "HCL Syntax",
                "Terraform Workflow",
                "Provider Configuration"
            ]
        },
        {
            id: 2,
            title: "AWS Resource Management",
            description: "Managing AWS infrastructure with Terraform",
            content: [
                "AWS Provider Configuration",
                "EC2 Instance Management",
                "VPC and Networking",
                "Security Groups",
                "S3 Bucket Creation",
                "IAM Role Management",
                "RDS Database Setup"
            ]
        },
        {
            id: 3,
            title: "State Management",
            description: "Understanding and managing Terraform state",
            content: [
                "Local State",
                "Remote State Storage",
                "State Locking",
                "State Management Best Practices",
                "Import Existing Resources",
                "State Migration",
                "Workspace Management"
            ]
        },
        // Add more modules as needed
    ],

    highlights: [
        {
            number: "12",
            description: "Modules"
        },
        {
            number: "45+",
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
            title: "Multi-Tier AWS Infrastructure",
            description: "Build a complete multi-tier application infrastructure on AWS",
            skills: ["Terraform", "AWS", "Infrastructure as Code"]
        },
        {
            icon: "",
            title: "Auto-Scaling Environment",
            description: "Create an auto-scaling environment with load balancing",
            skills: ["Auto Scaling", "Load Balancing", "High Availability"]
        },
        {
            icon: "",
            title: "Multi-Environment Setup",
            description: "Implement a multi-environment infrastructure using workspaces",
            skills: ["Workspace Management", "Environment Configuration", "State Management"]
        }
    ],

    programFor: [
        { src: "", alt: "DevOps Engineers", text: "DevOps Engineers" },
        { src: "", alt: "Cloud Engineers", text: "Cloud Engineers" },
        { src: "", alt: "System Administrators", text: "System Administrators" },
        { src: "", alt: "Infrastructure Engineers", text: "Infrastructure Engineers" },
        { src: "", alt: "Software Developers", text: "Software Developers" },
        { src: "", alt: "SRE Engineers", text: "Site Reliability Engineers" },
        { src: "", alt: "Technical Managers", text: "Technical Managers" },
        { src: "", alt: "Cloud Architects", text: "Cloud Architects" },
        { src: "", alt: "IT Professionals", text: "IT Professionals" },
        { src: "", alt: "College Students", text: "College Students" }
    ],

    toolsData: {
        sectionTitle: "Complete Terraform Program",
        category: "Infrastructure Automation",
        toolsCount: "10+",
        displayImage: "",
        tools: [
            {
                id: "basics",
                icon: "TrendingUp",
                title: "Infrastructure as Code: Terraform basics, HCL, providers"
            },
            {
                id: "aws",
                icon: "BarChart",
                title: "AWS Integration: EC2, VPC, S3, RDS, IAM management"
            },
            {
                id: "state",
                icon: "Cpu",
                title: "State Management: Remote state, locking, workspaces"
            },
            {
                id: "modules",
                icon: "TrendingUp",
                title: "Modules: Custom modules, registry modules, reusability"
            },
            {
                id: "automation",
                icon: "BarChart",
                title: "Automation: CI/CD integration, automated deployments"
            }
        ]
    },
}