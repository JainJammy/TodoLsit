import React from 'react'
import Styles from '../MyComponents/Passworddesign.module.css'
import {Link} from 'react-router-dom';
export const NewPassword = () => {
    return (
        <div>
          <h3 className={Styles.usertext}>Username:dummyName</h3>
          <h3 className={Styles.userPassword}>NewPassword:</h3>  
          <input type="password" className={Styles.textPass}/>
          <button type="button" className={Styles.Save} >Save Password</button>
          <button type="button" className={Styles.Logout}>Logout</button>
        </div>
    )
}
export default NewPassword;