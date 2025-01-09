import "../components/Montserrat.css";

import ScrollRestoration from "@/components/scrollRestoration";
import Navbar from "@/components/main-page/navbar/navbar";
import MainBlock from "@/components/main-page/main-block/main-block";
import Mu from "@/components/main-page/mu-block/mu-block";
import HowWeWork from "@/components/main-page/how-we-work-block/how-we-work-block";
import Price from "@/components/main-page/price-block/price-block";
import Question from "@/components/main-page/question-block/question-block";
import OurProjects from "@/components/main-page/our-projects-block/our-projects-block";
import Ready from "@/components/main-page/ready-to-start-block/ready-to-start-block";
import Footer from "@/components/main-page/footer/footer";

export default function Home() {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <main>
        <MainBlock />
        <Mu />
        <HowWeWork />
        <Price />
        <Question />
        <OurProjects />
        <Ready />
      </main>
      <Footer />
    </>
  );
}
