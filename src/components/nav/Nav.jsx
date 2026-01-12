import React, { useState } from "react";
import "./nav.css";
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook, BiCommentDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  const { t } = useLanguage();

  return (
    <motion.nav
      initial={{ y: 100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <a
        href="#home"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => setActiveNav("#")}
        title={t.nav.home}
      >
        <IoHomeOutline />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => setActiveNav("#about")}
        title={t.nav.about}
      >
        <LuUserRound />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => setActiveNav("#experience")}
        title={t.nav.experience}
      >
        <MdWorkOutline />
      </a>
      <a
        href="#services"
        className={activeNav === "#services" ? "active" : ""}
        onClick={() => setActiveNav("#services")}
        title={t.nav.services}
      >
        <RiServiceLine />
      </a>
      <a
        href="#portfolio"
        className={activeNav === "#portfolio" ? "active" : ""}
        onClick={() => setActiveNav("#portfolio")}
        title={t.nav.portfolio}
      >
        <BiBook />
      </a>
      <a
        href="#testimonials"
        className={activeNav === "#testimonials" ? "active" : ""}
        onClick={() => setActiveNav("#testimonials")}
        title={t.nav.testimonials}
      >
        <BiCommentDetail />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => setActiveNav("#contact")}
        title={t.nav.contact}
      >
        <BiMessageSquareDetail />
      </a>
    </motion.nav>
  );
}

export default Nav;
