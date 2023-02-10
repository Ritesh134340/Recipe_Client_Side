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

export const searchVideoFilter=(payload)=>(dispatch)=>{
    dispatch({type:types.SEARCH_VIDEO_FILTER,payload})
}

export const chefById=(payload)=>(dispatch)=>{
    dispatch({type:types.GET_CHEF_WITH_ID_REQUEST});
   return  axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/admin/chef/id`,payload).then((res)=>{
       return  dispatch({type:types.GET_CHEF_WITH_ID_SUCCESS,payload:res.data})
    }).catch((err)=>{
        dispatch({type:types.GET_CHEF_WITH_ID_FAILURE})
    })
    
}


export const postVideo=(payload)=>(dispatch)=>{
    dispatch({type:types.VIDEO_POST_REQUEST})

    return axios
      .post(
        `${process.env.REACT_APP_SERVER_ADDRESS}/admin/create/video`,
        payload
      ).then((res)=>{
       
       return dispatch({type:types.VIDEO_POST_SUCCESS,payload:res.data,status:res.status,mesg:res.data.mesg})
      }).catch((err)=>{
      
       return  dispatch({type:types.VIDEO_POST_FAILURE,status:err.response.status,mesg:err.response.data.mesg})
      })
}

export const deleteVideo=(payload)=>(dispatch)=>{
    dispatch({type:types.DELETE_VIDEO_REQUEST})
    return axios.delete(`${process.env.REACT_APP_SERVER_ADDRESS}/admin/delete/video/${payload}`)
    .then((res)=>{
      return  dispatch({type:types.DELETE_VIDEO_SUCCESS,payload:res.data,successCode:res.status})
    })
    .catch((err)=>{
      console.log(err)
        return dispatch({type:types.DELETE_VIDEO_FAILURE,errCode:err.response.status,mesg:err.response.data.mesg})
    })

}


export const getUser=()=>(dispatch)=>{
  dispatch({type:types.GET_USER_REQUEST})
  return axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/admin/users`)
  .then((res)=>{
   return  dispatch({type:types.GET_USER_SUCCESS,payload:res.data.userDetails})
   
  })
  .catch((err)=>{
    dispatch({type:types.GET_USER_FAILURE})
  })

}

export const deleteUser=(id)=>(dispatch)=>{
  dispatch({type:types.DELETE_USER_REQUEST})
  return axios.delete(`${process.env.REACT_APP_SERVER_ADDRESS}/admin/delete/user/${id}`).then((res)=>
  dispatch({type:types.DELETE_USER_SUCCESS,payload:res.data,successCode:res.status})
  )
  .catch((err)=>{
   return  dispatch({type:types.DELETE_USER_FAILURE,errorCode:err.response.status,mesg:err.response.data.mesg})
  })
   
  
}

export const filterUsers=(payload)=>(dispatch)=>{
    dispatch({type:types.FILTER_USERS,payload:payload})
}


export const getVideos=(urlString)=>(dispatch)=>{
 
  dispatch({type:types.GET_ALL_VIDEOS_AD_REQUEST})
  axios.get(urlString).then((res)=>{
  
   return  dispatch({type:types.GET_ALL_VIDEOS_AD_SUCCESS,payload:res.data.data,successCode:res.status})
  })
  .catch((err)=>{
    return dispatch({type:types.GET_ALL_VIDEOS_AD_FAILURE,errCode:err.response.data.mesg})
  })

}

export const filterAllVideosAdmin=(payload)=>(dispatch)=>{
  dispatch({type:types.FILTER_ALL_VIDEOS,payload:payload})
}