import React from 'react'
import Styles from '../MyComponents/Dropdowndesign.module.css'
import Styling from '../MyComponents/selectstate.module.css'
import {useState} from 'react'
import { Informationcomponent } from '../MyComponents/Information component'
export const Dropdown = () => {
const[selectoption,setSelectedoption]=useState("")
    return (  
     <>  
     <div className="container-fluid">
      <div className={Styles.set}>   
     <select className="select" onChange={(e)=>{
       const selectedoption=e.target.value 
       setSelectedoption(selectedoption)
     }}>
      <option selected className={Styles.drop}>Dropdown</option>
      <option>About us</option>
     </select>
     {/*<h1 className={Styling.text}>{selectoption}</h1>*/}
     <Informationcomponent valus={selectoption}/>
     </div>
     </div>
  
  </>

    )
}
export default Dropdown;