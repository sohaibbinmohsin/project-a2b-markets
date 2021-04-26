import axios from 'axios';
import React, {useEffect,useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import './login_signup.css';
import Footer from './footer.js'
import './footer.css'
import {signup} from '../actions/auth'

function SignupScreen(props) {
  const [name, setUsername]=useState('')
  const [password, setPassword]=useState('')
  const [phoneno, setPhone]=useState('')
  const [email_address, setEmailAddress]=useState('')
  const [confirmPassword, setConfirmPassword]=useState('')
  const [serverResponse, setServerResponse] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
 
  const submitHandler = (e) => {
    e.preventDefault();
    var x = document.getElementById("demo");
    x.style.display="block";
    const body = {
      name: name,
      email_address: email_address,
      phoneno: phoneno,
      password: password,
      confirmPassword: confirmPassword
    }
    console.log(body)
    dispatch(signup(body,history))
  };
 

  return (
    <body>
       <header><a href ="/"><img src="./img/A2B.png" class="img-fluid" alt="Responsive image" style={{height:'60px'}}></img></a></header>
       <div className="outer">
      
       <div className="image-holder"><img src="https://miro.medium.com/max/1000/0*RHHxKod5FoRBI8Fk.png" class="img-fluid" alt="Responsive image"></img></div>
      
      <div className="form">
      <form onSubmit={submitHandler}>

    
        <ul className="form-container">
          <li>WELCOME</li>
          <li>
            <label>Name</label>
            <br/>
            <input type="text" name="username" placeholder="  Enter your name" class="form-control" required onChange={(e)=>setUsername(e.target.value)}/>
          </li>
          <li>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="  Enter your email" class="form-control" required onChange={(e)=>setEmailAddress(e.target.value)}></input>
          </li>
          
          <li>
            <label for="password">Password</label>
            <br/>
            <input type="password" id="password" name="password" placeholder="  Enter password" class="form-control" required onChange={(e)=>setPassword(e.target.value)}/>

          </li>
          <li>
            <label for="confirm-password"> Confirm Password</label>
            <br/>
            <input type="password" id="confirm-password" name="confirm-password" placeholder="  Enter your password again" class="form-control" required onChange={(e)=>setConfirmPassword(e.target.value)}/>

          </li>
          <li>
            <label for="phone">Phone Number</label>
            <br/>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" class="form-control" placeholder="  Enter your phone number" required onChange={(e)=>setPhone(e.target.value)}/>

          </li>          
          <li>
            <button type="submit" className="button-primary">SIGNUP</button>
            <br/>
            <div id="demo" style={{display:'none', textAlign:'center',backgroundColor:'#FFD100',color:'black',width:'100%',padding:'10px',borderRadius:'10px'}}>You will be directed to verification page in a while!!</div>
          </li>
          <li>Already have an account?<a href="/login" style={{color:'#FFD100'}}>Login</a> here</li>
        </ul>
      </form>
      <div>
            <p>{serverResponse}</p>
      </div>

      
    </div>
    </div>
<div className="navbar navbar-default navbar-static-bottom navbar-fixed-bottom">
                <Footer />
            </div>
    
    </body>
    
   
   
  );
}
export default SignupScreen;
