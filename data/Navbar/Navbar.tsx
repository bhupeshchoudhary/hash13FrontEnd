// src/data/menuData.tsx

import { MenuKey, MenuData } from '../../types/Navbar';

export const menuData: Record<MenuKey, MenuData> = {
  workingProfessionals: {
    categories: {
      DevOps: {
        mentorshipPrograms: [
          {
            title: "Specialisation in DevOps",
            mentor: "by Vimal Daga",
            duration: "310 Hours",
            status: "Active",
            type: "Recorded",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          },
          {
            title: "Business Analytics",
            mentor: "by Jane Smith",
            duration: "8 Weeks",
            status: "Available Now",
            type: "Live",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          },
          {
            title: "Strategic Planning",
            mentor: "by Michael Brown",
            duration: "10 Weeks",
            status: "Coming Soon",
            type: "Live",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          }
        ],
        selfPacedPrograms: [
          {
            title: "Agile Management",
            mentor: "by Alice Johnson",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          },
          {
            title: "Business Communication",
            mentor: "by Robert Wilson",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          }
        ]
      },
      Tech: {
        mentorshipPrograms: [
          {
            title: "Cloud Computing",
            mentor: "by Sarah Connor",
            duration: "10 Weeks",
            status: "Coming Soon",
            type: "Live",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          },
          {
            title: "DevOps Engineering",
            mentor: "by Tech Williams",
            duration: "12 Weeks",
            status: "Available Now",
            type: "Live",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          },
          {
            title: "Full Stack Development",
            mentor: "by David Miller",
            duration: "16 Weeks",
            status: "Coming Soon",
            type: "Live",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          }
        ],
        selfPacedPrograms: [
          {
            title: "Kubernetes Basics",
            mentor: "by Bruce Banner",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          },
          {
            title: "AWS Fundamentals",
            mentor: "by Clark Kent",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          }
        ]
      },
      Growth: {
        mentorshipPrograms: [
          {
            title: "Personal Branding",
            mentor: "by Tony Stark",
            duration: "4 Weeks",
            status: "Coming Soon",
            type: "Live",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          },
          {
            title: "Career Development",
            mentor: "by Emma Watson",
            duration: "6 Weeks",
            status: "Available Now",
            type: "Live",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          }
        ],
        selfPacedPrograms: [
          {
            title: "Goal Setting",
            mentor: "by Natasha Romanoff",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          },
          {
            title: "Time Management",
            mentor: "by Steve Rogers",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          }
        ]
      }
    }
  },
  collegeStudents: {
    categories: {
      Design: {
        mentorshipPrograms: [
          {
            title: "UI/UX Design",
            mentor: "by Emily Clark",
            duration: "8 Weeks",
            status: "Coming Soon",
            type: "Live",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          },
          {
            title: "Graphic Design",
            mentor: "by Peter Parker",
            duration: "6 Weeks",
            status: "Available Now",
            type: "Live",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          }
        ],
        selfPacedPrograms: [
          {
            title: "Adobe Creative Suite",
            mentor: "by Mary Jane",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          },
          {
            title: "Design Principles",
            mentor: "by Wade Wilson",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          }
        ]
      },
      Marketing: {
        mentorshipPrograms: [
          {
            title: "Digital Marketing",
            mentor: "by Alex Brown",
            duration: "10 Weeks",
            status: "Coming Soon",
            type: "Live",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          },
          {
            title: "Social Media Strategy",
            mentor: "by Diana Prince",
            duration: "6 Weeks",
            status: "Available Now",
            type: "Live",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          }
        ],
        selfPacedPrograms: [
          {
            title: "SEO Fundamentals",
            mentor: "by Barry Allen",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          },
          {
            title: "Content Marketing",
            mentor: "by Hal Jordan",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          }
        ]
      },
      Product: {
        mentorshipPrograms: [
          {
            title: "Product Management",
            mentor: "by Clint Barton",
            duration: "12 Weeks",
            status: "Coming Soon",
            type: "Live",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          },
          {
            title: "Product Strategy",
            mentor: "by Nick Fury",
            duration: "8 Weeks",
            status: "Available Now",
            type: "Live",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          }
        ],
        selfPacedPrograms: [
          {
            title: "Product Analytics",
            mentor: "by Bruce Wayne",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          },
          {
            title: "User Research",
            mentor: "by Wanda Maximoff",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          }
        ]
      }
    }
  },
  more: {
    categories: {
      AI: {
        mentorshipPrograms: [
          {
            title: "AI Fundamentals",
            mentor: "by Chris Green",
            duration: "12 Weeks",
            status: "Coming Soon",
            type: "Live",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          },
          {
            title: "Deep Learning",
            mentor: "by Vision",
            duration: "14 Weeks",
            status: "Available Now",
            type: "Live",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          }
        ],
        selfPacedPrograms: [
          {
            title: "Machine Learning Basics",
            mentor: "by Tony Stark",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          },
          {
            title: "Neural Networks",
            mentor: "by Bruce Banner",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          }
        ]
      },
      Robotics: {
        mentorshipPrograms: [
          {
            title: "Robotics Engineering",
            mentor: "by Victor Stone",
            duration: "16 Weeks",
            status: "Coming Soon",
            type: "Live",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          },
          {
            title: "Automation",
            mentor: "by Reed Richards",
            duration: "12 Weeks",
            status: "Available Now",
            type: "Live",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          }
        ],
        selfPacedPrograms: [
          {
            title: "Arduino Programming",
            mentor: "by Diana Prince",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          },
          {
            title: "Robotics Basics",
            mentor: "by Peter Quill",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          }
        ]
      },
      Blockchain: {
        mentorshipPrograms: [
          {
            title: "Blockchain Fundamentals",
            mentor: "by Sarah White",
            duration: "10 Weeks",
            status: "Coming Soon",
            type: "Live",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          },
          {
            title: "Smart Contracts",
            mentor: "by Stephen Strange",
            duration: "8 Weeks",
            status: "Available Now",
            type: "Live",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          }
        ],
        selfPacedPrograms: [
          {
            title: "Cryptocurrency Basics",
            mentor: "by Clark Kent",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          },
          {
            title: "Web3 Development",
            mentor: "by Matt Murdock",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded",
            image:"/assets/cources/courseDetails/Hero.jpeg"
          }
        ]
      }
    }
  }
};