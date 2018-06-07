import React from 'react';

const LowerSection =(props)=>{
	return(
		<div className="lower-cont">
			<div id = "col1">
				<h2 className="small-text bold-text">About Us</h2>
				<p className="small-text">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.</p>	
				<p className="small-text">123 Street Name</p>
				<p className="small-text">Road Name</p>
				<p className="small-text">London</p>
				<p className="small-text">+44 74139 13807</p>
			</div>
			<div id = "col2">
				<h2 className="small-text" >Latest Tweets</h2>
				<p className="small-text"><a className="small-text">@Jaynesh</a>Just submitted another great item on <a className="small-text">#themeforest</a></p>
				<p className="small-text" >about 3 hours ago</p>
				<p className="small-text"><a className="small-text">@Jaynesh</a>Just submitted another great item on <a className="small-text">#themeforest</a></p>
				<p className="small-text">about 3 hours ago</p>
			</div>	
			<div id = "col3">
				<h2 className="small-text">Latest Posts</h2>
				<p className="small-text">Lorem ipsum dolor sit amet, consectetur adipisci elit,</p>
				<p className="small-text">Lorem ipsum dolor sit amet, consectetur adipisci elit,</p>
				<p className="small-text">Lorem ipsum dolor sit amet, consectetur adipisci elit,</p>
				<p className="small-text">Lorem ipsum dolor sit amet, consectetur adipisci elit,</p>
			</div>
			<div id = "col4">
				<h2 className="small-text">Flicker</h2>
				<div className = "square-cont">
					<div className ="square"></div>
					<div className ="square"></div>
					<div className ="square"></div>
					<div className ="square"></div>
					<div className ="square"></div>
					<div className ="square"></div>
					<div className ="square"></div>
					<div className ="square"></div>
				</div>
			</div>

		</div>

	);
}

export default LowerSection;