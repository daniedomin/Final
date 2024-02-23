
import './login.css';
import React, { useState } from 'react';

import password_icon from '../Assets/password.png';
import user_icon from '../Assets/username.png';

const Login = () => {
    
    const [action,setAction] = useState("Login");

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder="Username" />
                

            </div>
            
            
        
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder="password" />
                
            </div>
        </div>
        <div className="forgot-password"> Forgot Password? <span>Click Here!</span></div>

        <div className="submit-container">
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default Login