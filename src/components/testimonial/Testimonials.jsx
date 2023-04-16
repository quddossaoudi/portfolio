import React, {useEffect} from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpeg'
import AVTR2 from '../../assets/avatar2.jpeg'
import AVTR3 from '../../assets/avatar3.jpeg'
import AVTR4 from '../../assets/avatar4.png'
import Aos from 'aos'
import "aos/dist/aos.css"

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Mr. François Jon Cleau',
    review : ' one of the most humble, well raised and composed people i have ever worked with, his work is highly recommended and someone like him is vital in your team'
  },
  {
    avatar: AVTR2,
    name: 'Mr. Samual Castroie',
    review : 'Quddos have always been humble and hard working during his 2 years at Jarvis C+, consistenly on his laptop coding even on his free time, testing new ideas and softwares, he was a great motivation and role model of consistency for our team'
  },
  {
    avatar: AVTR3,
    name: 'Auntie. Hiba Bourassia',
    review : 'im sorry my english is not that good, he is Highly Intelligent kid, helped my family business grow and prosper with his strategies and insights, i and High Tech Dz team are thankfull for having you, our doors are always open for you and we will be waiting for you to come back,  Thank you my son  '
  },
  {
    avatar: AVTR4,
    name: 'Motaz Djarghon',
    review : 'I have worked closely with Quddos for 6 months during his internship at Womi Group as Management Consultant, He showed great manners and professionalism through out his time with us, met deadlines perfectly and his work is highly excellent, even though we insisted on him continuing with us after his internship he seemed more into software engineering  '
  },
]

export const Testimonials = () => {
  useEffect(() => {
    Aos.init({duration: 1900});
  }, [])
  return (
    <section data-aos="fade-right" id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" modules={[ Pagination,]}
      spaceBetween={40}
      slidesPerView={1}
   
      pagination={{ clickable: true }}
      >
      {
        data.map(({avatar, name, review}, index ) =>  {
          return (
          <SwiperSlide key={index} className='testimonial'>
          <div className='client__avatar'>
            <img src={avatar} />
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
            </SwiperSlide>
            )

        })
      }
       
     </Swiper>
    </section>
  )
}
export default Testimonials