import React from 'react'
import './AddEmoji.css'

function AddEmoji(props) {
    return (
        <button className='button'onClick={() => props.addEmo(props.key)}>Plant an Emoji</button>
    )
}


export default AddEmoji