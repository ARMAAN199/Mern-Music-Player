import React,{useState, useEffect} from "react";
import Errormessage from "../Errormessage";
import Successmessage from "../Successmessage";
import validator from 'validator';
import axios from 'axios';

function Login() {

 const [userName, setUserName] = useState("")
 var [passObj,setUserPassword] = useState({
    userPassword : "",
  });
 const [passmatch, setpassm] = useState("NO")
 const [buttondisabled, setButtondisabled] = useState(true)
 const [showmess, setshowmess] = useState()
 const [showmess1, setshowmess1] = useState()
 const [EmailError, setEmailError] = useState("NO")
 const [usernameError, setusernameError] = useState("NO")

 const handleSubmit = e => {
     e.preventDefault();
     console.log(userName + " " + passObj.userPassword)
    
     axios.post('/login', {
     "username" : userName, "password" : passObj.userPassword
     })
      .then(function (response) {
        console.log(response);
        
      })
      .catch(function (error) {
        console.log("error");
      });
 }


 const handlegoogleSubmit= e => {
   e.preventDefault();
  //  axios.get('/auth/google').then(function(response){console.log(response)}).catch(function(err){console.log(err)})
  window.open("http://localhost:3763/auth/google" , "_self")
 }

 useEffect(() => { 
     if (userName.length && passObj.userPassword.length)
     setButtondisabled(false)
     else
     setButtondisabled(true)
 }, [userName, passObj.userPassword])

  return (
    // <div style={{height:"100vh"}}>
    <div>
      <div className="row" style={{height:"30%"}}>
        <h1>Login</h1>
        </div>  


          <a href="/" style={{}}>Not Registered Yet? Register Now.</a>
        </div>
        <div className="col-sm-1"></div>
      </div>
      <div className="row"></div>
    </div>
  );
}

export default Login;
