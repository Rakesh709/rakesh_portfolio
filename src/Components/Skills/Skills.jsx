import React from 'react'
import './Skills.css';

import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card.jsx';

function Skills() {
  return (
        <div className="skills">
            {/* life side */}
            <div className="awesome">
                <span>My</span>
                <span>Skills</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Exercitationem vero, sequi autem, similique sapiente no nisi.</span>
                <button className="button s-button">Download CV</button>
                <div className="blur s-blur1" style={{background:'#BF1FF94'}}></div>
            </div>
            {/* right side */}
            <div className="cards">
                <div style={{left:"25rem"}}>
                        <Card
                        emoji={HeartEmoji}
                        heading={"Design"}
                        detail={"figma,sketch, photoshop,Adobe"}
                        />
                </div>
                <div style={{top:"12rem",left:"3rem"}}>
                        <Card
                        emoji={Glasses}
                        heading={"Developer"}
                        detail={"Html , Css , JavaScript, React"}
                        />
                </div>
                <div style={{top:"19rem",left:"19rem"}}>
                        <Card
                        emoji={Humble}
                        heading={"Linux"}
                        detail={"Kali Linux , Ubuntu"}
                        />
                </div>
            </div>
        </div>
  )
}

export default Skills