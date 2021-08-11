import React from 'react'
import Styles from '../MyComponents/userpage.module.css'
import {Link} from 'react-router-dom';
export const User = () => {
    return (
        <div>
          <h3 className={Styles.usertext}>Username:dummyName</h3>
          <h3 className={Styles.userPassword}>Password:*****</h3>  
          <button type="button" className={Styles.Save} ><Link to="/NewPassword"className={Styles.Saves}>Change Password</Link></button>
          <button type="button" className={Styles.Logout}>Logout</button>
        </div>
    )
}
export default User;