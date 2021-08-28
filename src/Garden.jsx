import React from 'react'
import './Garden.css'


function Garden(props) {
    return (
        <>
        <h2>My Emoji Garden</h2>
        <div key={props.id} className="wrapper">
            {props.jardin.map((elem) => { 
                return (
                <div className="cell" id={elem.id} onClick={() => props.delete(elem.id, props.id)}>{elem.valeur}</div>
            )})}
        </div>
        </>
        )
}



export default Garden