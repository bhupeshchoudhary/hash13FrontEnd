import Image from "next/image";
import Hero from "@/components/customComponents/landingPage/Hero";
import About from "@/components/customComponents/landingPage/About";
import CoreFeature from "@/components/customComponents/landingPage/CoreFeature";
import PopularTopic from "@/components/customComponents/landingPage/PopularTopic";
import BlogSection from "@/components/customComponents/landingPage/Blog";
import Testimonials from "@/components/customComponents/landingPage/Testimonials";
import Subscribe from "@/components/customComponents/landingPage/SubscribeNewsLatter";
import CoursesComponent from "@/components/customComponents/landingPage/Courses";
import FactsAndFigure from "@/components/customComponents/landingPage/FactAndFigure";
import SupportContact from "@/components/customComponents/landingPage/SupportContact";

export default function Home() {
  return (
<>
{/* <Hero></Hero> */}
<About></About>

<FactsAndFigure></FactsAndFigure>
<CoreFeature></CoreFeature>
<CoursesComponent></CoursesComponent>
<Subscribe></Subscribe>
<PopularTopic></PopularTopic>
<Testimonials></Testimonials>
<BlogSection></BlogSection>
<SupportContact></SupportContact>
</>
  );
}
