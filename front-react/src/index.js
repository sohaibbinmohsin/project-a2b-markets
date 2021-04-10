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
import LOGIN from './Components/login'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/location" component={Location} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/partner" component={Partner} />
      <Route path="/verification" component={Verification} />
      <Route path="/login" component={LOGIN} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
