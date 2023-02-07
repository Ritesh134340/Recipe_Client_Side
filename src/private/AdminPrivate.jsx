import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AdminPrivate = ({children}) => {
    
    // const {profile,token} =useSelector((state)=>{return {profile:state.AuthReducer.profile,token:state.AuthReducer.token}})

    const profile=JSON.parse(localStorage.getItem("profile")) || ""
    
    if(profile.role!=="admin" ){
      return  <Navigate to="/" />
    }
    return children
}

export default AdminPrivate
