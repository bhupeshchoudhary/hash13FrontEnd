"use client"

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import dockerLogo from "../../../../../public/assets/Projects/docker.png"
import { projectData } from "../../../../../data/projects/projects";
import { Course } from "../../../../../types/courses";

interface ProjectsProps {
  course : Course;
}

export default function Projects( {course}: ProjectsProps) {
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
              {course.project.map((project, index) => {
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
