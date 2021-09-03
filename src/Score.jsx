import React from 'react'
import './Score.css'

function Score(props) {
    return(
        <>
        {props.scorelayout.map((elem) => {
            if (elem.state === true) {
                return (
                    <div className="score">{elem.lay} {elem.val}</div>
                )
            }
            })
        
        }
        </>
    )
}



export default Score