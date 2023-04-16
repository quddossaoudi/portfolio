import React, {useEffect} from 'react'
import "./About.css"
import ME from '../../assets/meme.jpg'
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
import Aos from 'aos'
import "aos/dist/aos.css"



const About = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])

  return (
    <section data-Aos="fade-up" id='about'>
        <h5 >Get To Know</h5>
        <h2>About Me</h2>

         <div className="container about__container">
             <div className="about__me">
                 <div className="about__me-image">
                     <img src={ME} alt="About Image" />
                 </div>
             </div>
             <div className='about__content'>
                 <div className="about__cards">
                     <article className="about__card">
                         <FaAward className='about__icon'/>
                         <h5>Experience</h5>
                         <small>1+ Years Working</small>
                     </article>
                     <article className="about__card">
                         <FiUsers className='about__icon'/>
                         <h5>Clients</h5>
                         <small>12+ Worldwide</small>
                     </article>
                     <article className="about__card">
                         <VscFolderLibrary className='about__icon'/>
                         <h5>Projects</h5>
                         <small>10+ Completed</small>
                     </article>
                 </div>

                 <p>A Frontend Developer and Software Engineer, began my journey with basic coding and programming skills on a slow, outdated laptop, to where i consider today a decent accomplishment in my life.</p>
                 <a href="#contact" className='btn btn-primary'>Let's Talk</a>
             </div>
         </div>
    </section>
  )
}


export default About