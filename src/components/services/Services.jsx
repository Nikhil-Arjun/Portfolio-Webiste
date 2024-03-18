import { motion, useInView } from "framer-motion";
import "./Services.scss";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}>
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br />
          and move forward.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "#ffb914" }}>Unique </motion.b>Ideas
          </h1>
        </div>

        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "#ffb914" }}>For Your </motion.b>
            Business.
          </h1>
          <button>WHAT I DO</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Web Designer</h2>
          <p>
            Services with more than 1 Years of experience. Providing quality
            work to clients and companies
          </p>
          <button>Let's Talk</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Web Developer</h2>
          <p>
            Services with more than 1 Years of experience. Providing quality
            work to clients and companies
          </p>
          <button>Let's Talk</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}>
          <h2>UI/UX Designer</h2>
          <p>
            Services with more than 1 Years of experience. Providing quality
            work to clients and companies
          </p>
          <button>Let's Talk</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Branding Designer</h2>
          <p>
            Services with more than 1 Years of experience. Providing quality
            work to clients and companies
          </p>
          <button>Let's Talk</button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
