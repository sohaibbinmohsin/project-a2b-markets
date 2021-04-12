import React from 'react';
import { Navbar } from 'react-bootstrap';
import NavBar from './Navbar.css';
// import {redirect} from 'react-router-dom'
import {Redirect} from 'react-router-dom';

function Navbaar() {

    const loginClick = () =>{
        return <Redirect  to="/login/" />
    }
    return (
        <div className="App">
            <div className="Navbar">
                <div className="leftSide">
                <button className="logo">
                    <img src={"/img/A2B.png"} alt="A2B Markets"></img>
                </button>
                </div>
                <div className="rightSide">
                    <button className="cartIcon" href="#">
                        <i class="fa fa-shopping-cart"></i>
                            {/* <img src="../../../images/cart.png"></img> */}
                    </button>
                    <button className="loginBtn" onClick={loginClick}>LOGIN</button>
                </div>
            </div>
        </div>
    )
}

export default Navbaar;