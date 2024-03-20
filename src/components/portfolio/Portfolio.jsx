import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "BrainWave AI Application",
    img: "https://i.postimg.cc/9X6RBsKs/Brain-Wave.png",
    desc: "Brainwave - Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.",
    link: "https://stunning-piroshki-8e602a.netlify.app/",
  },
  {
    id: 2,
    title: "Nike landing page",
    img: "https://i.postimg.cc/wMpz1544/Nike.png",
    desc: "The Nike landing page built with React offers a dynamic and immersive experience for users. Featuring sleek design elements and smooth transitions, the page showcases Nike's latest products, including footwear, apparel, and accessories. Users can easily navigate through various categories, explore product details, and add items to their shopping cart seamlessly.",
    link: "https://65eb2ac333e07ca99d4c06c5--incandescent-khapse-64c8b4.netlify.app/",
  },
  {
    id: 3,
    title: "Hulu landing page",
    img: "https://i.postimg.cc/gk4p0ZV4/Hulu.png",
    desc: "The Hulu landing page, crafted with React, presents a vibrant and user-friendly interface tailored for seamless entertainment exploration. Upon arrival, users are greeted with personalized recommendations based on their viewing history and preferences. Featuring a visually appealing layout, the page highlights trending shows, popular movies, and exclusive Hulu originals, enticing users to dive into a world of diverse content.",
    link: "https://nikhil-arjun.github.io/Hulu-webpage-clone-website/",
  },

  {
    id: 4,
    title: "Food-ordering application",
    img: "https://i.postimg.cc/cHqyzMW1/Food.png",
    desc: "The food ordering website, developed using React, offers a convenient and seamless platform for users to browse, order, and enjoy their favorite dishes from a variety of restaurants. Upon landing on the homepage, users are greeted with a visually appealing interface featuring mouth-watering images of various cuisines and enticing promotions.",
    link: "https://nikhil-arjun.github.io/food-ordering-website/",
  },
  {
    id: 5,
    title: "SaaS landing page platform ",
    img: "https://i.postimg.cc/rsM6VVzv/SaaS.png",
    desc: "The SaaS landing page, built using React, is designed to captivate potential users and effectively communicate the value proposition of the software-as-a-service product. The page features a clean and modern layout, with crisp visuals and concise messaging to grab visitors' attention.",
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
