import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';

class Activity extends Component {

    constructor(props)
    {
        super(props);
        this.state ={
            activity:'',
            activities:null,
        }
      //  this.check = this.check.bind(this);
        this.setactivity= this.setactivity.bind(this);
        //this.setpassword= this.setpassword.bind(this);
    }
    setactivity = (e)=>
    {
            this.setState({activity:e.target.value});
    }
    addin = ()=>
    {
        const data ={
            "username" : "sahil",
            "activity" : this.state.activity
        }
        axios.post("http://localhost:5000/activity/fin/",
        data, {headers:{'Content-Type': 'application/json','Accept': 'application/json'}
    } ) .then(res => {this.setState({activities:res.data.activity})})
    .catch(function(error){console.log(error.message);console.log("RR");});

        
    }
  render()
  {
      let i=0
   return (<div>
     <h1>Welcome to Todo app. Make list and complete your task</h1>
     <h1>Add your Activity</h1>
     <input type="text" onChange={this.setactivity} />
     <button onClick={this.addin} >ADD</button>
     {this.state.activities!=null && this.state.activities.map((activity) =>
    <p key={i}>
        {i=i+1}
        <h4>{activity}</h4>
      
     
    </p>
  )}
   </div>)
    

    
  }
}

export default Activity;
