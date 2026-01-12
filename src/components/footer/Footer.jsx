import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import "./footer.css";
import { useLanguage } from "../../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      <motion.a
        href="#home"
        className="footer_logo"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {t.header.name}
      </motion.a>

      <ul className="permalinks">
        <li>
          <a href="#home">{t.nav.home}</a>
        </li>
        <li>
          <a href="#about">{t.nav.about}</a>
        </li>
        <li>
          <a href="#experience">{t.nav.experience}</a>
        </li>
        <li>
          <a href="#services">{t.nav.services}</a>
        </li>
        <li>
          <a href="#portfolio">{t.nav.portfolio}</a>
        </li>
        <li>
          <a href="#contact">{t.nav.contact}</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://facebook.com/rafat.hanna.925"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://linkedin.com/in/rafat-hanna"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/rafathanna"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FaXTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <small>
          &copy; {new Date().getFullYear()} {t.header.name}. {t.footer.rights}
        </small>
      </div>
    </footer>
  );
}

export default Footer;
