import React, {useEffect} from 'react'
import './Contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {FaWhatsapp} from 'react-icons/fa'
import Aos from 'aos'
import "aos/dist/aos.css"
const Contact = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
  return (
    <section data-aos="fade-up" id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Sohaybsaoudi2@gmail.com</h5>
            <a href="mailto:Sohaybsaoudi2@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Quddos Saoudi</h5>
            <a href="https://www.linkedin.com/in/quddossaoudi/" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+60 172025343</h5>
            <a href="https://api.whatsapp.com/send?phone=60172025343" target='_blank'>Send a message</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact