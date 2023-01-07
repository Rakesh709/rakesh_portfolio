import React from "react";
import "./Works.css";
import linuxImg from "../../img/linuxImg.jpg"
import awsImg from "../../img/awsImg1.png";
import microsoftImg from "../../img/microsoftImg.png";
import apigeeImg from "../../img/apigeeImg.png"
import canvaImg from "../../img/canvaImg.png";
import { motion } from "framer-motion";

import { themeContext } from "../../Context";
import { useContext } from 'react';

function Works() {
   // context
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;

  return (
    <div className="works" id="Works">
      <div className="awesome">
        <span style={{color:darkMode ? "white" : " "}}>Work in All these</span>
        <span>Software & Tools</span>
        <span>
          In aws i know about EC2,S3 and some more tools.
          <br /> In APIGEE edge, know how to create RESTFUL API,
          <br /> In Microsift office excil, ppt , word.
          <br /> In Linux know about ubuntu.
          <br/> Canva is used for creating website demo.
        </span>
        <button className="button s-button">Hire Me</button>
        <div className="blur s-blur1" style={{ background: "#C1F5FF" }}></div>
      </div>
      {/* right side */}
      <div className="w-right">
        <motion.div 
          initial={{rotate:45}}
          whileInView={{rotate:0}}
          viewport={{margin:"-40px"}}
          transition={{duration:3.5,type:"spring"}}
          className="w-mainCircle">
          <div className="w-secCircle">
            <img src={awsImg} alt="aws" />
          </div>
          <div className="w-secCircle">
            <img src={apigeeImg} alt="apigee" />
          </div>
          <div className="w-secCircle">
            <img src={canvaImg} alt="canva" />
          </div>
          <div className="w-secCircle">
            <img src={linuxImg} alt="linux" />
          </div>
          <div className="w-secCircle">
            <img src={microsoftImg} alt="microsoft" />
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
}

export default Works;
