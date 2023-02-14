import React, { useState } from "react";
import styled from "styled-components";


const PasswordStrength = () => {
  const [password, setPassword] = useState("");
  const [confirm,setConfirm]=useState("")
  const [strength, setStrength] = useState(0);

  const handlePasswordSubmit=()=>{
   console.log(confirm)
  }

  const handleChange = (e) => {
    setPassword(e.target.value);
    setStrength(calculateStrength(e.target.value) * 20);
  };

  const handleBackPress = (e) => {
    if (e.key === "Backspace") {
      const value = password.slice(0, -1);
      setPassword(value);
      setStrength(calculateStrength(value) * 20);
    }
  };

  const calculateStrength = (value) => {
    let score = 0;
    value = value.replace(/\s/g, '')
    if (value.length >= 8) score++;
    if (/[a-z]/.test(value)) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[!@#$%^&*()_+=[\]{};':"\\|,.<>/?-]/.test(value)) score++;
    return score;
  };

  return (
    <StrengthWrapper passwordSt={strength}>
        <label className='input-label'>New Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handleChange}
        onKeyDown={handleBackPress}
      className="input-box-common"/><br/>
       <label className='input-label'>Confirm Password</label>
      <input type="text"  className="input-box-common" 
      onChange={(e)=>setConfirm(e.target.value)}
      />
      <br />
      <label className="strength-label">Password Strength</label>
     { password && <div className="strength-main">
        <div className="color-div"></div>
      </div>}
      <div className="list">
       <ul>
        <li>Password must be between 8 and 20 characters in length.</li>
        <li>Password should include at least one uppercase letter, one lowercase letter, one number, and one symbol.</li>
        <li>Password may contain symbols.</li>
        <li>Passwords cannot contain spaces.</li>
        <li>Using a unique password is recommended.</li>
       </ul>
      </div>
      <button className="pass-save-btn" onClick={handlePasswordSubmit}>Submit Password</button>
    </StrengthWrapper>
  );
};

export default PasswordStrength;

const StrengthWrapper = styled.div`
margin-top:18px;
padding-bottom:20px;
box-sizing:border:box;
.pass-save-btn{
    display: block;
    margin: auto;
    cursor: pointer;
    background-color: blue;
    color: white;
    font-size: 15px;
    border-radius: 5px;
    border: none;
    outline: none;
    font-weight: bold;
    padding: 8px 15px;
    margin-top: 15px;
}
 .list>ul>li{
 font-size:13px;
 color:gray;
 padding-bottom:6px;
 line-height:19px;
 letter-spacing:0.5px;

}
.input-label{
    font-size:14px;
    color:gray;
  
}
.list>ul{
    padding-left:15px;
    padding-top:7px;
    border-sizing:border-box;
}
.input-box-common{
    margin-top:5px;
    font-weight:500;
    margin-bottom:15px;
    height:35px;
    border:0.6px solid gray;
    outline:none;
    width:100%;
    border-radius:5px;
    font-size:17px;
    padding-left:10px;
    box-sizing:border-box;
}
 .strength-label{
  font-size:13px;
  color:gray;
  letter-spacing:0.5px;
 }
  .strength-main {
    height: 5px;
    width:70%;
    border:0.3px solid gray;
    border-radius: 2px;
   margin-top:5px;
    
  }
  .color-div {
    height: 100%;
    width: ${(props) => `${props.passwordSt}%`};
    background-color:${(props)=>props.passwordSt<=20 ? "red" : props.passwordSt>20 && props.passwordSt<=40 ? "gray" : props.passwordSt>40 && props.passwordSt<100 ? "blue" : "green"}
  }
`;
