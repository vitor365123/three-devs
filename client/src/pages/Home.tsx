import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Differentials from '@/components/sections/Differentials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';



export default function Home() {
  return (
    <div className="antialiased">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Differentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
