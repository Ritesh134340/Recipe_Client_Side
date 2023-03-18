import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const UserPrivate = ({ children }) => {
  const token = useSelector((state) => state.AuthReducer.token);
  const role = useSelector((state) => state.AuthReducer.role);

  if (role === "" || role === "admin" || token === "") {
    return <Navigate to="/login" />;
  }
  return children;
};

export default UserPrivate;
