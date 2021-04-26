import React, {useEffect,useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'
import './login_signup.css';
import { useDispatch} from 'react-redux';
import {signin} from '../actions/auth'
import Footer from './footer.js'
function LoginScreen(props) {
  const [email_address, setEmailAddress]=useState('')
  const [password, setPassword]=useState('')
  const [role, setRole]=useState('Customer')
  const [serverResponse, setServerResponse] = useState('')
  const [token, setToken] = useState('')
  const [userID, setUserID] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      email_address: email_address,
      password: password,
      role: role
    }
    dispatch(signin(body, history))
  }
  const changeRole=(e)=>
{
  e.preventDefault();
 setRole(e.target.value)
}
 

  return (
    <body>
      <header><a href ="/"><img src="./img/A2B.png" class="img-fluid" alt="Responsive image" style={{height:'60px'}}></img></a></header>
       <div className="outer">
      
       <div className="image-holder"><img src="./img/login.png" class="img-fluid" alt="Responsive image"></img></div>
      
      <div className="form">
      <form onSubmit={submitHandler}>

    
        <ul className="form-container">
          <li>WELCOME</li>
          <li>
            <label>Username</label>
            <br/>
            <input type="email" name="email" class="form-control" placeholder="  Enter Email" onChange={(e)=>setEmailAddress(e.target.value)}/>
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
            <select name="Choose option" id="Choose Option" onChange={changeRole}>
            <option value="Customer" >Customer</option>
            <option value="Vendor"  >Vendor</option>
            <option value="Admin">Admin</option>
            
            </select>

          </li>

            <button type="submit" className="button-primary">LOGIN</button>
          <li>Don't have an account? <a href="/SignUp"  style={{color:'#FFD100'}}>SignUp</a> here</li>
          


        </ul>
      </form>
      <div>
            <p>{serverResponse}</p>
      </div>

      
    </div>
    </div>
    <div class="position-relative">
                <Footer />
            </div>
    
    </body>
   
  );
}
export default LoginScreen;

