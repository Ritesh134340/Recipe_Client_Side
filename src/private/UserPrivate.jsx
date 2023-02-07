import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const UserPrivate = ({children}) => {
   
    const {profile,token} =useSelector((state)=>{return {profile:state.AuthReducer.profile,token:state.AuthReducer.token}})
    if(!token || profile.role!=="user"){
       return  <Navigate to="/login"/>
     }
     return children
}

export default UserPrivate
