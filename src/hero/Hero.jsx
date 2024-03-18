import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },

  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    },
  },
};

const Hero = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      window.scrollTo({
        top: portfolioSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate">
          <p>
            <span>Myself,</span>
          </p>
          <motion.h2 variants={textVariants}>NIKHIL RAMESH ARJUN</motion.h2>
          <motion.h1 variants={textVariants} whileHover={{ color: "#ffb914" }}>
            Web developer and UI designer
          </motion.h1>
          <motion.p variants={textVariants}>
            I'm creative designer and developer based in India,
            <br /> and I'm very passionate and dedicated to my work.
          </motion.p>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              style={{
                fontSize: "16px",
                fontWeight: "bold",
              }}
              variants={textVariants}
              onClick={scrollToPortfolio}>
              <a href="#Portfolio">See the lastest work</a>
            </motion.button>
            <motion.button
              style={{
                background: "white",
                color: "black",
                fontSize: "16px",
                fontWeight: "bold",
              }}
              variant={textVariants}
              className="button-2"
              variants={textVariants}
              onClick={scrollToContact}>
              <a href="#Contact">Contact Me</a>
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate">
        Developer Sketcher Designer Content Creator
      </motion.div>
      <div className="imageContainer">
        {/* <img src="/hero.png" alt="hero char" /> */}
      </div>
    </div>
  );
};

export default Hero;
