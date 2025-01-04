import Navbar from "../components/main-page/navbar/navbar";
import MainBlock from "../components/main-page/main-block/main-block";
import Mu from "../components/main-page/mu-block/mu-block";

export default function Home() {
  return (
    <main>
      <>
        <Navbar />
        <MainBlock />
        <Mu />
      </>
    </main>
  );
}
