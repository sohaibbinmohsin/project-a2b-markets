import React from 'react';
import { Navbar } from 'react-bootstrap';
import NavBar from './Navbar.css';

function Navbaar() {
    return (
        <div className="App">
            <div className="Navbar">
                <div className="leftSide">
                <button className="logo">
                    <img src={"../../../images/A2B.png"} alt="A2B Markets"></img>
                </button>
                </div>
                <div className="rightSide">
                    <button className="cartIcon" href="#">
                        <i class="fa fa-shopping-cart"></i>
                            {/* <img src="../../../images/cart.png"></img> */}
                    </button>
                    <button className="loginBtn" href="#">LOGIN</button>
                </div>
            </div>
        </div>
    )
}

export default Navbaar;