import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "BrainWave AI Application",
    img: "https://i.postimg.cc/9X6RBsKs/Brain-Wave.png",
    desc: "Brainwave - Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.",
    link: "https://65f0584d15ed2f0ca6e7500d--coruscating-truffle-6e9070.netlify.app/",
  },
  {
    id: 2,
    title: "Nike landing page",
    img: "https://i.postimg.cc/wMpz1544/Nike.png",
    desc: "Brainwave - Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.",
    link: "https://65eb2ac333e07ca99d4c06c5--incandescent-khapse-64c8b4.netlify.app/",
  },
  {
    id: 3,
    title: "Hulu landing page",
    img: "https://i.postimg.cc/gk4p0ZV4/Hulu.png",
    desc: "Brainwave - Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.",
    link: "https://nikhil-arjun.github.io/Hulu-webpage-clone-website/",
  },

  {
    id: 4,
    title: "Food-ordering application",
    img: "https://i.postimg.cc/cHqyzMW1/Food.png",
    desc: "Brainwave - Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.",
    link: "https://nikhil-arjun.github.io/food-ordering-website/",
  },
  {
    id: 5,
    title: "SaaS landing page platform ",
    img: "https://i.postimg.cc/rsM6VVzv/SaaS.png",
    desc: "Brainwave - Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.",
    link: "https://vocal-donut-68be4f.netlify.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const handleButtonClick = () => {
    window.location.href = item.link;
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={handleButtonClick}>See Demo</button>
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
