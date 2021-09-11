import React from 'react'
import './Settings.css'

function Settings(props) {
    return(
        <div className="settings">
            <span>Theme: </span>
            <select name="theme" defaultValue="plant" onChange={props.toggle}>
                <option value="">Choisir thème</option>
                <option value="plant">Plants</option>
                <option value="human">Human</option>
                <option value="sea">Sea</option>
            </select>
            <span>
                Growth speed (seconds): <input onChange={props.growth}/>
            </span>
        </div>
    )
}



export default Settings