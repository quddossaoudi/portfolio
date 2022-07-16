import React, {useEffect} from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1_.png'
import IMG2 from '../../assets/portfolio_2.png'
import IMG3 from '../../assets/portfolio_3.png'
import IMG4 from '../../assets/portfolio_4.png'
import IMG5 from '../../assets/portfolio_5.png'
import IMG6 from '../../assets/potfolio_6.png'
import Aos from 'aos'
import "aos/dist/aos.css"


const Portfolio = () => {
  useEffect(() => {
    Aos.init({duration: 1500});
  }, [])
  return (
    <section data-aos="fade-down" id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/quddossaoudi/quddossaoudi.github.io" className='btn' target='_blank'>Github</a>
          <a href="https://quddossaoudi.github.io" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Saoudi7/romeo" className='btn' target='_blank'>Github</a>
          <a href="https://italianbarbershop.netlify.app" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Saoudi7/collegeweb" className='btn' target='_blank'>Github</a>
          <a href="https://xypoqs.netlify.app" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Saoudi7/zeus" className='btn' target='_blank'>Github</a>
          <a href="https://gamingproducts.netlify.app" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio