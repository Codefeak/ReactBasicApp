import React from 'react';


const Card2 = (props)=>{
		return(
			<div className = "card2">
				<div className="img-placeholder"><img src={props.src}/></div>
				<article>
					<h2 className= "align-left all-caps small-text grey-text"><a className="bold-text grey-text small-text">{props.a}</a>{props.h2}</h2>
					<p className = "align-left small-text grey-text">{props.p}</p>
				</article>
			</div>
		);
	}

export default Card2;