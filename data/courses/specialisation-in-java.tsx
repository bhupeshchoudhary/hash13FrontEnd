import { Course } from "../../types/courses";

export const specialisationInJava: Course = {
    _id: "specialisation-in-java",
    title: "[B][R]Java Programming[/B][/R] Certified Training",
    slug: "specialisation-in-java",
    rating: 4.9,
    totalRatings: 10,
    duration: "20 Hours",
    hours: "20+",
    price: 2000,
    originalPrice: 7000,
    enrolledStudents: 12000,
    shortDescription: "Industry-Recognized Curriculum | Live Projects | Expert-Led Training | Master Java with Hands-On Labs & Real-World Projects",
    paymentLink: "",
    backgroundImage: "/assets/cources/courseDetails/java/java.jpg",

    learningOutcomes: [
        "Core Java Fundamentals & OOP concepts",
        "Advanced Java Features & Multithreading",
        "Web Development with Servlets & JSP",
        "Spring Framework & Hibernate",
        "Database Integration with JDBC",
        "Microservices & Cloud Development"
    ],

    features: [
        "Industry-Relevant Java Training",
        "Technical Support for 90 days",
        "Real-World Development Projects",
        "Premium #13 Java Community"
    ],

    skills: [
        "Core Java",
        "Object-Oriented Programming",
        "Multithreading",
        "Collections Framework",
        "Spring Framework",
        "Hibernate ORM",
        "Web Development",
        "Microservices"
    ],

    requirements: [
        "Basic programming knowledge",
        "Understanding of computer fundamentals",
        "Basic knowledge of databases"
    ],

    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-01",
    category: "System ",

    module: [
        {
            id: 1,
            title: "Core Java Fundamentals",
            description: "Essential Java concepts and OOP principles",
            content: [
                "Java Basics & Environment Setup",
                "Variables & Data Types",
                "Control Structures",
                "Object-Oriented Programming",
                "Classes & Objects",
                "Inheritance & Polymorphism",
                "Encapsulation & Abstraction"
            ]
        },
        {
            id: 2,
            title: "Advanced Java Features",
            description: "Advanced programming concepts in Java",
            content: [
                "Exception Handling",
                "Multithreading",
                "Collections Framework",
                "Generics",
                "File I/O",
                "Lambda Expressions",
                "Stream API"
            ]
        },
        {
            id: 3,
            title: "Web Development",
            description: "Java web development fundamentals",
            content: [
                "Servlets",
                "JSP",
                "JDBC",
                "Web Services",
                "RESTful APIs",
                "Spring MVC",
                "Spring Boot"
            ]
        }
        // Add more modules based on course content
    ],

    highlights: [
        {
            number: "12+",
            description: "Modules"
        },
        {
            number: "20+",
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
            title: "E-Commerce Platform",
            description: "Build a full-stack e-commerce application",
            skills: ["Spring Boot", "Hibernate", "REST APIs"]
        },
        {
            icon: "",
            title: "Banking System",
            description: "Develop a secure banking application",
            skills: ["Core Java", "JDBC", "Security"]
        },
        {
            icon: "",
            title: "Microservices Application",
            description: "Create a scalable microservices architecture",
            skills: ["Spring Cloud", "Microservices", "Docker"]
        }
    ],

    programFor: [
        { src: "", alt: "Software Developers", text: "Software Developers" },
        { src: "", alt: "Java Developers", text: "Java Developers" },
        { src: "", alt: "Backend Engineers", text: "Backend Engineers" },
        { src: "", alt: "Full Stack Developers", text: "Full Stack Developers" },
        { src: "", alt: "Cloud Engineers", text: "Cloud Engineers" },
        { src: "", alt: "DevOps Engineers", text: "DevOps Engineers" },
        { src: "", alt: "IT Professionals", text: "IT Professionals" },
        { src: "", alt: "Students", text: "Students" }
    ],

    toolsData: {
        sectionTitle: "Complete Java Programming",
        category: "Software Development",
        toolsCount: "10+",
        displayImage: "",
        tools: [
            {
                id: "core",
                icon: "TrendingUp",
                title: "Core Java: OOP, Collections, Multithreading"
            },
            {
                id: "web",
                icon: "Cpu",
                title: "Web Development: Servlets, JSP, Spring"
            },
            {
                id: "database",
                icon: "BarChart",
                title: "Database: JDBC, Hibernate, JPA"
            },
            {
                id: "frameworks",
                icon: "TrendingUp",
                title: "Frameworks: Spring Boot, Spring MVC"
            },
            {
                id: "cloud",
                icon: "BarChart",
                title: "Cloud & Microservices: Spring Cloud, Docker"
            }
        ]
    },
}