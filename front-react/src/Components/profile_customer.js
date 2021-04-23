import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './profile.css';
import Footer from './footer.js'
import Navbar from './Navbar.js'
function ProfileScreen(props) {
  const [email_address, setEmailAddress]=useState('')
  const [currentPassword, setCurrentPassword]=useState('')
  const [newPassword, setNewPassword]=useState('')
  const [name, setNewName]=useState('')
  const [phoneNo, setPhoneNo]=useState('')
  const [serverResponse, setServerResponse] = useState('')
  const [token, setToken] = useState('')
  const [userID, setUserID] = useState('')
 
  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      email_address: email_address,
      password: password
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
        <Navbar />
      
       <div className="outer"  >
      
       
      
      <div className="form" >
      <form onSubmit={submitHandler}>

        
        <ul className="form-container">
        <h3 style={{textAlign:'center'}}>My Profile</h3>
        <div style={{border:'2px solid black'}} className="xyz">
        
          <li>
            <label>Name</label>
            <br/>
            <input type="text" name="name" class="form-control" placeholder=" name" onChange={(e)=>setNewName(e.target.value)}/>
          </li>
          <li>
            <label for="phone">Phone Number</label>
            <br/>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" class="form-control" placeholder="  Enter your phone number" onChange={(e)=>setPhoneNo(e.target.value)}/>

          </li> 
          <li>
            <label>Email</label>
            <br/>
            <input type="email" name="email" class="form-control" placeholder="  Enter Email" onChange={(e)=>setEmailAddress(e.target.value)}/>
          </li>
          

          </div>
          <button type="submit" className="button-primary">SAVE</button>
          
          <br/>
          <br/>
          <h3 style={{textAlign:'center'}}>Change Password</h3>
          <div style={{border:'2px solid black'}} className='XYZ'>
        <li>
            <label for="password">Current Password</label>
            <br/>
            <input type="password" id="password" name="password" placeholder="  Enter password" class="form-control" onChange={(e)=>setCurrentPassword(e.target.value)}/>

          </li>
          <li>
            <label for="confirm-password"> New Password</label>
            <br/>
            <input type="password" id="confirm-password" name="confirm-password" placeholder="  Enter new password" class="form-control" onChange={(e)=>setNewPassword(e.target.value)}/>

          </li>
          
          </div>

            <button type="submit" className="button-primary">SAVE</button>


        </ul>

      </form>

      
    </div>
    
    </div>
    <div className="footer">
                <Footer />
            </div>
    
    </body>
   
  );
}
export default ProfileScreen;
