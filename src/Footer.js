import React from 'react';
import twitter from './assets/twitter-square.svg';
import facebook from './assets/facebook-square.svg';
import vimeo from './assets/vimeo-v.svg';
import slack from './assets/slack.svg';
import googlePlus from './assets/google-plus-square.svg';
import pinterest from './assets/pinterest-square.svg';
import upArrow from './assets/arrow-up.svg'

const Footer=()=>{
	return(
		<footer>
			<p className="all-caps small-text">Copyright @ 2003-2012 ventus inc. all right reserved.</p>
			<div className="lnk-logo">
				<img src={twitter} alt="" />
				<img src={facebook} alt=""/>
				<img src={vimeo} alt=""/>
				<img src={slack} alt=""/>
				<img src={googlePlus} alt=""/>
				<img src={pinterest} alt=""/>
			</div>
			<div className="square arrow">
				<img src={upArrow} alt="" />
			</div>
		</footer>
	);
}

export default Footer;