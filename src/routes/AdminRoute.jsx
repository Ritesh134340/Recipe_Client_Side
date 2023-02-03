import React from 'react'
import {Routes,Route} from "react-router-dom"
import AllVideos from '../pages/admin/AllVideos'
import RegisterChef from "../pages/admin/RegisterChef"
import AdminHome from '../pages/admin/AdminHome'
import ChefDetails from '../pages/admin/ChefDetails'

const AdminRoute = () => {
  return (
    <Routes>
       <Route path="/" element={<AdminHome/>} />
       <Route path="/newchef" element={<RegisterChef/>} />
       <Route path="/videos" element={<AllVideos/>} />
       <Route path="/chefdetails/:id" element={<ChefDetails/>} />
    </Routes>
  )
}

export default AdminRoute
