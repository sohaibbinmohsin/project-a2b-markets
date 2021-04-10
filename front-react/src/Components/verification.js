import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';


import './login_signup.css';

function LoginScreen(props) {
  const [Email, setEmail]=useState('')

  

 
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
            <label>Email or Phone no.</label>
            <br/>
            <input type="text" name="email/phone no" class="form-control" placeholder="  Enter Username" onChange={(e)=>setEmail(e.target.value)} />
          </li>
          <br/>

          <h5 style={{textAlign:'center'}}>You will receive a verification code on your email or phone number.</h5>
          <br/>

            <button type="submit" className="button-primary">SEND CODE</button>
    <br/>
            <li style={{textAlign:'center'}}>Already have an account?<a href="#" style={{color:'#FFD100'}}>Login</a> here</li>
          

         
          


        </ul>
      </form>
   

      
    </div>
    </div>
    
    </body>
   
  );
}
export default LoginScreen;
