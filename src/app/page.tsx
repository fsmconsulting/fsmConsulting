import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Ecosystem from "@/components/Ecosystem";
import Services from "@/components/Services";
import Sectors from "@/components/Sectors";
import NetworkSection from "@/components/NetworkSection";
import Partners from "@/components/Partners";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Ecosystem />
        <Services />
        <Sectors />
        <NetworkSection />
        <Partners />
        <Closing />
      </main>
      <Footer />
    </>
  );
}