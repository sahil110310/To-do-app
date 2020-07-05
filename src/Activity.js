import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import logo from './logo.svg';
import './Activity.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import { getCookie } from './App';

class Activity extends Component {

    constructor(props)
    {
        super(props);
        this.state ={
          username:getCookie('username'),
          
            activity:'',
            activities:null,
            errmessage:null,
        }
      //  this.check = this.check.bind(this);
        this.setactivity= this.setactivity.bind(this);
        //this.setpassword= this.setpassword.bind(this);
    }
    setactivity = (e)=>
    {
            this.setState({activity:e.target.value});
    }
    componentDidMount()
    {
      const data ={
        "username" : this.state.username,
        
    }
      axios.post("http://localhost:5000/activity/find/",
    data, {headers:{'Content-Type': 'application/json','Accept': 'application/json'}})
    .then(res => {
      if(res.data==null){
        axios.post("http://localhost:5000/activity/add/",
        data, {headers:{'Content-Type': 'application/json','Accept': 'application/json'}})
        .then(res => {
           this.setState({activities:res.data.activity});
        })
        .catch(function(error){console.log(error.message);console.log("RR");});
      }
      else
      {
        this.setState({activities:res.data.activity})
      }
    })
    .catch(function(error){console.log(error.message);console.log("RR");});
    }
    addin = ()=>
    {
      if(this.state.activity=='')
      {
          this.setState({errmessage:"null value is not alloweded"});
          console.log(this.state.errmessage);
      }
      else
      {
        const data ={
          "username" : this.state.username,
          "activity" : this.state.activity
      }
      this.setState({activity:'',errmessage:null});
      axios.post("http://localhost:5000/activity/fin/",
      data, {headers:{'Content-Type': 'application/json','Accept': 'application/json'}})
      .then(res => {
        if(res.data==null){
          axios.post("http://localhost:5000/activity/add/",
          data, {headers:{'Content-Type': 'application/json','Accept': 'application/json'}})
          .then(res => {
             this.setState({activities:res.data.activity});
          })
          .catch(function(error){console.log(error.message);console.log("RR");});
        }
        else{
          this.setState({activities:res.data.activity});
        }
      })
      .catch(function(error){console.log(error.message);console.log("RR");});
      
      }
     

        
    }
    delactivity = (e)=>
    {
      
      const data ={
        "username" : this.state.username,
        "activity" : e.target.value
    }
        axios.post("http://localhost:5000/activity/del/",
        data, {headers:{'Content-Type': 'application/json','Accept': 'application/json'}
    } ) .then(res => {this.setState({activities:res.data.activity})})
    .catch(function(error){console.log(error.message);console.log("RR");});
    }

    rama =(e)=>
    {
      console.log(e.target.value);
    }
  render()
  {
   
      let i=0
   return (<div>
     <h1>Welcome, {this.state.username}</h1>
     <h1>Add your Activity</h1>
     <input type="text" onChange={this.setactivity} value={this.state.activity}/>
     <button className="activity-button2" onClick={this.addin} >ADD</button>
     {this.state.errmessage!=null && <h1>{this.state.errmessage}</h1>}
     
     <div className="box1">
       <h1 className="activity-h1">TODO LIST</h1>
     {this.state.activities!=null && this.state.activities.map((activity) =>
     <div className="box2">

    <p key={i}>
      
        <label>{i=i+1} :</label>
        <button className="activity-button" onClick={this.delactivity} value={activity}>{activity}</button>
        
      
     
    </p></div>
  )}
  </div>
   </div>)
    

    
  }
}

export default Activity;
