import React from 'react'
import * as types from "./actionTypes"
const initialState={
  byId:[],
  filtered:[],
  data:[],
  videos:[],
  loading:false,
  error:false
}
const reducer = (state=initialState,action) => {
  const {type,payload}=action;

 switch(type){
  case types.GET_CHEF_WITH_ID_REQUEST : return {...state,loading:true,error:false}
  case types.GET_CHEF_WITH_ID_SUCCESS: return {...state,byId:payload.document,videos:payload.videos,loading:false,error:false}
  case types.GET_CHEF_WITH_ID_FAILURE : return {...state,loading:false,error:true}
  case types.CHEF_REQUEST : return {...state,loading:true,error:false};
  case types.CHEF_SUCCESS : return {...state,data:payload,filtered:payload,error:false,loading:false};
  case types.CHEF_FAILURE : return {...state,error:true,loading:false};

  case types.SEARCH_FILTER : return {...state,filtered:payload}

  case types.VIDEO_POST_REQUEST : return {...state,error:false,loading:true}

  case types.VIDEO_POST_SUCCESS : return {...state,error:false,loading:false}

  case types.VIDEO_POST_FAILURE : return {...state,error:true,loading:false}

  case types.DELETE_VIDEO_REQUEST: return {...state,error:false,loading:true}

  case types.DELETE_VIDEO_SUCCESS:return {...state,error:false,loading:false}

  case types.DELETE_VIDEO_FAILURE : return {...state,error:true,loading:false}
  default :return state
 }
}

export  {reducer}
