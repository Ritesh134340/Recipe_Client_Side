import React, { useRef,useEffect } from 'react'
import {useNavigate} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import { HeadingWrapper, SignupImage , InputWrapper, MainDiv, NavLink, SignupWrapper, SubmitWrapper }  from "../../styles/userStyle/signup.style"
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {signupUser} from "../../redux/AuthRedux/action"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import PreviewImage from '../components/PreviewImage'
import {SiCodechef} from "react-icons/si";
import Navbar from '../../components/Navbar';

const Signup = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const ImageRef=useRef(null)
  const [image,setImage]=useState("")
  const {REACT_APP_SERVER_ADDRESS}=process.env

  

  const {isLoading}=useSelector((state)=>{return {isError:state.AuthReducer.isError,isLoading:state.AuthReducer.isLoading}})


  const handleUpload=()=>{
       ImageRef.current.click()
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
  //   const formData=new FormData()
  //   if(image!==""){
  //     formData.append("image",image)
  //   }
  //   formData.append("first_name",name)
  //   formData.append("last_name",last)
  //   formData.append("email",email)
  //   formData.append("password",password)

  //   const config = {     
  //     headers: { 'content-type': 'multipart/form-data' }
  // }

  
  //   if(name && last && email && password){
      
  //      dispatch(signup({formData,config})).then((res)=>{
  //       let resp=(res.payload.data.mesg)
  //       toast.success(resp,{
  //         position: "top-center",
  //         autoClose: 2000,
  //         hideProgressBar: true,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "colored",
  //         })
  //        setTimeout(()=>{
  //         navigate("/login")
  //        },2200)
        
  //      }).catch((err)=>{
  //       console.log(err)
  //      })
  //   }
  }

  const handleGoogleSignup=(e)=>{
    e.preventDefault()
    window.open(`${REACT_APP_SERVER_ADDRESS}/auth/google`,'_self');

 }


  return (
    <>
    <Navbar/>
    <div> 
        {isLoading ?<img src="https://createwebsite.net/wp-content/uploads/2015/09/GD.gif" alt="Loading..." style={{height:"150px",display:"flex",alignItems:"center",justifyContent:"center",margin:"auto",marginTop:"200px"}}></img> :<SignupWrapper>
        <div className="logo-in-log">
      
      <SiCodechef className="logo-sign"/>
 
      <h1>Recipe</h1></div>
        <HeadingWrapper>
          <h1>Sign Up</h1>
         
         <MainDiv>
       
         <SignupImage>
          <div onClick={handleUpload}>
             {/* {image!=="" && <PreviewImage file={image}/>}  */}
          </div>

         </SignupImage>

         <form onSubmit={handleSubmit}>
          <InputWrapper>
         <input type="file" hidden ref={ImageRef} onChange={(e)=>setImage(e.target.files[0])}/>
          <label>Full Name</label><br/>
           <input className="em-inp" value={name} type="text" onChange={(e)=>setName(e.target.value)}></input><br/>
           <label>Email</label><br/>
           <input className="em-inp" value={email} type="email" onChange={(e)=>setEmail(e.target.value)}></input><br/>
           <label>Password</label><br/>
           <input className="em-inp" value={password}  type="password" onChange={(e)=>setPassword(e.target.value)}></input><br/>
           <SubmitWrapper>
           <input type="submit"></input>
           
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
