import React from 'react';
import { Navbar } from 'react-bootstrap';
import NavBar from './indexPage/Navbar.css';
import {Redirect} from 'react-router-dom';
import img from '../images/A2B.png'

function Navbaar() {

    const loginClick = () =>{
        return <Redirect  to="/login/" />
    }

    const marketClick = () =>{
        return <Redirect  to="/newMarket/" />
    }

    const orderClick = () =>{
        return <Redirect  to="/adminOrder/" />
    }

    return (
        <div className="App">
            <div className="Navbar">
                <div className="leftSide">
                    <button className="logo" style={{float:'left'}}>
                        <img src={img} alt="A2B Markets"></img>
                    </button>
                </div>
                <div className="rightSide" style={{float:'right'}}>
                    <button style={{float: 'right',width:'5rem', padding:'5px', margin:'1rem', backgroundColor:'black', border:'hidden', borderRadius:'25px', color:'#FFD100'}} href="#" onClick={loginClick}><strong>LOGOUT</strong></button>
                    <button style={{float: 'right',width:'10rem', padding:'5px', margin:'1rem', backgroundColor:'black', border:'hidden', borderRadius:'25px', color:'#FFD100'}} href="#" onClick={marketClick}><strong>Create new Market</strong></button>
                    <button style={{float: 'right', width:'5rem', padding:'5px', margin:'1rem', backgroundColor:'black', border:'hidden', borderRadius:'25px', color:'#FFD100'}} href="#" onClick={orderClick}><strong>Orders</strong></button>
                </div>
            </div>
        </div>
    )
}

export default Navbaar;