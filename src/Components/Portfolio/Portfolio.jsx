import React from 'react';
import "./Portfolio.css";
import {Swiper, SwiperSlide} from 'swiper/react';

// import Siderbar from '../../img/sidebar.png';
// import Ecommerce from '../../img/ecommerce.png';
// import HOC from '../../img/hoc.png';
// import MusicApp from '../../img/musicapp.png';
import ProfileReact from "../../img/Pproject.png";
import OrderSum from "../../img/orderSumarry.png";
import Dice from "../../img/Dice.png";
import QR from "../../img/QRCode.png";



import 'swiper/css'

import { themeContext } from "../../Context";
import { useContext } from 'react';


function Portfolio() {
     // context
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="Portfolio">
        {/* heading */}
        <span style={{color:darkMode ? "white" : " "}}>Recent Project</span>
        <span>Portfolio</span>

        {/* slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        
        >
            <SwiperSlide>
                <img src={ProfileReact} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={OrderSum} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Dice} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={QR} alt="" />
            </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Portfolio