(this.webpackJsonpto_do_app=this.webpackJsonpto_do_app||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},18:function(e,t,a){},23:function(e,t,a){},35:function(e,t,a){e.exports=a(65)},40:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(33),c=a.n(o),i=(a(40),a(13)),l=a(1),r=a(8),u=a(9),p=a(11),m=a(10),h=(a(16),a(18),a(3)),d=(a(23),a(4)),g=a.n(d),v=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).check=function(e){var t={username:n.state.name};g.a.post("http://localhost:5000/registers/fin/",t,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){n.setState({user:e.data}),E("username",n.state.name,1e3)})).catch((function(e){console.log(e.message)})),console.log(n.state.user)},n.submit=function(){var e=n.state.user.password;console.log(e),console.log(n.state.password),e==n.state.password&&n.setState({go:"yes"})},n.setusername=function(e){n.setState({name:e.target.value})},n.setpassword=function(e){n.check(n.state.name),n.setState({password:e.target.value})},n.state={name:"",password:"",user:null,go:"no"},n.setusername=n.setusername.bind(Object(h.a)(n)),n.setpassword=n.setpassword.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"render",value:function(){return"yes"==this.state.go?s.a.createElement(l.a,{to:"/To-do-app/user/activity/"}):s.a.createElement("div",{className:"popup"},s.a.createElement("div",{className:"popup\\_inner"},s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("h1",{className:"popup-heading1"}," LOGIN")),s.a.createElement("ul",null,s.a.createElement("p",{className:"popup-heading2"},"Username:"),s.a.createElement("input",{className:"size1",type:"text",onChange:this.setusername}),s.a.createElement("p",{className:"popup-heading2"},"Password:"),s.a.createElement("input",{className:"size1",type:"text",onChange:this.setpassword}),s.a.createElement("br",null),s.a.createElement("button",{onClick:this.submit,className:"popup-button1"}," Submit")))),s.a.createElement("button",{onClick:this.props.closePopup},"close me")))}}]),a}(s.a.Component),b=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).check=function(e){console.log(n.state.user)},n.submit=function(){var e={username:n.state.name,email:n.state.email,password:n.state.password};n.state.name;console.log(e),g.a.post("http://localhost:5000/registers/add/",e,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){n.setState({user:e.data}),E("username",n.state.name,1e5)})).catch((function(e){console.log(e.message),console.log("RR")}))},n.setemail=function(e){n.setState({email:e.target.value})},n.setusername=function(e){n.setState({name:e.target.value})},n.setpassword=function(e){n.setState({password:e.target.value})},n.state={name:"",password:"",email:"",user:null,go:"no"},n.setusername=n.setusername.bind(Object(h.a)(n)),n.setemail=n.setemail.bind(Object(h.a)(n)),n.setpassword=n.setpassword.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"render",value:function(){return null!=this.state.user?s.a.createElement(l.a,{to:"/To-do-app/user/activity/"}):s.a.createElement("div",{className:"popup"},s.a.createElement("div",{className:"popup\\_inner"},s.a.createElement("h1",{className:"popup-heading1"},"SIGNIN"),s.a.createElement("p",{className:"popup-heading2"},"Username:"),s.a.createElement("input",{className:"size1",type:"text",onChange:this.setusername}),s.a.createElement("p",{className:"popup-heading2"},"Email:"),s.a.createElement("input",{className:"size1",type:"text",onChange:this.setemail}),s.a.createElement("p",{className:"popup-heading2"},"Password:"),s.a.createElement("input",{className:"size1",type:"text",onChange:this.setpassword}),""!=this.state.name&&this.check(this.state.name),s.a.createElement("button",{onClick:this.submit,className:"popup-button1"}," Submit"),s.a.createElement("button",{onClick:this.props.closePopup},"close me")))}}]),a}(s.a.Component);function f(e){for(var t=e+"=",a=decodeURIComponent(document.cookie).split(";"),n=0;n<a.length;n++){for(var s=a[n];" "==s.charAt(0);)s=s.substring(1);if(0==s.indexOf(t))return s.substring(t.length,s.length)}return""}function E(e,t,a){var n=new Date;n.setTime(n.getTime()+1e3*a);var s="expires="+n.toUTCString();document.cookie=e+"="+t+";"+s+";path=/"}var y=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).togglePopup=function(){n.setState({showPopup:!n.state.showPopup})},n.togglePopup1=function(){n.setState({showPopup1:!n.state.showPopup1})},n.state={showPopup:!1,showPopup1:!1},n}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"app-background"},s.a.createElement("div",{class:"bg"}),s.a.createElement("div",{class:"bg bg2"}),s.a.createElement("div",{class:"bg bg3"}),s.a.createElement("div",{class:"content"},s.a.createElement("div",null,s.a.createElement("p",{className:"font1"},"Make List And Complete Your Task"),s.a.createElement("div",{className:"app-container"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("p",{onClick:this.togglePopup.bind(this),className:"font2 left"}," Login")),s.a.createElement("li",null,s.a.createElement("p",{onClick:this.togglePopup1.bind(this),className:"font2 left"}," Signup")))))),this.state.showPopup?s.a.createElement(v,{text:'Click "Close Button" to hide popup',closePopup:this.togglePopup.bind(this)}):null,this.state.showPopup1?s.a.createElement(b,{text:'Click "Close Button" to hide popup',closePopup:this.togglePopup1.bind(this)}):null)}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(19),a(63);var w=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).check=function(e){var t={username:n.state.name};g.a.post("http://localhost:5000/registers/fin/",t,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){n.setState({user:e.data})})).catch((function(e){console.log(e.message)})),console.log(n.state.user)},n.submit=function(){n.state.user.password==n.state.password&&n.setState({go:"yes"})},n.setusername=function(e){n.setState({name:e.target.value})},n.setpassword=function(e){n.setState({password:e.target.value})},n.state={name:"",password:"",user:null,go:"no"},n.setusername=n.setusername.bind(Object(h.a)(n)),n.setpassword=n.setpassword.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"render",value:function(){return"yes"==this.state.go?s.a.createElement("h1",null,"Login successfully"):s.a.createElement("div",{className:"margin1"},s.a.createElement("div",{className:"card border-dark mb-3 "},s.a.createElement("div",{class:"card-header text-center"},s.a.createElement("h1",null,"LOGIN")),s.a.createElement("ul",{className:"list-group list-group-flush"},s.a.createElement("p",null,"Username:"),s.a.createElement("input",{className:"size1",type:"text",onChange:this.setusername}),s.a.createElement("p",null,"Password:"),s.a.createElement("input",{className:"size1",type:"text",onChange:this.setpassword}),""!=this.state.name&&this.check(this.state.name),s.a.createElement("button",{className:"btn btn-primary size1",onClick:this.submit}," Submit"))))}}]),a}(n.Component),j=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).check=function(e){console.log(n.state.user)},n.submit=function(){var e={username:n.state.name,email:n.state.email,password:n.state.password};n.state.name;console.log(e),g.a.post("http://localhost:5000/registers/add/",e,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){n.setState({user:n.state.name})})).catch((function(e){console.log(e.message),console.log("RR")}))},n.setemail=function(e){n.setState({email:e.target.value})},n.setusername=function(e){n.setState({name:e.target.value})},n.setpassword=function(e){n.setState({password:e.target.value})},n.state={name:"",password:"",email:"",user:null,go:"no"},n.setusername=n.setusername.bind(Object(h.a)(n)),n.setemail=n.setemail.bind(Object(h.a)(n)),n.setpassword=n.setpassword.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"render",value:function(){return console.log(this.state.user),null!=this.state.user?s.a.createElement(l.a,{to:"/To-do-app/user/activity/"}):s.a.createElement("div",null,"Username:",s.a.createElement("input",{type:"text",onChange:this.setusername}),"  ",s.a.createElement("br",null),s.a.createElement("hr",null),"Email",s.a.createElement("input",{type:"text",onChange:this.setemail}),"  ",s.a.createElement("br",null),s.a.createElement("hr",null),"password:",s.a.createElement("input",{type:"text",onChange:this.setpassword}),s.a.createElement("br",null),s.a.createElement("br",null),""!=this.state.name&&this.check(this.state.name),s.a.createElement("button",{onClick:this.submit}," Submit"))}}]),a}(n.Component),C=(a(64),function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).setactivity=function(e){n.setState({activity:e.target.value})},n.addin=function(){if(""==n.state.activity)n.setState({errmessage:"null value is not alloweded"}),console.log(n.state.errmessage);else{var e={username:n.state.username,activity:n.state.activity};n.setState({activity:"",errmessage:null}),g.a.post("http://localhost:5000/activity/fin/",e,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){null==t.data?g.a.post("http://localhost:5000/activity/add/",e,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){n.setState({activities:e.data.activity})})).catch((function(e){console.log(e.message),console.log("RR")})):n.setState({activities:t.data.activity})})).catch((function(e){console.log(e.message),console.log("RR")}))}},n.delactivity=function(e){var t={username:n.state.username,activity:e.target.value};g.a.post("http://localhost:5000/activity/del/",t,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){n.setState({activities:e.data.activity})})).catch((function(e){console.log(e.message),console.log("RR")}))},n.rama=function(e){console.log(e.target.value)},n.state={username:f("username"),activity:"",activities:null,errmessage:null},n.setactivity=n.setactivity.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t={username:this.state.username};g.a.post("http://localhost:5000/activity/find/",t,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(a){null==a.data?g.a.post("http://localhost:5000/activity/add/",t,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){e.setState({activities:t.data.activity})})).catch((function(e){console.log(e.message),console.log("RR")})):e.setState({activities:a.data.activity})})).catch((function(e){console.log(e.message),console.log("RR")}))}},{key:"render",value:function(){var e=this,t=0;return s.a.createElement("div",null,s.a.createElement("h1",null,"Welcome, ",this.state.username),s.a.createElement("h1",null,"Add your Activity"),s.a.createElement("input",{type:"text",onChange:this.setactivity,value:this.state.activity}),s.a.createElement("button",{className:"activity-button2",onClick:this.addin},"ADD"),null!=this.state.errmessage&&s.a.createElement("h1",null,this.state.errmessage),s.a.createElement("div",{className:"box1"},s.a.createElement("h1",{className:"activity-h1"},"TODO LIST"),null!=this.state.activities&&this.state.activities.map((function(a){return s.a.createElement("div",{className:"box2"},s.a.createElement("p",{key:t},s.a.createElement("label",null,t+=1," :"),s.a.createElement("button",{className:"activity-button",onClick:e.delactivity,value:a},a)))}))))}}]),a}(n.Component));c.a.render(s.a.createElement(i.a,null,s.a.createElement(l.d,null,s.a.createElement(l.b,{path:"/To-do-app/",exact:!0,component:y}),s.a.createElement(l.b,{path:"/To-do-app/login/",exact:!0,component:w}),s.a.createElement(l.b,{path:"/To-do-app/signup/",exact:!0,component:j}),s.a.createElement(l.b,{path:"/To-do-app/user/activity",exact:!0,component:C}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.c85904df.chunk.js.map