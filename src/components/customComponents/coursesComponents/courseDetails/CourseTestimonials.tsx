"use client"
import React, { useState } from 'react';
import { Linkedin } from 'lucide-react';

export default function Component() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Example posts data (replace with your actual posts array)

  
 
const posts = [
 
  {
    id: 2,
    author: {
      name: "Manikandan Prakash",
      title: "DevOps Engineer @smallcase",
      avatar: "https://media.licdn.com/dms/image/v2/D4E03AQFiY07rDFiZ1A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1698246875639?e=1737590400&v=beta&t=n4sQVUqx1DDJaKh2fEvBUd5l6FR5_k7JEpb1cBS_ZTk",
      linkedin: "https://www.linkedin.com/in/manikandan-prakash/"
    },
    content: `
It was very informative and 100 pratical session by vimal sir ,From that I did learn the bedrock service how to intergrate in any of our own custom requirment ,It was pretty enough to start AWS bedrock thanks for the session Vimal Daga sir 
`,
    timestamp: "8 month ago"
  },
  {
    id: 3,
    author: {
      name: "Dibyaraj Datta",
      title: "Process Associate at Netscribes",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQENeos_aDytsw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1711478336339?e=1737590400&v=beta&t=eqdh3QVuz82VyuHWF78Bmif0EVec9xdh47F6VqZmmko",
      linkedin: "https://www.linkedin.com/in/dibyaraj-datta-b785661a5/"
    },
    content: `

    It was truly an amazing masterclass by the one & only Mr. Vimal Daga Sir. 
    The Wow moment for me was how he explained each and every concept in such an easy manner from basic to advance, like the use of Helm Charts to solve modern world problems with container management.
    Looking forward to join more such sessions & workshops from LinuxWorld Informatics Pvt Ltd under the guidance of Vimal Daga Sir. `,
    timestamp: "8 month ago"
  },
  {
    id: 4,
    author: {
      name: "Rushikesh Mahindrakar",
      title: "System Engineering",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQFmIMotaZggJw/profile-displayphoto-shrink_400_400/B56ZOfunOJGoAk-/0/1733551617738?e=1740009600&v=beta&t=8Yhs14_NMJPTSdqoiq-eNcVhgbxDFV4ZZ5FQPdyj5IU",
      linkedin: "https://www.linkedin.com/in/rushikesh-mahindrakar-70b82537/"
    },
    content: `
Your invaluable guidance in this remarkable Kubernetes training program has been truly appreciated. It's a pivotal milestone in my DevOps journey, and I'm deeply grateful for your mentorship, Vimal Daga sir. Your expertise and insights are immensely valuable, propelling my professional growth with each session. Thank you!! 😊 `,
    timestamp: "3 week ago"
  },
  {
    id: 5,
    author: {
      name: "Himanshu Sahu",
      title: "Java Backend Developer ",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFqtDCGoMk54g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1673897788931?e=1737590400&v=beta&t=s2TDcsAQ2oqQ_DvoGT8yyUUaGvsfGDwan4Phjo1RFL0",
      linkedin: "https://www.linkedin.com/in/himanshu-sahu-2aa357237/"
    },
    content: `I attended this helm masterclass and it's amazing. The way Vimal Daga sir teaches makes everything so simple and clear and it also helps understand the real time based problem's and use cases. I learned about hashtag#helm chart with examples, artifact hub, docker hub, how to use procreated Helm chart and how to create my own helm chart and upload it, jenkins setup via helm chart etc. Thank u Vimal Daga sir and LinuxWorld Informatics Pvt Ltd Informatics Pvt Ltd for conducting this masterclass. It is always a pleasure to learnt something new always from Vimal Daga sir.`,
    timestamp: "1 week ago"
  },
  {
    id: 6,
    author: {
      name: "Pratibha Kokil",
      title: "DevOps | Full Stack Developer",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHspredHFM_Ig/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729926571919?e=1737590400&v=beta&t=EopKPQqmr1fMBHnO3vVCQ-iI51PNnI8XhKTWumH0CI0",
      linkedin: "https://www.linkedin.com/in/pratibhakokil/"
    },
    content: `Thank u Vimal Daga sir and LinuxWorld Informatics Pvt Ltd for conducting this masterclass.. I learned about hashtag#helm chart with examples, artifact hub, docker hub, how to use procreated Helm chart and how to create my own helm chart and upload it, what's it's requirement, Roll out and Roll back, multi environment setup using helm chart, Jenkins setup via helm chart, jinja template etc.`,
    timestamp: "2 week ago"
  }, {
    id: 1,
    author: {
      name: "Akansha chaurasia",
      title: "Domain Support Specialist @ Ericsson India Global",
      avatar: "https://media.licdn.com/dms/image/v2/C4D03AQERGZjbVTAnNw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1645726568650?e=1737590400&v=beta&t=V8r_7CfyG-LYaBsbkY7EztvWwig6Z1vRUv9aFeJJ4-k",
      linkedin: "https://www.linkedin.com/in/akansha-chaurasia-681718119/"
    },
    content: `
It was an amazing class to attend. I liked the way sir delivered the helm content. Helm became so easy for me now. I like to attend these classes as it helps me to elevate my skills. Thank you Vimal sir as well as LinuxWorld Informatics Pvt to share such a good content with us..`,
    timestamp: "8 month ago"
  },
   {
    id: 7,
    author: {
      name: "Sanchita Agrawal",
      title: "DevOps Engineer at Genus Power Infrastructure Limited",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHvkoJDpKyN6w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1664520645818?e=1737590400&v=beta&t=0s-H7cUGZ7347Xo4Zn2GUdJGkO5tlKQjtzNVnJ3mJYw",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7239134220567130113/?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7239134220567130113%2C7240708775475601408%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287240708775475601408%2Curn%3Ali%3Aactivity%3A7239134220567130113%29"
    },
    content: `
Another amazing informative workshop by vimal sir. Its always fun learning from you sir. Learned so much of AWS DevOps concepts and how it gets implemented in real-world projects.`,
    timestamp: "2 month ago"
  },
  {
    id: 8,
    author: {
      name: "Rajneesh Pratap Singh",
      title: "DevOps Engineer || 3x Redhat Certified ||",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQFxBq8m8wYj4w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720442622903?e=1737590400&v=beta&t=v_dQCEGOIDJ96AV0ZbaA0IQUfLmnWk3m1YPnnwXAOb4",
      linkedin: "https://www.linkedin.com/in/rajneesh-pratap-singh/"
    },
    content: `
This is my first step towards security with DevOps, and it was a great learning experience
In this session, we covered:
Why DevSecOps? Understanding its importance over traditional DevOps.
Integrating security with DevOps, including SAST and secure coding practices.
Best practices for writing secure Dockerfiles.
Setting up and using Docker Scout for vulnerability scanning.
Strategies for patching and managing vulnerabilities in containers..`,
    timestamp: "1 month ago"
  },


  
  {
    id: 10,
    author: {
      name: "Aakash Kathunia",
      title: "Technical Architect at HCLTech | GenAI | LLM | OpenAI | Kubernetes| Automation | Cloud",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQGJi9pe0O-O8A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723740692945?e=1737590400&v=beta&t=y2ONfXKp0z5KkZJRcTtg_e1iVUh8rFUn3JxaRqqFOBg",
      linkedin: "https://www.linkedin.com/in/aakash-kathunia-6b618b16/"
    },
    content: `

    Vimal Sir is outstanding while teaching complex and advanced topics, as he teaches us in such a way that even someone without technical background one can easily grasp and this is the main reason I have been following him since long.

    Before his session, I had tried to understand DevSecOps through various technical channels, but I didn't get a clear picture. However, in just initial hours of Vimal Sir’s session, he made the concept very much clearer. Then, over the next two hours, he simplified DevSecOps further, helping me gain valuable insights that sparked my interest in exploring the topic more deeply.
    
    I am Thankful to Vimal Sir for in-depth course on DevSecOps and looking more indepth session from him, and Im grateful for his teachings for current and upcoming valuable training sessions.`,
    timestamp: "1 month ago"
  },
  {
    id: 11,
    author: {
      name: "Alok Kumar Singh ",
      title: "Web Developer(Angular ) | Data Analyst |",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQFGCjRM6gI1zg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724789778105?e=1737590400&v=beta&t=sm-JTK9zKq4_tbEEKi1nEZvWEa4fL-RoAH7KeL86jtk",
      linkedin: "https://www.linkedin.com/in/tech-alok/"
    },
    content: `

Attending the System Design workshop by Vimal Daga Sir was a great learning experience. He explained complex topics like scalability, fault tolerance, and load balancing in simple terms, making it easy to understand. The examples he gave helped us see how these concepts are used in real projects. I learned how to make systems more efficient and reliable by balancing important factors like performance and cost. I'm excited to apply these new skills in my future projects!
.`,
    timestamp: "1 month ago"
  },

  {
    id: 12,
    author: {
      name: "Mallesh Gangadhar ",
      title: "--",
      avatar: "https://media.licdn.com/dms/image/v2/D5635AQFvYLlZaIHe_A/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1713248954215?e=1732777200&v=beta&t=TAOMDi9g-MQ4HMspIYg8WBdCJ53UiCsR-c_GIDtjzzA",
      linkedin: "https://www.linkedin.com/in/mallesh-gangadhar-8ab53777/"
    },
    content: `

Superrrrrrrb Training Enjoyed! This Linux Essentials workshop with Vimal Sir was superb, The workshop provided a solid foundation, covering key concepts like processes, users, file operations, and essential commands. It also gave a glimpse into the power and versatility of Linux for solving real-world problems. I'm excited to learn next skills on Linux with AI.
to enhance my IT skills in Linux! Thanks
.`,
    timestamp: "1 month ago"
  },

  {
    id: 13,
    author: {
      name: "Mohit Agarwal ",
      title: "Student at NIT Kurukshetra | Additional Secretary of MExperts",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQFfS5ahFvJB2Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1681871987732?e=1737590400&v=beta&t=xyrWG92tvwvBV-V5WSDeucFFSkLx-j8GbZ3e_1lAjw0",
      linkedin: "https://www.linkedin.com/in/mohitagarwal99/"
    },
    content: `

The workshop was incredibly beneficial! I'm excited about the practical applications of CI/CD and AWS services. I plan to start by working on a personal project to implement a deployment pipeline and use AWS CodeDeploy for automation. Collaborating with others will definitely enhance the learning experience, and I'm eager to stay updated with new DevOps trends to improve my skills continuously.
I'm really looking forward to applying these insights!
.`,
    timestamp: "1 month ago"
  },
  
];

  // Show only the first 6 posts when not expanded, otherwise show all posts
  const visiblePosts = isExpanded ? posts : posts.slice(0, 6);

  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50 p-4 sm:p-6 mx-auto" >
      <div className="max-w-[920px] mx-auto">
        <h2 className="text-black text-sm sm:text-md">HEAR IT FROM THEM</h2>
        <h2 className="text-black text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 mt-2">
          Ambitious People ❤️ <span className="text-[#ff0000]">#13</span>
        </h2>

        {/* Displaying testimonials in masonry layout */}
        <div className="sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-0">
          {visiblePosts.map((post) => (
            <div key={post.id} className="break-inside-avoid mb-4 sm:mb-6">
              <PostCard post={post} />
            </div>
          ))}
        </div>

        {/* Button to toggle visibility of all posts */}
        <div className="flex justify-center items-center mt-6">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-white text-[#2C3E50] font-semibold text-lg border-2 border-gray-500 py-3 px-8 rounded-full hover:bg-[#ff0000] hover:text-white transition-all duration-300"
          >
            {isExpanded ? 'Show Less' : 'See our Wall of Love'}
          </button>
        </div>
      </div>
    </div>
  );
}

// PostCard component to display individual testimonial
const PostCard: React.FC<{ post: any }> = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const words = post.content.split(' ');
  const truncatedContent = words.length > 80 ? words.slice(0, 80).join(' ') + '...' : post.content;

  const handleToggleContent = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="bg-[#ffffff] text-black mt-4 shadow-md w-full p-4 rounded-lg">
      <div className="pb-2">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-300">
            <img className="h-full w-full object-cover rounded-full" src={post.author.avatar || '/default-avatar.png'} alt={post.author.name} />
          </div>
          <div className="flex-grow">
            <h3 className="text-sm font-semibold">{post.author.name}</h3>
            <p className="text-xs text-gray-400">{post.author.title}</p>
          </div>
          <a href={post.author.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${post.author.name}'s LinkedIn profile`}>
            <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-blue-600 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
            </svg>
          </a>
        </div>
      </div>

      <div className="pt-2 space-y-2 text-xs sm:text-sm">
        <p>
          {isExpanded ? post.content : truncatedContent}
          {words.length > 80 && (
            <span 
              className="text-blue-500 cursor-pointer ml-1" 
              onClick={handleToggleContent}
            >
              {isExpanded ? 'Show less' : 'Read more'}
            </span>
          )}
        </p>
      </div>

      <p className="mt-4 text-xs text-gray-400">{post.timestamp}</p>
    </div>
  );
};
