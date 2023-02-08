import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AdminPrivate = ({children}) => {
    
   const {token,role}=useSelector((state)=>{return { token:state.AuthReducer.token,role:state.AuthReducer.role}})
    
    if(role!=="admin" || !token){
      return  <Navigate to="/" />
    }
    return children
}

export default AdminPrivate
