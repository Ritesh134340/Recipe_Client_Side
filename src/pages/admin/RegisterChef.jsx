import React, { useState, useRef, useEffect } from "react";
import storage from "../../utils/firebaseStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import axios from "axios";
import { uid } from "uid";
import { RegisterWrapper } from "../../styles/adminStyle/register.styled";
import AdminNav from "../../components/AdminNav";
import { BodyWrapper } from "../../styles/commonStyle/flexbody.styled";
import { useSelector } from "react-redux";

const RegisterChef = () => {
  const inputRef = useRef();

  const [logoUrl, setLogoUrl] = useState("");
  const [name, setName] = useState("");
  const [channel, setChannel] = useState("");
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const [image, setImage] = useState(null);

  const url = image && URL.createObjectURL(image);

  const token = useSelector((state) => state.AuthReducer.token);

  const handleSelect = () => {
    inputRef.current.click();
    setProgress(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const Uid = uid(16);
    if (!image) return;

    const fileName = Uid + image.name;
    const storageRef = ref(storage, `banners/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
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
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const payload = {
            chefName: name,
            channel: channel,
            banner: downloadURL,
            logo: logoUrl,
          };
          axios
            .post(
              `${process.env.REACT_APP_SERVER_ADDRESS}/admin/create/chef`,
              payload,
              { headers: { Authorization: `Bearer ${token}` } }
            )
            .then((res) => {
              toast.success(res.data.mesg, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
              setImage(null);
              setChannel("");
              setLogoUrl("");
              setName("");
              setShowProgress(false);
            })
            .catch((err) => {
              toast.warn(err, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            });
        });
      }
    );
  };

  return (
    <RegisterWrapper>
      <AdminNav selected="register" />

      <BodyWrapper>
        <div className="register-heading">
          <h2>Register New Chef</h2>
        </div>

        <div
          className="chef-main"
          style={{ backgroundImage: "url(/illus.png" }}
        >
          <div className="chef-form">
            <div className="uploaderWrapper">
              {image && (
                <div className="uploaderImage">
                  <img src={url} alt="" />
                </div>
              )}

              <input
                hidden
                type="file"
                ref={inputRef}
                onChange={(e) => setImage(e.currentTarget.files[0])}
              />
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
              <button
                disabled={showProgress}
                onClick={handleSelect}
                className="image-select"
              >
                {image ? "Change Image " : "Select Image"}
              </button>
            </div>
            <form className="from">
              <label>Chef Name</label>
              <br />
              <input
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <label>Channel Name</label>
              <br />
              <input
                value={channel}
                type="text"
                onChange={(e) => setChannel(e.target.value)}
              />
              <br />
              <label>Logo URL</label>
              <br />
              <input
                value={logoUrl}
                type="text"
                onChange={(e) => setLogoUrl(e.target.value)}
              />
              <br />

              <button
                style={{ backgroundColor: showProgress ? "gray" : "#3E54AC" }}
                disabled={showProgress}
                className="submit-btn"
                onClick={handleSubmit}
              >
                {showProgress ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </BodyWrapper>

      <ToastContainer />
    </RegisterWrapper>
  );
};

export default RegisterChef;
