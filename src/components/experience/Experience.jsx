import React from "react";
import "./experience.css";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const experienceData = [
  // ... (keeping existing data as it's project specific)
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2023 - Present",
    description:
      "Leading the frontend development of high-traffic web applications using React and Next.js. Improved performance by 40%.",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Creative Web Agency",
    period: "2021 - 2023",
    description:
      "Developed custom UI components and integrated complex APIs with Redux Saga. Delivered 20+ successful projects.",
  },
  {
    id: 3,
    title: "Junior Developer",
    company: "Junior Startups",
    period: "2020 - 2021",
    description:
      "Started as a junior, focused on HTML/CSS and basic JavaScript projects. Collaborated closely with senior devs.",
  },
];

const Experience = () => {
  const { t } = useLanguage();
  return (
    <section id="experience">
      <motion.h5
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t.experience.subtitle}
      </motion.h5>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t.experience.title}
      </motion.h2>

      <div className="container experience_container">
        <div className="timeline">
          {experienceData.map(
            ({ id, title, company, period, description }, index) => (
              <motion.div
                key={id}
                className={`timeline_item ${
                  index % 2 === 0 ? "left" : "right"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="timeline_content glass-card">
                  <h3>{title}</h3>
                  <h5>{company}</h5>
                  <span className="period">{period}</span>
                  <p className="text-light">{description}</p>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
