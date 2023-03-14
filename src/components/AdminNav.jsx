import React, { useState, useEffect, useRef } from "react";
import { AdminWrapper, Tab } from "../styles/adminStyle/admin.styled";
import { BiUserPlus } from "react-icons/bi";
import {IoLogOutOutline} from "react-icons/io5"
import { BsCameraVideo } from "react-icons/bs";
import { NavLink } from "../styles/userStyle/link.styled";
import { AiOutlineHome } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {logoutUser} from "../redux/AuthRedux/action"
import {HiOutlineUsers} from 'react-icons/hi'
import {useNavigate} from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai"
import {RxCross2} from "react-icons/rx"

const AdminNav = ({ selected }) => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const profile = useSelector((state) => state.AuthReducer.profile) || "";
  const token = useSelector((state) => state.AuthReducer.token);
  const role= useSelector((state) => state.AuthReducer.role);
  const [showMenu ,setShowMenu]=useState(false)
  const imageUrl =role==="admin" && token && profile && profile.image;
  const name =role==="admin" && token && profile && profile.name;
  const email =role==="admin" && token && profile && profile.email;

  const handleLogout=()=>{
    dispatch(logoutUser())
    navigate("/")
      
  }


  return (
   
      
      <AdminWrapper navigator={showMenu}>
        <div className="admin-menu-wrapper">
        <AiOutlineMenu style={{display:!showMenu ? "block" : "none"}} onClick={()=>setShowMenu(true)} className="admin-menu-icon"/>
      <RxCross2 onClick={()=>setShowMenu(false)} className="admin-cross-icon" style={{display:showMenu ? "block" : "none"}} />

        </div>


   <div className="admin-wrapper-main">
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

  <NavLink to="/users">
    <Tab
      selected={selected === "users"}
      className="common-sidebar-div"
    >
      <HiOutlineUsers/>

      <p>Users</p>
    </Tab>
  </NavLink>



    <div  onClick={handleLogout}className="log-out-main">
    <IoLogOutOutline className="sign-out-icon"/>
   <p className="admin-logout-btn">Log out</p> 
    </div>
   
   </div>
   </div>
   
 

 
      </AdminWrapper>
    
   
 

  );
};

export default AdminNav;
