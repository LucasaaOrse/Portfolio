import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Process from "@/components/Process";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-grid antialiased selection:bg-blue-500/30">
      <Navbar />
      {/* Container global controlando o alinhamento e largura máxima de todo o site */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8">
        <Hero />
        <Services />
        <Projects />
        <About />
        <Skills />
        <Process />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}