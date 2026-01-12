import React, { useState, useEffect, useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Toast from "../common/Toast";
import { useLanguage } from "../../context/LanguageContext";

function Contact() {
  const { t } = useLanguage();
  const form = useRef();

  const ContactData = [
    {
      id: 1,
      icon: <MdOutlineEmail />,
      title: t.contact.email,
      info: "rafathanna15@gmail.com",
      link: "mailto:rafathanna15@gmail.com",
    },
    {
      id: 2,
      icon: <RiMessengerLine />,
      title: t.contact.messenger,
      info: "Rafat Hanna",
      link: "https://m.me/rafat.hanna.925",
    },
    {
      id: 3,
      icon: <BsWhatsapp />,
      title: t.contact.whatsapp,
      info: "01224566350",
      link: "https://api.whatsapp.com/send?phone=201224566350",
    },
  ];

  const [toast, setToast] = useState({
    message: "",
    type: "",
    isVisible: false,
  });
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    emailjs.init("FHtrlHh3AdLnsA_Fa");
  }, []);

  const showToast = (message, type) => {
    setToast({ message, type, isVisible: true });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, isVisible: false }));
    }, 4500);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm("service_yh9tjql", "template_cc2x6hd", form.current)
      .then((result) => {
        showToast(t.contact.form.success, "success");
        e.target.reset();
        setIsSending(false);
      })
      .catch((error) => {
        console.error("EmailJS Full Error:", error);
        let errorMsg = t.contact.form.error;

        if (error.status === 401 || error.status === 403) {
          errorMsg += "Please check your EmailJS Keys (Public Key/Service ID).";
        } else if (error.status === 400) {
          errorMsg += "Check your Template ID or form field names.";
        } else {
          errorMsg += error.text || "Check your internet connection.";
        }

        showToast(errorMsg, "error");
        setIsSending(false);
      });
  };

  return (
    <section id="contact">
      <motion.h5
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t.contact.subtitle}
      </motion.h5>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t.contact.title}
      </motion.h2>

      <div className="container contact_container">
        <motion.div
          className="contact_options"
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {ContactData.map(({ id, icon, title, info, link }, index) => (
            <motion.article
              key={id}
              className="contact_option"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              {icon}
              <h4>{title}</h4>
              <h5 className="text-light">{info}</h5>
              <a href={link} target="_blank" rel="noreferrer">
                {t.contact.send_msg}
              </a>
            </motion.article>
          ))}
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <input
            type="text"
            name="from_name"
            placeholder={t.contact.form.name}
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder={t.contact.form.email}
            required
          />
          <textarea
            placeholder={t.contact.form.msg}
            name="message"
            rows={7}
            required
          ></textarea>
          <motion.button
            type="submit"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSending}
          >
            {isSending ? t.contact.form.sending : t.contact.form.submit}
          </motion.button>
        </motion.form>
      </div>

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={() => setToast((prev) => ({ ...prev, isVisible: false }))}
      />
    </section>
  );
}

export default Contact;
