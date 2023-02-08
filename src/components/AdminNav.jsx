import React, { useState, useEffect, useRef } from "react";
import { AdminWrapper, Tab } from "../styles/adminStyle/admin.styled";
import { BiUserPlus } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs";
import { NavLink } from "../styles/userStyle/link.styled";
import { AiOutlineHome } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {logoutUser} from "../redux/AuthRedux/action"
import {useNavigate} from "react-router-dom"

const AdminNav = ({ selected }) => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const profile = useSelector((state) => state.AuthReducer.profile) || "";
  const token = useSelector((state) => state.AuthReducer.token);
  const role= useSelector((state) => state.AuthReducer.role);

  const imageUrl =role==="admin" && token && profile && profile.image;
  const name =role==="admin" && token && profile && profile.name;
  const email =role==="admin" && token && profile && profile.email;

  const handleLogout=()=>{
    dispatch(logoutUser())
    navigate("/")
      
  }


  return (
   <>
    <AdminWrapper>
      <div className="main-div">
        <div className="navigator">
          <div className="sidebar-profile">
           <div className="img-wrapper">
           <div className="side-profile-div">
            <img className='profile-img-side' src={imageUrl} alt="profile" />
           
           </div>
          
            <p className="wel">Welcome !</p>
           </div>
           <p className="name-p"> {name}</p>
            <p className="common-p lower-p">{email}</p>
          </div>
         
          <NavLink to="/admin">
            <Tab selected={selected === "home"} className="common-sidebar-div">
              <AiOutlineHome />

              <p>Home</p>
            </Tab>
          </NavLink>
          <NavLink to="/newchef">
            <Tab
              selected={selected === "register"}
              className="common-sidebar-div"
            >
              <BiUserPlus />
              <p>Register</p>
            </Tab>
          </NavLink>
          <NavLink to="/videos">
            <Tab
              selected={selected === "uploads"}
              className="common-sidebar-div"
            >
              <BsCameraVideo />

              <p>Uploads</p>
            </Tab>
          </NavLink>
          <button className="admin-logout-btn" onClick={handleLogout}>Log out</button>  
        </div>
      </div>
    </AdminWrapper>
 
   </>
  );
};

export default AdminNav;
