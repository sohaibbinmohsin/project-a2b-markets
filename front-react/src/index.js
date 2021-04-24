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
import ShoppingCart from './Components/shopping_cart'
import signUpVerification from './Components/signUp-code'
import vendorSignUpVerification from './Components/signUp-code-vendor'
import vendor_shop from './Components/vendorShop'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'

const store = createStore(reducers, compose(applyMiddleware(thunk)))
ReactDOM.render(
  <Provider store = {store}>
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
      <Route path="/shopping_cart" component={ShoppingCart} />
      <Route path="/shop" component={Shop} />
      <Route path="/results" component={Results} />
      <Route path="/Reset_password" component={Reset_password} />
      <Route path="/code_verify" component={Verify_Code} />
      <Route path="/signUp_verification" component={signUpVerification} />
      <Route path="/Vendor_signUp_verification" component={vendorSignUpVerification} />
      <Route path="/Vendor_Shop" component={vendor_shop} />
    </Switch>
  </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

