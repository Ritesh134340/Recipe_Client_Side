import React, { useState, useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { SiCodechef } from "react-icons/si";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GetFromLocalStorage } from "../../utils/LocalStorageData";
import {
  HeadingWrapper,
  InputWrapper,
  LoginWrapper,
  MainDiv,
  NavLink,
  SubmitWrapper,
} from "../../styles/userStyle/login.style";

import { getOtp, loginUser, verifyOtp } from "../../redux/AuthRedux/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";
import PasswordStrength from "../../components/PasswordStrength";

const Login = () => {
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [otp5, setOtp5] = useState("");

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
  const input5Ref = useRef(null);
  const inputRefs = [input1Ref, input2Ref, input3Ref, input4Ref, input5Ref];
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [showForgot, setShowForgot] = useState(false);
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const navigate = useNavigate();
  const { REACT_APP_SERVER_ADDRESS } = process.env;
  const [forgotEmail, setForgotEmail] = useState("");
  
  const { loading,resetToken,passwordToken } = useSelector((state) => {
    return {
      loading: state.AuthReducer.loading,resetToken:state.AuthReducer.resetToken,passwordToken:state.AuthReducer.passwordToken
    };
  });

  const handleBackKeyPress = (currentRef) => {
    const currentIndex = inputRefs.findIndex((ref) => ref === currentRef);
    if (currentIndex > 0) {
      inputRefs[currentIndex - 1].current.focus();
    }
    if (currentIndex === 4) {
      setOtp5("");
    }
    if (currentIndex === 3) {
      setOtp4("");
    }
    if (currentIndex === 2) {
      setOtp3("");
    }
    if (currentIndex === 1) {
      setOtp2("");
    }
    if (currentIndex === 0) {
      setOtp1("");
    }
  };

  const handleChange = (e, currentRef) => {
    const currentIndex = inputRefs.findIndex((ref) => ref === currentRef);
    if (currentIndex === 0) {
      setOtp1(e.target.value);
      if (e.target.value.length === 1) {
        input2Ref.current.focus();
      }
    }
    if (currentIndex === 1) {
      setOtp2(e.target.value);
      if (e.target.value.length === 1) {
        input3Ref.current.focus();
      }
    }
    if (currentIndex === 2) {
      setOtp3(e.target.value);
      if (e.target.value.length === 1) {
        input4Ref.current.focus();
      }
    }
    if (currentIndex === 3) {
      setOtp4(e.target.value);
      if (e.target.value.length === 1) {
        input5Ref.current.focus();
      }
    }
    if (currentIndex === 4) {
      setOtp5(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      const payload = {
        email: email,
        password: password,
      };
      dispatch(loginUser(payload)).then((res) => {
        if (res.status === 200) {
          toast.success(res.payload.mesg, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setTimeout(() => {
            const profile = GetFromLocalStorage("profile");
            const role = profile && profile.role;
            if (role === "admin") {
              navigate("/admin");
            }
            if (role === "user") {
              navigate("/");
            }
          }, 2000);
        } else if (res.status !== 200) {
          toast.error(res.mesg, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      });
    }
  };
  const handleFacebookLogin = (e) => {
    e.preventDefault();
    window.open(`${REACT_APP_SERVER_ADDRESS}/auth/facebook`, "_self");
  };
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    window.open(`${REACT_APP_SERVER_ADDRESS}/auth/google`, "_self");
  };

  const handleEmailSubmit = () => {
    if (forgotEmail === "") {
      alert("Please provide email");
    } else {
      const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      const result = pattern.test(forgotEmail);
      if (result) {
        const payload = { email: forgotEmail };
        dispatch(getOtp(payload)).then((res) => {
          if (res.status === 200) {
            
            setForgotEmail("")
            toast.success(res.payload.mesg, {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
          if (res.status === 404) {
            toast.warn(res.mesg, {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          } else {
            toast.error(res.mesg, {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
        });
      } else {
        toast.error("Enter valid email !", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };

  const handleVerifyOtp = () => {
    if (otp1 && otp2 && otp3 && otp4 && otp5) {
      const combinedOtp = otp1 + otp2 + otp3 + otp4 + otp5;
     
      if (resetToken) {
        dispatch(verifyOtp({ token: resetToken, otp: combinedOtp })).then(
          (res) => {
            if (res.status === 200) {
              localStorage.removeItem("resetToken");
              setOtp1("")
              setOtp2("")
              setOtp3("")
              setOtp4("")
              setOtp5("")
              toast.success(res.payload.mesg, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            } else {
              toast.error(res.mesg, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            }
          }
        );
      } else {
        toast.error("Token expired !", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };

  

  return (
    <>
      <Navbar />
      <div>
        {loading ? (
          <Loading />
        ) : (
          <LoginWrapper showForgotModal={showForgot}>
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

                    <div className="forgot-div">
                      <p
                        className="forgot-p"
                        onClick={() => setShowForgot(!showForgot)}
                      >
                        Forgot password ?
                      </p>
                    </div>

                    <SubmitWrapper>
                      <input type="submit"></input>
                    </SubmitWrapper>
                    <div className="google-btn-wrapper">
                      <div className="or-div">
                        <h3>OR</h3>
                      </div>

                      <div
                        className="google-btn-div"
                        onClick={handleGoogleLogin}
                      >
                        <span>
                          <FcGoogle className="google-icon" />
                        </span>
                        <button>CONTINUE WITH GOOGLE</button>
                      </div>
                      <div className="facebook-btn-div">
                        <div
                          className="fb-icon-wrapper"
                          onClick={handleFacebookLogin}
                        >
                          <span>
                            <BsFacebook className="fb-icon" />
                          </span>
                          <p>LOGIN WITH FACEBOOK</p>
                        </div>
                      </div>
                    </div>
                  </InputWrapper>
                </form>
              </MainDiv>

              <h5>
                Don't have an account ?<NavLink to="/signup">Sign Up</NavLink>
              </h5>
            </HeadingWrapper>

            <div className="forgot-modal">
              <div className="forgot-modal-main">
                <div className="cross-icon-div">
                  <RxCross2 onClick={() => setShowForgot(false)} />
                </div>
              


                 { (!resetToken && !passwordToken) && <div className="forgot-modal-content">
                    <p className="otp-des">
                      An otp will be sent to your registered email, using which
                      you can reset your password.
                    </p>
                    <input
                      type="email"
                      className="forgot-mail-input"
                      placeholder="Enter registered email"
                      onChange={(e) => setForgotEmail(e.target.value)}
                    />
                    <br />
                    <button className="send-btn" onClick={handleEmailSubmit}>
                      Continue
                    </button>
                  </div>}
                


              { resetToken && <div className="otp-wrapper-main" >
                  <div className="otp-input-div">
                    <div className="otp-input-wrapper">
                      <input
                        value={otp1}
                        onChange={(e) => handleChange(e, input1Ref)}
                        type="text"
                        ref={input1Ref}
                        className="otp-inp-box"
                        maxLength={1}
                        onKeyDown={(e) => {
                          if (e.key === "Backspace") {
                            handleBackKeyPress(input1Ref);
                          }
                        }}
                      />

                      <input
                        ref={input2Ref}
                        value={otp2}
                        onChange={(e) => handleChange(e, input2Ref)}
                        type="text"
                        className="otp-inp-box"
                        maxLength={1}
                        onKeyDown={(e) => {
                          if (e.key === "Backspace") {
                            handleBackKeyPress(input2Ref);
                          }
                        }}
                      />

                      <input
                        ref={input3Ref}
                        value={otp3}
                        onChange={(e) => handleChange(e, input3Ref)}
                        type="text"
                        className="otp-inp-box"
                        maxLength={1}
                        onKeyDown={(e) => {
                          if (e.key === "Backspace") {
                            handleBackKeyPress(input3Ref);
                          }
                        }}
                      />
                      <input
                        ref={input4Ref}
                        value={otp4}
                        onChange={(e) => handleChange(e, input4Ref)}
                        type="text"
                        className="otp-inp-box"
                        maxLength={1}
                        onKeyDown={(e) => {
                          if (e.key === "Backspace") {
                            handleBackKeyPress(input4Ref);
                          }
                        }}
                      />
                      <input
                        ref={input5Ref}
                        value={otp5}
                        onChange={(e) => handleChange(e, input5Ref)}
                        type="text"
                        className="otp-inp-box"
                        maxLength={1}
                        onKeyDown={(e) => {
                          if (e.key === "Backspace") {
                            handleBackKeyPress(input5Ref);
                          }
                        }}
                      />
                    </div>
                    <button className="send-btn" onClick={handleVerifyOtp}>
                      Submit OTP
                    </button>
                  </div>
                
                </div>}

             {passwordToken && <PasswordStrength setModal={setShowForgot} />}

              </div>
            </div>
          </LoginWrapper>
        )}
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
