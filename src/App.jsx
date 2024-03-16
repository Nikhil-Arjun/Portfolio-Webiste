import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Hero from "./hero/Hero";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>Services</section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>Portfolio-1</section>
      <section>Portfolio-2</section>
      <section>Portfolio-3</section>
      <section>Portfolio-4</section>
      <section>Portfolio-5</section>
      <section>Portfolio-6</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
