import axios from 'axios';
import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

import './login_signup.css';

function SignupScreen(props) {
  const [name, setUsername]=useState('')
  const [password, setPassword]=useState('')
  const [phoneno, setPhone]=useState('')
  const [email_address, setEmailAddress]=useState('')
  const [confirmPassword, setConfirmPassword]=useState('')
  const [serverResponse, setServerResponse] = useState('')

 
  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      name: name,
      email_address: email_address,
      phoneno: phoneno,
      password: password,
      confirmPassword: confirmPassword
    }
    axios.post('http://jsonplaceholder.typicode.com/customer/signup', body).then(res => {
      console.log(res)
      const reply = JSON.parse(res)
      setServerResponse(reply.message)
    })
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
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="  Enter your email" class="form-control" onChange={(e)=>setEmailAddress(e.target.value)}></input>
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
          <li>
            <label for="phone">Phone Number</label>
            <br/>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" class="form-control" placeholder="  Enter your phone number" onChange={(e)=>setPhone(e.target.value)}/>

          </li>          
          <li>
            <button type="submit" className="button-primary">SIGNUP</button>
          </li>
          <li>Already have an account?<a href="/login" style={{color:'#FFD100'}}>Login</a> here</li>
        </ul>
      </form>
      <div>
            <p>{serverResponse}</p>
      </div>

      
    </div>
    </div>
    
    </body>
    
   
   
  );
}
export default SignupScreen;
