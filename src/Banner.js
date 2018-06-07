import React, {Component} from 'react';
import './App.css'

class Banner extends Component{
	render(){
		return(
			<div className = "blue-banner">
				<p className="all-caps small-text">create a <a className="bold-text small-text">powerful </a>solution now!</p>
				<button className="small-text">Get Started</button>
			</div>
			

		);
	}
}

export default Banner;