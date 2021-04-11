import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

import './shopping_cart.css';

function SignupScreen(props) {
 
  
  

 
  const submitHandler = (e) => {
    e.preventDefault();
   
  };
 

  return (
    <div className="shopping_container">
        <h3>Your order from Burger Lab</h3>
       <div className="container-1" >
           
           <div>
               <h2 style={{color:'#FFD100'}}>Zinger Burger<b style={{color:'black',fontSize:'30px'}}>Rs 422.2</b></h2>
               <p><a href="#"><span class="glyphicon glyphicon-minus"></span></a>1<a href="#"><span class="glyphicon glyphicon-plus"></span></a></p>

           </div>
            <br/>
            <br/>
            <br/>
          
       </div>
       <div className="container-2">
           
           <div>
               <h4>Subtotal<b>Rs 422.2</b></h4>
               <h4>Delivery Fee<b style={{color:'#FFD100'}}>Free</b></h4>
               <h4>Total<b>Rs 422.2</b></h4>
               <a href="/add_voucher"  style={{color:'#FFD100'}}><button  >Apply voucher</button></a>
               
           </div>
       </div>
       <a href="/proceed_order"  style={{color:'#FFD100'}}><button>Proceed to checkout</button></a>
    </div>
  );
}
export default SignupScreen;