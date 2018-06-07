import React, { Component } from 'react';
import HeaderCont from './HeaderCont';
import Card from './Card';
import Card2 from './Card2';
import Card3 from './Card3';
import ToggleCard from "./ToggleCard";
import Banner from "./Banner";
import LowerSection from "./LowerSection";
import Footer from "./Footer";
import Mobile from "./assets/mobile-alt.svg";
import Desktop from "./assets/desktop.svg";
import Laptop from "./assets/laptop.svg";
import Recycle from "./assets/recycle.svg";
import ImgPlaceholder from "./assets/img-placeholder.png";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <div className = "head-container">
          <HeaderCont/>
        </div>
        <section className = "mid-container">
          <div className="breaker" id="breaker"></div>
          <section className = "section-card">
            <div className = "card-container">
            <Card src={Mobile} button="read more" h2=' responsive' a ='Superbly' p ='Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.'/>
            <Card src={Desktop} button="read more" h2=' responsive' a ='Superbly' p ='Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.'/>
            <Card src={Laptop} button="read more" h2=' responsive' a ='Superbly' p ='Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.'/>
            <Card src={Recycle} button="read more" h2=' responsive' a ='Superbly' p ='Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.'/>
          </div>
          <div className="breaker" id="breaker2"><p className= 'all-caps small-text grey-text'>recent work</p></div>
          </section>
          
          <div id="recent-work">
            <div className = "card2-container">
              
              <Card2 src={ImgPlaceholder} h2 ="blog title" p ='Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.' />
              <Card2 src={ImgPlaceholder} h2 ="blog title" p ='Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.' />
              <Card2 src={ImgPlaceholder} h2 ="blog title" p ='Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.' />
            </div> 
          </div> 
          <div className="col-container">
            <div id ="testimonals">
              <div className="breaker" id="breaker3"><p className= 'all-caps small-text grey-text'>testimonals</p></div>
              <div className="card3-container">
                <Card3 h2="John Smith" p ='Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.'/>
                <Card3 h2="John Smith" p ='Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.'/>
                <Card3 h2="John Smith" p ='Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.'/>
                <Card3 h2="John Smith" p ='Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.'/>
              </div>
            </div>
            <div id ="development">
              <div className="breaker"><p className= 'all-caps small-text grey-text'>Development</p></div>
              <ToggleCard button1="Design" button2="Production" h2="The Design" p ='Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.'/>
            </div>
            <Banner/>
          </div>
        </section>
        <div class="lower-section">
          <LowerSection/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
