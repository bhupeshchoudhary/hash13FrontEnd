import React from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/customComponents/landingPage/ui/Avatar"
import { Linkedin } from 'lucide-react'

interface Post {
  id: number
  author: {
    name: string
    title: string
    avatar: string
  }
  content: string
  timestamp: string
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      name: "Akshata Tiwari",
      title: "MERN Enthusiast Seeking Opportunities to Develop and Enhance my Skills",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736380800&v=beta&t=tvAlORqrjV22gAuI7g_OrtINGRbGnNQXkCUegqFyPow"
    },
    content: `Hey Folks,

Learning here at @Linux World is awesome.
Sharing some amazing content I witnessed last week.

1. How to run Website audits using Analytics by @Dhruv Gupta!
Learning about how to conduct audits and the best tools and practices, personally made me super interested in website audits as a career opportunity.
(ps - I wanna know more)

2. Graphic design secrets revealed by @Devdutt Marathkar -
What a creative session this was..!! Devdutt talked to us how he created pathforce technology along with the emojis for Hotstar. It was such a valuable session.

3. The Art of Storytelling by @Suprshsh Puri -
As a fresher, almost everyone talks about having a great portfolio to get a job. Rups broke down the entire process of making one for us so clearly.

4. Growth Hacking workshop by @Vaibhav Sisinty 🔥-
This was a bonus that dropped in my inbox and was definitely an amazing one. I learned so many new terms, majorly the difference between marketing and growth and Vaibhav's own experience. Absolutely loved the energy.

Grateful to all the mentors here for sharing their wisdom with us. Glad to be a part of #cap.`,
    timestamp: "8 Mar 2023"
  },
  {
    id: 2,
    author: {
      name: "Ayushi Jain",
      title: "Branding | Marketing and Strategy",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736380800&v=beta&t=tvAlORqrjV22gAuI7g_OrtINGRbGnNQXkCUegqFyPow"
    },
    content: `From Google searches to customized Netflix recommendations, AI has been a part of our daily routines for years. Its ability to quickly analyze vast amounts of data has revolutionized the way we live, enabling us to better target our marketing campaigns and optimize our strategies. However, the effectiveness of AI depends largely on the clarity and precision of our requirements.

Recently, I had the privilege of attending a workshop hosted by @Radhika Chopra and conducted by @Linux World. The session helped me understand how we can use these tools to our advantage in an effective and efficient manner. It also shed light on some truly useful tools such as -

Jitter - For creating interactive content and motion design.
Super.So - Helps us convert Notion pages into websites.
Plotrchart - For creating quick charts
Descript - To streamline the creation of transcripts and video editing.

I'd like to express my gratitude to @Radhika Chopra for this insightful session and @Linux World for providing valuable opportunities to upgrade our skillset.`,
    timestamp: "8 Mar 2023"
  },
  {
    id: 3,
    author: {
      name: "Prashant Hada",
      title: "Student at the ronald university of applied sciences",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736380800&v=beta&t=tvAlORqrjV22gAuI7g_OrtINGRbGnNQXkCUegqFyPow"
    },
    content: `I am 😊 to announce the completion Certificate of Power BI workshop. I would like to thank @Linux World for giving me this wonderful opportunity to participate and also a big thanks to our mentor @Deeksha Anand for her valuable Guidance & knowledge transfer. #powerbi 📊 #Linux World #datanalytics`,
    timestamp: "8 Mar 2023"
  },
  {
    id: 4,
    author: {
      name: "Nikita Chawre",
      title: "Data Analysis Enthusiast | Building Skills and Network to Launch a Career in Data Analysis",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736380800&v=beta&t=tvAlORqrjV22gAuI7g_OrtINGRbGnNQXkCUegqFyPow"
    },
    content: `Thanks for the feedback on my last post - I've updated the dashboard with a new color scheme to make it easier on the eyes! 👀 As a fresher, I'm always looking for ways to improve the user experience, and your comments were incredibly helpful. Check out the new and improved version and let me know what you think!

#DataVisualization #Dashboard #UserExperience #FeedbackMatters #LearningAndGrowing #DataAnalytics

@Deeksha Anand @GrowthData @Linux World`,
    timestamp: "8 Mar 2023"
  }
]

export default function Component() {
  return (
    <div className="min-h-screen bg-[#1B2730] p-6">
      <div className="mx-auto" style={{ width: '862px' }}>
        <div className="grid grid-cols-2 gap-6"> {/* Change grid-cols-1 to grid-cols-2 */}
          {posts.map((post) => (
            <Card key={post.id} className="relative overflow-hidden bg-[#243342] text-white shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-grow">
                    <h3 className="text-sm font-semibold">{post.author.name}</h3>
                    <p className="text-xs text-gray-400">{post.author.title}</p>
                  </div>
                  <Linkedin className="h-5 w-5 text-gray-400" />
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="space-y-2 text-sm">
                  {post.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>
                      {paragraph.split(' ').map((word, wordIndex) => {
                        if (word.startsWith('@') || word.startsWith('#')) {
                          return <span key={wordIndex} className="text-[#63B3ED]">{word} </span>
                        }
                        return word + ' '
                      })}
                    </p>
                  ))}
                </div>
                <p className="mt-4 text-xs text-gray-400">{post.timestamp}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
