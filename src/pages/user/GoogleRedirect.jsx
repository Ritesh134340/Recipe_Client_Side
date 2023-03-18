import React, { useEffect } from "react";
import {useDispatch } from "react-redux";
import { getProfile } from "../../redux/AuthRedux/action";
import jwt_decode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

const GoogleRedirect = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const userString = new URLSearchParams(window.location.search).get("jwt");

    const decoded = jwt_decode(userString);

    const token = decoded.auth;
    dispatch(getProfile(token)).then((res) => {
      if (res.status === 200) {
        toast.success(res.payload.mesg, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else if (res.status !== 200) {
        toast.error(res.mesg, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    });
  }, []);

  return (
    <div>
      <Loading />
      <ToastContainer />
    </div>
  );
};

export default GoogleRedirect;
