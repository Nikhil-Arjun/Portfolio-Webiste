import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Hero from "./hero/Hero";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Banner from "./components/banner/Banner";

const App = () => {
  return (
    <div>
      <Cursor />

      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />

      <section id="Contact">
        <Contact />
        <Banner />
      </section>
    </div>
  );
};

export default App;
