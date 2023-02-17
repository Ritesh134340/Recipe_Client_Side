import * as  types from "./actionTypes"
import axios from "axios";


const {REACT_APP_SERVER_ADDRESS}=process.env






export const loginUser=(payload)=>(dispatch)=>{
 dispatch({type:types.LOGIN_REQUEST})

 return axios.post(`${REACT_APP_SERVER_ADDRESS}/user/login`,payload).then((res)=>{
    return dispatch({type:types.LOGIN_SUCCESS,payload:res.data,status:res.status,statusText:res.statusText})
 })
 .catch((err)=>{
   
     return dispatch({type:types.LOGIN_FAILURE,err:err.response.status,mesg:err.response.data.mesg})
 })

}



export const signupUser=(payload)=>(dispatch)=>{
 dispatch({type:types.SIGNUP_REQUEST})
  return axios.post(`${REACT_APP_SERVER_ADDRESS}/user/signup`,payload).then((res)=>
    dispatch({type:types.SIGNUP_SUCCESS,payload:res.data,status:res.status,statusText:res.statusText})
 )
 .catch((err)=>{
   
   return dispatch({type:types.SIGNUP_FAILURE,err:err.response.status,mesg:err.response.data.mesg})
 })
}

export const logoutUser=()=>(dispatch)=>{
   dispatch({type:types.LOGOUT_REQUEST})
}

export const getProfile=(token)=>(dispatch)=>{
   dispatch({type:types.GET_PROFILE_REQUEST})
   return axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/user/profile`,{headers:{'Authorization':`Bearer ${token}`}}).then((res)=>{
      return dispatch({type:types.GET_PROFILE_SUCCESS,payload:res.data,status:res.status})
   })
   .catch((err)=>{
      return dispatch({type:types.GET_PROFILE_FAILURE,status:err.response.status,mesg:err.response.data.mesg})
   })
}

export const getOtp=(payload)=>(dispatch)=>{
   dispatch({type:types.GET_OTP_REQUEST})
   return axios.post(`${REACT_APP_SERVER_ADDRESS}/user/get/otp`,payload).then((res)=>{
    return dispatch({type:types.GET_OTP_SUCCESS,payload:res.data,status:res.status})
   })
   .catch((err)=>{
     return dispatch({type:types.GET_OTP_FAILURE,status:err.response.status,mesg:err.response.data.mesg})
   })
}

export const verifyOtp=(payload)=>(dispatch)=>{
   dispatch({type:types.VERIFY_OTP_REQUEST})
  return  axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/user/otp/verify`,payload)
   .then((res)=>{
   return dispatch({type:types.VERIFY_OTP_SUCCESS,status:res.status,payload:res.data})
   })
   .catch((err)=>{
  return  dispatch({type:types.VERIFY_OTP_FAILURE,status:err.response.status,mesg:err.response.data.mesg})
   })
   
  
}

export const resetPassword=(payload)=>(dispatch)=>{
   dispatch({type:types.RESET_PASSWORD_REQUEST})
   return axios.patch(`${process.env.REACT_APP_SERVER_ADDRESS}/user/password/change`,payload).then((res)=>{
    return dispatch({type:types.RESET_PASSWORD_SUCCESS,payload:res.data,status:res.status})
   })
   .catch((err)=>{
      return dispatch({type:types.RESET_PASSWORD_FAILURE,status:err.response.status,mesg:err.response.data.mesg})
   })
}