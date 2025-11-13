import Hero from "../components/Hero";

import Services from "../components/Services";

import Solutions from "../components/Solutions";
import Stats from "../components/Stats";
import About from "../components/About";
import Contact from "../components/Contact";
import Products from "../components/Products";
import PartnersMarquee from "../components/Partnersmarquee";

const Home = () => {
  return (
    <>
      <Hero />
      <PartnersMarquee />
      <Services />
      <Products />
      <Solutions />
      <Stats />
      <About />
      <Contact />
    </>
  );
};

export default Home;
