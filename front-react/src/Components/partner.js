import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer.js'
import './footer.css'


import './login_signup.css';


function PartnerScreen(props) {
  const [businessName, setBusinessName]=useState('')
  const [firstName,setFirstName]=useState('')
  const [lastName, setLastName]=useState('')
  const [shopLocation, setShopLocation]=useState('')
  const [contactNumber, setContactNumber]=useState('')
  const [Email, setEmail]=useState('')
  
 
  const submitHandler = (e) => {
    e.preventDefault();
   
  };
 

  return (
    <body>
      <header><img src="./img/A2B.png" class="img-fluid" alt="Responsive image" style={{height:'60px'}}></img></header>
       <div className="outer">
      
      <div className="image-holder"><img src="./img/partner.jpg" class="img-fluid" alt="Responsive image"></img></div>
      
      <div className="form">
      <form onSubmit={submitHandler}>

    
        <ul className="form-container">
          <li>BECOME OUR PARTNER</li>
          <li>
            <br/>
            <input type="text" name="businessName" class="form-control" placeholder="  Business Name" onChange={(e)=>setBusinessName(e.target.value)}/>
          </li>
          <li>
            <br/>
            <input type="text" name="firstName" class="form-control" placeholder="  Owner's First Name" onChange={(e)=>setFirstName(e.target.value)}/>
          </li>
          <li>
            <br/>
            <input type="text" name="lastName" class="form-control" placeholder="  Owner's Last Name" onChange={(e)=>setLastName(e.target.value)}/>
          </li>
          <li>
            
            <br/>
            <input type="text" id="address" name="address"  placeholder="  Location of your shop" class="form-control" onChange={(e)=>setShopLocation(e.target.value)}/>

          </li>
          <li>
           
            <br/>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" class="form-control" placeholder="  Contact Number" onChange={(e)=>setContactNumber(e.target.value)}/>

          </li>
          
          
          <li>
           
            <br/>
            <input type="email" id="email" name="email" class="form-control" placeholder="  Your Email Address" onChange={(e)=>setEmail(e.target.value)}/>

          </li>

            <button type="submit" className="button-primary">SUBMIT</button>
          <p style={{margin:'10px'}}>By clicking ‘Submit’, I hereby acknowledge and agree
that I have read and understood Deliveroo Privacy Policy. </p>
          


        </ul>
      </form>
      

      
    </div>
    </div>
    <div className="container1">
          <h3>How does it work?</h3>
          <h4>Get your business on A2BMarkets in three steps.</h4>
          <div className="table-points">
              <div><img src="./img/Group 8.png" class="img-fluid" alt="Responsive image"></img>
              <h3>SignUp</h3>
              <p>Partner with A2BMarkets and tell us about your business</p>
              </div>
              <div><img src="./img/Group 9.png" class="img-fluid" alt="Responsive image" ></img>
              <p></p>
              <h3>Start receiving orders </h3>
              <p>
              Once your account is activated,customers can browse your menu and place orders.
              </p>
              </div>
              <div><img src="./img/Group 10.png" class="img-fluid" alt="Responsive image" ></img>
              <h3>Self Deliver</h3>
              <p>
              We connect you with customers and you can deliver them toincrease revenue.
              </p>
              
              </div>
          <Footer/>
              
          </div>
          
          
      </div>
     
   
    
    </body>
   
  );
}
export default PartnerScreen;
