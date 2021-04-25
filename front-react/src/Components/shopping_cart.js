import React, {useEffect,useState} from 'react';
import react from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Footer from './footer.js'
import './footer.css'
import './shopping_cart.css';
import Navbar from './Navbar.js'

function SignupScreen(props) {
  const arr = {
    "Product" : [["Zinger Burger",422.2],["Nuggets",484]],
    "Subtotal" : [800],
    "Delivery_fee" : ["free"],
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
 
    let products=cat["Product"]
    let arr1=[]


  for(let x=0; x<products.length ; x++)
  {
    console.log(products.length)
   let arr2=[]
   arr2.push( <h2 style={{color:'#FFD100'}}>{products[x][0]}<b style={{color:'black',fontSize:'30px'}}>{products[x][1]}</b></h2>)
   arr2.push(<div style={{float:'left'}}><a href="#"><span  ><i class="fa fa-plus"></i></span></a>1<a href="#"><span  ><i class="fa fa-minus"></i></span></a></div>)
   arr2.push(<br/>)
   arr2.push(<br/>)
   arr2.push(<br/>)
   arr1.push(<div>{arr2}</div>)
     
  }



  return (
    <div className="shopping_container">
             <Navbar/>
        <h3>Your order from Burger Lab</h3>
       <div className="container-1" >
       {
         arr1 
        }
        
        </div>
       
       <div className="container-2">
           
           <div>
               <h4>Subtotal<b>{cat["Subtotal"]}</b></h4>
               <h4>Delivery Fee<b style={{color:'#FFD100'}}>{cat["Delivery_fee"]}</b></h4>
               <h4>Total<b>{cat["Total"]}</b></h4>
               <a href="/add_voucher"  style={{color:'#FFD100'}}><button  >Apply voucher</button></a>
               
           </div>
       </div>
       <a href="/proceed_order"  style={{color:'#FFD100'}}><button>Proceed to checkout</button></a>
       <div >
                <Footer />
            </div>
    </div>
  );
}
export default SignupScreen;
