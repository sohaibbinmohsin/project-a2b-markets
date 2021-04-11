// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import {  GlobalStyle } from './GlobalStyle';
import Footer from './Components/footer.js';
import Navbaar from './Components/indexPage/Navbar.js';
import Markets from './Components/indexPage/Markets';
import Categories from './Components/indexPage/Categories';
import CarouselContainer from './Components/indexPage/carouselContainer.js';


function App() {
  return (
    <div>
      <div className="text-center text-justify font-weight-bold">
        Routing Location Avaiable
        <br />
        <a href="/location">Location Component</a>
      </div>
    <Router>
      <Navbaar />
      <GlobalStyle />
      <div className="searchBox">
        <input className="textBox" type="text" placeholder="Enter your address"></input>
          {/* <i className="locationIcon" class="fa fa-location" ></i>  */}
        <button className="searchBtn" >FIND SHOPS NEAR YOU</button>
      </div>
      <CarouselContainer />
      <Markets />
      <Categories />
              {/* <Footer /> */}
    </Router>
    </div>
  );
}

export default App;
