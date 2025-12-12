import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Capture1.PNG";
import IMG2 from "../../assets/portfolio6.jpg";
import IMG3 from "../../assets/Capture.PNG";
import IMG4 from "../../assets/scrnlii.png";
import IMG5 from "../../assets/upi-credit-cards-v1.png";
import IMG6 from "../../assets/community-blood-services.webp";

const portfolioData = [

    {
    id: 2,
    image: IMG2,
    title: "Admin Dashboard",
    github: "https://github.com/rafathanna/Admin-Dashboard",
    demo: "https://rafathanna.github.io/Admin-Dashboard/",
  },
 
  {
    id: 1,
    image: IMG1,
    title: "Online App Store",
    github: "https://github.com/rafathanna/Blue-Store",
    demo: "https://rafathanna.github.io/Blue-Store/",
  },

 {
    id: 3,
    image: IMG3,
    title: "Shadow Generator",
    github: "https://github.com/rafathanna/Shadow-Generator",
    demo: "https://rafathanna.github.io/Shadow-Generator/",
  },

 
 
  {
    id: 4,
    image: IMG4,
    title: "Food Delivery App",
    github: "https://github.com/rafathanna/Resturant-Website",
    demo: "https://rafathanna.github.io/Resturant-Website/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Ecommerce Website",
    github: "https://github.com/rafathanna/Ecommerce-Website",
    demo: "https://ecommerce-website-fe7c7.web.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "blood bank",
    github: "https://github.com/rafathanna/Blood-Bank-system",
    demo: "https://github.com/rafathanna/Blood-Bank-system",
  },
  

];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {portfolioData.map(({ id, image, title, github, demo }) => (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item-img">
              <img  src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
              <a href={github} target="_blank" className="btn" rel="noreferrer">
                Github
              </a>
              <a
                href={demo}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
