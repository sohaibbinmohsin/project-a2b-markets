import React, {useEffect,useState} from 'react';
import {useLocation , useHistory} from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux';
import react from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Footer from './footer.js'
import './footer.css'
import Navbar from './Navbar.js'
import './order_details.css'

 
function OrderDetails(props) {
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
//   const location = useLocation()
//   const dispatch = useDispatch()
//   const history = useHistory()
//   console.log("USER IS")
//   console.log(user)
  const arr = {
    "Ordered-from" : ["Second Cup DHA,phase 2"],
    "Order-number" : [800],
    "Delivery_Address" : ["LUMS DHA phase 5"],
    "Products" : [["Zinger Burger",422.2],["Nuggets",484]],
    "Subtotal": 700,
    "delivery-fee": 100,
    "Total":800
}
const [cat,setCat] = react.useState(arr)
const [name,setName] = react.useState("Burger Lab")
const [fst,setFst] = react.useState(false) // have to set to true


if(fst)
{
    const data = {}
    axios.post("http://jsonplaceholder.typicode.com/shopping_cart",data) // api call, url to be chnaged
    .then(res => {
        setCat(res.data)// data needs to rendered in right format
        setName("")
        setFst(false)
    })
    .catch(err => console.log(err))
}
  
  

 
  const submitHandler = (e) => {
    e.preventDefault();
   
  };
  let products=cat["Products"]
  let arr1=[]


for(let x=0; x<products.length ; x++)
{
  console.log(products.length)
 let arr2=[]

 arr2.push( <div>{products[x][0]}<span>PKR{products[x][1]}</span></div>)
 arr1.push(<div>{arr2}</div>)
   
}

 


  return (
    <div className="shopping_container">
             <Navbar/>
        <h3 style={{textAlign:'center'}}>Your order has been confirmed by vendor</h3>
        <h2 style={{textAlign:'center'}}><strong>Order Details</strong></h2>
        <div className="center-box">
            <div className="left">
            <div><strong>Ordered-From:   </strong>      {cat["Ordered-from"]}</div>
            <br></br>
            <div><strong>Ordered-Number:   </strong>      {cat["Order-number"]}</div>
            <br></br>
            <div><strong>Delivery-Address:   </strong>      {cat["Delivery_Address"]}</div>
            <br></br>
            </div>
            
            <div><strong>Products:   </strong> </div>
            <div className="container-1" >
                {
                    arr1 
                    }
            <hr/>
            <br></br>

            <div><strong>Subtotal:   </strong>     <span>PKR. {cat["Subtotal"]}</span> </div>
            <div><strong>Delivery Fee:   </strong>    <span>PKR.{cat["delivery-fee"]}</span></div>
            <div><strong>Total:   </strong>    <span>PKR. {cat["Total"]}</span> </div>


                    
        </div>
        </div>
       <div>
                <Footer />
            </div>
    </div>
  );
}
export default OrderDetails;
