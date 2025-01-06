// src/data/menuData.tsx

import { MenuKey, MenuData } from '../../types/Navbar';

export const menuData: Record<MenuKey, MenuData> = {
  workingProfessionals: {
    categories: {
      Business: {
        mentorshipPrograms: [
          {
            title: "Leadership & Management",
            mentor: "by John Doe",
            duration: "6 Weeks",
            status: "Coming Soon",
            type: "Live"
          },
          {
            title: "Business Analytics",
            mentor: "by Jane Smith",
            duration: "8 Weeks",
            status: "Available Now",
            type: "Live"
          },
          {
            title: "Strategic Planning",
            mentor: "by Michael Brown",
            duration: "10 Weeks",
            status: "Coming Soon",
            type: "Live"
          }
        ],
        selfPacedPrograms: [
          {
            title: "Agile Management",
            mentor: "by Alice Johnson",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded"
          },
          {
            title: "Business Communication",
            mentor: "by Robert Wilson",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded"
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
            type: "Live"
          },
          {
            title: "DevOps Engineering",
            mentor: "by Tech Williams",
            duration: "12 Weeks",
            status: "Available Now",
            type: "Live"
          },
          {
            title: "Full Stack Development",
            mentor: "by David Miller",
            duration: "16 Weeks",
            status: "Coming Soon",
            type: "Live"
          }
        ],
        selfPacedPrograms: [
          {
            title: "Kubernetes Basics",
            mentor: "by Bruce Banner",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded"
          },
          {
            title: "AWS Fundamentals",
            mentor: "by Clark Kent",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded"
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
            type: "Live"
          },
          {
            title: "Career Development",
            mentor: "by Emma Watson",
            duration: "6 Weeks",
            status: "Available Now",
            type: "Live"
          }
        ],
        selfPacedPrograms: [
          {
            title: "Goal Setting",
            mentor: "by Natasha Romanoff",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded"
          },
          {
            title: "Time Management",
            mentor: "by Steve Rogers",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded"
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
            type: "Live"
          },
          {
            title: "Graphic Design",
            mentor: "by Peter Parker",
            duration: "6 Weeks",
            status: "Available Now",
            type: "Live"
          }
        ],
        selfPacedPrograms: [
          {
            title: "Adobe Creative Suite",
            mentor: "by Mary Jane",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded"
          },
          {
            title: "Design Principles",
            mentor: "by Wade Wilson",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded"
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
            type: "Live"
          },
          {
            title: "Social Media Strategy",
            mentor: "by Diana Prince",
            duration: "6 Weeks",
            status: "Available Now",
            type: "Live"
          }
        ],
        selfPacedPrograms: [
          {
            title: "SEO Fundamentals",
            mentor: "by Barry Allen",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded"
          },
          {
            title: "Content Marketing",
            mentor: "by Hal Jordan",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded"
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
            type: "Live"
          },
          {
            title: "Product Strategy",
            mentor: "by Nick Fury",
            duration: "8 Weeks",
            status: "Available Now",
            type: "Live"
          }
        ],
        selfPacedPrograms: [
          {
            title: "Product Analytics",
            mentor: "by Bruce Wayne",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded"
          },
          {
            title: "User Research",
            mentor: "by Wanda Maximoff",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded"
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
            type: "Live"
          },
          {
            title: "Deep Learning",
            mentor: "by Vision",
            duration: "14 Weeks",
            status: "Available Now",
            type: "Live"
          }
        ],
        selfPacedPrograms: [
          {
            title: "Machine Learning Basics",
            mentor: "by Tony Stark",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded"
          },
          {
            title: "Neural Networks",
            mentor: "by Bruce Banner",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded"
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
            type: "Live"
          },
          {
            title: "Automation",
            mentor: "by Reed Richards",
            duration: "12 Weeks",
            status: "Available Now",
            type: "Live"
          }
        ],
        selfPacedPrograms: [
          {
            title: "Arduino Programming",
            mentor: "by Diana Prince",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded"
          },
          {
            title: "Robotics Basics",
            mentor: "by Peter Quill",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded"
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
            type: "Live"
          },
          {
            title: "Smart Contracts",
            mentor: "by Stephen Strange",
            duration: "8 Weeks",
            status: "Available Now",
            type: "Live"
          }
        ],
        selfPacedPrograms: [
          {
            title: "Cryptocurrency Basics",
            mentor: "by Clark Kent",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded"
          },
          {
            title: "Web3 Development",
            mentor: "by Matt Murdock",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded"
          }
        ]
      }
    }
  }
};