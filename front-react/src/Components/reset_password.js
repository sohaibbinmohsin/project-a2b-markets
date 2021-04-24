import React, {useEffect,useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import {forgot_password} from '../actions/auth'

import './login_signup.css';


function LoginScreen(props) {
  
  const [email_address, setEmailAddress]=useState('')
  const [role, setRole] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
   
  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      email_address: email_address,
      role: role
    }
    dispatch(forgot_password(body, history))
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
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="  Enter your email" class="form-control" onChange={(e)=>setEmailAddress(e.target.value)}></input>
          </li>

          <li>
            <label >Login as </label>
            <br/>
            <select name="Choose option" id="Choose Option">
            <option value="Customer" onClick={(e)=>setRole('Customer')}>Customer</option>
            <option value="Vendor" onClick={(e)=>setRole('Vendor')}>Vendor</option>
            <option value="Admin" onClick={(e)=>setRole('Admin')}>Admin</option>
            
          </select>

          </li>

          <li> <a href="/code_verify"  style={{color:'#FFD100'}}>Submit!</a></li>
          
          


        </ul>
      </form>
   

      
    </div>
    </div>
    
    </body>
   
  );
}
export default LoginScreen;
