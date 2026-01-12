import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";




function HeaderSocials() {
  return (
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/rafat-hanna-03b661246/" target='_blank'><FaLinkedin /></a>
            <a href="https://github.com/rafathanna" target='_blank'><FaGithub /></a>
    
        </div>
  )
}

export default HeaderSocials