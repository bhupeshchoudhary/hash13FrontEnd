import { Course } from "../../types/courses";

export const specialisationInPrometheusGrafana:Course = {
    _id: "specialisation-in-prometheus-grafana",
    title: "Specialisation in Prometheus & Grafana Master Monitoring & Visualization with Prometheus & Grafana",
    slug: "specialisation-in-prometheus-grafana",
    rating: 4.7,
    totalRatings: 10,
    duration: "16 Hours",
    hours: "16+",
    price: 4893,
    originalPrice: 8500,
    enrolledStudents: 12000,
    shortDescription: "Industry-Relevant Training | Hands-On Labs | Real-World Projects | Best-In-Class Curriculum",
    paymentLink: "https://rzp.io/rzp/2asghU9u",
    backgroundImage: "/assets/cources/courseDetails/Hero.jpeg",
  
    learningOutcomes: [
        "Prometheus - Monitoring, Alerting & Internals",
        "Prometheus Use Cases",
        "Grafana - DataSource, Panels & Dashboards",
        "Alerts, Authentication & Linking",
        "Templates, Variables & Plugins"
    ],
  
    features: [
        "Most Relevant Monitoring Tips & Tricks",
        "Technical Support for 60 days",
        "Prometheus & Grafana Related Industry Use Cases",
        "Premium #13 Monitoring Community"
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
          title: "Prometheus Fundamentals",
          description: "Introduction to Prometheus and basic setup",
          content: [
              "Introduction to telemetry",
              "Prometheus and Grafana at a Glance",
              "Prometheus installation",
              "Grafana with Prometheus Installation"
          ]
      },
      {
          id: 2,
          title: "Prometheus Monitoring",
          description: "Core concepts of monitoring with Prometheus",
          content: [
              "Introduction to Monitoring",
              "Client Libraries",
              "Pushing Metrics",
              "Querying",
              "Service Discovery",
              "Exporters"
          ]
      },
      {
          id: 3,
          title: "Prometheus Alerting & Internals",
          description: "Alert management and internal architecture",
          content: [
              "Introduction to Alerting",
              "Setting up Alerts",
              "Prometheus Storage"
          ]
      },
      {
          id: 4,
          title: "Prometheus Use Cases",
          description: "Practical applications and implementations",
          content: [
              "Monitoring a web application",
              "Calculating Apex score",
              "Cloudwatch Exporter",
              "Grafana Provisioning"
          ]
      },
      {
          id: 5,
          title: "Grafana Fundamentals",
          description: "Introduction to Grafana and its architecture",
          content: [
              "Introduction and Overview",
              "What is Grafana?",
              "Why do we need it?",
              "Advantage and Disadvantage of Grafana",
              "Grafana Comparing with other tools",
              "How Grafana works!",
              "Grafana Architecture"
          ]
      },
      {
          id: 6,
          title: "Grafana Installation & Getting Started",
          description: "Setup and initial configuration of Grafana",
          content: [
              "Requirements",
              "Install on RPM-based Linux",
              "Run Grafana Docker image",
              "Getting Started with Grafana",
              "With Grafana and Prometheus",
              "Time Series",
              "Time Series Dimensions",
              "Histograms and Heatmaps"
          ]
      },
      {
          id: 7,
          title: "Grafana Data Sources",
          description: "Configure and manage different data sources",
          content: [
              "Prometheus",
              "Add data source",
              "AWS Cloud Watch",
              "Cloud Monitoring",
              "MySQL"
          ]
      },
      {
          id: 8,
          title: "Grafana Panels",
          description: "Working with panels and visualizations",
          content: [
              "Add a Panel",
              "Panel Editor",
              "Calculations list",
              "Queries",
              "Thresholds",
              "Transformations",
              "Share query results",
              "Inspect a panel",
              "Field options and overrides",
              "Visualizations"
          ]
      },
      {
          id: 9,
          title: "Grafana Dashboards & Explore",
          description: "Dashboard management and exploration features",
          content: [
              "Annotations",
              "Dashboard Folders",
              "Playlist",
              "Search",
              "Keyboard shortcuts",
              "Time range controls",
              "Reporting",
              "Dashboard Version History",
              "Share dashboard",
              "Share panel",
              "Export and import",
              "JSON model",
              "Scripted dashboards"
          ]
      },
      {
          id: 10,
          title: "Grafana Alerts & Authentication",
          description: "Alert management and security configuration",
          content: [
              "Alert notifications",
              "Create alerts",
              "Pause alert rule",
              "View alerts",
              "Troubleshoot alerts",
              "Authentication Overview",
              "Grafana Authentication"
          ]
      },
      {
          id: 11,
          title: "Grafana Advanced Features",
          description: "Advanced configurations and linking",
          content: [
              "Linking overview",
              "Dashboard links",
              "Panel links",
              "URL variables",
              "Data links",
              "Variable syntax",
              "Variables types",
              "Variable examples",
              "Multi-value variables",
              "Filter variables with regex"
          ]
      },
      {
          id: 12,
          title: "Grafana Administration",
          description: "User management and plugin administration",
          content: [
              "Add or remove a user",
              "Enable or disable a user",
              "Add or remove a user from a team",
              "Create or remove a team",
              "Organization roles",
              "Dashboard and Folder Permissions",
              "Datasource Permissions",
              "Install plugins",
              "Plugin signatures"
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
                title: "  Understand metrics, logs, and traces, and get started with Prometheus & Grafana."
            },
            {
                id: "grafana",
                icon: "TrendingUp",
                title: " Learn PromQL, metric collection, exporters, and alerting rules."
            },
            {
                id: "alerting",
                icon: "Cpu",
                title: " Create interactive dashboards, set up alerts, and integrate with data sources."
            },
            {
                id: "exporters",
                icon: "BarChart",
                title: " Monitor Linux servers, CPU, memory, disk usage, and network stats."
            },
            {
                id: "exporters",
                icon: "TrendingUp",
                title: " Track microservices, instrument apps, and visualize application health."
            },
            {
                id: "exporters",
                icon: "Cpu",
                title: "Set up alert managers and send alerts via  Email, and other channels."
            },
            {
                id: "exporters",
                icon: "BarChart",
                title: "Implement service discovery, push gateway, and black-box monitoring."
            },
        ]
    },
  
   
  }