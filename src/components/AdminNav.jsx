import React, { useState, useEffect, useRef } from "react";
import { AdminWrapper, Tab } from "../styles/adminStyle/admin.styled";
import { BiUserPlus } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs";
import { NavLink } from "../styles/userStyle/link.styled";
import { AiOutlineHome } from "react-icons/ai";

const AdminNav = ({ selected }) => {
  return (
    <AdminWrapper>
      <div className="main-div">
        <div className="navigator">
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
        </div>
      </div>
    </AdminWrapper>
  );
};

export default AdminNav;
