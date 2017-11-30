import React from 'react'

import Counter from './components/Counter'
import Comments from './components/Comments'

import './style.css'

const Blabber = (props) => (
	<div>
		<p>{props.text}</p>

		<Counter votes={props.votes} />

		<Comments comments={props.comments} />

	</div>
)


export default Blabber