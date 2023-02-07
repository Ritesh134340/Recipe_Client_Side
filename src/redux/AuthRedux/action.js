import * as  types from "./actionTypes"
import axios from "axios";


const {REACT_APP_SERVER_ADDRESS}=process.env






export const loginUser=(payload)=>(dispatch)=>{
 dispatch({type:types.LOGIN_REQUEST})

 return axios.post(`${REACT_APP_SERVER_ADDRESS}/user/login`,payload).then((res)=>{
    return dispatch({type:types.LOGIN_SUCCESS,payload:res.data})
 })
 .catch((err)=>{
    dispatch({type:types.LOGIN_FAILURE})
 })

}



export const signupUser=(payload)=>(dispatch)=>{
 dispatch({type:types.SIGNUP_REQUEST})
  return axios.post(`${REACT_APP_SERVER_ADDRESS}/user/signup`,payload).then((res)=>
    dispatch({type:types.SIGNUP_SUCCESS,payload:res.data})
 )
 .catch((err)=>{
    dispatch({type:types.SIGNUP_FAILURE})
 })
}