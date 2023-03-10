import React from "react";
import * as types from "./actionTypes";

const initialState = {
  loading: false,
  error: false,
  uploadedVideos: [],
  filteredUploadedVideos: [],
  searchTerm: "",
  filteredVideos:[],
  byId:[],
  videos:[],
  filteredFavourite:[],
  favouriteVideo:[],
  searchData:[],
  channelData:[],
  filteredChannel:[]
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_ALL_VIDEOS_REQUEST:
      return { ...state, loading: true, error: false };
    case types.GET_ALL_VIDEOS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        uploadedVideos: payload,
        filteredUploadedVideos: payload,
      };
    case types.GET_ALL_VIDEOS_FAILURE:
      return { ...state, loading: false, error: true };

    case types.FILTER_UPLOADED_VIDEOS:
      return { ...state, filteredUploadedVideos: payload };

    case types.ADD_TO_FAVOURITE_REQUEST:
      return { ...state, loading: true, error: false };
    case types.ADD_TO_FAVOURITE_SUCCESS:
      return { ...state, loading: false, error: false };
    case types.ADD_TO_FAVOURITE_FAILURE:
      return { ...state, loading: false, error: true };

    case types.GET_VIDEO_BY_ID_REQUEST:
      return { ...state, loading: true, error: false };
    case types.GET_VIDEO_BY_ID_SUCCESS:
      return { ...state, loading: false, error: false };
    case types.GET_VIDEO_BY_ID_FAILURE:
      return { ...state, loading: false, error: true };

    case types.GET_FAVOURITE_REQUEST:
      return { ...state, loading: true, error: false };
    case types.GET_FAVOURITE_SUCCESS:
      return { ...state, loading: false, error: false,favouriteVideo:payload.favourite,filteredFavourite:payload.favourite };
    case types.GET_FAVOURITE_FAILURE:
      return { ...state, loading: false, error: true };

    case types.REMOVE_FAVOURITE_REQUEST:
      return { ...state, loading: true, error: false };
    case types.REMOVE_FAVOURITE_SUCCESS:
      return { ...state, loading: false, error: false};

    case types.REMOVE_FAVOURITE_FAILURE:
      return { ...state, loading: false, error: true };

    case types.SET_SEARCH_TERM:
      return { ...state, searchTerm: payload };

    case types.SEARCH_REQUEST:
      return { ...state, loading: true, error: false };
    case types.SEARCH_SUCCESS:
      return { ...state, loading: false, error: false,searchData:payload.searchResult };
    case types.SEARCH_FAILURE:
      return { ...state, loading: false, error: true };



    case types.GET_CHEF_BY_ID_REQUEST:
      return { ...state, loading: true, error: false };
    case types.GET_CHEF_BY_ID_SUCCESS:
      return { ...state, loading: false,byId:payload.document,videos:payload.videos,filteredVideos:payload.videos, error: false };
    case types.GET_CHEF_BY_ID_FAILURE:
      return { ...state, loading: false, error: true };

      case types.SEARCH_VIDEO_FILTER : return {...state,filteredVideos:payload}

      case types.SEARCH_FILTER : return {...state,filteredChannel:payload}

      case types.FILTER_FAVOURITE_VIDEOS : return {...state,filteredFavourite:payload}


      case types.CHEF_REQUEST: return {...state,loading:true,error:false}
      
      case types.CHEF_SUCCESS: return {...state,loading:false,error:false,channelData:payload,filteredChannel:payload}
      
      case types.CHEF_FAILURE: return {...state,loading:false,error:true}


      case type.SUBMIT_RATING_REQUEST: return {...state,loading:true,error:false}
      case type.SUBMIT_RATING_SUCCESS: return {...state,loading:false,error:false}
      case type.SUBMIT_RATING_FAILURE: return {...state,loading:false,error:true}
      
    default:
      return state;
  }
};

export { reducer };
