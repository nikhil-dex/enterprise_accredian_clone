import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import Accredian_Edge from "@/components/Accredian_Edge";
 
export default function Home() {
  return (
    <>
    <main>


      <Navbar />
      <Hero/>
      <Stats/>
      <Clients/>
      <Accredian_Edge/>

      <Footer/>
    </main>

    </>
  );
}
