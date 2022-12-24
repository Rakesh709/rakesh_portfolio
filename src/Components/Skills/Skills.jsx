import React from 'react'
import './Skills.css';

import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";

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
                I AM RIGHT SIDE
            </div>
        </div>
  )
}

export default Skills