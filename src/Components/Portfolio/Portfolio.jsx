import React from 'react';
import "./Portfolio.css";
import {Swiper, SwiperSlide} from 'swiper/react';

import Siderbar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import HOC from '../../img/hoc.png';
import MusicApp from '../../img/musicapp.png';
import 'swiper/css'


function Portfolio() {
  return (
    <div className="portfolio">
        {/* heading */}
        <span>Recent Project</span>
        <span>Portfolio</span>

        {/* slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        
        >
            <SwiperSlide>
                <img src={Siderbar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Portfolio