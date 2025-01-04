export type  Program = {
    title: string;
    mentor: string;
    duration: string;
    status: string;
    type: "Live" | "Recorded";
  };
  
  export type MenuData = {
    categories: string[];
    mentorshipPrograms: Program[];
    selfPacedPrograms: Program[];
  };
  

  export const menuData: Record<"workingProfessionals" | "collegeStudents" | "more", MenuData> = {
    workingProfessionals: {
      categories: ["Business", "Tech", "Growth"],
      mentorshipPrograms: [
        { title: "Leadership", mentor: "by John Doe", duration: "6 Weeks", status: "Coming Soon", type: "Live" },
        { title: "Data Science", mentor: "by Jane Smith", duration: "8 Weeks", status: "Available Now", type: "Live" },
      ],
      selfPacedPrograms: [
        { title: "Agile Management", mentor: "by Alice", duration: "Self-paced", status: "Available Now", type: "Recorded" },
      ],
    },
    collegeStudents: {
      categories: ["Design", "Marketing", "Product"],
      mentorshipPrograms: [
        { title: "Graphic Design", mentor: "by Emily Clark", duration: "4 Weeks", status: "Coming Soon", type: "Live" },
        { title: "Social Media Marketing", mentor: "by Alex Brown", duration: "5 Weeks", status: "Coming Soon", type: "Live" },
      ],
      selfPacedPrograms: [
        { title: "Video Editing", mentor: "by David Miller", duration: "Self-paced", status: "Available Now", type: "Recorded" },
      ],
    },
    more: {
      categories: ["AI", "Robotics", "Blockchain"],
      mentorshipPrograms: [
        { title: "AI for Beginners", mentor: "by Chris Green", duration: "12 Weeks", status: "Coming Soon", type: "Live" },
        { title: "Blockchain Fundamentals", mentor: "by Sarah White", duration: "10 Weeks", status: "Coming Soon", type: "Live" },
      ],
      selfPacedPrograms: [
        { title: "Intro to Robotics", mentor: "by Michael Scott", duration: "Self-paced", status: "Available Now", type: "Recorded" },
      ],
    },
  };
  

  