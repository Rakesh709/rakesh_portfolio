import React from "react";
import "./Works.css";

import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

function Works() {
  return (
    <div className="works">
      <div className="awesome">
        <span>Work for All these</span>
        <span>Brands & Clients</span>
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
            <img src={Upwork} alt="upwork" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="fiver" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="Amazon" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="Shopify" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="Facebook" />
          </div>
        </div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
}

export default Works;
