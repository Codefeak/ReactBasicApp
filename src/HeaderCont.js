import React, {Component} from 'react';
import HeaderImg from './assets/Header-img.png';
import Banner from './Banner';
import './App.css';

class HeaderCont extends Component {
	render(){
		return (
			<div className = "header-contianer">
			<div className = "header">
				<img src = {HeaderImg} id= "header-img" alt="HeaderImg"/>
				<div className ="head-text">
					<p className = "all-caps"><a className="bold-text cursive-text">Powerfully Simple</a> with a
						<a className ="bold-text cursive-text"><br />Squeeky clean</a> design.</p>
					<p className="small-text">Find out how you can offer quick and powerful solutions to your customers now!</p>
					<button className ="small-text blue">Learn More</button>
				</div>
			</div>
				
				<Banner/>
				
			</div>
		)
	}
}

export default HeaderCont;