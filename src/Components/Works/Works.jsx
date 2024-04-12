import React from "react";
import "./Works.css";
import linuxImg from "../../img/linuxImg.jpg"
import awsImg from "../../img/awsImg1.png";

import apigeeImg from "../../img/apigeeImg.png"

import { motion } from "framer-motion";

import docker from "../../img/docker.png";
import kubernates from "../../img/Kubernetes.png";

import { themeContext } from "../../Context";
import { useContext } from 'react';
import { Link } from "react-scroll";

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
          In aws i know about EC2,S3 and more tools.
          <br /> In APIGEE edge, hands-on expertise in APIGEE Edge,
          <br /> Robust understanding of containerization using Docker.
          <br /> Comprehensive working knowledge of Linux.
          <br/> Proficient in Kubernetes, the industry-leading container orchestration tool.
        </span>
        <Link spy={true} to='contact-form' smooth={true}>
        <button className="button s-button">Hire Me</button>
        </Link>
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
            <img src={kubernates} alt="kubernates" />
          </div>
          <div className="w-secCircle">
            <img src={linuxImg} alt="linux" />
          </div>
          <div className="w-secCircle">
            <img src={docker} alt="docker" />
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
}

export default Works;
