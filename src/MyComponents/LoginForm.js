import React,{useState} from 'react'
import Styles from '../MyComponents/LoginForm.module.css'
import {Home} from "../MyComponents/Home"
import { useHistory} from 'react-router'
import {NavbarHeader} from '../MyComponents/NavbarHeader'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router'
import { Redirect } from 'react-router'
export const LoginForm=()=>{ 
const[email,setemail]=useState("");
const[emailerror,setemailerror]=useState("");
const[password,setpassword]=useState("");
const[passworderror,setpassworderror]=useState("");
const[AllEntry,setAllEntry]=useState([]);
const[submit,setSubmit]=useState(false);
const[isSubmitted,setsubmitted]=useState(false);
const[loggedin,setislogged]=useState(false);
let useremail=false;
let userpassword=false;
let formvalid=false   
const history=useHistory();
const userhandle=(e)=>{
  setemail(e.target.value)
  console.log(email)
  let regex=/^([A-Za-z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/
  /*if(new RegExp(/^[a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]({2,10}))/g).test(emails))*/
  if(new RegExp(/([_\-\.A-Za-z0-9]+)@([_\-\.a-zA-Z0-9-]+)\.([a-z]{2,20})$/).test(email))
  {
        console.log("worked")
         useremail=true 
         console.log(useremail);
         setemailerror("")
         setsubmitted(true)
         setSubmit(true)
  }
  else
  {
       useremail=false
       setemailerror("Valid email")
       setsubmitted(false)
       setSubmit(false)
  }
  }
  const Passwordhandle=(e)=>{
  setpassword(e.target.value)
  if(password.length<2)
  {
    console.log("I am worked")
    userpassword=false
    setpassworderror("Password must be greater than length of 3")
    setsubmitted(false)
    setSubmit(false)
  }  
  else
  {
    userpassword=true
    console.log(userpassword);
    setpassworderror("")
    setsubmitted(true)
    setSubmit(true)
  }
  }
  const handleformSubmit=(e)=>
  {
  if(email=="")
  {
    e.preventDefault();
    useremail=false
    setemailerror("Email ID cannot blank")
    setsubmitted(false)
    setSubmit(false)
  }

  else if(password=="")
  {
    e.preventDefault();
    userpassword=false
    setpassworderror(" Password cannot blank")
    setsubmitted(false)
    setSubmit(false)
  }
      else if(submit)
      {  
       history.push("/Navbar")
      }
      else
      {
        e.preventDefault();
        alert("Please field all input field")
      }
  }
  /*const handleformSubmit=(e)=>
  {
    e.preventDefault();

     if(userhandle&& Passwordhandle)
     {
       alert("All fields are correct")
     }
     else{
       alert("Please field all input")
     }
    
      
     if(useremail&&userpassword)
     {
    console.log(useremail);
       console.log(userpassword);
     const newEntry={email:email,password:password};
     setAllEntry([...AllEntry,newEntry]);
     console.log(AllEntry) 
     setpassword("");
     setemail("");
     }
     else
     {
       e.preventDefault();
     }
  }*/
  

    return (
    <>
     <form onSubmit={handleformSubmit}>
     <div className={Styles.container}>
      <h1>Login Here</h1>
      <div>
      <input type="email"  placeholder="Enter Email here" name="email" onChange={userhandle} className={Styles.Email} autoComplete="off" />{useremail?<span className={Styles.error}></span>:<span className={Styles.error}>{emailerror}</span>}
      </div>
      <div>
      <input type="password" placeholder="Enter Password" name="password" onChange={Passwordhandle} className={Styles.Password} autoComplete="off" />{userpassword?<span className={Styles.error}></span>:<span className={Styles.error}>{passworderror}</span>}
      </div>
       <div>
      <button className={Styles.button} onClick={handleformSubmit}>Login</button>
       </div>
      </div>
      </form>
    </>
  )
}
export default LoginForm;