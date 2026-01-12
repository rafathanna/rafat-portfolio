import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Experience from "./components/experience/Experience";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";

import Footer from "./components/footer/Footer";
import FloatingShapes from "./components/common/FloatingShapes";
import CustomCursor from "./components/common/CustomCursor";
import ScrollProgress from "./components/common/ScrollProgress";
import InternationalChat from "./components/common/InternationalChat";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <ScrollProgress />
        <CustomCursor />
        <FloatingShapes />
        <Header />

        <Nav />
        <About />
        <Skills />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <InternationalChat />

        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
