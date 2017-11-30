import React from 'react'

import './style.css'


const Button = (props) =>
<button onClick={props.handleOnClick} className="my-button">{props.text}</button>


export default Button
