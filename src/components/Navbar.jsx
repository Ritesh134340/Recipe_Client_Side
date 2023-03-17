import React, { useState, useRef } from "react";
import { NavWrapper } from "../styles/userStyle/navbar.styled";
import { SiCodechef } from "react-icons/si";

import { NavLink } from "../styles/userStyle/link.styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/AuthRedux/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { editProfile } from "../redux/AuthRedux/action";
import storage from "../utils/firebaseStorage";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import { uid } from "uid";

const Navbar = ({ color, link }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.AuthReducer.profile) || "";
  const token = useSelector((state) => state.AuthReducer.token);
  const role = useSelector((state) => state.AuthReducer.role);
  const [showProfileDetails, setShowProfileDetails] = useState(false);
  const loading = useSelector((state) => state.AuthReducer.loading);

  const imageUrl = role === "user" && token && profile && profile.image;
  const name = role === "user" && token && profile && profile.name;
  const email = role === "user" && token && profile && profile.email;
  const [showProfile, setShowProfile] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imageLoading, setImageLoading] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [imageFile, setImageFile] = useState("");
  const [editName, setEditName] = useState(name);
  const [editEmail, setEditEmail] = useState(email);
  const imageRef = useRef(null);

  const editImage = (imageFile && URL.createObjectURL(imageFile)) || imageUrl;

  const handleImageChange = () => {
    imageRef.current.click();
  };

  const deleteFirebaseImage = (url) => {
    const imagePath = decodeURIComponent(url.split("/o/")[1].split("?")[0]);
    const storageRef = ref(storage, imagePath);

    return deleteObject(storageRef);
  };

  const handleProfileEdit = () => {
    if (imageFile) {
      setImageLoading(true);

      deleteFirebaseImage(imageUrl)
        .then(() => {
          const fileName = uid() + imageFile.name;
          const storageRef = ref(storage, `profile/${fileName}`);

          const updateImage = uploadBytesResumable(storageRef, imageFile);

          updateImage.on(
            "state_changed",
            (snapshot) => {
              const progress = Math.floor(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              setShowProgress(true);
              setProgress(progress);
            },
            (error) => {
              console.log(error);
            },
            () => {
              getDownloadURL(updateImage.snapshot.ref).then((downloadURL) => {
                const payload = {};
                if (editName !== name) {
                  payload.name = editName;
                }
                if (editEmail !== email) {
                  payload.newEmail = editEmail;
                }

                payload.image = downloadURL;

                setImageLoading(false);

                dispatch(
                  editProfile(payload, {
                    headers: { Authorization: `Bearer ${token}` },
                  })
                ).then(() => {
                  setShowProfileDetails(false);
                  setImageLoading(false);
                  setShowProgress(false);
                  setProgress(0);
                });
              });
            }
          );
        })
        .catch((error) => {
          setImageLoading(false);
          console.log(error);
        });
    } else {
      const payload = {};

      if (editName !== name) {
        payload.name = editName;
      }
      if (editEmail !== email) {
        payload.newEmail = editEmail;
      }
      if (Object.keys(payload).length > 0) {
        dispatch(
          editProfile(payload, {
            headers: { Authorization: `Bearer ${token}` },
          })
        ).then(() => {
          setShowProfileDetails(false);
          setImageLoading(false);
          setShowProgress(false);
          setProgress(0);
        });
      }
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    toast.success("Logout Successful !", {
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
  };

  return (
    <>
      <NavWrapper
        profileDetails={showProfile}
        color={color}
        show={show}
        nameColor={link}
      >
        {showProfileDetails && (
          <div className="profile-details-div">
            <div className="nav-modal-content">
              <div className="close-wrapper">
                <RxCross2
                  onClick={() => setShowProfileDetails(false)}
                  className="details-close"
                />
              </div>

              <div className="main-content">
                <p className="manage-acc">Manage Account</p>

                <div className="edit-image-wrapper">
                  <input
                    ref={imageRef}
                    type="file"
                    hidden
                    onChange={(e) => setImageFile(e.target.files[0])}
                  />
                  <img src={editImage} alt="profile" />
                  <button
                    disabled={imageLoading}
                    className="change"
                    onClick={handleImageChange}
                  >
                    Change
                  </button>
                </div>
                {showProgress && (
                  <div className="progress-main">
                    <div
                      style={{
                        height: "15px",
                        width: `${progress}%`,
                        borderRadius: "6px",
                        backgroundColor: "rgb(41 182 218)",
                      }}
                    ></div>
                    <p className="percentage">{`${progress}%`}</p>
                  </div>
                )}
                <label>Full Name</label>
                <input
                  value={editName}
                  className="profile-name"
                  onChange={(e) => setEditName(e.target.value)}
                />
                <br />
                <label>Email</label>
                <input
                  value={editEmail}
                  type="text"
                  onChange={(e) => setEditEmail(e.target.value)}
                />
                <br />

                <button
                  disabled={imageLoading || loading}
                  onClick={handleProfileEdit}
                >
                  {imageLoading
                    ? "Uploading..."
                    : loading
                    ? "Saving..."
                    : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="nav-left">
          <NavLink color="#FF0303" to="/">
            <SiCodechef className="chef-icon" style={{boxShadow:" rgba(255,3,3, 0.19) 0px 10px 20px, rgba(255,3,3, 0.23) 0px 6px 6px"}} />
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
            {token && role === "user" && (
              <div
                className="profile-div"
                onClick={() => {
                  setShow(false);
                  setShowProfileDetails(true);
                }}
              >
                <div
                  className="profile-image-nav-div"
                  onClick={() => setShowProfile(!showProfile)}
                  style={{ backgroundImage: `url(${imageUrl})` }}
                ></div>

                <p className="nav-user-name">{name}</p>
              </div>
            )}
            <NavLink
              to="/favourite"
              color={link}
              onClick={() => setShow(false)}
            >
              Favourites
            </NavLink>

            <NavLink
              to="/allchannels"
              color={link}
              onClick={() => setShow(false)}
            >
              Channels
            </NavLink>

            {role === "user" && (
              <button className="log-btn" onClick={handleLogout}>
                Log Out
              </button>
            )}

            {(!token || role === "admin") && (
              <NavLink to="/login">
                <button className="log-btn">Log in</button>
              </NavLink>
            )}
          </div>
        </div>
      </NavWrapper>
      <ToastContainer />
    </>
  );
};

export default Navbar;
