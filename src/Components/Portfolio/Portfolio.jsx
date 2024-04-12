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
import netflix from "../../img/netflix.png";
import gitops from "../../img/gitops.png";
import fargate from "../../img/fargate.png";



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
        navigation 
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 90,
          stretch: 20,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        slidesPerView={2}
        centeredSlides
        style={{ height: "500px" }}
        // effect={'coverflow'}
        // depth={50}
        // modifier={1}
        // rotate={50}
        // scale={1}
        slideShadows={true}
         stretch={1}
        spaceBetween={5}
        // slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        
        >
            
            <SwiperSlide>
                <img src={netflix} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={gitops} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={fargate} alt="" />
            </SwiperSlide>
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