import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    <div className="card">
        <img src={props.emoji} alt="emoji" />
        <span>{props.heading}</span>
        <span>{props.detail}</span>
        <a href="">
        <button className="c-button">LEARN MORE</button>
        </a>
        
    </div>
  )
}

export default Card