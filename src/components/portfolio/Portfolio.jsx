import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "BrainWave AI Webiste",
    img: "https://images.pexels.com/photos/20623990/pexels-photo-20623990/free-photo-of-blue-tit-dreamy.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facere provident nulla recusandae, vitae vel labore reprehenderit,",
  },
  {
    id: 2,
    title: "Nike Website",
    img: "https://images.pexels.com/photos/20623990/pexels-photo-20623990/free-photo-of-blue-tit-dreamy.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facere provident nulla recusandae, vitae vel labore reprehenderit,",
  },
  {
    id: 3,
    title: "Hulu landing page",
    img: "https://images.pexels.com/photos/20623990/pexels-photo-20623990/free-photo-of-blue-tit-dreamy.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facere provident nulla recusandae, vitae vel labore reprehenderit,",
  },
  {
    id: 4,
    title: "Food-ordering page",
    img: "https://images.pexels.com/photos/20623990/pexels-photo-20623990/free-photo-of-blue-tit-dreamy.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facere provident nulla recusandae, vitae vel labore reprehenderit,",
  },
  {
    id: 5,
    title: "SaaS landing Page",
    img: "https://images.pexels.com/photos/20623990/pexels-photo-20623990/free-photo-of-blue-tit-dreamy.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facere provident nulla recusandae, vitae vel labore reprehenderit,",
  },
];

const Single = ({ item }) => {
  return <section>{item.title}</section>;
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
