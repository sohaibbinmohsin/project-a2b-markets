import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './login_signup.css';

function LoginScreen(props) {
  const [email_address, setEmailAddress]=useState('')
  const [password, setPassword]=useState('')
  const [role, setRole]=useState('')
  const [serverResponse, setServerResponse] = useState('')
  const [token, setToken] = useState('')
  const [userID, setUserID] = useState('')
 
  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      email_address: email_address,
      password: password,
      role: role
    }
    axios.post('http://jsonplaceholder.typicode.com/user/signin', body).then(res => {
      // console.log(res)
      const reply = JSON.parse(res)
      setServerResponse(reply.message)
      setToken(reply.token)
      setUserID(reply._id)
    })
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
            <select name="Choose option" id="Choose Option">
            <option value="Customer" onClick={(e)=>setRole('Customer')}>Customer</option>
            <option value="Vendor" onClick={(e)=>setRole('Vendor')}>Vendor</option>
            <option value="Admin" onClick={(e)=>setRole('Admin')}>Admin</option>
            
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
    
    </body>
   
  );
}
export default LoginScreen;
