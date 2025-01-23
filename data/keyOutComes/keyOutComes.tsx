// import { Learner } from "../../types/cardStack";

// export const learners: Learner[] = [
//     { name: "ShareChat Learner", company: "ShareChat" },
//     { name: "Google Learner", company: "Google" },
//     { name: "Apna Learner", company: "Apna" },
//     { name: "Capgemini Learner", company: "Capgemini" },
//   ]

//  export const benefits: string[] = [
//     "Stay ahead in your field by mastering industry relevant skills through our online sessions",
//     "Dive into real challenges from today's businesses, gaining hands-on experience",
//     "Tap into a wealth of career opportunities through our established network",
//   ]

//  export const defaultLearnerImg = "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736380800&v=beta&t=tvAlORqrjV22gAuI7g_OrtINGRbGnNQXkCUegqFyPow"
// export const LinuxWorldUrl = "https://media.licdn.com/dms/image/v2/C4E0BAQER-Sage-ex_A/company-logo_200_200/company-logo_200_200/0/1639050566015/linuxworld_informatics_pvt_ltd_logo?e=1739404800&v=beta&t=7LaZjwQW277ZW-ooZe19e_aWSS1uQzZULZzYC7t1JHY";




// data/keyOutComes/keyOutComes.ts
import { Learner } from "../../types/cardStack";

export const learners: Learner[] = [
  { 
    name: "ShareChat Learner", 
    company: "ShareChat",
    image: "/assets/learners/sharechat.png"
  },
  { 
    name: "Google Learner", 
    company: "Google",
    image: "/assets/learners/google.png"
  },
  { 
    name: "Apna Learner", 
    company: "Apna",
    image: "/assets/learners/apna.png"
  },
  { 
    name: "Capgemini Learner", 
    company: "Capgemini",
    image: "/assets/learners/capgemini.png"
  },
];

export const benefits: string[] = [
  "Stay ahead in your field by mastering industry relevant skills through our online sessions",
  "Dive into real challenges from today's businesses, gaining hands-on experience",
  "Tap into a wealth of career opportunities through our established network",
];

export const images = {
  defaultLearner: "/assets/default-learner.png",
  linuxWorld: "/assets/linux-world-logo.png",
  linkedin: "/assets/linkedin-logo.svg",
};