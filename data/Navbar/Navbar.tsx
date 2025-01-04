export type  Program = {
    title: string;
    mentor: string;
    duration: string;
    status: string;
    type: "Live" | "Recorded";
  };
  
 
  

  export type CategoryData = {
    mentorshipPrograms: Program[];
    selfPacedPrograms: Program[];
  };
  
  export type MenuData = {
    categories: Record<string, CategoryData>;
  };
  

  export const menuData: Record<"workingProfessionals" | "collegeStudents" | "more", MenuData> = {
    workingProfessionals: {
      categories: {
        Business: {
          mentorshipPrograms: [
            { title: "Leadership", mentor: "by John Doe", duration: "6 Weeks", status: "Coming Soon", type: "Live" },
          ],
          selfPacedPrograms: [
            { title: "Agile Management", mentor: "by Alice", duration: "Self-paced", status: "Available Now", type: "Recorded" },
          ],
        },
        Tech: {
          mentorshipPrograms: [
            { title: "Data Science", mentor: "by Jane Smith", duration: "8 Weeks", status: "Available Now", type: "Live" },
          ],
          selfPacedPrograms: [],
        },
        Growth: {
          mentorshipPrograms: [],
          selfPacedPrograms: [],
        },
      },
    },
    collegeStudents: {
      categories: {
        Design: {
          mentorshipPrograms: [
            { title: "Graphic Design", mentor: "by Emily Clark", duration: "4 Weeks", status: "Coming Soon", type: "Live" },
          ],
          selfPacedPrograms: [],
        },
        Marketing: {
          mentorshipPrograms: [
            { title: "Social Media Marketing", mentor: "by Alex Brown", duration: "5 Weeks", status: "Coming Soon", type: "Live" },
          ],
          selfPacedPrograms: [],
        },
        Product: {
          mentorshipPrograms: [],
          selfPacedPrograms: [],
        },
      },
    },
    more: {
      categories: {
        AI: {
          mentorshipPrograms: [
            { title: "AI for Beginners", mentor: "by Chris Green", duration: "12 Weeks", status: "Coming Soon", type: "Live" },
          ],
          selfPacedPrograms: [],
        },
        Robotics: {
          mentorshipPrograms: [],
          selfPacedPrograms: [
            { title: "Intro to Robotics", mentor: "by Michael Scott", duration: "Self-paced", status: "Available Now", type: "Recorded" },
          ],
        },
        Blockchain: {
          mentorshipPrograms: [
            { title: "Blockchain Fundamentals", mentor: "by Sarah White", duration: "10 Weeks", status: "Coming Soon", type: "Live" },
          ],
          selfPacedPrograms: [],
        },
      },
    },
  };
  
  

  