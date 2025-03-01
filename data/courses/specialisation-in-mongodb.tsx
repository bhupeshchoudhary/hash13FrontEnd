import { Course } from "../../types/courses";

export const specialisationInMongoDB: Course = {
    _id: "specialisation-in-mongodb",
    title: "MongoDB Certified Training - Master MongoDB",
    slug: "specialisation-in-mongodb",
    rating: 4.9,
    totalRatings: 10,
    duration: "16 Hours",
    hours: "16+",
    price: 2000,
    originalPrice: 7000,
    enrolledStudents: 12000,
    shortDescription: "Industry-Recognized Curriculum | Live Projects | Expert-Led Training | Advanced NoSQL Techniques | High-Performance Data Handling",
    paymentLink: "",
    backgroundImage: "/assets/cources/courseDetails/Hero.jpeg",

    learningOutcomes: [
        "MongoDB Fundamentals & NoSQL concepts",
        "CRUD Operations & Document Management",
        "Schema Design & Data Modeling",
        "Indexing & Aggregation Pipelines",
        "Replication & Sharding Architecture",
        "Backup & Recovery Strategies"
    ],

    features: [
        "Industry-Relevant MongoDB Training",
        "Technical Support for 90 days",
        "Real-World Database Projects",
        "Premium #13 MongoDB Community"
    ],

    skills: [
        "NoSQL Database Management",
        "Document Database Design",
        "CRUD Operations",
        "Aggregation Framework",
        "Indexing Strategies",
        "Replication",
        "Sharding",
        "Performance Optimization"
    ],

    requirements: [
        "Basic understanding of databases",
        "Familiarity with JSON",
        "Basic programming knowledge"
    ],

    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-01",
    category: "System Design",

    module: [
        {
            id: 1,
            title: "Introduction to MongoDB",
            description: "Fundamentals of NoSQL and MongoDB basics",
            content: [
                "NoSQL Database Concepts",
                "MongoDB Architecture",
                "JSON Document Structure",
                "MongoDB Shell",
                "Basic Commands",
                "Database & Collections",
                "Document Structure"
            ]
        },
        {
            id: 2,
            title: "CRUD Operations",
            description: "Working with MongoDB Documents",
            content: [
                "Creating Documents",
                "Reading Documents",
                "Updating Documents",
                "Deleting Documents",
                "Query Operators",
                "Bulk Operations",
                "Document Validation"
            ]
        },
        {
            id: 3,
            title: "Schema Design & Data Modeling",
            description: "Optimizing MongoDB Database Structure",
            content: [
                "Schema Design Patterns",
                "Embedding vs References",
                "One-to-One Relationships",
                "One-to-Many Relationships",
                "Many-to-Many Relationships",
                "Schema Validation",
                "Data Model Optimization"
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
            number: "16+",
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
            title: "E-Commerce Database",
            description: "Build a scalable e-commerce database system",
            skills: ["MongoDB", "Schema Design", "Indexing"]
        },
        {
            icon: "",
            title: "Analytics Platform",
            description: "Create a data analytics platform using aggregation",
            skills: ["Aggregation Pipeline", "Data Analysis", "Reporting"]
        },
        {
            icon: "",
            title: "Distributed Database",
            description: "Implement a distributed database with replication",
            skills: ["Replication", "Sharding", "High Availability"]
        }
    ],

    programFor: [
        { src: "", alt: "Software Developers", text: "Software Developers" },
        { src: "", alt: "Database Administrators", text: "Database Administrators" },
        { src: "", alt: "System Administrators", text: "System Administrators" },
        { src: "", alt: "Cloud Engineers", text: "Cloud Engineers" },
        { src: "", alt: "DevOps Engineers", text: "DevOps Engineers" },
        { src: "", alt: "Data Engineers", text: "Data Engineers" },
        { src: "", alt: "IT Professionals", text: "IT Professionals" },
        { src: "", alt: "Students", text: "Students" }
    ],

    toolsData: {
        sectionTitle: "Complete MongoDB Program",
        category: "Database Management",
        toolsCount: "10+",
        displayImage: "",
        tools: [
            {
                id: "basics",
                icon: "TrendingUp",
                title: "MongoDB Basics: NoSQL, Documents, Collections"
            },
            {
                id: "crud",
                icon: "BarChart",
                title: "CRUD Operations: Create, Read, Update, Delete"
            },
            {
                id: "schema",
                icon: "Cpu",
                title: "Schema Design: Data Modeling, Relationships"
            },
            {
                id: "performance",
                icon: "TrendingUp",
                title: "Performance: Indexing, Aggregation Pipeline"
            },
            {
                id: "scaling",
                icon: "Cpu",
                title: "Scaling: Replication, Sharding, Clustering"
            }
        ]
    },
}