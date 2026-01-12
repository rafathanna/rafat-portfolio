import React from "react";
import CTA from "./CTA";
import Social from "./HeaderSocials";
import "./header.css";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import LOGO from "../../assets/logo.png";
import { useLanguage } from "../../context/LanguageContext";
import { MdLanguage } from "react-icons/md";

function Header() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header id="home">
      <motion.button
        className="language_toggle"
        onClick={toggleLanguage}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <MdLanguage />
        <span>{language === "en" ? "Ar" : "En"}</span>
      </motion.button>

      <div className="container header_container">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="logo_container"
        >
          <img src={LOGO} alt="Rafat Logo" className="header_logo" />
        </motion.div>

        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          {t.header.name}
        </motion.h1>

        <motion.div
          className="typewriter_container"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typewriter
            key={language}
            options={{
              strings:
                language === "en"
                  ? [
                      "Frontend Developer",
                      "React Specialist",
                      "UI/UX Enthusiast",
                      "Problem Solver",
                    ]
                  : [
                      "مطور واجهات أمامية",
                      "متخصص React",
                      "مهتم بالـ UI/UX",
                      "حل المشكلات التقنية",
                    ],
              autoStart: true,
              loop: true,
              wrapperClassName: "typewriter_text",
              cursorClassName: "typewriter_cursor",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <CTA />
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Social />
        </motion.div>

        <motion.a
          href="#contact"
          className="scroll_down"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {t.header.scroll}
        </motion.a>
      </div>
    </header>
  );
}

export default Header;
