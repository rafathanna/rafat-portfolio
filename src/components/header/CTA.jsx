import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const CTA = () => {
  const { t } = useLanguage();
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/1RauRm6d8hxiFa2T0Brvu7yF4Rga4ry6E/view?usp=drive_link"
        download
        className="btn"
      >
        {t.header.cta_cv}
      </a>
      <a href="#contact" className="btn btn-primary">
        {t.header.cta_talk}
      </a>
    </div>
  );
};

export default CTA;
