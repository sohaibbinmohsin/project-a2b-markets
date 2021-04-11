import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

import './shopping_cart.css';
import Footer from './footer.js'
import './footer.css'

function SignupScreen(props) {
 
    const [deliveryAddress, setDeliveryAddress]=useState('')
    const [paymentMethod, setPaymentMethod]=useState('')
  

 
  const submitHandler = (e) => {
    e.preventDefault();
   
  };
 

  return (
    <div className="shopping_container">
        <h3>Your order from Burger Lab</h3>
       <div className="container-1">
           
           <div>
           <li>
            <label>Delivery Address</label>
            <br/>
            <input type="text" name="Address" class="form-control" placeholder="  Enter Your delivery address" onChange={(e)=>setDeliveryAddress(e.target.value)}/>
          </li>
          
          <li>
            <label >Payment Method </label>
            <br/>
            <select name="Choose option" id="Choose Option">
            <option value="Cash"  onChange={(e)=>setPaymentMethod(e.target.value)}>Cash on Delivery</option>
            
            
          </select>

          </li>
           </div>
       </div>
       <div className="container-2">
           
           <div>
               <h2>Order Summary</h2>
               <h2 style={{color:'#FFD100'}}>Zinger Burger<b style={{color:'black',fontSize:'30px'}}>1</b></h2>
               <h4>Subtotal<b>Rs 422.2</b></h4>
               <h4>Delivery Fee<b style={{color:'#FFD100'}}>Free</b></h4>
               <h4>Total<b>Rs 422.2</b></h4>
               
               
           </div>
       </div>
       <a href="/proceed_order"  style={{color:'#FFD100'}}><button>Place Order</button></a>
       <div >
                <Footer />
            </div>
    </div>
  );
}
export default SignupScreen;
