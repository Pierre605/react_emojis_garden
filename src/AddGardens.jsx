import React from 'react'
import './AddGardens.css'

function AddGardens(props) {
    return (
        <div>
        <button className="button2" onClick={props.addGarden}>Add Garden</button>
        </div>
    )
}



export default AddGardens