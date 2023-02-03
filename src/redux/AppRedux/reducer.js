import React from 'react'
import * as types from "./actionTypes"
const initialState={
  byId:[],
  loading:false,
  error:false

}
const reducer = (state=initialState,action) => {
  const {type,payload}=action;

 switch(type){
  
  default :return state
 }
}

export  {reducer}
