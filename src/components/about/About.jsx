import React from "react";
import "./about.css";
import ME from "../../assets/rafat.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about">
      <motion.h5
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t.about.subtitle}
      </motion.h5>
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t.about.title}
      </motion.h2>

      <div className="container about_container">
        <motion.div
          className="about_me"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </motion.div>

        <div className="about_content">
          <div className="about_cards">
            <motion.article
              className="about_card"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <FaAward className="about_icon" />
              <h5>{t.about.experience}</h5>
              <small>{t.about.exp_sub}</small>
            </motion.article>

            <motion.article
              className="about_card"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <FiUsers className="about_icon" />
              <h5>{t.about.clients}</h5>
              <small>{t.about.clients_sub}</small>
            </motion.article>

            <motion.article
              className="about_card"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <VscFolderLibrary className="about_icon" />
              <h5>{t.about.projects}</h5>
              <small>{t.about.projects_sub}</small>
            </motion.article>
          </div>

          <motion.p
            className="about-me"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {t.about.description}
          </motion.p>

          <motion.a
            href="#contact"
            className="btn btn-primary"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.about.cta}
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default About;
