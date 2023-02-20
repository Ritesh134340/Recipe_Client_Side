import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../components/Loading";
import { getChefById } from "../../redux/AppRedux/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { searchVideoFilter } from "../../redux/AppRedux/action";
import VideoGrid from "../../components/VideoGrid";
import Search from "../../components/Search";
import Navbar from "../../components/Navbar";
import { ChannelDetailsWrapper } from "../../styles/userStyle/channelDetails.styled";

const ChannelDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { byId, loading, videos, filteredVideos } = useSelector((state) => {
    return {
      byId: state.AppReducer.byId,
      loading: state.AppReducer.loading,
      videos: state.AppReducer.videos,
      filteredVideos: state.AppReducer.filteredVideos,
    };
  });

  const handleSearch = (searchTerm) => {
    const newData =
      videos &&
      videos.filter((ele) =>
        ele.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    dispatch(searchVideoFilter(newData));
  };

  useEffect(() => {
    dispatch(getChefById(id));
  }, []);

  return (
    <ChannelDetailsWrapper>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <div className="channeldetails-wrapper-main">
          <div className="banner-div">
            <img src={byId.banner} alt="banner" className="banner-image" />
          </div>
          <div className="modal-btn-div">
            <Search
              placeholder="Search video by title"
              handleSearch={handleSearch}
            />
          </div>
          <VideoGrid
            show={true}
            view="linkview"
            videos={filteredVideos}
            videoPath="/uservideo"
          />

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
        </div>
      )}
      <ToastContainer />
    </ChannelDetailsWrapper>
  );
};

export default ChannelDetails;
