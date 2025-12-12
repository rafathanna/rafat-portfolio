import React from 'react'
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";

import './services.css'


function Services() {
  return (
  <section id='services'>
  <h5>What I Offer</h5>
  <h2>Services</h2>

  <div className="container container_services">

    <article className="card">
      <MdDesignServices className='icon' />
      <h3>Web Design</h3>
      <p className='text-light'>
        I create modern, responsive, and visually appealing UI designs focused on user experience, 
        accessibility, and clean layout structure to ensure your brand stands out.
      </p>
    </article>

    <article className="card">
      <IoIosRocket className='icon' />
      <h3>Fast Performance</h3>
      <p className='text-light'>
        I build highly optimized web interfaces with fast loading times, smooth interactions, 
        and best performance practices using React, Vite, and modern front-end tools.
      </p>
    </article>

    <article className="card">
      <FaCode className='icon' />
      <h3>Clean Code</h3>
      <p className='text-light'>
        I write clean, maintainable, and scalable code following industry standards, 
        reusable components, and efficient architecture for long-term project stability.
      </p>
    </article>

  </div>
</section>

  )
}

export default Services