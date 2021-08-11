import React from 'react'
import { useState } from 'react'
import Styles from '../MyComponents/AddTask.module.css'
import { useHistory } from 'react-router'
export const AddTask = () => {  
const[Id,setId]=useState("");
const[title,settitle]=useState("");
const[comp,setcomp]=useState("");    
let history=useHistory()    
const clicked=()=>{
   history.goBack("/Task") 
}
const submit=(e)=>{
    e.preventDefault();
    if(!Id||!title||!comp)
    {
        alert("Please field all values")
    }
}

    return (
        <div className="container-fluid">
          <form onSubmit={submit}>
           <div> 
            <input type="text" className={Styles.Id} placeholder="Enter Your Id"/>
          </div>
          <input type="text" className={Styles.Name} placeholder="Enter title"/>
          <div>
          <input type="text" className={Styles.Completed} placeholder="Enter Completed State"/>
          </div>
          <div>
           <div>
            <button type="submit" className={Styles.btnsub}>Submit</button>   
            </div>   
           <button type="button" className={Styles.btns} onClick={clicked}>Back</button>      
          </div>
          </form>
        </div>
    )
}
