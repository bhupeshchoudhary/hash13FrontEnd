import { Course } from "../../types/courses";

export const specialisationInShellScripting: Course = {
    _id: "specialisation-in-shell-scripting",
    title: "Specialisation in Shell Scripting - Become a Shell Scripting Expert",
    slug: "specialisation-in-shell-scripting",
    rating: 4.9, // Not provided
    totalRatings: 10, // Not provided
    duration: "16 Hours",
    hours: "16+",
    price: 2000, // Not provided
    originalPrice: 7000, // Not provided
    enrolledStudents: 12000, // Not provided
    shortDescription: "Industry-Relevant & Recognized Training | Hands-On Automation Experience | Advanced Scripting Techniques | Real-Time Industry Use Cases",
    paymentLink: "", // Not provided
    backgroundImage: "", // Need path

    learningOutcomes: [
       " Introduction to Shell Scripting | Input | Output | Control Structures | Loops",
        "Grep command | Everything about vi editor | Advanced Scripting Techniques",
        "Sample Scripts | Regex | Apache httpd | Build Unique Linux Programs | AWK",
        "Arrays | Cut and sed command | Blacklisting an IP | Conditional Statement",
        "Useful utilities for Shell Scripts "
    ],

    features: [
        "Most Relevant Shell Scripting Tips & Tricks",
        "Technical Support for 90 days",
        "Automation Related Industry Use Cases",
        "Premium #13 Shell Scripting Community"
    ],

    skills: [
        "Bash Scripting",
        "Shell Programming",
        "Automation",
        "System Administration",
        "Text Processing",
        "Network Scripting",
        "Process Management"
    ],

    requirements: [
        "Basic computer knowledge",
        "Basic understanding of Linux/Unix"
    ],

    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-01",
    category: "Specialisation in Shell Scripting",

    module: [
        {
            id: 1,
            title: "Introduction to Shell Scripting",
            description: "Fundamentals of Shell and Operating System interfaces",
            content: [
                "What is Shell & Shell Scripting?",
                "Operating System GUI & CLI",
                "Introduction to Bash Shell",
                "Linux OS Fundamentals",
                "Shell Basics",
                "Cisco Switches",
                "GUI vs. CLI"
            ]
        },
        {
            id: 2,
            title: "Script Creation and Basic Commands",
            description: "Essential concepts for creating and executing shell scripts",
            content: [
                "Creating a Script File and Building a Command",
                "Variables & User-defined Variables",
                "Status Code",
                "Executable Program",
                "Path",
                "Hashbang or Shebang",
                "Script File",
                "Bashrc File",
                "Arguments"
            ]
        },
        {
            id: 3,
            title: "Loops and Iterations",
            description: "Understanding loop structures and user management",
            content: [
                "Iteration in Shell Scripting",
                "Useradd & ID Command",
                "Iteration & Loop",
                "For Loop Syntax",
                "Passwd File Manipulation",
                "Looping Constructs",
                "Looping & Flow Control"
            ]
        },
        {
            id: 4,
            title: "Conditional Statements and User Management",
            description: "Control structures and user administration",
            content: [
                "If-Else Conditions",
                "Test Command",
                "Conditional Operators",
                "I/O Redirection",
                "Nested Conditions",
                "User Management Commands (Useradd, User Lock)",
                "Regex, Grep & Cut Command",
                "Home Directory Management",
                "Backup using Tar Command"
            ]
        },
        {
            id: 5,
            title: "Network Scripts and AWS Integration",
            description: "Network automation and cloud integration",
            content: [
                "Executing Scripts Over Network",
                "Log Analysis",
                "Launching AWS EC2 Instance",
                "WinSCP Tool",
                "Configuring Web Server (HTTPD)",
                "Access Logs & Error Logs",
                "File Operations (WC, CHMOD, SUDO, AWK, SORT, UNIQ, TAIL, SCP)",
                "SSH & SCP Commands"
            ]
        },
        {
            id: 6,
            title: "Advanced Scripting Techniques",
            description: "Advanced text processing and script options",
            content: [
                "Regular Expressions",
                "AWK & GREP Command",
                "SED Command",
                "Creating Options in Scripts",
                "Using GETOPTS & SET Command",
                "Pre-created Variables & Functions",
                "AWK Command for Text Processing"
            ]
        },
        {
            id: 7,
            title: "Process Management",
            description: "Managing processes and job control",
            content: [
                "Process & Subprocess Management",
                "Job Control",
                "Daemon Processes",
                "Signal Handling",
                "Parallel Execution"
            ]
        },
        {
            id: 8,
            title: "Advanced Shell Commands",
            description: "Advanced shell features and commands",
            content: [
                "Shopt Command",
                "Tree Command",
                "Export Keyword",
                "Arrays",
                "File Manipulation",
                "Test Keyword",
                "Logical Operators"
            ]
        }
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

    certificateImage: "", // Need path

    project: [
        {
            icon: "", // Need path
            title: "System Automation Framework",
            description: "Build a comprehensive automation framework for system administration tasks",
            skills: ["Shell Scripting", "Automation", "System Administration"]
        },
        {
            icon: "", // Need path
            title: "Log Analysis System",
            description: "Create an automated log analysis and reporting system",
            skills: ["Text Processing", "AWK", "GREP", "SED"]
        },
        {
            icon: "", // Need path
            title: "Backup Automation",
            description: "Implement an automated backup and recovery system",
            skills: ["File Management", "Cron Jobs", "AWS Integration"]
        }
    ],

    programFor: [
        { src: "", alt: "Engineering Graduates", text: "Engineering Graduates" },
        { src: "", alt: "System Administrators", text: "Linux System Administrators" },
        { src: "", alt: "DevOps Engineers", text: "DevOps Engineers" },
        { src: "", alt: "Cloud Administrators", text: "Cloud Administrators" },
        { src: "", alt: "Web Developers", text: "Web Developers " },
        { src: "", alt: "Automation Engineers", text: "Automation Engineers" },
        { src: "", alt: "Server Administrators", text: "Server Administrators" },
        { src: "", alt: "Network Administrators", text: "Network Administrators" },
        { src: "", alt: "Freshers", text: "Automation or DevOps Roles" },
        { src: "", alt: "Academicians", text: "Academicians " }
    ],

    toolsData: {
        sectionTitle: "Complete Shell Scripting Program",
        category: "Automation",
        toolsCount: "10+",
        displayImage: "", // Need path
        tools: [
            {
                id: "basics",
                icon: "BarChart",
                title: "Shell Essentials: Bash scripting, CLI commands, shebang, chmod"
            },
            {
                id: "control",
                icon: "TrendingUp",
                title: "Control Structures: If-Else, For, While loops, Regex, exit status"
            },
            {
                id: "automation",
                icon: "Cpu",
                title: "File & Process Automation: File I/O, cron jobs, signal trapping"
            },
            {
                id: "network",
                icon: "BarChart",
                title: "Network Scripting: SCP, SSH, AWS EC2 automation, log analysis"
            },
            {
                id: "text",
                icon: "TrendingUp",
                title: "Text Processing Tools: AWK, GREP, SED, GETOPTS"
            }
        ]
    },
}
