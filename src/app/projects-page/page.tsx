import "../../components/Montserrat.css";

import Navbar from "@/components/main-page/navbar/navbar";
import Footer from "@/components/main-page/footer/footer";
import LazyProgects from "@/components/projects-page/projects-block/projects-block";

export default function ProjectsPage() {
  return (
    <main>
      <>
        <Navbar />
        <LazyProgects />
        <div className="pb-[30px]">
          <Footer />
        </div>
      </>
    </main>
  );
}
