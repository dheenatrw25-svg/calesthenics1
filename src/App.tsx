import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPromiseProof from './components/PainPromiseProof';
import WhyZeroMachine from './components/WhyZeroMachine';
import TransformationProgram from './components/TransformationProgram';
import Mentorship from './components/Mentorship';
import Coaches from './components/Coaches';
import ClientResults from './components/ClientResults';
import Pricing from './components/Pricing';
import Community from './components/Community';
import ContactSection from './components/ContactSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0A0F24] text-white">
      <Navbar scrolled={scrolled} />
      <Hero />
      <PainPromiseProof />
      <WhyZeroMachine />
      <TransformationProgram />
      <Mentorship />
      <Coaches />
      <ClientResults />
      <Pricing />
      <Community />
      <ContactSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
