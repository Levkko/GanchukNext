import "../components/Montserrat.css";

import Navbar from "../components/main-page/navbar/navbar";
import MainBlock from "../components/main-page/main-block/main-block";
import Mu from "../components/main-page/mu-block/mu-block";
import HowWeWork from "../components/main-page/how-we-work-block/how-we-work-block";
import Price from "../components/main-page/price-block/price-block";
import Question from "../components/main-page/question-block/question-block";
import OurProjects from "../components/main-page/our-projects-block/our-projects-block";

export default function Home() {
  return (
    <main>
      <>
        <Navbar />
        <MainBlock />
        <Mu />
        <HowWeWork />
        <Price />
        <Question />
        <OurProjects />
      </>
    </main>
  );
}
