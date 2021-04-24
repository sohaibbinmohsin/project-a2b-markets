import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import './footer.css'



function footer() {

 

  return (
    <div className="outer-container">
        <div className="container">
            
                <div className='col'>
                    <ul className='unstyled'>
                    <li className="logo"><img src="./img/A2B.png" class="img-fluid" alt="Responsive image" ></img>
                    
                    </li>
                    
                        <li>
                            <div>
                            <p className="social-icons">
                            <a href="https://www.facebook.com/a2bmarkets" class="fa fa-facebook"></a>
                            <a href="http://www.a2bmarkets.com/?fbclid=IwAR10f--NnWmRCKW3C1AgH1DfVivq7tLdd3Nql3vPWJyZsD3YoBCUJJihZeQ" class="fa fa-twitter"></a>
                            <a href="https://www.facebook.com/a2bmarkets" class="fa fa-instagram"></a>
                            </p>
                            </div>
                        </li>
                        
                    </ul>
                </div>
                
                
                
            </div>
            <hr/>
            <div>
                
           
            </div>
            <ul><p className="termsconditions" >This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.    <b> © 2021 A2BMarkets</b> </p></ul>
       </div>
  );
}
export default footer;
