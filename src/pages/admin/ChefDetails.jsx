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
import Search from "../../components/Search";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BodyWrapper } from "../../styles/commonStyle/flexbody.styled";
import AdminNav from "../../components/AdminNav";

const ChefDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [payload, setPayload] = useState({});

  const { byId, loading, videos, filteredVideos } = useSelector((state) => {
    return {
      byId: state.AdminReducer.byId,
      loading: state.AdminReducer.loading,
      videos: state.AdminReducer.videos,
      filteredVideos: state.AdminReducer.filteredVideos,
    };
  });

  const token = useSelector((state) => state.AuthReducer.token);

  useEffect(() => {
    if (videoUrl !== "") {
      const videoId = videoUrl.split("/")[videoUrl.split("/").length - 1];
      const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

      const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${videoId}&key=${apiKey}`;
      axios
        .get(apiUrl)
        .then((res) => {
          return res;
        })
        .then((res) => {
          const duration = res.data.items[0].contentDetails.duration;
          const matches = duration.match(
            /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/
          );
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
          const channelId = res.data.items[0].snippet.channelId;

          axios
            .get(
              `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${apiKey}`
            )
            .then((resp) => {
              const channelLogo =
                resp.data.items[0].snippet.thumbnails.medium.url;

              const dt = data.publishedAt;

              const date = new Date(dt);
              const postDate = date.toLocaleDateString("en-us");
              const postTime = date.toLocaleTimeString("en-us");

              setPayload({
                chefId: id,
                channelId: channelId,
                channelLogo: channelLogo,
                postTime: postTime,
                postDate: postDate,
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
        });
    }
  }, [videoUrl]);

  const handleAddVideo = (e) => {
    e.preventDefault();
    const length = Object.keys(payload).length;

    if (length > 0) {
      dispatch(
        postVideo(payload, { headers: { Authorization: `Bearer ${token}` } })
      ).then((res) => {
        if (res.status === 200) {
          toast.success(res.mesg, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setPayload({});
          setVideoUrl("");
          setShowModal(false);
          const chefId = id;
          dispatch(
            chefById(chefId, { headers: { Authorization: `Bearer ${token}` } })
          );
        } else if (res.status === 409) {
          toast.warn(res.mesg, {
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
      toast.warn("Please add video Link !", {
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

  const handleVideoDelete = (videoId) => {
    dispatch(
      deleteVideo(videoId, { headers: { Authorization: `Bearer ${token}` } })
    ).then((res) => {
      const chefId = id;
      if (res.successCode === 200) {
        dispatch(
          chefById(chefId, { headers: { Authorization: `Bearer ${token}` } })
        ).then(() => {
          toast.success("Video deleted successfully !", {
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
      }
      if (res.errCode === 500) {
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

  const handleSearch = (searchTerm) => {
    const newData =
      videos &&
      videos.filter((ele) =>
        ele.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    dispatch(searchVideoFilter(newData));
  };

  useEffect(() => {
    dispatch(chefById(id, { headers: { Authorization: `Bearer ${token}` } }));
  }, []);
  let imageUrl = byId && byId.banner;

  return (
    <ChefDetailsWrapper showModal={showModal}>
      <AdminNav selected="home" />
      {loading ? (
        <Loading />
      ) : (
        <BodyWrapper>
          <div className="banner-div">
            <div className="banner-image-wrapper">
              <img src={imageUrl} alt="" />
            </div>
          </div>

          <div className="modal-btn-div">
            <div className="search-wrapper">
              <Search
                width="100%"
                placeholder="Search video by title"
                handleSearch={handleSearch}
              />
            </div>

            <button className="modal-btn" onClick={() => setShowModal(true)}>
              Add New Video
            </button>
            <AiOutlineVideoCameraAdd
              className="video-icon"
              onClick={() => setShowModal(true)}
            />
          </div>

          <div className="video-grid-wrapp">
            <VideoGrid
              show={true}
              view="customview"
              videos={filteredVideos}
              handleVideoDelete={handleVideoDelete}
              videoPath="/showvideo"
            />
          </div>

          {filteredVideos.length === 0 && videos.length !== 0 && (
            <h3 className="no-data">
              <span className="query">Query </span>result not found...
            </h3>
          )}

          {videos.length === 0 && (
            <h3 className="no-data">
              <span className="query">Videos</span> are not added...
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
      )}
      <ToastContainer />
    </ChefDetailsWrapper>
  );
};

export default ChefDetails;
