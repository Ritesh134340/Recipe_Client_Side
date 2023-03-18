import React, { useEffect, useState, useRef } from "react";
import { FavouriteWrapper } from "../../styles/userStyle/favourite.styled";
import Navbar from "../../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import {
  getFavourite,
  filterFavourite,
  removeFavourite,
} from "../../redux/AppRedux/action";
import Loading from "../../components/Loading";
import VideoPlayer from "../../components/VideoPlayer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SlControlPlay } from "react-icons/sl";
import Search from "../../components/Search";
import Footer from "../../components/Footer";
const Favourite = () => {
  const dispatch = useDispatch();
  const [videoId, setVideoId] = useState("");
  const [title, setTitle] = useState("");
  const videoRef = useRef(null);

  const token = useSelector((state) => state.AuthReducer.token);
  const loading = useSelector((state) => state.AppReducer.loading);

  const { filteredFavourite, favouriteVideo } = useSelector((state) => {
    return {
      filteredFavourite: state.AppReducer.filteredFavourite,
      favouriteVideo: state.AppReducer.favouriteVideo,
    };
  });

  const handleVideoSearch = (searchTerm) => {
    const filtered =
      favouriteVideo &&
      favouriteVideo.filter(
        (ele) =>
          ele.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          ele.channelName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          ele.chefName.toLowerCase().includes(searchTerm.toLowerCase())
      );

    dispatch(filterFavourite(filtered));
  };

  useEffect(() => {
    const payload = { headers: { Authorization: `Bearer ${token}` } };
    dispatch(getFavourite(payload));
  }, []);

  const handleChange = (src, title) => {
    setTitle(title);
    setVideoId(src);
    videoRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleRemove = (id) => {
    const payload = { headers: { Authorization: `Bearer ${token}` } };
    dispatch(removeFavourite(id, payload)).then((res) => {
      if (res.status === 200) {
        dispatch(getFavourite(payload)).then((res) => {
          toast.success("Removed from favourite list !", {
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

  return (
    <FavouriteWrapper>
      <Navbar />
      <div className="favourite-heading-wrapper">
        <h2 ref={videoRef}>Favourite Recipe List</h2>
      </div>

      {videoId && (
        <div className="player-wrapper">
          <VideoPlayer videoId={videoId} height="450px" />
          <p className="player-title">{title}</p>
        </div>
      )}

      <div className="search-box-wrapper">
        <Search
          width="100%"
          placeholder="Search video by title or channel"
          handleSearch={handleVideoSearch}
        />
      </div>

      {loading ? (
        <Loading />
      ) : (
        filteredFavourite.length > 0 && (
          <div className="favourite-grid-wrapper">
            {filteredFavourite &&
              filteredFavourite.map((ele, index) => (
                <div key={ele._id} className="ele-wrapper">
                  <div
                    onClick={() => handleChange(ele.videoId, ele.title)}
                    className="title-wrapper"
                  >
                    <img src={ele.thumbnails} className="thumb-img" />
                    <p className="fav-title">{ele.title}</p>
                    <p className="fav-time-wrapper">{ele.time}</p>
                    <SlControlPlay className="play-text" />
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(ele._id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
          </div>
        )
      )}

      {(filteredFavourite.length === 0 || favouriteVideo.length === 0) && (
        <div className="fav-data-div">
          <p>
            <span>Data</span>not available ...
          </p>
        </div>
      )}

      <div className="footer-wrapper-div">
        <Footer />
      </div>

      <ToastContainer />
    </FavouriteWrapper>
  );
};

export default Favourite;
