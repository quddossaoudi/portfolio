import React, {useEffect} from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/worktripp.png'
import IMG2 from '../../assets/robinroom.png'
import IMG3 from '../../assets/rentmycourt.png'
import IMG4 from '../../assets/trainpub.png'
import IMG5 from '../../assets/horsedeal24.png'
import IMG6 from '../../assets/faberling.png'
import Aos from 'aos'
import "aos/dist/aos.css"


const Portfolio = () => {
  useEffect(() => {
    Aos.init({duration: 1500});
  }, [])
  return (
    <section data-aos="fade-down" id='portfolio'>
      <h5>Portfolio</h5>
      <h2>My Work</h2>
      <div className="container portfolio__container" >
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>WorkTripp</h3>
          <div className="portfolio__item-cta">
          {/* <a href="https://github.com/quddossaoudi/quddossaoudi.github.io" className='btn' target='_blank'>Github</a> */}
          <a href="https://worktripp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>Robin Room</h3>
          <div className="portfolio__item-cta">
          {/* <a href="https://github.com/Saoudi7/romeo" className='btn' target='_blank'>Github</a> */}
          <a href="https://robin-room.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>RentMyCourt</h3>
          <div className="portfolio__item-cta">
          {/* <a href="https://github.com/Saoudi7/collegeweb" className='btn' target='_blank'>Github</a> */}
          <a href="https://rentmycourt.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
          <h3>TrainPub</h3>
          <div className="portfolio__item-cta">
          {/* <a href="https://github.com/Saoudi7/zeus" className='btn' target='_blank'>Github</a> */}
          <a href="https://trainpub.ch" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt="" />
          </div>
          <h3>HorseDeal24</h3>
          <div className="portfolio__item-cta">
          {/* <a href="https://github.com" className='btn' target='_blank'>Github</a> */}
          <a href="https://www.horsedeal24.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt="" />
          </div>
          <h3>Faberling</h3>
          <div className="portfolio__item-cta">
          {/* <a href="https://github.com" className='btn' target='_blank'>Github</a> */}
          <a href="https://faberling.com/ch/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio