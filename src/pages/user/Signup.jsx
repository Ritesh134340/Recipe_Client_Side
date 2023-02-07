import React, { useRef,useEffect } from 'react'
import {useNavigate} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import { HeadingWrapper, SignupImage , InputWrapper, MainDiv, NavLink, SignupWrapper, SubmitWrapper }  from "../../styles/userStyle/signup.style"
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {signupUser} from "../../redux/AuthRedux/action"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {SiCodechef} from "react-icons/si";
import Navbar from '../../components/Navbar';
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import Loading from '../../components/Loading';
import {HiOutlineUserCircle} from "react-icons/hi"
import storage from "../../utils/firebaseStorage";
import {getDownloadURL,ref,uploadBytesResumable} from "firebase/storage";
import {uid} from "uid"

const Signup = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch();
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [gender,setGender]=useState("male")
  const [password,setPassword]=useState("")
  const ImageRef=useRef(null)
  const [image,setImage]=useState("")
  const [showPass, setShowPass] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const {REACT_APP_SERVER_ADDRESS}=process.env
  const imageUrl=image && URL.createObjectURL(image)
  

  const {loading}=useSelector((state)=>{return {loading:state.AuthReducer.loading}})


  const handleUpload=()=>{
       ImageRef.current.click()
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!image){
      toast.error("Please select profile image !", {
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
    else if( name && email && password && gender){
      const fileName=uid()+image.name;
      const storageRef=ref(storage,`profile/${fileName}`)

      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.floor(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setShowProgress(true);
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
         
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const payload={
              name:name,
              image:downloadURL,
              gender:gender,
              email:email,
              password:password
            }
            setShowProgress(false)
          dispatch(signupUser(payload)).then((res)=>{
             
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
                setImage("")
                setEmail("")
                setPassword("")
                setName("")
                if(res.payload.mesg==="Signup Successful !"){
                  setTimeout(()=>{
                    navigate("/admin")
                  },2000)
                }
              
            })
           
            .catch((err)=>{
              toast.warn(err, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            })
           
          });
        }
      );
  
    }
    else{
      toast.error("All fields are required !", {
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

  const handleGoogleSignup=(e)=>{
    e.preventDefault()
    window.open(`${REACT_APP_SERVER_ADDRESS}/auth/google`,'_self');

 }


  return (
    <>
    <Navbar/>
    <div> 
        {loading ?<Loading/> :<SignupWrapper>
        <div className="logo-in-log">
      
      <SiCodechef className="logo-sign"/>
 
      <h1>Recipe</h1></div>
        <HeadingWrapper>
          <h1>Sign Up</h1>
         
         <MainDiv>
       
         <SignupImage>
          <div onClick={handleUpload}>
            { !imageUrl && <HiOutlineUserCircle className="user-icon"/> }
            { imageUrl && <img src={imageUrl} alt="profile" />}
          </div>
          {showProgress && (
              <div className="progress-main">
                <div
                  style={{
                    height: "15px",
                    width: `${progress}%`,
                   borderRadius:"6px",
                    backgroundColor: "rgb(41 182 218)",
                  }}
                ></div><p className="percentage">{`${progress}%`}</p>
              </div>
            )}
         </SignupImage>

         <form >
          <InputWrapper isFocus={isFocus} showPass={showPass}>
         <input type="file" hidden ref={ImageRef} onChange={(e)=>setImage(e.target.files[0])}/>
          <label>Full Name</label><br/>
           <input className="em-inp" value={name} type="text" onChange={(e)=>setName(e.target.value)}></input><br/>
           <label>Gender</label><br/>
           <select onChange={(e)=>setGender(e.target.value)} style={{borderRadius:"5px",height:"35px",width:"85px",fontFamily:"sans-serif"}}className="em-inp">
            <option value="#">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
           </select>
           <br/>
           <label>Email</label><br/>
           <input className="em-inp" value={email} type="email" onChange={(e)=>setEmail(e.target.value)}></input><br/>
           <label>Password</label><br/>
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
           <SubmitWrapper showProgress={showProgress} loading={loading}>
           <button disabled={showProgress || loading} onClick={handleSubmit} >{showProgress ? "Image Uploading... ":loading?"Submitting..." : "Submit"}</button>
           
           </SubmitWrapper>
           <div className="google-btn-wrapper">
           <div  className="or-div">
            <h3>OR</h3>
           </div>

           <div className="google-btn-div" >
            <span><FcGoogle className="google-icon"/></span>
           <button onClick={handleGoogleSignup}>SIGN UP WITH GOOGLE</button>
           </div>
   
          </div>
          </InputWrapper>
           
         </form>
       
         <h5>Already have an account ?<NavLink to="/login">Sign In</NavLink></h5> 

         </MainDiv>
         
         </HeadingWrapper>
         <ToastContainer/>
      </SignupWrapper>}

      </div>
    </>
         
  
  )
}

export default Signup
