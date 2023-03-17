import React from 'react'
import * as types from "./actionTypes"


const initialState={
  byId:[],
  filtered:[],
  data:[],
  videos:[],
  filteredVideos:[],
  loading:false,
  error:false,
  users:[],
  homeData:{},
  filteredUser:[],
  allVideos:[],
  allFilteredVideos:[]
}
const reducer = (state=initialState,action) => {
  const {type,payload}=action;

 switch(type){

  case types.FILTER_USERS : return {...state,filteredUser:payload}


  case types.GET_USER_REQUEST : return {...state,loading:true,error:false}
  case types.GET_USER_SUCCESS : return {...state,loading:false,error:false,users:payload,filteredUser:payload}
  case types.GET_USER_FAILURE :return {...state,loading:false,error:true}



  case types.DELETE_USER_REQUEST : return {...state,loading:true,error:false}
  case types.DELETE_USER_SUCCESS : return {...state,loading:false,error:false}
  case types.DELETE_USER_FAILURE : return {...state,loading:false,error:true}



  case types.GET_CHEF_WITH_ID_REQUEST : return {...state,loading:true,error:false}
  case types.GET_CHEF_WITH_ID_SUCCESS: return {...state,byId:payload.document,videos:payload.videos,filteredVideos:payload.videos,loading:false,error:false}
  case types.GET_CHEF_WITH_ID_FAILURE : return {...state,loading:false,error:true}




  case types.CHEF_REQUEST : return {...state,loading:true,error:false};
  case types.CHEF_SUCCESS : return {...state,data:payload,filtered:payload,error:false,loading:false};
  case types.CHEF_FAILURE : return {...state,error:true,loading:false};



  case types.SEARCH_FILTER : return {...state,filtered:payload}

  case types.SEARCH_VIDEO_FILTER : return {...state,filteredVideos:payload}


  case types.VIDEO_POST_REQUEST : return {...state,error:false,loading:true}
  case types.VIDEO_POST_SUCCESS : return {...state,error:false,loading:false}
  case types.VIDEO_POST_FAILURE : return {...state,error:true,loading:false}



  case types.DELETE_VIDEO_REQUEST: return {...state,error:false,loading:true}
  case types.DELETE_VIDEO_SUCCESS:return {...state,error:false,loading:false}
  case types.DELETE_VIDEO_FAILURE : return {...state,error:true,loading:false}


  case types.GET_HOME_DATA_REQUEST: return {...state,error:false,loading:true}
  case types.GET_HOME_DATA_SUCCESS:return {...state,homeData:payload.homeData,error:false,loading:false}
  case types.GET_HOME_DATA_FAILURE : return {...state,error:true,loading:false}


  case types.UPDATE_HOME_DATA_REQUEST: return {...state,error:false,loading:true}
  case types.UPDATE_HOME_DATA_SUCCESS:return {...state,error:false,loading:false}
  case types.UPDATE_HOME_DATA_FAILURE : return {...state,error:true,loading:false}


  case types.ADD_HOME_DATA_REQUEST: return {...state,error:false,loading:true}
  case types.ADD_HOME_DATA_SUCCESS:return {...state,error:false,loading:false}
  case types.ADD_HOME_DATA_FAILURE : return {...state,error:true,loading:false}


  case types.DELETE_HOME_DATA_REQUEST: return {...state,error:false,loading:true}
  case types.DELETE_HOME_DATA_SUCCESS:return {...state,error:false,loading:false}
  case types.DELETE_HOME_DATA_FAILURE : return {...state,error:true,loading:false}



  case types.UPDATE_HEROIMAGE_DATA_REQUEST: return {...state,error:false,loading:true}
  case types.UPDATE_HEROIMAGE_DATA_SUCCESS:return {...state,error:false,loading:false}
  case types.UPDATE_HEROIMAGE_DATA_FAILURE : return {...state,error:true,loading:false}



  case types.GET_ALL_VIDEOS_AD_REQUEST : return {...state,loading:true,error:false};
 case types.GET_ALL_VIDEOS_AD_SUCCESS : return {...state,loading:false,error:false,allVideos:payload,allFilteredVideos:payload}
 case types.GET_ALL_VIDEOS_AD_FAILURE : return {...state,loading:false,error:true}

 case types.FILTER_ALL_VIDEOS : return {...state,allFilteredVideos:payload}

  default :return state
 }


 
}

export  {reducer}
