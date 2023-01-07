import React from 'react'
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

import { themeContext } from "../../Context";
import { useContext } from 'react';


import {motion} from "framer-motion";

import { Link } from "react-scroll";


function Intro() {

  const transition = {duration: 2 , type:"spring"}

   // context
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;


  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
            
                <span style={{color:darkMode ? "white" : " "}}>hi! I Am</span>
                <span>Rakesh Kumar</span>
                <span>Front end Developer with high level of experience i web designing and development, producting the quality work</span>
            </div>
            <Link spy={true} to='contact-form' smooth={true}>
            <button className="button i-button">Hire Me</button>
            </Link>
            <div className="i-icons">
              <a href="https://github.com/Rakesh709"><img src={Github} alt="github" /></a>
              <a href="https://www.linkedin.com/in/rakesh-kumar-6b3228145/"><img src={LinkedIn} alt="linkedin" /></a>
              <a href="https://www.instagram.com/"> <img src={Instagram} alt="instagram" /></a>
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <motion.img 
            initial={{left:"-36%"}}
            whileInView={{left:'-24%'}}
            transition={transition}
            src={glassesimoji} alt="" />
            <motion.div 
            initial={{top:"-4%",left:"74%"}}
            whileInView={{left:"68%"}}
            transition={transition}
            style={{top:'-4%',left:'68%'}}>
              <FloatingDiv  image={Crown} txt1='Web' txt2='Developer'/>
            </motion.div>
            <motion.div
            initial={{ left: '18rem', top: '18rem' }}
                    whileInView={{ left: '0rem' }}
                    transition={transition}
             style={{top:'18rem',left:'0rem'}}>
              <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
            </motion.div>
            {/* blur divs */}
            <div className="blur" style={{background:'rgb(238,210,255)'}}></div>
            <div className="blur" style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',
            left:'-9rem'}}></div>
        </div>
    </div>
  )
}

export default Intro
