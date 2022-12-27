import React from 'react'
import "./Works.css";

import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'



function Works() {
  return (
    <div className="works">
        <div className="awesome">
                <span>Work for All these</span>
                <span>Brands & Clients</span>
                <span>Lorem ipsum dolor sit amet consectetur elit.<br/> Exercitationem vero, sequi autem,<br/> similique sapiente no nisi.<br/> Exercitationem vero, sequi autem </span>
                <button className="button s-button">Hire Me</button>
                <div className="blur s-blur1" style={{background:'#C1F5FF'}}></div>
            </div>

    </div>
   
  )
}

export default Works