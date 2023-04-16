import React, {useEffect} from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
import Aos from 'aos'
import "aos/dist/aos.css"



const Services = () => {
  useEffect(() => {
    Aos.init({duration: 1800});
  }, [])
  return (
    <section data-aos="fade-right" id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>Performance Testing</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Proficiency in performance testing tools such as Lighthouse</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Understanding of performance metrics and KPIs.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Knowledge of web protocols and networking (HTTP, HTTPS, TCP/IP, etc.).</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Familiarity with database performance tuning and optimization techniques.</p>
            </li>

          </ul>
        </article>


        <article className='service'>
          <div className='service__head'>
            <h3>Frontend Development</h3>
          </div>
          <ul className='service__list'>
          <li><BiCheck className='service__list-icon'/>
            <p>Testing and debugging cross-browser issues</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Integrating third-party APIs and services.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Building responsive and mobile-first web interfaces.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Developing user-friendly and intuitive web designs and layouts.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Writing clean, efficient, and well-documented code.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>SEO techniques for improved website ranking and visibility.</p>
            </li>
          
          </ul>
        </article>

        <article className='service'>
        <div className='service__head'>

    <h3>Software Quality Assurance</h3>
      </div>
  <ul className='service__list'>
    <li><BiCheck className='service__list-icon'/>
    <p>Expertise in software testing methodologies and tools.</p>
    </li>
    <li><BiCheck className='service__list-icon'/>
    <p>Experience in developing and executing test plans and cases.</p>
    </li>
    <li><BiCheck className='service__list-icon'/>
    <p>Ability to identify, isolate, and track defects throughout the software development life cycle.</p>
    </li>
    <li><BiCheck className='service__list-icon'/>
    <p>Knowledge of software development processes and project management methodologies.</p>
    </li>
    <li><BiCheck className='service__list-icon'/>
    <p>Strong communication and collaboration skills to work with cross-functional teams.</p>
    </li>
  </ul>
</article>
  </div>
</section>


  )
}

export default Services