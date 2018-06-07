import React from 'react';


const Card = (props)=>{
		return(
			<div className = "card">
				<div className="circle black"><img src={props.src}/></div>
				<h2 className= "all-caps small-text grey-text"><a className="bold-text grey-text small-text">{props.a}</a>{props.h2}</h2>
				<p className = "small-text grey-text">{props.p}</p>
				<button className="blue all-caps small-text">{props.button}</button>
			</div>
		);
	}

export default Card;