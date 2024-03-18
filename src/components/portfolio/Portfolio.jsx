import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "BrainWave AI Webiste",
    src: "https://drive.google.com/file/d/1HShtnwc2i2M67KFqaIzD4ECiC8BkZgcI/view?usp=sharing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facere provident nulla recusandae, vitae vel labore reprehenderit,",
  },
  {
    id: 2,
    title: "Nike Website",
    src: "https://drive.google.com/file/d/16TpOSD42cxe879s9dwqXSMSOp3Qq-u75/view?usp=sharing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facere provident nulla recusandae, vitae vel labore reprehenderit,",
  },
  {
    id: 3,
    title: "Hulu landing page",
    src: "https://drive.google.com/file/d/1GEe9S0ccIsajZSBp-qHznxYnfz6BRUhZ/view?usp=sharing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facere provident nulla recusandae, vitae vel labore reprehenderit,",
  },
  {
    id: 4,
    title: "Food-ordering page",
    src: "https://drive.google.com/file/d/1Cwt_R7AtZYMWRcWW8xi_rC9eEIfMrKWE/view?usp=sharing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facere provident nulla recusandae, vitae vel labore reprehenderit,",
  },
  {
    id: 5,
    title: "SaaS landing Page",
    src: "https://drive.google.com/file/d/1p7TfxFBmX0Xif9PTiSugKADnTJ4Axf54/view?usp=sharing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facere provident nulla recusandae, vitae vel labore reprehenderit,",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.src} alt=" " />
          </div>
          <motion.div className="textContainer" style={{ y: y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"></motion.div>
      </div>
      {items.map(item => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
