import React from "react";
import "./skills.css";
import { motion } from "framer-motion";
import Html from "../../assets/html-5-svgrepo-com.svg";
import Css from "../../assets/css3.svg";
import Javascript from "../../assets/javascript.svg";
import ReactJS from "../../assets/react.svg";
import NextJS from "../../assets/next-js-svgrepo-com.svg";
import Redux from "../../assets/redux-svgrepo-com.svg";
import Tailwind from "../../assets/tailwindcss.svg";
import Typescript from "../../assets/typescript-svgrepo-com.svg";
import Figma from "../../assets/figma.svg";
import BsBootstrap from "../../assets/bootstrap-svgrepo-com.svg";
import { useLanguage } from "../../context/LanguageContext";

const SkillsData = [
  { id: 0, image: Html, title: "Html 5", disc: "html5 semantic structure" },
  { id: 1, image: Css, title: "CSS3", disc: "Responsive layouts & styling" },
  {
    id: 2,
    image: Tailwind,
    title: "TailwindCSS",
    disc: "Rapid UI development",
  },
  {
    id: 3,
    image: BsBootstrap,
    title: "Bootsrap",
    disc: "Rapid UI development",
  },
  { id: 4, image: Figma, title: "Figma", disc: "UI/UX design & prototyping" },
  {
    id: 5,
    image: Javascript,
    title: "JavaScript",
    disc: "Dynamic web interactions",
  },
  {
    id: 6,
    image: Typescript,
    title: "TypeScript",
    disc: "Typed scalable code",
  },
  { id: 7, image: ReactJS, title: "React js", disc: "Component-based UI" },
  { id: 8, image: NextJS, title: "Next.js", disc: "SSR & SEO friendly" },
  { id: 9, image: Redux, title: "Redux", disc: "State management" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function Skills() {
  const { t } = useLanguage();
  return (
    <section id="skills">
      <motion.h5
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t.skills.subtitle}
      </motion.h5>
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t.skills.title}
      </motion.h2>

      <motion.div
        className="container container_skills"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {SkillsData.map(({ id, image, title, disc }) => (
          <motion.article
            key={id}
            className="card_skill"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              y: -5,
              borderColor: "var(--color-primary)",
              boxShadow: "0 10px 30px -10px rgba(0, 210, 255, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="icon">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <h4>{title}</h4>
              <p className="text-light">{disc}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
