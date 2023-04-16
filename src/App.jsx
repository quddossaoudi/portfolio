import React, {useEffect, useState} from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import { Testimonials } from './components/testimonial/Testimonials'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import RingLoader from "react-spinners/RingLoader";
import Overlay from './components/overlay/Overlay'
import Content from './components/contentwriting/Content'



const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() =>{
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    }, 8000)
  }, [])

  return (
   
    <>
    <p id='fade-in'>Greetings..</p>
        {
          
            loading ?
            

            <RingLoader color={'#D2691E'} loading={loading}  size={150}  id='loading'/>


            :
            

          <div>
        < Header/>
        < Nav />
        <About/>
        <Experience/>
        <Services/>
        <Portfolio />
        <Content/>
        <Testimonials />
        <Contact/>
        <Footer/>
        
       
        </div> 
      }
    </>
    
  )
}

export default App