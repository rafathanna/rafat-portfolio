import React from "react";
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import "./services.css";
import { useLanguage } from "../../context/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

function Services() {
  const { t } = useLanguage();

  return (
    <section id="services">
      <motion.h5
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t.services.subtitle}
      </motion.h5>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t.services.title}
      </motion.h2>

      <motion.div
        className="container container_services"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.article
          className="card"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            rotateY: 10,
            boxShadow: "0 20px 40px rgba(0, 210, 255, 0.2)",
          }}
        >
          <MdDesignServices className="icon" />
          <h3>{t.services.design}</h3>
          <p className="text-light">{t.services.design_desc}</p>
          <div className="service_tech">
            <span>Figma</span>
            <span>Adobe XD</span>
          </div>
        </motion.article>

        <motion.article
          className="card"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            rotateY: -10,
            boxShadow: "0 20px 40px rgba(157, 80, 187, 0.2)",
          }}
        >
          <IoIosRocket className="icon" />
          <h3>{t.services.perf}</h3>
          <p className="text-light">{t.services.perf_desc}</p>
          <div className="service_tech">
            <span>Vite</span>
            <span>Optimization</span>
          </div>
        </motion.article>

        <motion.article
          className="card"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            rotateY: 10,
            boxShadow: "0 20px 40px rgba(0, 210, 255, 0.2)",
          }}
        >
          <FaCode className="icon" />
          <h3>{t.services.clean}</h3>
          <p className="text-light">{t.services.clean_desc}</p>
          <div className="service_tech">
            <span>React</span>
            <span>TypeScript</span>
          </div>
        </motion.article>
      </motion.div>
    </section>
  );
}

export default Services;
