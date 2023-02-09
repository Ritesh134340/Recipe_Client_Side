import React, { useEffect, useState } from "react";
import { ChefDetailsWrapper } from "../../styles/adminStyle/chefDetails.styled";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  chefById,
  postVideo,
  deleteVideo,
} from "../../redux/AdminRedux/action";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../components/Loading";
import { RxCross2 } from "react-icons/rx";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { searchVideoFilter } from "../../redux/AdminRedux/action";
import VideoGrid from "../../components/VideoGrid";
import Search from "../../components/Search"
import { BodyWrapper } from "../../styles/commonStyle/flexbody.styled";
import AdminNav from "../../components/AdminNav";

const ChefDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [payload, setPayload] = useState({});

  const { byId, loading, videos,filteredVideos } = useSelector((state) => {
    return {
      byId: state.AdminReducer.byId,
      loading: state.AdminReducer.loading,
      videos: state.AdminReducer.videos,
      filteredVideos:state.AdminReducer.filteredVideos
    };
  });

  useEffect(() => {
    if (videoUrl !== "") {
      const videoId = videoUrl.split("/")[videoUrl.split("/").length - 1];
      const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

      const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${videoId}&key=${apiKey}`;
      axios.get(apiUrl).then((res) => {
        const duration = res.data.items[0].contentDetails.duration;
        const matches = duration.match(/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/);
        const hours = parseInt(matches[1] || 0, 10);
        const minutes = parseInt(matches[2] || 0, 10);
        const seconds = parseInt(matches[3] || 0, 10);
        let time;
        if (hours !== 0) {
          time = `${hours}:${minutes}:${seconds}`;
        } else if (hours === 0 && minutes !== 0) {
          time = `${minutes}:${seconds}`;
        }

        const data = res.data.items[0].snippet;

        setPayload({
          chefId: id,
          chefName: byId.chefName,
          channelName: byId.channel,
          time: time,
          videoId: videoId,
          title: data.localized.title,
          description: data.localized.description,
          thumbnails: data.thumbnails.medium.url,
          publishedAt: data.publishedAt,
        });
      });
    }
  }, [videoUrl]);

  const handleAddVideo = (e) => {
    e.preventDefault();

    dispatch(postVideo(payload))
      .then((res) => {
        setPayload({});
        setVideoUrl("");
        setShowModal(false);
        const chefId = { id: id };
        dispatch(chefById(chefId));
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
  };

  const handleVideoDelete = (videoId) => {
    dispatch(deleteVideo(videoId))
      .then((res) => {
        const chefId = { id: id };
        dispatch(chefById(chefId));

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
  };

  const handleSearch=(searchTerm)=>{
    const newData= videos && videos.filter((ele)=>
      ele.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    dispatch(searchVideoFilter(newData))
  }

  useEffect(() => {
    const chefId = { id: id };
    dispatch(chefById(chefId));
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <ChefDetailsWrapper showModal={showModal}>
      <AdminNav selected="home" />
      <BodyWrapper>
        <div className="banner-div">
          <img src={byId.banner} alt="banner" className="banner-image" />
        </div>
        <div className="modal-btn-div">
          <Search placeholder="Search video by title" handleSearch={handleSearch}/>
          <button className="modal-btn" onClick={() => setShowModal(true)}>
            Add New Video
          </button>
        </div>
        <VideoGrid
          show={true}
          view="customview"
          videos={filteredVideos}
          handleVideoDelete={handleVideoDelete}
        />

     {filteredVideos.length === 0 && (
                <h3 className="no-data">
                  <span className="query">Query </span>Result Not Found...
                </h3>
              )}

        <div className="modal">
          <div className="modal-content">
            <div className="cross-icon-div">
              <RxCross2
                className="cross-icon"
                onClick={() => setShowModal(false)}
              />
            </div>

            <div className="video-form">
              <form>
                {videoUrl && (
                  <img className="thumb-prev" src={payload.thumbnails}></img>
                )}

                <br />
                <input
                  className="input"
                  type="text"
                  placeholder="Enter video link"
                  onChange={(e) => setVideoUrl(e.target.value)}
                />
                <br />
                <button className="upload-btn" onClick={handleAddVideo}>
                  Upload
                </button>
              </form>
            </div>
          </div>
        </div>
      </BodyWrapper>

      <ToastContainer />
    </ChefDetailsWrapper>
  );
};

export default ChefDetails;
