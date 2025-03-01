import { Course } from "../../types/courses";
export const SplunkAdmin:Course ={
    _id: "specialisation-in-splunk",
    title: "[B]Specialisation in [R]Splunk Administration[/R][/B] Become a Splunk Expert ",
    slug: "specialisation-in-splunk",
    rating: 4.7,
    totalRatings: 10,
    duration: "12 Hours",
    hours: "12+",
    price: 4893,
    originalPrice: 8500,
    enrolledStudents: 12000,
    shortDescription: "Industry-Relevant & Recognized Training | Hands-On Data Analysis Experience | Real-Time Industry Use Cases | 100% Practical Training",
    paymentLink: "https://rzp.io/rzp/2asghU9u",
    backgroundImage: "/assets/cources/courseDetails/Hero.jpeg",
  
    learningOutcomes: [
        "Setup & Installation | Splunk Introduction | Splunk Configuration Files & Indexes",
        "Data Inputs | Searching and Reporting | Splunk Administration",
        "Splunk Apps and Add-ons | Splunk Security, Monitoring and Alerting",
        "Advanced Topics",

    ],
  
    features: [
        "Most Relevant Advance SPLUNK Tips & Tricks",
        "Technical Support for 90 days",
        "SPLUNK Related Industry Use Cases",
        "Premium #13 SPLUNK Community"
    ],
  
    skills: [
        "Prometheus",
        "Grafana",
        "Monitoring",
        "Observability",
        "PromQL",
        "System Monitoring",
        "Application Performance Monitoring"
    ],
  
    requirements: [
        "Basic computer knowledge",
        "Basic understanding of monitoring concepts"
    ],
  
    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-01",
    category: "Specialisation in Prometheus & Grafana",
  
  module: [
    {
        id: 1,
        title: "Splunk Introduction",
        description: "Overview of Splunk and its components",
        content: [
            "Overview of Splunk and its components",
            "Introduction to search language",
            "Understanding Splunk data models",
            "Splunk Architecture",
            "Deployment models",
            "Splunk data sources"
        ]
    },
    {
        id: 2,
        title: "Setup & Installation",
        description: "Installing, configuring, and managing Splunk instances",
        content: [
            "Installing and configuring Splunk",
            "Splunk configuration files and their purpose",
            "Setting up Splunk indexing and searching",
            "Deployment Server configuration",
            "Managing Splunk instances",
            "Understanding Splunk’s web interface",
            "Upgrading Splunk instances",
            "Best practices for Splunk deployment"
        ]
    },
    {
        id: 3,
        title: "Splunk Configuration Files & Indexes",
        description: "Understanding configuration files, indexes, and data integrity",
        content: [
            "Configuration Files",
            "Describe Splunk configuration directory structure",
            "Understanding configuration layering and precedence",
            "Using btool to examine configuration settings",
            "Indexes introduction",
            "Describe index structure",
            "List types of index buckets",
            "Check index data integrity",
            "Describing indexes.conf options",
            "Describing the fishbucket",
            "Creating an index",
            "Applying a data retention policy",
            "Exploring buckets in the Splunk file system",
            "Checking hashes to validate data"
        ]
    },
    {
        id: 4,
        title: "Data Inputs",
        description: "Defining and configuring data inputs in Splunk",
        content: [
            "Defining data inputs and creating data sources",
            "Understanding various data input sources",
            "Configuring data inputs",
            "Using Splunk’s data management tools",
            "Parsing and indexing data"
        ]
    },
    {
        id: 5,
        title: "Searching and Reporting",
        description: "Search fundamentals, query creation, and reporting",
        content: [
            "Understanding Splunk’s search language",
            "Search fundamentals",
            "Creating search queries",
            "Visualising search results",
            "Using the Splunk search and reporting tools",
            "Understanding reporting options",
            "Creating reports and dashboards"
        ]
    },
    {
        id: 6,
        title: "Splunk Administration",
        description: "User management, troubleshooting, and administration tasks",
        content: [
            "Understanding Splunk’s search language",
            "User management and authentication",
            "Managing users and permissions",
            "Configuring roles and permissions",
            "Monitoring and troubleshooting Splunk instances",
            "Backup and recovery of Splunk instances",
            "Configuring Splunk alerts",
            "Managing the Splunk deployment",
            "Troubleshooting common issues in Splunk"
        ]
    },
    {
        id: 7,
        title: "Splunk Apps and Add-ons",
        description: "Installing and managing Splunk apps and add-ons",
        content: [
            "Understanding Splunk apps and add-ons",
            "Installing and configuring apps and add-ons",
            "Managing app and add-on configurations"
        ]
    },
    {
        id: 8,
        title: "Splunk Security, Monitoring, and Alerting",
        description: "Security features, monitoring, and alerting in Splunk",
        content: [
            "Splunk’s security features and best practices",
            "Understanding Splunk’s compliance framework",
            "Configuring Splunk’s audit logs and alerts",
            "Monitoring and reporting on security events in Splunk",
            "Setting up monitoring and alerting",
            "Creating alerts and triggers",
            "Configuring notifications"
        ]
    },
    {
        id: 9,
        title: "Advanced Topics",
        description: "Performance tuning, integrations, and clustering",
        content: [
            "Advanced search techniques",
            "Performance tuning and optimization",
            "Advanced deployment and scalability",
            "Integrating Splunk with other systems",
            "Understanding Splunk data models and pivot",
            "Configuring Splunk forwarding",
            "Splunk clustering and high availability",
            "Splunk best practices and tips"
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
            number: "3",
            description: "Capstone Projects"
        }
    ],
  
    certificateImage: "/assets/prometheus-grafana.jpg",
  
    project: [
        {
            icon: "/assets/Projects/monitoring.png",
            title: "Complete Infrastructure Monitoring Setup",
            description: "Set up comprehensive monitoring for a multi-service infrastructure using Prometheus and Grafana",
            skills: ["Prometheus", "Grafana", "Monitoring", "Infrastructure", "Alerting"]
        },
        {
            icon: "/assets/Projects/dashboard.png",
            title: "Custom Dashboard Creation",
            description: "Create advanced custom dashboards for different use cases and metrics visualization",
            skills: ["Grafana", "Dashboard Design", "Data Visualization", "Metrics"]
        },
        {
            icon: "/assets/Projects/alert.png",
            title: "Alert Management System",
            description: "Implement a complete alert management system with multiple notification channels",
            skills: ["Alert Manager", "Notification Systems", "Incident Management"]
        }
    ],
  
    programFor: [
        { src: "/assets/cources/programFor/devops.jpg", alt: "DevOps Engineers", text: "DevOps Engineers" },
        { src: "/assets/cources/programFor/sysadmin.jpg", alt: "System Administrators", text: "System Administrators" },
        { src: "/assets/cources/programFor/cloud.jpg", alt: "Cloud Engineers", text: "Cloud & Infrastructure Engineers" },
        { src: "/assets/cources/programFor/developer.jpg", alt: "Developers", text: "Software Developers" },
        { src: "/assets/cources/programFor/sre.jpg", alt: "SRE", text: "SREs" },
        { src: "/assets/cources/programFor/it.jpg", alt: "IT Professionals", text: "IT Professionals" }
    ],
  
    toolsData: {
        sectionTitle: "Complete Monitoring & Visualization Program",
        category: "Monitoring",
        toolsCount: "10+",
        displayImage: "/assets/cources/monitoring-tools.jpg",
        tools: [
            {
                id: "prometheus",
                icon: "BarChart",
                title: "Setup & Config: Install, optimize, and manage Splunk environments"
            },
            {
                id: "grafana",
                icon: "TrendingUp",
                title: "Indexing & Search: Efficient data indexing, SPL, and high-speed queries."
            },
            {
                id: "alerting",
                icon: "Cpu",
                title: "Dashboards & Reports: Create visualizations, alerts, and actionable insights"
            },
            {
                id: "exporters",
                icon: "BarChart",
                title: " Deployment & Scaling: Manage instances, upgrade, and optimize performance.."
            },
            {
                id: "exporters",
                icon: "TrendingUp",
                title: "Security & Access: User roles, authentication, and best practices."
            },
            {
                id: "exporters",
                icon: "Cpu",
                title: "Integration & Automation: Connect with third-party tools, automate workflows."
            },
            {
                id: "exporters",
                icon: "BarChart",
                title: "Troubleshooting & Optimization: Debug issues and enhance efficiency."
            },
        ]
    },
  
   
  }