import React ,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const UserPrivate = ({children}) => {

    const token=useSelector((state)=>state.AuthReducer.token)
   
    if(token===""){
       return  <Navigate to="/login"/>
     }
     return children
}

export default UserPrivate
