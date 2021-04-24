import React, {useEffect,useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {verify_account} from '../actions/auth'
import { useDispatch} from 'react-redux';

function VerifyCodeScreen(props) {
  const history = useHistory()
  const dispatch = useDispatch()
  const [code, setCode]=useState('')
 
  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      token: code
    }
    dispatch(verify_account(body, history))
  };
 

  return (
    <body>
      <header><img src="./img/A2B.png" class="img-fluid" alt="Responsive image" style={{height:'60px'}}></img></header>
       <div className="outer">
      
       <div className="image-holder"><img src="./img/login.png" class="img-fluid" alt="Responsive image"></img></div>
      
      <div className="form">
      <form onSubmit={submitHandler}>

    
        <ul className="form-container">
          <li>
            <label for="code" style={{textAlign:'center'}}>Verification Code</label>
            <h6>Enter the verification code recevied on your email</h6>
            <br/>
            <input type="code" id="code" name="code" placeholder="  Enter verification code" class="form-control" onChange={(e)=>setCode(e.target.value)}/>

          </li>
          

          <button type="submit" className="button-primary">SEND</button>
          
          


        </ul>
      </form>
   

      
    </div>
    </div>
    </body>
   
  );
}
export default VerifyCodeScreen;
