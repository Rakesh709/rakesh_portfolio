import React from 'react'
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';



function Intro() {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>hy! I Am</span>
                <span>Rakesh Kumar</span>
                <span>Front end Developer with high level of experience i web designing and development, producting the quality work</span>
            </div>
            <button className="button i-button">Hire Me</button>
            <div className="i-icons">
              <a href="https://github.com/Rakesh709"><img src={Github} alt="github" /></a>
              <a href="https://www.linkedin.com/in/rakesh-kumar-6b3228145/"><img src={LinkedIn} alt="linkedin" /></a>
              <a href="https://www.instagram.com/"> <img src={Instagram} alt="instagram" /></a>
            </div>
        </div>
        <div className="i-right">
            i am right side
        </div>
    </div>
  )
}

export default Intro
