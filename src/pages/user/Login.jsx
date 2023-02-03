import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiCodechef } from "react-icons/si";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../components/Navbar";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { REACT_APP_SERVER_ADDRESS } = process.env;
  const { isLoading } = useSelector((state) => {
    return {
      isError: state.AuthReducer.isError,
      isLoading: state.AuthReducer.isLoading,
      token: state.AuthReducer.token,
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
        console.log(res);
      });
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
        {isLoading ? (
          <img
            src="https://createwebsite.net/wp-content/uploads/2015/09/GD.gif"
            style={{
              height: "150px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "auto",
              marginTop: "200px",
            }}
          ></img>
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
                  <InputWrapper>
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
                    <input
                      className="em-inp"
                      vlaue={password}
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
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
