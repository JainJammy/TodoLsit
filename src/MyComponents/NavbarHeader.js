import React from 'react'
import Styles from './Navbardesign.module.css'
import {Link,withRouter} from "react-router-dom"
import history from '../MyComponents/history'
const getColor=(curr)=>{
if(history.location.pathname===curr)
{
      return "#1898F5"
 }
}  
export const NavbarHeader = ({history}) => {

    return (
        <div className="container-fluid">
            <div className={Styles.Header}>
              <div className={Styles.textadjust}>  
             <h3 className={Styles.text}>Machine Nimap</h3>   
             </div>
            <div className={Styles.Set}>
              <ul className={Styles.uls}>
               <li>LOGO</li>
               <li><Link to="/Home" /*style={{backgroundColor:getColor('/Home')}}*/  className={Styles.home}>Home</Link></li>
               <li><Link to="/Task"className={Styles.task}>Tasks</Link></li>
               <li><Link to="/User"className={Styles.User}>User</Link></li>   
            </ul>  
            </div>
           </div>

   </div>
   
    )
}
export default NavbarHeader;