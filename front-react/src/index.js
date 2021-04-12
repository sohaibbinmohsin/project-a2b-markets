import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Location from './Components/Location.js'
import reportWebVitals from './reportWebVitals';
import SignUp from './Components/SignUp'
import Partner from './Components/partner'
import Verification from './Components/verification'
import Login from './Components/login'
import Voucher from './Components/add_voucher'
import Proceed_Order from './Components/proceed_order'
import Shop from './Components/Shop.js'
import Results from './Components/Results.js'
import Reset_password from './Components/reset_password'
import Verify_Code from './Components/code_verify'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/location" component={Location} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/partner" component={Partner} />
      <Route path="/verification" component={Verification} />
      <Route path="/login" component={Login} />
      <Route path="/add_voucher" component={Voucher} />
      <Route path="/proceed_order" component={Proceed_Order} />
      <Route path="/shop" component={Shop} />
      <Route path="/results" component={Results} />
      <Route path="/Reset_password" component={Reset_password} />
      <Route path="/code_verify" component={Verify_Code} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
