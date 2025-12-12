import React from "react";
import "./skills.css";
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
const SkillsData = [
    { id: 0, image: Html, title: "Html 5", disc: "html5 semantic structure" },
  { id: 1, image: Css, title: "CSS3", disc: "Responsive layouts & styling" },
  {
    id: 2,
    image: Tailwind,
    title: "TailwindCSS",
    disc: "Rapid UI development",
  },
  { id: 3, image: BsBootstrap, title: "Bootsrap", disc: "Rapid UI development" },
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

function Skills() {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container container_skills">
        {SkillsData.map(({ id, image, title, disc }) => (
          <article key={id} className="card_skill" data-aos="fade-up">
            <div className="icon">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <h4>{title}</h4>
              <p className="text-light">{disc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
