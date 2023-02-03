import React, { useState, useEffect, useRef } from "react";
import { AdminWrapper, Tab } from "../styles/adminStyle/admin.styled";
import { BiUserPlus } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs";
import { NavLink } from "../styles/userStyle/link.styled"
import AdminRoute from "../routes/AdminRoute";
import {AiOutlineHome} from "react-icons/ai"

const Admin = () => {
  const [tab,setTab]=useState("Home")

  return (
    <AdminWrapper>
      
      <div className="main-div">
        <div className="navigator">
        <NavLink to="/">
          
            <Tab selected={tab==="Home"}  className="common-sidebar-div" onClick={()=>setTab("Home")}>
              <AiOutlineHome />

              <p>Home</p>
            </Tab>
          </NavLink>
          <NavLink to="/newchef">
            <Tab selected={tab==="Register"} className="common-sidebar-div" onClick={()=>setTab("Register")}>
              <BiUserPlus  />
              <p>Register</p>
            </Tab>
          </NavLink>
          <NavLink to="/videos">
            <Tab selected={tab==="Video"} className="common-sidebar-div" onClick={()=>setTab("Video")}>
              <BsCameraVideo />

              <p>Uploads</p>
            </Tab>
          </NavLink>

        
        </div>
        <div className="admin-body">
          <AdminRoute/>
        </div>
      </div>
    </AdminWrapper>
  );
};

export default Admin;
