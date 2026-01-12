import React, { useRef } from "react";
import "./portfolio.css";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import IMG1 from "../../assets/Capture1.PNG";
import IMG2 from "../../assets/portfolio6.jpg";
import IMG3 from "../../assets/Capture.PNG";
import IMG4 from "../../assets/scrnlii.png";
import IMG5 from "../../assets/upi-credit-cards-v1.png";
import IMG6 from "../../assets/community-blood-services.webp";
import CHAT_PREVIEW from "../../assets/chat-preview.png";
import INVEN_PREVIEW from "../../assets/inventory-preview.png";
import EDU_PREVIEW from "../../assets/education-preview.png";
import SOFT_PREVIEW from "../../assets/software-preview.png";
import LEARN_PREVIEW from "../../assets/learning-preview.png";
import { useLanguage } from "../../context/LanguageContext";

const portfolioData = [
  {
    id: 9,
    image: EDU_PREVIEW,
    title: "Educational Platform Pro",
    github: "https://github.com/rafathanna/-Educational-platform",
    demo: "https://educational-platform-sepia.vercel.app/",
    tech: ["React", "Firebase", "Redux", "Material UI"],
  },
  {
    id: 1,
    image: IMG2,
    title: "Admin Dashboard Pro",
    github: "https://github.com/rafathanna/Admin-Dashboard",
    demo: "https://rafathanna.github.io/Admin-Dashboard/",
    tech: ["React", "Vite", "RTK Query", "Material UI"],
  },
  {
    id: 7,
    image: CHAT_PREVIEW,
    title: "International Chat System",
    github: "https://github.com/rafathanna/rafat-portfolio",
    demo: "#contact",
    tech: ["React", "Framer Motion", "Socket.IO", "Integration"],
  },
  {
    id: 2,
    image: IMG1,
    title: "Blue Store (Ecommerce)",
    github: "https://github.com/rafathanna/Blue-Store",
    demo: "https://rafathanna.github.io/Blue-Store/",
    tech: ["React", "Context API", "Axios", "CSS Grid"],
  },
  {
    id: 8,
    image: INVEN_PREVIEW,
    title: "Invento Management Pro",
    github: "https://github.com/rafathanna/invento-app",
    demo: "https://rafathanna.github.io/invento-app/",
    tech: ["TypeScript", "React", "Node.js", "Firebase"],
  },
  {
    id: 4,
    image: IMG4,
    title: "Food Delivery Platform",
    github: "https://github.com/rafathanna/Resturant-Website",
    demo: "https://rafathanna.github.io/Resturant-Website/",
    tech: ["React", "Vite", "Tailwind CSS", "AOS"],
  },
  {
    id: 5,
    image: IMG5,
    title: "Fashion Ecommerce",
    github: "https://github.com/rafathanna/Ecommerce-Website",
    demo: "https://ecommerce-website-fe7c7.web.app/",
    tech: ["HTML5", "CSS3", "JavaScript", "Stripe"],
  },
  {
    id: 10,
    image: SOFT_PREVIEW,
    title: "Software Tech Landing",
    github: "https://github.com/rafathanna/software-tech-landing",
    demo: "https://github.com/rafathanna/software-tech-landing",
    tech: ["React", "Framer Motion", "Vite", "Premium UI"],
  },
  {
    id: 6,
    image: IMG6,
    title: "Blood Bank System",
    github: "https://github.com/rafathanna/Blood-Bank-system",
    demo: "https://github.com/rafathanna/Blood-Bank-system",
    tech: ["PHP", "MySQL", "Bootstrap", "jQuery"],
  },
  {
    id: 3,
    image: IMG3,
    title: "Creative Shadow Generator",
    github: "https://github.com/rafathanna/Shadow-Generator",
    demo: "https://rafathanna.github.io/Shadow-Generator/",
    tech: ["JavaScript", "HTML5", "CSS3", "DOM"],
  },
  {
    id: 11,
    image: LEARN_PREVIEW,
    title: "Courses Learning Website",
    github: "https://github.com/rafathanna/Courses-website",
    demo: "https://github.com/rafathanna/Courses-website",
    tech: ["Bootstrap 5", "HTML5", "CSS3", "Responsive"],
  },
];

const TiltCard = ({ item }) => {
  const { t } = useLanguage();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["18deg", "-18deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-18deg", "18deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      className="portfolio_item"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div
        className="portfolio_item-img"
        style={{ transform: "translateZ(50px)" }}
      >
        <img src={item.image} alt={item.title} />
      </div>
      <h3 style={{ transform: "translateZ(60px)" }}>{item.title}</h3>

      <div
        className="portfolio_item-tech"
        style={{ transform: "translateZ(40px)" }}
      >
        {item.tech.map((t, index) => (
          <span key={index} className="tech_badge">
            {t}
          </span>
        ))}
      </div>

      <div
        className="portfolio_item-cta"
        style={{ transform: "translateZ(70px)" }}
      >
        <a href={item.github} target="_blank" className="btn" rel="noreferrer">
          {t.portfolio.github}
        </a>
        <a
          href={item.demo}
          target="_blank"
          className="btn btn-primary"
          rel="noreferrer"
        >
          {t.portfolio.demo}
        </a>
      </div>

      {/* Light Reflection Effect */}
      <motion.div
        className="card-glow"
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([x, y]) =>
              `radial-gradient(circle at ${50 + x * 100}% ${
                50 + y * 100
              }%, rgba(0, 210, 255, 0.15) 0%, transparent 80%)`
          ),
        }}
      />
    </motion.article>
  );
};

function Portfolio() {
  const { t } = useLanguage();
  return (
    <section id="portfolio">
      <motion.h5
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t.portfolio.subtitle}
      </motion.h5>
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t.portfolio.title}
      </motion.h2>

      <motion.div
        className="container portfolio_container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ perspective: "1200px" }}
      >
        {portfolioData.map((item) => (
          <TiltCard key={item.id} item={item} />
        ))}
      </motion.div>
    </section>
  );
}

export default Portfolio;
