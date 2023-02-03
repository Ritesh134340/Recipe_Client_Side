import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "../pages/user/Home"
import Favourite from '../pages/user/Favourite'
import Login from "../pages/user/Login"
import Signup from "../pages/user/Signup"


const UserRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/favourite" element={<Favourite/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
     
    </Routes>
  )
}

export default UserRoute
