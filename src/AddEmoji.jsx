import React from 'react'
import './AddEmoji.css'

function AddEmoji(props) {
    return (
        <button className='button'onClick={() => props.addEmo(props.id)}>Plant an Emoji</button>
    )
}


export default AddEmoji