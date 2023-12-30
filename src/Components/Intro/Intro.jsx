import React from 'react'
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';

import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import newprofile from '../../img/new-profile.png';

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
                <span>I am a passionate <strong>DevOps enthusiast</strong>, API Developer, and <strong>Frontend Developer</strong> with extensive expertise in web design and development. My commitment to <i> delivering top-notch quality work </i> has been the cornerstone of my professional journey</span>
            </div>
            <Link spy={true} to='contact-form' smooth={true}>
            <button className="button i-button">Hire Me</button>
            </Link>
            <div className="i-icons">
              <a className='github-icon' href="https://github.com/Rakesh709"><img src={Github} alt="github" /></a>
              <a className='linkedin-icon' href="https://www.linkedin.com/in/rakesh-kumar-6b3228145/"><img src={LinkedIn} alt="linkedin" /></a>
              <a className='instgram-icon' href="https://www.instagram.com/bucket_flow_/"> <img src={Instagram} alt="instagram" /></a>
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={newprofile} alt="" />
            <motion.img 
            initial={{left:"-36%"}}
            whileInView={{left:'-24%'}}
            transition={transition}
            src={glassesimoji} alt="" />
            <motion.div 
            initial={{top:"-4%",left:"74%"}}
            whileInView={{left:"68%"}}
            transition={transition}
            style={{top:'-4%',left:'68%'}}
            className='floating-div'
            >

              <FloatingDiv  image={Crown} txt1='Web' txt2='Developer'/>
            </motion.div>
            <motion.div
            initial={{ left: '18rem', top: '18rem' }}
                    whileInView={{ left: '0rem' }}
                    transition={transition}
             style={{top:'18rem',left:'0rem'}}
             className='floating-div'
             >
              <FloatingDiv image={thumbup} txt1='Content' txt2='Creater' />
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
