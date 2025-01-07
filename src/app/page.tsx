import "../components/Montserrat.css";

import Navbar from "../components/main-page/navbar/navbar";
import MainBlock from "../components/main-page/main-block/main-block";
import Mu from "../components/main-page/mu-block/mu-block";
import HowWeWork from "../components/main-page/how-we-work-block/how-we-work-block";
import WeOffer from "../components/main-page/we-offer-block/we-offer-block";

export default function Home() {
  return (
    <main>
      <>
        <Navbar />
        <MainBlock />
        <Mu />
        <HowWeWork />
        <WeOffer />
      </>
    </main>
  );
}
