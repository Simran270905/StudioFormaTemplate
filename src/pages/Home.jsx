import Hero from "../components/Hero";
import Manifesto from "../components/Manifesto";
import Projects from "../components/Projects";
import Materials from "../components/Materials";
import Process from "../components/Process";
import Stats from "../components/Stats";
import Studio from "../components/Studio";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
const Home = () => {
  return (
    <div className="bg-[#F7F6F4] text-[#1C1C1C]">
      <Hero />
      <Manifesto />
      <Projects />
      <Materials />
      <Process />
      <Stats />
      <Studio />
      <ContactForm/>
      
      <Footer />
    </div>
  );
};

export default Home;
