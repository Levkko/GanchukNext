import "../../components/Montserrat.css";

import Navbar from "@/components/main-page/navbar/navbar";
import Footer from "@/components/main-page/footer/footer";
import Contacts from "@/components/contacts-page/contacts-block/contacts-block";

export default function ContactsPage() {
  return (
    <main>
      <>
        <Navbar />
        <Contacts />
        <Footer />
      </>
    </main>
  );
}