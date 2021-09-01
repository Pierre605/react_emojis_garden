import React from 'react'
import './Score.css'

function Score(props) {
    return(
        <div className="score">🌱: {props.scoreplant}<span></span> 🙂: {props.scoreh} <span></span>🐟: {props.scoresea}</div>
    )
}



export default Score