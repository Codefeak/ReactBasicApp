import React from 'react';


const Card3 = (props)=>{
	return(
		<div className = "card3">
			<h2 className= "all-caps small-text grey-text"><a className="bold-text grey-text small-text">{props.a}</a>{props.h2}</h2>
			<p className = "small-text grey-text">{props.p}</p>
		</div>
	);
}

export default Card3;