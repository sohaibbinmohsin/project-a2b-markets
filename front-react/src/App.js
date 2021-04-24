// import logo from './logo.svg';
import {React, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
// import {  GlobalStyle } from './GlobalStyle';
import Footer from './Components/footer.js';
import Navbaar from './Components/Navbar.js';
import Markets from './Components/Markets.js';
import Categories from './Components/Categories.js';
import CarouselContainer from './Components/carouselContainer.js';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { getCategories } from '././actions/markets';


function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCategories())
},[dispatch])

  return (
    <div>
    <Router>
      <Navbaar />
      {/* <GlobalStyle /> */}
      <div className="searchBox">
        <input className="textBox" type="text" placeholder="Enter your address"></input>
        <button className="searchBtn" >FIND SHOPS NEAR YOU</button>
      </div>
      <CarouselContainer />
      <Markets />
      <Categories />
      <Footer />
    </Router>
    </div>
  );
}

export default App;
