import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    <div className="card">
        <img src={props.emoji} alt="emoji" />
        <span>{props.heading}</span>
        <span>{props.detail}</span>
        <button className="c-button">LEARN MORE</button>
    </div>
  )
}

export default Card