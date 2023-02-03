import axios from "axios";

import * as types from "./actionTypes";


export const getChef=()=>(dispatch)=>{
    dispatch({type:types.CHEF_REQUEST});

   return  axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/admin/get/chef`).then((res)=>{
       return  dispatch({type:types.CHEF_SUCCESS,payload:res.data.document})
    }).catch((err)=>{
        dispatch({type:types.CHEF_FAILURE})
    })
}

export const searchFilter=(payload)=>(dispatch)=>{
    dispatch({type:types.SEARCH_FILTER,payload})
}

export const chefById=(payload)=>(dispatch)=>{
    dispatch({type:types.GET_CHEF_WITH_ID_REQUEST});
    axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/admin/chef/id`,payload).then((res)=>{
        dispatch({type:types.GET_CHEF_WITH_ID_SUCCESS,payload:res.data.document})
    }).catch((err)=>{
        dispatch({type:types.GET_CHEF_WITH_ID_FAILURE})
    })
    
}