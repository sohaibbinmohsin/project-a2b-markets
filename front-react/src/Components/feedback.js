import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './feedback.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './footer.js'
import Navbar from './Navbar.js'
function Feedback(props) {
  const [rating, setRating]=useState('')
  const [comment, setComment]=useState('')
  
 
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(rating,comment)
    // const body = {
    //   email_address: email_address,
    //   password: password
    // }
    // axios.post('http://jsonplaceholder.typicode.com/user/signin', body).then(res => {
    //   // console.log(res)
    //   const reply = JSON.parse(res)
    //   setServerResponse(reply.message)
    //   setToken(reply.token)
    //   setUserID(reply._id)
    // })
  };

 

  return (
    <div>
    
    <Navbar />
   <div className="outer"  >
  
  <div className="form" >
  <form onSubmit={submitHandler}>

    
    <ul className="form-container">
    
    <h3 style={{textAlign:'center'}}>How was your experience with the vendor?</h3>
    <h6>Your feedback is important to improve the quality of our service</h6>
    <div style={{border:'2px solid black'}} className="xyz">
    
      <li>
          <label>Select your experience on the scale of 1-10:(1:worst experience 10:Amazing experience)</label>
      <div class="box-body"> <select id="example-1to10" name="rating" autocomplete="off"onChange={(e)=>setRating(e.target.value)} >
                    <option value="1" selected="selected">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7" >7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select> </div>
      </li>
      <li>
      <div class="form-group">
    <label for="exampleFormControlTextarea1">Comments</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Type your comments here" onChange={(e)=>setComment(e.target.value)}></textarea>
  </div>
      </li> 
    
      

      </div>
      <button type="submit" className="button-primary" style={{marginLeft:'170px'}}>SUBMIT</button>
      


    </ul>

  </form>

  
</div>

</div>



</div>
    
   
  );
}
export default Feedback;

