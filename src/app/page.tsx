import Image from "next/image";
import Hero from "@/components/customComponents/landingPage/Hero";
import About from "@/components/customComponents/landingPage/About";
import CoreFeature from "@/components/customComponents/landingPage/CoreFeature";
import PopularTopic from "@/components/customComponents/landingPage/PopularTopic";
import BlogSection from "@/components/customComponents/landingPage/Blog";
export default function Home() {
  return (
<>
<Hero></Hero>
<About></About>
<CoreFeature></CoreFeature>
<PopularTopic></PopularTopic>
<BlogSection></BlogSection>
</>
  );
}
