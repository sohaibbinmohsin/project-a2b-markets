import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

import './login_signup.css';
import Footer from './footer.js'


function LoginScreen(props) {
  
  const [password, setPassword]=useState('')
  const [email_address, setEmailAddress]=useState('')
  

 
  const submitHandler = (e) => {
    e.preventDefault();
   
  };
 

  return (
    <body>
      <header><img src="./img/A2B.png" class="img-fluid" alt="Responsive image" style={{height:'60px'}}></img></header>
       <div className="outer" style={{marginBottom:'400px'}}>
      
       <div className="image-holder"><img src="./img/login.png" class="img-fluid" alt="Responsive image"></img></div>
      
      <div className="form">
      <form onSubmit={submitHandler}>

    
        <ul className="form-container">
          <li>WELCOME</li>
          <li>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="  Enter your email" class="form-control" onChange={(e)=>setEmailAddress(e.target.value)}></input>
          </li>

          <li>
            <label >Login as </label>
            <br/>
            <select name="Choose option" id="Choose Option">
            <option value="Customer">Customer</option>
            <option value="Vendor">Vendor</option>
            <option value="Admin">Admin</option>
            
          </select>

          </li>

          <li> <a href="/code_verify"  style={{color:'#FFD100'}}>Submit!</a></li>
          
          


        </ul>
      </form>
   

      
    </div>
    </div>
    <div class="position-relative">
                <Footer />
            </div>
    
    </body>
   
  );
}
export default LoginScreen;
