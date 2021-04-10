import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

import './login_signup.css';

function SignupScreen(props) {
  const [userName, setUsername]=useState('')
  const [password, setPassword]=useState('')
  const [phone, setPhone]=useState('')
  const [address, setAddress]=useState('')
  
  

 
  const submitHandler = (e) => {
    e.preventDefault();
   
  };
 

  return (
    <body>
      <header><img src="./img/A2B.png" class="img-fluid" alt="Responsive image" style={{height:'60px'}}></img></header>
       <div className="outer">
      
       <div className="image-holder"><img src="https://miro.medium.com/max/1000/0*RHHxKod5FoRBI8Fk.png" class="img-fluid" alt="Responsive image"></img></div>
      
      <div className="form">
      <form onSubmit={submitHandler}>

    
        <ul className="form-container">
          <li>WELCOME</li>
          <li>
            <label>Username</label>
            <br/>
            <input type="text" name="username" placeholder="  Enter Username" class="form-control" onChange={(e)=>setUsername(e.target.value)}/>
          </li>
          
          <li>
            <label for="password">Password</label>
            <br/>
            <input type="password" id="password" name="password" placeholder="  Enter password" class="form-control" onChange={(e)=>setPassword(e.target.value)}/>

          </li>
          <li>
            <label for="phone">Phone Number</label>
            <br/>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" class="form-control" placeholder="  Enter your phone number" onChange={(e)=>setPhone(e.target.value)}/>

          </li>
          <li>
            <label for="address">Address</label>
            <br/>
            <input type="text" id="address" name="address"  placeholder="  Enter your address" class="form-control" onChange={(e)=>setAddress(e.target.value)}/>

          </li>
          
          <li>
            <button type="submit" className="button-primary">SIGNUP</button>
          </li>
          <li>Already have an account?<a href="#" style={{color:'#FFD100'}}>Login</a> here</li>
          


        </ul>
      </form>
   

      
    </div>
    </div>
    
    </body>
    
   
   
  );
}
export default SignupScreen;