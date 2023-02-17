import axios from "axios";
import * as types from "./actionTypes";


export const getAllVideos=()=>(dispatch)=>{
    dispatch({type:types.GET_ALL_VIDEOS_REQUEST})
    return axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/app/getall/videos`).then((res)=>{
        return  dispatch({type:types.GET_ALL_VIDEOS_SUCCESS,payload:res.data.data,successCode:res.status})
    })
    .catch((err)=>{
        return dispatch({type:types.GET_ALL_VIDEOS_FAILURE,errCode:err.response.data.mesg})
    })
   
   
}


export const filterUploaded=(payload)=>(dispatch)=>{
    dispatch({type:types.FILTER_UPLOADED_VIDEOS,payload:payload})
}



export const getVideoById=(id)=>(dispatch)=>{
 dispatch({type:types.GET_VIDEO_BY_ID_REQUEST})
 return axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/app/get/video/${id}`)
 .then((res)=>{
    return dispatch({type:types.GET_VIDEO_BY_ID_SUCCESS,payload:res.data,status:res.status})
 })
  .catch((err)=>{
    return dispatch({type:types.GET_VIDEO_BY_ID_FAILURE,status:err.response.status,mesg:err.response.data.mesg})
  })
 
}

export const addToFavourite=(payload)=>(dispatch)=>{
    dispatch({type:types.ADD_TO_FAVOURITE_REQUEST})

   return  axios.patch(`${process.env.REACT_APP_SERVER_ADDRESS}/app/add/favourite`,payload)
   .then((res)=>{
        return dispatch({type:types.ADD_TO_FAVOURITE_SUCCESS,payload:res.data,status:res.status})
    })
    .catch((err)=>{
      return   dispatch({type:types.ADD_TO_FAVOURITE_FAILURE,status:err.response.status,mesg:err.response.data.mesg})
    })
   
   
}


export const getFavourite=(payload)=>(dispatch)=>{
  
    dispatch({type:types.GET_FAVOURITE_REQUEST})
    return axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/app/get/favourite`,payload).then((res)=>{
       return  dispatch({type:types.GET_FAVOURITE_SUCCESS,payload:res.data,status:res.status})
    })
    .catch((err)=>{
        return dispatch({type:types.GET_FAVOURITE_FAILURE,mesg:err.response.data.mesg,status:err.response.status})
    })
    
   
}


export const removeFavourite=(id,payload)=>(dispatch)=>{
    dispatch({type:types.REMOVE_FAVOURITE_REQUEST})
  return   axios.delete(`${process.env.REACT_APP_SERVER_ADDRESS}/app/delete/favourite/${id}`,payload)
    .then((res)=>{
        return dispatch({type:types.ADD_TO_FAVOURITE_SUCCESS,payload:res.data,status:res.status})
    })
    .catch((err)=>{
        return dispatch({type:types.ADD_TO_FAVOURITE_FAILURE,status:err.response.status,mesg:err.response.data.mesg})
    })
}


