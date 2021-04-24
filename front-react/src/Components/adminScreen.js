import react from 'react';
import './adminScreen.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './footer.js';
import Navbaar from './adminNavBar.js';
import Markets from './indexPage/Markets.js';
import Categories from './indexPage/Categories.js';
import CarouselContainer from './indexPage/carouselContainer.js';

function App() {
    return(
        <div>
            <Router>
                <Navbaar />
                <div className="searchBox">
                    <input className="textBox" type="text" placeholder="Enter your address"></input>
                    <button className="searchBtn" >FIND SHOPS NEAR YOU</button>
                </div>
                <button className="btn btn-primary-outline-light" style={{float:'right', marginRight:'5%',  backgroundColor: "#FFD100", borderRadius:'3rem'}}>Edit Slideshow</button>

                <CarouselContainer>
                    {/* <button className="btn btn-primary-outline-light" style={{position:'absolute', zIndex:'10', backgroundColor: "#FFD100", borderRadius:'3rem'}}>Edit Slideshow</button> */}
                </CarouselContainer>
                <Markets />
                <Categories />
                <Footer />
            </Router>
        </div>

    )
}

export default App;