import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {



  render()
  {
   return (<div className="app-background">
     <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
<div class="content">
<div >
     <p className="font1">Make List And Complete Your Task</p>
     <div className="app-container">
    <ul>
  <li>
    <Link to="/To-do-app/login/" style={{textDecoration:'none'}}><p className="font2 left"> Login</p></Link>
  </li>
  <li>
  <Link to="/To-do-app/signup/" style={{textDecoration:'none'}}><p className="font2 left"> Signup</p></Link>
  </li>
 
</ul>
</div>
</div>
  
   </div></div>)
    

    
  }
}

export default App;
