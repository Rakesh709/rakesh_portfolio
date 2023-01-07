import React from 'react'
import "./Footer.css";
import Wave from "../../img/wave.png";

import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import YouTube from "@iconscout/react-unicons/icons/uil-youtube";

function Footer() {
  return (
    <div className="footer">
        <img src={Wave} alt="wave"style={{width:"100%"}} />
        <div className="f-content">
            <span>kumar.rakesh1997@outlook.com</span>
            <div className="f-icons">
                <a href="https://www.instagram.com/bucket_flow_/">{<Insta color="white" size="3rem"/>}</a>
                <a href="https://www.linkedin.com/in/rakesh-kumar-6b3228145/">{<LinkedIn color="white" size="3rem"/>}</a>
                <a href="https://github.com/Rakesh709">{<Github color="white" size="3rem"/> }</a>
                <a href="https://www.youtube.com/channel/UCbuj713mNtqbjvXplyJlR_g">{<YouTube color="white" size="3rem"/> }</a>
                
            </div>
        </div>
    </div>
  )
}

export default Footer