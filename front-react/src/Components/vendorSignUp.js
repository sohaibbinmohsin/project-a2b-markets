import React, {useEffect,useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import './login_signup.css';
import Footer from './footer.js'
import './footer.css'
import {signupVendor} from '../actions/auth'

function SignupScreen(props) {
  const [name, setName]=useState('')
  const [shop_name, setShopName]=useState('')
  const [shop_address, setShopAddress]=useState('')
  const [category_name,setCategoryName]=useState('')
  const [password, setPassword]=useState('')
  const [phoneno, setPhone]=useState('')
  const [email_address, setEmailAddress]=useState('')
  const [confirmPassword, setConfirmPassword]=useState('')
  const [serverResponse, setServerResponse] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

 
  const submitHandler = (e) => {
    e.preventDefault()
    const body = {
      name: name,
      shop_name: shop_name,
      shop_address: shop_address,
      email_address: email_address,
      phoneno: phoneno,
      category_name: category_name,
      password: password,
      confirmPassword: confirmPassword
    }
    console.log(body)
    dispatch(signupVendor(body,history))
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
            <label>Owner Name</label>
            <br/>
            <input type="text" name="owner_name" placeholder="  Enter your name" class="form-control" onChange={(e)=>setName(e.target.value)}/>
          </li>
         
          <li>
            <label>Shop Name</label>
            <br/>
            <input type="text" name="shop_name" placeholder="  Enter your shop's name" class="form-control" onChange={(e)=>setShopName(e.target.value)}/>
          </li>
          <li>
            <label for="address">Shop Address</label>
            <br/>
            <input type="text" id="shop_address" name="shop_address"  placeholder="  Enter your shop's address" class="form-control" onChange={(e)=>setShopAddress(e.target.value)}/>

          </li>
          <li>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="  Enter your email" class="form-control" onChange={(e)=>setEmailAddress(e.target.value)}></input>
          </li>
          <li>
            <label for="category">Category Name</label>
            <input type="text" id="category" name="category" placeholder="  Enter category (e.g. Fast Food, Cakes and Deserts, Flower Shop, etc)" class="form-control" onChange={(e)=>setCategoryName(e.target.value)}></input>
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
            <input type="tel" id="phone" name="phone" pattern="[0-9]{11}" class="form-control" placeholder="  Enter your phone number" onChange={(e)=>setPhone(e.target.value)}/>

          </li>
          <li>
            <label for="image">Logo</label>
            <br/>
            <input type="file" id="image" name="filename"/>
            {/* <input type="tel" id="phone" name="phone" pattern="[0-9]{11}" class="form-control" placeholder="  Enter your phone number" onChange={(e)=>setPhone(e.target.value)}/> */}

          </li>          
          <li>
            <button type="submit" className="button-primary">SIGNUP</button>
            {/* <a href="Vendor_signUp_verification" type="submit" className="button-primary">SIGNUP</a> */}
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