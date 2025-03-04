import { Course } from "../../types/courses";

export const specialisationInTerraform: Course = {
    _id: "specialisation-in-terraform",
    title: "[B]Specialisation in [R]Terraform [/R]& Infrastructure Automation[/B] Become a Terraform Expert",
    slug: "specialisation-in-terraform",
    rating: 4.9,
    totalRatings: 10,
    duration: "45 Hours",
    hours: "45+",
    price: 3993,
    originalPrice: 7500,
    enrolledStudents: 12000,
    shortDescription: "45+ Hours | Comprehensive Modules | 3 Capstone Projects",
    paymentLink: "",
    backgroundImage: "/assets/cources/courseDetails/Hero.jpeg",

    learningOutcomes: [
        "Terraform Concepts",
        "Terraform Modules",
        "Terraform State",
        "Managing Multiple Environments & Resource Meta Parameters",
        "Provisioners in Terraform"
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
            title: "Prerequisite before Terraform Sessions",
            description: "AWS setup and Linux fundamentals",
            content: [
                "AWS Account Setup",
                "Configuring putty with AWS",
                "Introduction to linux commands"
            ]
        },
        {
            id: 2,
            title: "Reference Material",
            description: "Session resources and documentation",
            content: [
                "Resources shared during Session",
                "Screenshot of hands-on steps",
                "Practice materials"
            ]
        },
        {
            id: 3,
            title: "Terraform Introduction and Use Case",
            description: "Fundamentals and implementation",
            content: [
                "Infrastructure as a code Concept",
                "Terraform Introduction",
                "AWS Services",
                "Benefits of Terraform with MultiCloud",
                "Step by Step demonstration about writing Terraform Codes with AWS provider",
                "Setup with hands on activity"
            ]
        },
        {
            id: 4,
            title: "Bonus Sessions - AWS VPC Services",
            description: "AWS fundamentals for beginners",
            content: [
                "AWS Services in depth",
                "VPC Configuration",
                "AWS Infrastructure basics",
                "Automation preparation",
                "Hands-on activity preparation"
            ]
        },
        {
            id: 5,
            title: "Terraform Provisioners",
            description: "Implementation of provisioners",
            content: [
                "AWS Profiles",
                "Terraform Provisioner",
                "Types of Provisioner",
                "Null Resource",
                "Difference between remote-exec and local-exec",
                "Terraform Variables file terraform.tfvars",
                "terraform Workspace introduction"
            ]
        },
        {
            id: 6,
            title: "Terraform Certified Associate",
            description: "Certification preparation",
            content: [
                "Terraform Certification Exam preparation",
                "Query resolution",
                "Practice materials"
            ]
        },
        {
            id: 7,
            title: "Terraform Modules",
            description: "Advanced terraform commands and modules",
            content: [
                "Terraform Modules",
                "Application of Output Block",
                "Importance of main.tf, output.tf, variables.tf",
                "terraform fmt",
                "terraform taint",
                "Usage of terraform -out",
                "Use of -target keyword",
                "Terraform Logs"
            ]
        },
        {
            id: 8,
            title: "Terraform State File and different Use Case",
            description: "State management and security",
            content: [
                "Security Groups",
                "State Lock",
                "Use case of S3 and DynamoDB for State Lock",
                "Using alias for different providers",
                "Terraform Cloud with SCM Integration",
                "Terraform Vault introduction"
            ]
        },
        {
            id: 9,
            title: "Practice Question Sets",
            description: "Certification exam preparation",
            content: [
                "Practice papers for Terraform Certification",
                "Hands-on activity completion",
                "Final preparation materials"
            ]
        }
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

    certificateImage: "/assets/certificate/Terraform_certificate.png",

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
                title: "Infrastructure as Code (IaC): Learn to automate infrastructure provisioning using Terraform."
            },
            {
                id: "aws",
                icon: "BarChart",
                title: "AWS Integration: Gain expertise in deploying and managing AWS resources with Terraform."
            },
            {
                id: "state",
                icon: "Cpu",
                title: "Provisioners & Modules: Utilize provisioners for configuration management and create reusable modules for efficient infrastructure management."
            },
            {
                id: "modules",
                icon: "TrendingUp",
                title: "Modules: Custom modules, registry modules, reusability"
            },
            {
                id: "automation",
                icon: "BarChart",
                title: "State Management: Understand and manage Terraform state files for reliable infrastructure deployments."
            }
        ]
    },
}