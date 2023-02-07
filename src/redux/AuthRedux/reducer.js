import React from 'react'
import * as types from "./actionTypes"
import { SaveToLocalStorage,GetFromLocalStorage } from '../../utils/LocalStorageData'

const token=GetFromLocalStorage("token") || ""
const profile=GetFromLocalStorage("profile") || ""

const initialState={
  loading:false,
  error:false,
  token:token,
  profile:profile,
  role:profile.role || ""
}

const reducer = (state=initialState,action) => {
  const {type,payload} =action;

 switch(type){
  case types.LOGIN_REQUEST: return {...state,loading:true,error:false}
  case types.LOGIN_SUCCESS:
    if(payload.profile && payload.token){
    SaveToLocalStorage("profile",payload.profile)
    SaveToLocalStorage("token",payload.token)
    }
    
  return {...state,loading:false,error:false}

  case types.LOGIN_FAILURE:return {...state,loading:false,error:true};

  case types.SIGNUP_REQUEST :return {...state,loading:true,error:false};
  case types.SIGNUP_SUCCESS: return {...state,loading:false,error:false};
  case types.SIGNUP_FAILURE : return {...state,loading:false,error:true}
  default :return state
 }
}

export  {reducer}
