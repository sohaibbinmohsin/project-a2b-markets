import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

import './login_signup.css';


function LoginScreen(props) {
  
  const [password, setPassword]=useState('')
  const [email_address, setEmailAddress]=useState('')
  const [confirmPassword, setConfirmPassword]=useState('')
  
  const [code, setCode]=useState('')
 
  const submitHandler = (e) => {
    e.preventDefault();
   
  };
 

  return (
    <body>
      <header><img src="./img/A2B.png" class="img-fluid" alt="Responsive image" style={{height:'60px'}}></img></header>
       <div className="outer">
      
       <div className="image-holder"><img src="./img/login.png" class="img-fluid" alt="Responsive image"></img></div>
      
      <div className="form">
      <form onSubmit={submitHandler}>

    
        <ul className="form-container">
          <li>WELCOME</li>
          <li>
            <label for="vode">Verification Code</label>
            <br/>
            <input type="code" id="code" name="code" placeholder="  Enter verification code" class="form-control" onChange={(e)=>setCode(e.target.value)}/>

          </li>
          <li>
            <label for="password">Password</label>
            <br/>
            <input type="password" id="password" name="password" placeholder="  Enter password" class="form-control" onChange={(e)=>setPassword(e.target.value)}/>

          </li>
          <li>
            <label for="confirm-password"> Confirm Password</label>
            <br/>
            <input type="password" id="confirm-password" name="confirm-password" placeholder="  Enter your password again" class="form-control" onChange={(e)=>setConfirmPassword(e.target.value)}/>

          </li>

          <button type="submit" className="button-primary">RESET</button>
          
          


        </ul>
      </form>
   

      
    </div>
    </div>
    
    </body>
   
  );
}
export default LoginScreen;
