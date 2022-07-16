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
            <h3>Marketing</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Implemented SEO and SEM Strategies for 3+ companies.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Managed Meta Ad campaigns throughout different platforms.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Implemented top level email flows and attractive designs.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Brought in new clients successfully on the daily basis.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Developed strategies that provided long term advantages.</p>
            </li>
          </ul>
        </article>


        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Front end developement for over 60 Websites.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Back end developement for more than 10 Websites.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>React.js, Css, HTML, Javascript and PHP expert.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Implemented landing pages for multiple Websites.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Assessed UX and UI designs for technical feasibility.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Content Writer</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Worked with the team to excute content strategies.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Preformed well with project requirements and deadlines.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Created well-researched and stimulating content.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Researched 200+ SEO statistics and provided unique content.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Researched appropriate markets and industries for ideas.</p>
            </li>
          </ul>
        </article>
       

      </div>
    </section>
  )
}

export default Services