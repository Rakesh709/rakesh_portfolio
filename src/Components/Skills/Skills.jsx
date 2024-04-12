import React from 'react'
import './Skills.css';

import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card.jsx';



import rakeshResume from "./Rakesh-Resume.pdf";

import {motion} from "framer-motion";

import { themeContext } from "../../Context";
import { useContext } from 'react';

function Skills() {
    //for transition
    const transition = {duration: 1 , type:"spring"}
     // context
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;



  return (
        <div className="skills" id="Skills">
            {/* life side */}
            <div className="awesome">
                <span style={{color:darkMode ? "white" : " "}} >My</span>
                <span>Skills</span>
                <span className='summary'>
                <p>Proficient in <i>full-stack development</i> using React.js, Python, Java, and Bootstrap, implementing agile methodologies for collaborative efficiency.</p>
                <p>Skilled in Docker, Jenkins, AWS, Git/GitHub, adept in CI/CD setup, API development, and thorough testing with Postman and Selenium.</p>
                <p>Strong problem-solving ability, experienced in RESTful API creation, DevOps practices, and optimizing project performance across diverse technologies.</p>

                </span>
                <a href={rakeshResume} download >
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
                        heading={"Development & Programming"}
                        detail={"React.js,HTML&CSS,Java,Shell scripting"}
                        />
                </motion.div>
                <motion.div 
                initial={{left:"-11rem",top:"12rem"}}
                whileInView={{left:"-2rem"}}
                transition={transition}


                style={{top:"12rem",left:"3rem"}}>
                        <Card
                        emoji={Glasses}
                        heading={"Tools & Technologies:"}
                        detail={"Docker,Jenkins,K8s,AWS,Apigee Edge,Git"}
                        />
                </motion.div>
                <motion.div 
                initial={{ top: "19rem", left: "15rem" }}
                whileInView={{ left: "20rem" }}
                transition={transition}
                
                style={{top:"19rem",left:"19rem"}}>
                        <Card
                        emoji={Humble}
                        heading={"Other Relevant Skills & Knowledge"}
                        detail={"RESTful API Development CI/CD Pipeline Development&Testing(Postman, Datadog) & DevOps Practices"}
                        />
                </motion.div>
                <div className="blur s-blur2" style={{background:"var(--purple"}}></div>
            </div>
        </div>
  )
}

export default Skills