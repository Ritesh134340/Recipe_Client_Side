import React, { useState } from "react";
import { NavWrapper } from "../styles/userStyle/navbar.styled";
import { SiCodechef } from "react-icons/si";
import { NavLink } from "../styles/userStyle/link.styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import {logoutUser} from "../redux/AuthRedux/action"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom"


const Navbar = ({ color, link }) => {
  const [show, setShow] = useState(false);
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const profile = useSelector((state) => state.AuthReducer.profile) || "";
  const token = useSelector((state) => state.AuthReducer.token);
  const role= useSelector((state) => state.AuthReducer.role);


  const imageUrl =role==="user" &&  token && profile && profile.image;
  const name =role==="user" && token && profile && profile.name;
  const email =role==="user" && token && profile && profile.email;
  const [showProfile, setShowProfile] = useState(false);
  const handleLogout=()=>{
    dispatch(logoutUser())
    toast.success("Logout Successful !", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      })
      setTimeout(()=>{
        navigate("/")
      },2000)
  }

  return (
    <>
     <NavWrapper profileDetails={showProfile} color={color} show={show}>
      <div className="nav-left">
        <NavLink color="red" to="/">
          <SiCodechef className="chef-icon" />
        </NavLink>
      </div>

      <div className="nav-right">
        <div className="ham-icon-div">
          <GiHamburgerMenu
            className="ham-icon"
            onClick={() => setShow(!show)}
          />
          <RxCross2 className="cross-icon" onClick={() => setShow(!show)} />
        </div>

        <div className="tabs-div">
          {token && role==="user" && <div className="profile-div">
            <div
              className="profile-image-div"
              onClick={() => setShowProfile(!showProfile)}
            >
              <img className="nav-profile-image" src={imageUrl} alt="profile" />
            </div>
            <p
              style={{
                color: link,
                letterSpacing: "0.5px",
                fontWeight: "bold",
              }}
            >
              {name}
            </p>
           
          </div>}
          <NavLink to="/favourite" color={link} onClick={() => setShow(false)}>
            Favourites
          </NavLink>

           {token && role==="user" &&  <button className="log-btn" onClick={handleLogout}>Log Out</button>}
          {(!token || role==="admin")  && (
            <NavLink to="/login">
              <button className="log-btn">Log in</button>
            </NavLink>
          )} 
        </div>
      </div>
     
    </NavWrapper>
    <ToastContainer/>
    </>
   
  );
};

export default Navbar;
