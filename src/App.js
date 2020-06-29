import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Popup from './component/Popup';
import Popup2 from './component/Popup2';

import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {

  constructor(props){  
    super(props);  
    this.state = { showPopup: false, showPopup1:false };  
    }  
    
    togglePopup= ()=> {  
      this.setState({  
           showPopup: !this.state.showPopup  
      });  
       } 
       togglePopup1= ()=> {  
        this.setState({  
             showPopup1: !this.state.showPopup1 
        });  
         }   
       
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
  <p onClick={this.togglePopup.bind(this)} className="font2 left"> Login</p>
  </li>
  <li>
 <p  onClick={this.togglePopup1.bind(this)} className="font2 left"> Signup</p>
  </li>

</ul>
</div>
</div>

  
   </div>
   
   {this.state.showPopup ?  
<Popup  
          text='Click "Close Button" to hide popup'  
          closePopup={this.togglePopup.bind(this)}  
/>  
: null  
}  
{this.state.showPopup1 ?  
<Popup2  
          text='Click "Close Button" to hide popup'  
          closePopup={this.togglePopup1.bind(this)}  
/>  
: null  
}  
   </div>)
    

    
  }
}

export default App;
