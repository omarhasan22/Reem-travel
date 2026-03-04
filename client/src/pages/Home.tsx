import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import Services from "@/components/sections/Services";
import Quote from "@/components/sections/Quote";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhyUs />
        <Services />
        <Quote />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
