import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Stats/>
      <Clients/>
      <Footer/>
    </>
  );
}
