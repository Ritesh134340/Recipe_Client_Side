import React, { useEffect, useState } from "react";
import AdminNav from "../../components/AdminNav";
import { BodyWrapper } from "../../styles/commonStyle/flexbody.styled";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../components/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getHomeData,
  updateHomeData,
  addHomeData,
  deleteHomeData,
  updateHeroData,
} from "../../redux/AdminRedux/action";
import { UpdateWrapper } from "../../styles/adminStyle/update.styled";
import { Heading } from "../../components/Heading";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { GrNewWindow } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";

export const Update = () => {
  const [newImage, setNewImage] = useState("");
  const [newText, setNewText] = useState("");
  const [editText, setEditText] = useState("");
  const [editImage, setEditImage] = useState("");

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.AdminReducer.loading);
  const token = useSelector((state) => state.AuthReducer.token);
  const [showModal, setShowModal] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [editHeroImage, setEditHeroImage] = useState("");
  const [editHeroText, setEditHeroText] = useState("");
  const homeData = useSelector((state) => state.AdminReducer.homeData);
  const [hideId, setHideId] = useState("");

  const handleShow = (id) => {
    setShowMore(!showMore);
    if (hideId === id) {
      return setHideId("");
    }
    return setHideId(id);
  };

  const handleUpdateCarouselImage = (id) => {
    const payload = {
      imageId: id,
      image: editImage,
      text: editText,
      objectId: homeData._id,
    };

    dispatch(
      updateHomeData(payload, { headers: { Authorization: `Bearer ${token}` } })
    ).then((res) => {
      if (res.status === 200) {
        dispatch(getHomeData());
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
      } else {
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
  };
  const updateHeroImage = () => {
    setShowModal(true);
  };

  const handleUpdateHeroData = () => {
    const payload = {
      objectId: homeData._id,
      image: editHeroImage,
      text: editHeroText,
    };
    if (editHeroImage !== "" || editHeroText !== "") {
      dispatch(
        updateHeroData(payload, {
          headers: { Authorization: `Bearer ${token}` },
        })
      ).then((res) => {
        if (res.status === 200) {
          dispatch(getHomeData());
          setShowModal(false);
          setEditHeroImage("");
          setEditHeroText("");
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
        } else {
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
    } else {
      toast.error("Invalid request !", {
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
  };

  const handleRemoveCarousel = (id) => {
    const payload = {
      objectId: homeData._id,
      imageId: id,
    };
    dispatch(
      deleteHomeData(payload, { headers: { Authorization: `Bearer ${token}` } })
    ).then((res) => {
      if (res.status === 200) {
        dispatch(getHomeData());
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
      } else {
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
  };

  const handleAddNewData = () => {
    const payload = {
      image: newImage,
      dataId: homeData._id,
      text: newText,
    };
    if (newImage && newText) {
      dispatch(
        addHomeData(payload, { headers: { Authorization: `Bearer ${token}` } })
      ).then((res) => {
        if (res.status === 200) {
          dispatch(getHomeData());
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
        } else {
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
    } else {
      toast.error("Invalid request !", {
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
  };

  useEffect(() => {
    dispatch(getHomeData());
  }, []);

  return (
    <UpdateWrapper>
      <div
        className={
          showModal ? "main-carousel-update" : "main-carousel-update-hide"
        }
      >
        <div className="main-carousel-data-wrapper-update">
          <div className="cross-wrapper-update">
            <RxCross2
              id="update-cross-icon"
              onClick={() => setShowModal(false)}
            />
          </div>
          <div className="modal-content-div-update">
            <label>Hero Text</label>
            <br />
            <input
              type="text"
              onChange={(e) => setEditHeroText(e.target.value)}
              defaultValue={homeData.heroText}
            />
            <br />
            <label>Hero Image</label>
            <br />
            <input
              type="text"
              onChange={(e) => setEditHeroImage(e.target.value)}
              defaultValue={homeData.heroImage}
            />
            <br />
            <button className="update-save-btn" onClick={handleUpdateHeroData}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
      <AdminNav selected="update" />

      {loading ? (
        <Loading />
      ) : (
        <BodyWrapper>
          <div className="main-heading-wrapper">
            <Heading />
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-title">
              <h3>Hero Image</h3>
            </div>
            <img src={homeData?.heroImage} alt="hero" className="hero-image" />

            <div className="hero-btn-wrapper">
              <button onClick={updateHeroImage}>Update Hero Image</button>
            </div>
          </div>

          <div className="carousel-head">
            <h3>Carousel Images</h3>
          </div>
          <div className="carousel-data-wrapper">
            <div className="new-data-wrapper">
              <h3>Add New Carousel Data</h3>
              <div className="new-data-input-wrapper">
                <label>New Image Link</label>
                <br />
                <input
                  type="text"
                  placeholder="Image link to be added"
                  onChange={(e) => setNewImage(e.target.value)}
                />
                <br />
                <label>New Image Text</label>
                <br />
                <input
                  type="text"
                  placeholder="Image text to show"
                  onChange={(e) => setNewText(e.target.value)}
                />
                <br />
              </div>

              <div className="new-data-btn-div">
                <button onClick={handleAddNewData}>
                  <GrNewWindow className="add-icon" />
                  Add New Data
                </button>
              </div>
            </div>
            {homeData &&
              homeData.carouselData?.map((ele) => (
                <div key={ele._id} className="carousel-child-wrapper">
                  <img
                    src={ele.image}
                    alt="carousel"
                    className="carousel-img"
                  />

                  <div className="show-more-wrapper">
                    <div
                      className="show-more-div"
                      onClick={() => handleShow(ele._id)}
                    >
                      <p>{hideId !== ele._id ? "Show More" : "Show Less"}</p>
                      {ele._id !== hideId ? (
                        <IoIosArrowDropdown className="show-more-icon" />
                      ) : (
                        <IoIosArrowDropup className="show-more-icon" />
                      )}
                    </div>

                    <div className="update-input-wrapper">
                      <div
                        className={
                          hideId !== ele._id ? "hide-content" : "show-content"
                        }
                      >
                        <label>Image Link</label>
                        <br />
                        <input
                          type="text"
                          defaultValue={ele.image}
                          onChange={(e) => setEditImage(e.target.value)}
                        />
                        <br />
                        <label>Image Text</label>
                        <br />
                        <input
                          type="text"
                          defaultValue={ele.text}
                          onChange={(e) => setEditText(e.target.value)}
                        />
                        <br />
                        <button
                          className="save-change"
                          onClick={() => handleUpdateCarouselImage(ele._id)}
                        >
                          Save Changes
                        </button>
                      </div>
                      <div className="remove-btn-wrapper">
                        <button
                          className={
                            hideId !== ele._id
                              ? "remove-btn-close"
                              : "remove-btn-open"
                          }
                          onClick={() => handleRemoveCarousel(ele._id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </BodyWrapper>
      )}
      <ToastContainer />
    </UpdateWrapper>
  );
};
