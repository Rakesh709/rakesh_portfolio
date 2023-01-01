import React from 'react'
import './Skills.css';

import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card.jsx';

import Resume from "./resume.pdf";

import {motion} from "framer-motion";

function Skills() {
    //for transition
    const transition = {duration: 1 , type:"spring"}


  return (
        <div className="skills" id="Skills">
            {/* life side */}
            <div className="awesome">
                <span>My</span>
                <span>Skills</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Exercitationem vero, sequi autem, similique sapiente no nisi.</span>
                <a href={Resume} download >
                <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{background:'#C1F5FF'}}></div>
            </div>
            {/* right side */}
            <div className="cards">
                <motion.div 
                    whileInView={{left:"18rem"}}
                    initial={{left:"30rem"}}
                    transition={transition}
                
                style={{left:"25rem"}}>
                        <Card
                        emoji={HeartEmoji}
                        heading={"Programming"}
                        detail={"JavaScript, Java, MySql"}
                        />
                </motion.div>
                <motion.div 
                initial={{left:"-11rem",top:"12rem"}}
                whileInView={{left:"-2rem"}}
                transition={transition}


                style={{top:"12rem",left:"3rem"}}>
                        <Card
                        emoji={Glasses}
                        heading={"Developer"}
                        detail={"Html , Css , Bootstrap, React"}
                        />
                </motion.div>
                <motion.div 
                initial={{ top: "19rem", left: "15rem" }}
                whileInView={{ left: "20rem" }}
                transition={transition}
                
                style={{top:"19rem",left:"19rem"}}>
                        <Card
                        emoji={Humble}
                        heading={"Linux"}
                        detail={"Kali Linux , Ubuntu"}
                        />
                </motion.div>
                <div className="blur s-blur2" style={{background:"var(--purple"}}></div>
            </div>
        </div>
  )
}

export default Skills