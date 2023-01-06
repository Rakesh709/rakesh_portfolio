import React from 'react'
import './FloatingDiv.css';

import { themeContext } from "../../Context";
import { useContext } from 'react';
 
function FloatingDiv(props) {

  // context
 const theme = useContext(themeContext);
 const darkMode = theme.state.darkMode;
  return (
    <div className="floatingdiv" >
        <img src={props.image} alt="" />
        <span >
           {props.txt1}
            <br />
            {props.txt2}
        </span>
    </div>
  )
}

export default FloatingDiv
