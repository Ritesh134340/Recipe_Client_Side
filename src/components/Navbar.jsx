import React,{useState} from 'react'
import { NavWrapper } from '../styles/userStyle/navbar.styled'
import {SiCodechef} from "react-icons/si";
import { NavLink } from '../styles/userStyle/link.styled';
import {GiHamburgerMenu} from "react-icons/gi"
import {RxCross2} from "react-icons/rx"
 

const Navbar = ({color,link}) => {
  const [show,setShow]=useState(false)
  return (
 
      <NavWrapper color={color} show={show}>
        <div className="nav-left">
          <NavLink color="red" to="/">
          <SiCodechef className="chef-icon"/>
          </NavLink>
       
        </div>

        <div className="nav-right">
           <div className="ham-icon-div">
            <GiHamburgerMenu className="ham-icon" onClick={()=>setShow(!show)}/>
            <RxCross2 className="cross-icon" onClick={()=>setShow(!show)}/>
           </div>

            <div className="tabs-div">
           <NavLink to="/favourite" color={link} onClick={()=>setShow(false)}>Favourites</NavLink>
           <NavLink to="/login">
           <button className="log-btn">Log in</button>
           </NavLink>
           </div>
          
        </div>
      </NavWrapper>
 
  )
}

export default Navbar
