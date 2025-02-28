import { Course } from "../../types/courses";

export const specialisationInAnsible: Course = {
    _id: "specialisation-in-ansible",
    title: "Specialization in Ansible Automation",
    slug: "specialisation-in-ansible",
    rating: 4.9,
    totalRatings: 10,
    duration: "24 Hours",
    hours: "24+",
    price: 2000,
    originalPrice: 7000,
    enrolledStudents: 12000,
    shortDescription: "Industry-Relevant & Recognized Training | Hands-On Automation Experience | Advanced Playbook Techniques | Real-Time Industry Use Cases",
    paymentLink: "",
    backgroundImage: "/assets/cources/courseDetails/Hero.jpeg",

    learningOutcomes: [
        "Ansible Fundamentals & Installation",
        "Playbook Development & Execution",
        "Variables & Facts Management",
        "Task Control & Handlers",
        "Role-Based Automation",
        "Enterprise Features & Tower",
        "Cloud Integration"
    ],

    features: [
        "Industry-Recognized Ansible Training",
        "Technical Support for 90 days",
        "Real-World Automation Projects",
        "Premium #13 Ansible Community"
    ],

    skills: [
        "Infrastructure Automation",
        "Playbook Development",
        "Configuration Management",
        "Task Orchestration",
        "Role Management",
        "Cloud Automation",
        "Ansible Tower",
        "Security Implementation"
    ],

    requirements: [
        "Basic Linux administration knowledge",
        "Understanding of YAML syntax",
        "Familiarity with command line",
        "Basic scripting knowledge"
    ],

    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-01",
    category: "Specialisation in Ansible",

    module: [
        {
            id: 1,
            title: "Introduction to Ansible",
            description: "Core concepts and setup",
            content: [
                "Ansible Architecture",
                "Installation & Setup",
                "Inventory Management",
                "Ad-hoc Commands",
                "Configuration Files",
                "SSH Setup",
                "Basic Operations"
            ]
        },
        {
            id: 2,
            title: "Playbook Development",
            description: "Creating and managing playbooks",
            content: [
                "Playbook Structure",
                "YAML Syntax",
                "Task Definition",
                "Module Usage",
                "Play Structure",
                "Playbook Execution",
                "Best Practices"
            ]
        },
        {
            id: 3,
            title: "Variables and Facts",
            description: "Managing dynamic data",
            content: [
                "Variable Types",
                "Fact Gathering",
                "Variable Precedence",
                "Using Templates",
                "Jinja2 Templates",
                "Dynamic Inventory",
                "Custom Facts"
            ]
        }
        // Add more modules based on course content
    ],

    highlights: [
        {
            number: "10",
            description: "Modules"
        },
        {
            number: "24+",
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
            title: "Multi-Tier Application Deployment",
            description: "Automate deployment of a complete application stack",
            skills: ["Playbooks", "Roles", "Configuration Management"]
        },
        {
            icon: "",
            title: "Cloud Infrastructure Automation",
            description: "Implement cloud resource management with Ansible",
            skills: ["Cloud Automation", "Infrastructure Management", "AWS/Azure Integration"]
        },
        {
            icon: "",
            title: "Enterprise Automation Framework",
            description: "Build a scalable automation framework using Ansible Tower",
            skills: ["Ansible Tower", "Role-Based Access", "Workflow Automation"]
        }
    ],

    programFor: [
        { src: "", alt: "Engineering Graduates", text: "Engineering Graduates (CS/IT, ECE)" },
        { src: "", alt: "System Administrators", text: "Linux System Administrators" },
        { src: "", alt: "DevOps Engineers", text: "DevOps Engineers" },
        { src: "", alt: "Cloud Administrators", text: "Cloud Administrators" },
        { src: "", alt: "Automation Engineers", text: "Automation Engineers" },
        { src: "", alt: "IT Professionals", text: "IT Professionals" }
    ],

    toolsData: {
        sectionTitle: "Complete Ansible Program",
        category: "Infrastructure Automation",
        toolsCount: "10+",
        displayImage: "",
        tools: [
            {
                id: "basics",
                icon: "TrendingUp",
                title: "Ansible Basics: Installation, Configuration, Commands"
            },
            {
                id: "playbooks",
                icon: "BarChart",
                title: "Playbooks: Development, Execution, Best Practices"
            },
            {
                id: "variables",
                icon: "Cpu",
                title: "Variables: Facts, Templates, Dynamic Inventory"
            },
            {
                id: "roles",
                icon: "TrendingUp",
                title: "Roles: Creation, Management, Reusability"
            },
            {
                id: "enterprise",
                icon: "BarChart",
                title: "Enterprise: Tower, Security, Scaling"
            }
        ]
    },
}