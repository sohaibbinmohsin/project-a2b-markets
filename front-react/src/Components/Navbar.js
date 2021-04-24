import React, { useState, useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import NavBar from './Navbar.css';
// import {redirect} from 'react-router-dom'
import {Redirect} from 'react-router-dom';
import {useLocation , useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {getCartItems} from '../actions/shoppingcart'

function Navbaar() {
    const location = useLocation()
    const dispatch = useDispatch()
    const history = useHistory()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

    const viewCart = () =>{ //not working correctly
        dispatch(getCartItems(history))
    }
    const logout = () =>{
        dispatch({type: 'LOGOUT'})
        setUser(null)
        history.push('/')
    }
    useEffect(()=>{
        const token =  user?.token
        setUser(JSON.parse(localStorage.getItem('user')))
    },[location])
    return (
        <div className="App">
            <div className="Navbar">
                <div className="leftSide">
                <a href = "/">
                <button className="logo">
                    <img src={"/img/A2B.png"} alt="A2B Markets"></img>
                </button></a>
                </div>
                <div className="rightSide">
                    <a href = "/shopping_cart">
                    <button className="cartIcon" onClick ={viewCart}>
                        <i class="fa fa-shopping-cart"></i>
                            {/* <img src="../../../images/cart.png"></img> */}
                    </button></a>
                    {
                        user ? (
                            <button className="loginBtn"  onClick={logout}>LOGOUT</button>
                        ):(
                            <a href = "/login"><button className="loginBtn">LOGIN</button></a>
                        )
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Navbaar;
