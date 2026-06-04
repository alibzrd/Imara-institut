import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Simulator from "@/components/sections/Simulator";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Faq from "@/components/sections/Faq";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col flex-1">
        <Hero />
        <Simulator />
        <Services />
        <Process />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
