import React from "react";
import * as types from "./actionTypes";

const initialState = {
  loading: false,
  error: false,
  uploadedVideos: [],
  filteredUploadedVideos: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {


    case types.GET_ALL_VIDEOS_REQUEST:
      return { ...state, loading: true, error: false };
    case types.GET_ALL_VIDEOS_SUCCESS:
      return { ...state, loading: false, error: false,uploadedVideos:payload,filteredUploadedVideos:payload };
    case types.GET_ALL_VIDEOS_FAILURE:
      return { ...state, loading: false, error: true };


    case types.FILTER_UPLOADED_VIDEOS:
      return { ...state, filteredUploadedVideos: payload };


      case types.ADD_TO_FAVOURITE_REQUEST : return {...state,loading:true,error:false}
      case types.ADD_TO_FAVOURITE_SUCCESS : return {...state,loading:false,error:false}
      case types.ADD_TO_FAVOURITE_FAILURE : return {...state,loading:false,error:true}


      case types.GET_VIDEO_BY_ID_REQUEST : return {...state,loading:true,error:false}
      case types.GET_VIDEO_BY_ID_SUCCESS : return {...state,loading:false,error:false}
      case types.GET_VIDEO_BY_ID_FAILURE : return {...state,loading:false,error:true}



      case types.GET_FAVOURITE_REQUEST : return {...state,loading:true,error:false}
      case types.GET_FAVOURITE_SUCCESS : return {...state,loading:false,error:false}
      case types.GET_FAVOURITE_FAILURE: return {...state,loading:false,error:true}

      case types.REMOVE_FAVOURITE_REQUEST : return {...state,loading:true,error:false}
      case types.REMOVE_FAVOURITE_SUCCESS : return {...state,loading:false,error:false}
      case types.REMOVE_FAVOURITE_FAILURE: return {...state,loading:false,error:true}


      
    default:
      return state;
  }
};

export { reducer };
