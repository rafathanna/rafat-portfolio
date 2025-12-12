import React from 'react'
import CTA from './CTA'
import ME from '../../assets/rafat.jpeg'
import Social from './HeaderSocials'
import './header.css'

function Header() {
  return (
    <header>
      <div className="container header_container">




        <h4>Hello I'm</h4>
        <h1>Rafat Hanna </h1>
        <h4 className="text-light">Frontend Developer</h4>
        <CTA />
        <Social />


        

        <a href="#about" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header