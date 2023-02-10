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

