import React from 'react';

const ToggleCard = (props)=>{
	return (
		<div className ="toggle-container">
			<button className='toggle-btn active all-caps bold-text small-text grey-text'>{props.button1}</button>
			<button className='toggle-btn all-caps bold-text small-text grey-text'>{props.button2}</button>
			<div className="toggle-cont design">
				<h2 className ="capitalize small-text grey-text">{props.h2}</h2>
				<p className = "small-text grey-text">{props.p}</p>
				<p className = "small-text grey-text">{props.p}</p>
			</div>
			<div className ="toggle-cont production">
				<h2 className ="capitalize small-text grey-text">{props.h2}</h2>
				<p className = "small-text grey-text">{props.p}</p>
				<p className = "small-text grey-text">{props.p}</p>
			</div>
		</div>

	);
}

export default ToggleCard;