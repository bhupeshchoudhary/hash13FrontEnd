"use client"

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import dockerLogo from "../../../../../public/assets/Projects/docker.png"


const projectData = [
  {
    icon: "/assets/Projects/container.png",
    title: "Setting up a Multi-Tier Application in Containers",
    description:
      "Containerize a multi-tier application with frontend, backend, and database components. Using Docker to create and manage containers.",
    skills: ["Docker", "Kubernetes", "DevOps", "Frontend", "Backend", "Database Management"],
  },
  {
    icon: "/assets/Projects/docker.png",
    title: "Integrating Docker files with Docker Compose",
    description:
      "Create Dockerfiles for different application components. Using Docker Compose to manage multi-container Docker applications.",
    skills: ["Docker", "Docker Compose", "Microservices", "Networking", "Container Management"],
  },
  {
    icon: "/assets/Projects/k8s.png",
    title: "Integrating Kubernetes with Docker",
    description:
      "Deploying containerized applications using Kubernetes. Use Kubernetes to manage container orchestration and scaling.",
    skills: ["Kubernetes", "Container Orchestration", "Docker", "Scaling", "Cluster Management"],
  },
  {
    icon: "/assets/Projects/jenkins.svg",
    title: "Configuring Jenkins Master-Slave Architecture in Docker",
    description:
      "Setting up Jenkins master and slave nodes in Docker containers. Implementing distributed builds using Jenkins agents.",
    skills: ["Jenkins", "Docker", "Distributed Builds", "CI/CD", "Automation"],
  },
  {
    icon: "/assets/Projects/prometheus.svg",
    title: "Integrating Prometheus with Grafana",
    description:
      "Setting up Prometheus for monitoring application metrics. Visualize metrics with Grafana dashboards.",
    skills: ["Prometheus", "Grafana", "Monitoring", "Visualization", "Metrics Management"],
  },
  {
    icon: "/assets/Projects/git.png",
    title: "Integrating GitLab with Kubernetes",
    description:
      "Using GitLab CI/CD for continuous integration and deployment. Deploying applications to Kubernetes clusters from GitLab.",
    skills: ["GitLab", "CI/CD", "Kubernetes", "DevOps", "Automation"],
  },
  {
    icon: "/assets/Projects/terraform.svg",
    title: "Infrastructure as Code (IaC)",
    description:
      "Using Terraform to define and provision infrastructure. Managing infrastructure changes through version control.",
    skills: ["Terraform", "Infrastructure as Code", "Version Control", "Cloud Infrastructure", "Automation"],
  },
  {
    icon: "/assets/Projects/cicd.png",
    title: "Building a CI/CD Pipeline",
    description:
      "Implementing a continuous integration and deployment pipeline using Jenkins or GitLab CI. Automating testing, building, and deployment processes.",
    skills: ["CI/CD", "Jenkins", "GitLab", "Automation", "Testing"],
  },
  {
    icon: "/assets/Projects/aws.svg",
    title: "AWS DevOps Services",
    description:
      "Master AWS DevOps: CI/CD pipelines, IaC, serverless, monitoring, containerization, security, and cost optimization.",
    skills: ["CDK", "EKS", "CloudWatch", "CloudTrail", "Beanstalk","Fargate","IAM"],
  },
  {
    icon: "/assets/Projects/gcp.svg",
    title: "Azure & GCP Cloud",
    description:
      "Master Azure and GCP: compute, storage, networking, security, serverless, and hands-on cloud platform comparisons.",
    skills: ["GCP", "GKE", "AAD", "CosmosDB", "VNet","CosmosDB","RBAC"],
  },

  {
    icon: "/assets/Projects/gitlab.png",
    title: "Gitlab ",
    description:
      "Master GitLab DevOps: CI/CD pipelines, automation, GitOps, IaC, security, scaling, and high-availability setups..",
    skills: ["Git", "workflows", "conflicts", "GitHub", "Bitbucket","merging "],
  },

  {
    icon: "/assets/Projects/bash.svg",
    title: "Shell Scripting",
    description:
      "Master Shell Scripting: automation, APIs, debugging, CI/CD tasks, cloud resources, and performance optimization.",
    skills: ["Bash", "Zsh", "Fish", "stderr","CI/CD"],
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(0);
  console.log(dockerLogo)
  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50" id="projects">
      <div className="w-full max-w-6xl mx-auto p-6 lg:px-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-semibold text-gray-700 mb-2">
              Capstone Projects
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <h2 className="text-black px-3 py-1 text-3xl font-bold">
 

 Learn by Doing : <span className="text-[#ff0000]  font-bold">20+ Industry Level Projects </span>
              </h2>
            </div>
          </div>

        

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {projectData.map((project, index) => {
                const isExpanded = expanded === index;
                const visibleSkills = isExpanded
                  ? project.skills
                  : project.skills.slice(0, 3);
                const showMore = project.skills.length > 3 && !isExpanded;

                return (
                  <Card
                    key={index}
                    className="border-t-0 border-r-1 border-b-1 border-l-1 border-gray-100 overflow-hidden transform transition-transform duration-300 hover:scale-105"
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                        {/* <project.icon className="w-6 h-6" /> */}
                        <img alt="icon" src={project.icon.toString()}></img>
                      </div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Skills learned</p>
                        <div className="flex flex-wrap gap-2">
                          {visibleSkills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-zinc-100 rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                          {showMore && (
                            <button
                              onClick={() => setExpanded(index)}
                              className="px-3 py-1 bg-zinc-100 rounded-full text-sm text-blue-500"
                            >
                              + More
                            </button>
                          )}
                          {isExpanded && (
                            <button
                              onClick={() => setExpanded(null)}
                              className="px-3 py-1 bg-zinc-100 rounded-full text-sm text-red-500"
                            >
                              Show Less
                            </button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
