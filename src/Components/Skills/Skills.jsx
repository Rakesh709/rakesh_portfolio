import React from 'react'
import './Skills.css';

import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card.jsx';

import Resume from "./resume.pdf";

function Skills() {
  return (
        <div className="skills">
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
                <div style={{left:"25rem"}}>
                        <Card
                        emoji={HeartEmoji}
                        heading={"Programming"}
                        detail={"JavaScript, Java, MySql"}
                        />
                </div>
                <div style={{top:"12rem",left:"3rem"}}>
                        <Card
                        emoji={Glasses}
                        heading={"Developer"}
                        detail={"Html , Css , Bootstrap, React"}
                        />
                </div>
                <div style={{top:"19rem",left:"19rem"}}>
                        <Card
                        emoji={Humble}
                        heading={"Linux"}
                        detail={"Kali Linux , Ubuntu"}
                        />
                </div>
                <div className="blur s-blur2" style={{background:"var(--purple"}}></div>
            </div>
        </div>
  )
}

export default Skills