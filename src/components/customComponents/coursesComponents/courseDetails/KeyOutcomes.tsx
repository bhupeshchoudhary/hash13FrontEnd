'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

// Define types for learner and benefit items
interface Learner {
  name: string;
  company: string;
}

export default function KeyOutcomes() {
  const leftSectionRef = useRef<HTMLDivElement>(null)

  const learners: Learner[] = [
    { name: "ShareChat Learner", company: "ShareChat" },
    { name: "Google Learner", company: "Google" },
    { name: "Apna Learner", company: "Apna" },
    { name: "Capgemini Learner", company: "Capgemini" },
  ]

  const benefits: string[] = [
    "Stay ahead in your field by mastering industry relevant skills through our online sessions",
    "Dive into real challenges from today's businesses, gaining hands-on experience",
    "Tap into a wealth of career opportunities through our established network",
  ]

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left scrollable section */}
      <div ref={leftSectionRef} className="lg:w-2/3 p-6 overflow-y-auto">
        <h2 className="text-3xl font-bold mb-6">Key Outcomes</h2>
        <p className="mb-4 text-muted-foreground">
          The SEO Mentorship Program is an 8-week intensive course designed to teach
          participants the steps to dominate search rankings and boost online visibility through
          proven methods and strategies...


          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, non. Odio suscipit nostrum veniam labore nobis minus delectus officia, fuga dolores voluptates? Ipsum sed recusandae, eligendi nemo fugiat minus modi est? Rem maxime voluptatum suscipit minus iste tempore exercitationem, aliquid quod, quasi ipsa ab culpa. Ut quia quod accusamus delectus porro! Hic natus assumenda qui harum nihil ratione reiciendis a illum adipisci quas porro consectetur quae aperiam similique, architecto nulla laudantium saepe perferendis atque sint tenetur dolorem? Ducimus pariatur, molestias quisquam mollitia eveniet tempore autem reiciendis ipsam voluptates ad. Minima natus provident voluptatum temporibus voluptatibus quae architecto est.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus reiciendis iusto sequi aliquid saepe explicabo, odio dignissimos aperiam praesentium, maxime maiores, totam vel illum. Ipsam corrupti voluptas et vel eveniet accusantium nostrum totam reiciendis quos harum hic nam, debitis eius distinctio quam dignissimos cumque atque? Tempore blanditiis sed omnis nemo eius, laborum ipsam amet quaerat commodi nulla asperiores autem cumque adipisci suscipit architecto perferendis quis natus sequi neque velit non mollitia! Placeat cumque sed deserunt culpa atque quasi sunt, ipsa, possimus inventore illum laboriosam voluptate eius debitis nostrum explicabo sit dolorum ut impedit consequuntur, quo expedita odit earum doloremque porro. Hic a optio, sint, nemo commodi aspernatur veniam amet explicabo sit mollitia qui aut assumenda dolores maxime, voluptate repudiandae delectus autem consectetur voluptas. Praesentium, voluptatem. Nisi rem aliquid atque aperiam nulla maxime placeat praesentium odio officia ea velit adipisci magni deleniti natus error odit quasi quis quas, excepturi unde delectus. Laborum excepturi sunt libero odit, quod porro vel molestiae perspiciatis doloribus quo nisi ut adipisci repellendus magni delectus officia repellat minima iusto cum placeat aliquid amet quaerat exercitationem similique? Ducimus quo ipsum, id sed sapiente esse? Corrupti, doloremque eaque! Alias corporis impedit aliquid non deleniti dolores debitis dolore illo saepe harum ad iure, neque numquam quisquam explicabo? Corporis soluta eligendi odit totam quasi iure, debitis ipsa sit quam. Architecto, eaque. Quisquam numquam facere facilis, optio earum voluptate, totam asperiores, atque nesciunt voluptas vel consectetur illo temporibus? Praesentium pariatur, expedita iure a ad delectus labore totam numquam iste velit iusto, illo reprehenderit perspiciatis dolorum quam. Nulla nesciunt ducimus et qui laboriosam eum velit id reprehenderit assumenda temporibus sapiente minus expedita ut, distinctio optio architecto, aspernatur earum, voluptatibus quod! Tempora maxime perspiciatis, cumque similique ab debitis suscipit tempore nostrum odio deleniti possimus beatae hic temporibus facere culpa quia inventore voluptatem explicabo! Repellendus velit quidem earum vero qui hic expedita, explicabo commodi quisquam libero provident doloribus soluta temporibus tenetur placeat ratione quod. Autem facere quis, ab distinctio repellat asperiores quas praesentium id neque voluptatem, nulla quae, vel eos! Consequuntur tempora cum ut possimus voluptas vero eos dignissimos, optio nisi aut odit non officiis laboriosam praesentium unde dolorum repellat consectetur, vitae delectus vel voluptatibus? Laboriosam sed quos illum facilis eius accusamus quas, dolorem odio consequatur maxime perspiciatis, facere ad odit? Iusto magnam suscipit alias impedit vero! Eaque laudantium laborum corporis, praesentium dolore architecto facere ullam, velit neque perferendis non obcaecati accusantium voluptatum? Debitis ducimus libero quae nam saepe? Cupiditate sapiente obcaecati saepe delectus! Quod perspiciatis iste pariatur distinctio culpa et nam qui sequi? In sunt neque quasi delectus laboriosam sequi, amet modi est eligendi laborum minima velit tempora esse magni, facere temporibus doloribus culpa dolores provident. Officia excepturi iste voluptatibus, fugiat vitae ullam, minus harum vero dolores quos repudiandae recusandae. Possimus dolorem veritatis sunt ipsum hic vero quia ad maiores accusamus, ratione ipsa cum mollitia pariatur ullam qui, repellendus officia similique nam minus expedita incidunt. Ex earum, ipsum, numquam tempore hic adipisci libero molestiae accusamus et cum voluptatum maiores quos recusandae tenetur minima! Tenetur sequi aliquid temporibus animi nisi modi fugiat nihil, quod, expedita commodi iusto delectus minus officiis soluta sapiente est distinctio architecto dolorem impedit. Cum illo, tempora qui nisi eos animi nam ducimus velit nulla, placeat voluptatibus, rerum delectus illum! Excepturi aperiam adipisci aut sunt maiores totam, vitae amet. Aliquid aliquam et deserunt? Repudiandae nam architecto, in modi ea distinctio debitis impedit quia praesentium animi fugiat culpa nesciunt sint ducimus doloribus officia, pariatur vero odio deleniti! Cupiditate placeat rerum voluptates necessitatibus at architecto aperiam nam eius nihil vero ea, maxime doloribus inventore suscipit? Perspiciatis corporis animi magnam nulla rerum suscipit laudantium eligendi? Dolorem aliquid pariatur voluptatem repellat ea quam quasi, distinctio corrupti. Voluptatibus fugit cumque officia tempora beatae, placeat inventore at odit veritatis nihil eaque molestias eligendi a dolores, corrupti accusantium. Iste, quia? Aliquam ducimus dignissimos temporibus ratione soluta id iure velit sunt tempora, cupiditate voluptatibus quidem vel laboriosam nobis similique reiciendis aperiam excepturi ipsam? Quas eligendi necessitatibus pariatur, ab cum animi dolor nulla nesciunt adipisci officia voluptatum, nam reprehenderit aspernatur rem asperiores esse voluptatem similique? Quidem soluta rerum laudantium maxime consequatur deserunt? Corrupti, repellat officia. Doloremque repellendus temporibus ullam rerum atque, consequatur totam velit vero sequi tenetur error ducimus! Quod culpa quia quas minus nostrum laboriosam blanditiis iste repudiandae, consequuntur ex cupiditate eaque molestiae deleniti labore dolor eligendi, temporibus laudantium tenetur perspiciatis ducimus ipsum aspernatur impedit ipsa eum. Quis itaque nam animi amet numquam assumenda commodi autem, quo totam dolore dolorem beatae vitae nihil dignissimos voluptatem obcaecati suscipit quod. Nisi at quos deleniti provident fugit quaerat ea doloremque distinctio hic sunt saepe voluptas similique esse fuga, quas ab, impedit molestias. Enim cumque voluptates, reprehenderit impedit molestias possimus nemo dolores id, accusantium vitae perspiciatis fuga unde mollitia aut molestiae harum est doloremque? Laborum dolor et nisi, provident esse sunt fuga asperiores adipisci aperiam corporis eius deserunt nemo repudiandae sit explicabo consectetur ad dolorum omnis repellat quod placeat nulla? Maxime aperiam iure quia! Nesciunt omnis esse est cupiditate aperiam asperiores aspernatur distinctio nulla, quas sunt nemo fuga rem fugit repellat ab nam beatae excepturi quod obcaecati deserunt eum adipisci corrupti ducimus natus. Rem voluptate, deserunt iste libero temporibus perferendis placeat cumque? Optio voluptates in eos alias beatae debitis a corporis, nisi aliquam, nulla voluptatem dolores sint minus fugit mollitia deserunt tenetur quae dolore. Animi, iste accusantium! Nostrum accusantium id magnam, aut inventore architecto harum dolorum fuga quasi nobis dignissimos reiciendis commodi, dicta, rem molestiae possimus quod veniam doloribus nesciunt. Molestiae dignissimos autem maxime aliquam amet quisquam tenetur sint magnam voluptas ea architecto, pariatur totam ducimus error asperiores reprehenderit nemo! Architecto voluptatem consequuntur, voluptate quae illum neque quia aperiam. Nisi enim sed, ratione odit aperiam in nesciunt sunt corporis iusto deleniti soluta consequuntur! Autem minus in eum culpa incidunt asperiores error tempora pariatur cum commodi quia porro vero eveniet reprehenderit inventore, totam alias cupiditate eius itaque eaque. Sequi eius debitis maxime autem dicta numquam perferendis nesciunt eos illo quo voluptatem neque non dolores temporibus ad alias, doloremque obcaecati qui ut illum ab praesentium.
        </p>
        <ul className="space-y-2 mb-6">
          {[
            "Understand SEO fundamentals",
            "Create high-performing, search engine-friendly content",
            "Improve technical aspects of websites",
            "Enhance website link profiles with ethical practices",
            "Drive online sales and engage local customers",
            "Plan and manage international SEO strategies",
            "Leverage Generative AI for SEO",
            "Conduct SEO audits and implement optimizations"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right sticky section with Card */}
      <div className="lg:w-2/4 p-6 lg:sticky lg:top-0 lg:h-screen lg:flex lg:items-center lg:justify-center">
        <Card className="h-auto max-h-[90vh] overflow-hidden">
          <CardHeader className="pb-4">
            {/* <CardTitle className="text-2xl font-bold">5.4M+ Learners</CardTitle> */}


            <CardTitle className="text-2xl font-bold">
  <span className="text-[#ff0000]">5.4M+</span> Learners
</CardTitle>
            <p className="text-muted-foreground">have reaped benefits from our programs</p>
          </CardHeader>
          <CardContent className="space-y-6 overflow-y-auto max-h-[calc(100%-5rem)]">
            <div className="overflow-hidden">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ 
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 5,
                    ease: "linear",
                  },
                }}
                className="flex gap-4"
              >
                {[...learners, ...learners].map((learner, index) => (
                  <div key={index} className="flex flex-col items-center flex-shrink-0">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                      <Image
                        src={`/placeholder.svg?text=${learner.name}`}
                        alt={learner.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <Image
                      src={`/placeholder.svg?text=${learner.company}`}
                      alt={learner.company}
                      width={64}
                      height={20}
                      className="h-5 w-auto object-contain"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <Image
                src="/placeholder.svg?text=Growth School"
                alt="Growth School"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
              <Image
                src="/placeholder.svg?text=LinkedIn Top Startup India 2023"
                alt="LinkedIn Top Startup India 2023"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


