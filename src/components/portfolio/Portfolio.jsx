import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "BrainWave AI Webiste",
    src: "/assets/BrainWave.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facere provident nulla recusandae, vitae vel labore reprehenderit,",
  },
  {
    id: 2,
    title: "Nike Website",
    src: "/assets/Nike.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facere provident nulla recusandae, vitae vel labore reprehenderit,",
  },
  {
    id: 3,
    title: "Hulu landing page",
    src: "/assets/Hulu.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facere provident nulla recusandae, vitae vel labore reprehenderit,",
  },
  {
    id: 4,
    title: "Food-ordering page",
    src: "/assets/Food.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facere provident nulla recusandae, vitae vel labore reprehenderit,",
  },
  {
    id: 5,
    title: "SaaS landing Page",
    src: "/assets/SaaS.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facere provident nulla recusandae, vitae vel labore reprehenderit,",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-250, 250]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.src} alt={item.title} />
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
