import React from "react";
import "./testimonials.css";
import { motion } from "framer-motion";
import AVTR1 from "../../assets/rafat.jpeg";
import { useLanguage } from "../../context/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials">
      <motion.h5
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t.testimonials.subtitle}
      </motion.h5>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t.testimonials.title}
      </motion.h2>

      <div className="container testimonials_container">
        {t.testimonials.data.map(({ name, review }, index) => (
          <motion.article
            key={index}
            className="testimonial glass-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="client_avatar">
              <img src={AVTR1} alt={name} />
            </div>
            <h5 className="client_name">{name}</h5>
            <small className="client_review text-light">{review}</small>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
