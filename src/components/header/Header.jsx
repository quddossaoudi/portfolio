import React, { useEffect } from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me_.png'
import HeaderSocials from './HeaderSocials'
import Aos from 'aos'
import "aos/dist/aos.css"


const Header = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
  return (
    <header>
      <div data-aos="fade-down" className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Quddos Saoudi</h1>
        <h5 className="text-light">Full Stack Developer and Content Writer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me" className='me_' />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header