import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

import './login_signup.css';


function LoginScreen(props) {
  const [userName, setUsername]=useState('')
  const [password, setPassword]=useState('')
  

 
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
            <label>Username</label>
            <br/>
            <input type="text" name="username" class="form-control" placeholder="  Enter Username" onChange={(e)=>setUsername(e.target.value)}/>
          </li>
          
          <li>
            <label for="password">Password</label>
            <br/>
            <input type="password" id="password" name="password" class="form-control" placeholder="  Enter Password" onChange={(e)=>setPassword(e.target.value)}/>

          </li>
          <li> <a href="/reset_password"  style={{color:'#FFD100'}}>Forgot Password?</a></li>
          <li>
            <label >Login as </label>
            <br/>
            <select name="Choose option" id="Choose Option">
            <option value="Customer">Customer</option>
            <option value="Vendor">Vendor</option>
            <option value="Admin">Admin</option>
            
          </select>

          </li>

            <button type="submit" className="button-primary">LOGIN</button>
          <li>Don't have an account? <a href="/SignUp"  style={{color:'#FFD100'}}>SignUp</a> here</li>
          


        </ul>
      </form>
   

      
    </div>
    </div>
    
    </body>
   
  );
}
export default LoginScreen;
