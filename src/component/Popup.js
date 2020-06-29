import React from 'react';  
import './style.css';  
import axios from 'axios';

class Popup extends React.Component {
    
    constructor(props)
    {
        super(props);
        this.state ={
            name:'',
            password:'',
            user:null,
            go:'no'
        }
      //  this.check = this.check.bind(this);
        this.setusername= this.setusername.bind(this);
        this.setpassword= this.setpassword.bind(this);
    }
    check = (e)=>
    {
        
        const data= 
        {
            "username":this.state.name
        }
     axios.post('http://localhost:5000/registers/fin/',
        data,  {headers:{'Content-Type': 'application/json','Accept': 'application/json'}
    } ) .then(res => {this.setState({user:res.data});})
    .catch(function(error){console.log(error.message)});
    
    console.log(this.state.user);
    }
    submit= () =>
    {
       const p=this.state.user.password;
       if(p==this.state.password)
       {
           this.setState({go:'yes'});
       }
    }
   
    setusername = (e)=>
    {
        
        this.setState({
            name:e.target.value
        });
        //this.check(e);
    }
    setpassword = (e) =>
    {
        this.setState({
            password:e.target.value
        });
    }



  render() {  

   
return (  
<div className='popup'>  
<div className='popup\_inner'>  
 

   <div ><div>
        <div>
    <h1 className="popup-heading1"> LOGIN</h1>
  </div>
           <ul>
     <p className="popup-heading2">Username:</p>
     <input className="size1" type="text" onChange={this.setusername} /> 
     <p className="popup-heading2">Password:</p>
     <input className="size1" type="text" onChange={this.setpassword} />
     {this.state.name!='' && this.check(this.state.name)}


    <br></br>
    <button  onClick={this.submit}  className="popup-button1"> Submit</button>
     </ul>
     
     </div>

   </div>
<button onClick={this.props.closePopup}>close me</button>  
</div>  
</div>  
);
}  
}  

export default Popup;