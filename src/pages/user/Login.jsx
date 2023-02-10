import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiCodechef } from "react-icons/si";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GetFromLocalStorage } from "../../utils/LocalStorageData";
import {
  HeadingWrapper,
  InputWrapper,
  LoginWrapper,
  MainDiv,
  NavLink,
  SubmitWrapper,
} from "../../styles/userStyle/login.style";

import { loginUser } from "../../redux/AuthRedux/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading"
import Navbar from "../../components/Navbar";

const Login = () => {
  
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const navigate = useNavigate();
  const { REACT_APP_SERVER_ADDRESS } = process.env;
  const { loading } = useSelector((state) => {
    return {

      loading: state.AuthReducer.loading,
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      const payload = {
        email: email,
        password: password,
      };
      dispatch(loginUser(payload)).then((res) => {

        
          if(res.status===200){
  
            toast.success(res.payload.mesg, {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              })
            setTimeout(()=>{
              const profile=GetFromLocalStorage("profile") 
              const role=profile && profile.role;
              if(role==='admin'){
                navigate("/admin")
              }
              if(role==='user'){
                navigate("/")
              }
             
           },2000)
          }

          else if(res.status!==200){
            toast.error(res.mesg, {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              })
          }
         
      })
       }
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    window.open(`${REACT_APP_SERVER_ADDRESS}/auth/google`, "_self");
  };

  return (
    <>
      <Navbar />
      <div>
        {loading ? (
           <Loading/>
        ) : (
          <LoginWrapper>
            <div className="logo-in-log">
              <SiCodechef className="logo-sign" />

              <h1>Recipe</h1>
            </div>
            <HeadingWrapper>
              <h1>Sign In</h1>

              <MainDiv>
                <form onSubmit={handleSubmit}>
                  <InputWrapper isFocus={isFocus} showPass={showPass}>
                    <label>Email</label>
                    <br />
                    <input
                      className="em-inp"
                      value={email}
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <br />
                    <label>Password</label>
                    <br />
                    <div className="pass-inp-div">
                      <input
                        className="pass-inp"
                        vlaue={password}
                        type={showPass ? "text" : "password"}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={(e) => setPassword(e.target.value)}
                      ></input>
                      {password && !showPass && (
                        <AiOutlineEye
                          onClick={() => setShowPass(!showPass)}
                          className="eye-common"
                        />
                      )}
                      {password && showPass && (
                        <AiOutlineEyeInvisible
                          onClick={() => setShowPass(!showPass)}
                          className="eye-common"
                        />
                      )}
                    </div>

                    <SubmitWrapper>
                      <input type="submit"></input>
                    </SubmitWrapper>
                    <div className="google-btn-wrapper">
                      <div className="or-div">
                        <h3>OR</h3>
                      </div>

                      <div className="google-btn-div">
                        <span>
                          <FcGoogle className="google-icon" />
                        </span>
                        <button onClick={handleGoogleLogin}>
                          CONTINUE WITH GOOGLE
                        </button>
                      </div>
                    </div>
                  </InputWrapper>
                </form>
              </MainDiv>

              <h5>
                Don't have an account ?<NavLink to="/signup">Sign Up</NavLink>
              </h5>
            </HeadingWrapper>
            <ToastContainer />
          </LoginWrapper>
        )}
      </div>
    </>
  );
};

export default Login;
