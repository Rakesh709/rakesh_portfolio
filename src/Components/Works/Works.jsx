import React from "react";
import "./Works.css";

// import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import javaImg from "../../img/javaImg.png";
import linuxImg from "../../img/linuxImg.jpg"
import awsImg from "../../img/awsImg1.png";
import microsoftImg from "../../img/microsoftImg.png";
import apigeeImg from "../../img/apigeeImg.png"
import canvaImg from "../../img/canvaImg.png";

function Works() {
  return (
    <div className="works">
      <div className="awesome">
        <span>Work in All these</span>
        <span>Software & Tools</span>
        <span>
          Lorem ipsum dolor sit amet consectetur elit.
          <br /> Exercitationem vero, sequi autem,
          <br /> similique sapiente no nisi.
          <br /> Exercitationem vero, sequi autem{" "}
        </span>
        <button className="button s-button">Hire Me</button>
        <div className="blur s-blur1" style={{ background: "#C1F5FF" }}></div>
      </div>
      {/* right side */}
      <div className="w-right">
        <div className="w-mainCircle">
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
        </div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
}

export default Works;
