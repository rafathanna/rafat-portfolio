import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsWhatsapp, BsChatDotsFill } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import { FaTelegramPlane, FaViber, FaGithub } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import AVATAR from "../../assets/rafat.jpeg";
import "./internationalChat.css";
import { useLanguage } from "../../context/LanguageContext";

const InternationalChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, t } = useLanguage();

  const chatOptions = [
    {
      id: 1,
      icon: <BsWhatsapp />,
      name: "WhatsApp",
      link: "https://api.whatsapp.com/send?phone=201224566350",
      color: "#25D366",
      status: language === "en" ? "Available" : "متاح",
    },
    {
      id: 2,
      icon: <RiMessengerLine />,
      name: "Messenger",
      link: "https://m.me/rafat.hanna.925",
      color: "#0084FF",
      status: language === "en" ? "Active" : "نشط الآن",
    },
    {
      id: 3,
      icon: <FaTelegramPlane />,
      name: "Telegram",
      link: "https://t.me/rafathanna",
      color: "#0088cc",
      status: language === "en" ? "Online" : "متصل",
    },
    {
      id: 5,
      icon: <FaGithub />,
      name: "GitHub",
      link: "https://github.com/rafathanna",
      color: "#ffffff",
      status: language === "en" ? "Projects" : "مشاريعي",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      y: 50,
      transition: { duration: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 200 },
    },
  };

  return (
    <div
      className={`international-chat-wrapper ${language === "ar" ? "rtl" : ""}`}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-menu glass-premium"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ transformOrigin: "bottom right" }}
          >
            <div className="chat-menu-header-premium">
              <div className="header-info">
                <motion.div
                  className="avatar-wrapper"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <img src={AVATAR} alt="Rafat" className="chat-avatar" />
                  <span className="online-indicator"></span>
                </motion.div>
                <div className="text-info">
                  <h4>{t.header.name}</h4>
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {language === "en" ? "Online for help" : "متصل للمساعدة"}
                  </motion.span>
                </div>
              </div>
              <motion.button
                className="close-chat"
                onClick={() => setIsOpen(false)}
                whileHover={{ rotate: 90, scale: 1.2, color: "#ff4d4d" }}
              >
                <IoClose />
              </motion.button>
            </div>

            <motion.div
              className="chat-welcome-msg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p>
                {language === "en"
                  ? "Hi there! 👋 How can I help you today?"
                  : "أهلاً بك! 👋 كيف يمكنني مساعدتك اليوم؟"}
              </p>
            </motion.div>

            <div className="chat-options-list">
              {chatOptions.map((option) => (
                <motion.a
                  key={option.id}
                  href={option.link}
                  target="_blank"
                  rel="noreferrer"
                  className="chat-option-item-premium"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    x: language === "ar" ? -5 : 5,
                    backgroundColor: "rgba(255,255,255,0.1)",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{ "--option-color": option.color }}
                >
                  <div className="option-main">
                    <span className="option-icon">{option.icon}</span>
                    <div className="option-details">
                      <span className="option-name">{option.name}</span>
                      <span className="option-status">{option.status}</span>
                    </div>
                  </div>
                  <motion.div
                    className="arrow-right"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    {language === "ar" ? "←" : "→"}
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={`chat-toggle-btn ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -10, 0],
          boxShadow: [
            "0 10px 30px rgba(0, 210, 255, 0.4)",
            "0 20px 40px rgba(0, 210, 255, 0.6)",
            "0 10px 30px rgba(0, 210, 255, 0.4)",
          ],
        }}
        transition={{
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {isOpen ? <IoClose /> : <BsChatDotsFill />}
        {!isOpen && (
          <motion.span
            className="pulse-dot"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          ></motion.span>
        )}
      </motion.button>
    </div>
  );
};

export default InternationalChat;
