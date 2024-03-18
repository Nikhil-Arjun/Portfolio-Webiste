import "./contact.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_prrdhwf",
        "template_1qeajv8",
        formRef.current,
        "7HOULN40AU1f3ZdNq"
      )
      .then(
        result => {
          setSuccess(true);
        },
        error => {
          setError(true);
        }
      );
  };
  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>nikhilarjun97@gmail.com</span>
        </motion.div>

        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Mumbai, Maharashtra, India</span>
        </motion.div>

        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+91 96533289xx</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}>
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={9} placeholder="Message" name="message" />
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
