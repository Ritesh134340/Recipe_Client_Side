import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShowVideoMain } from "../../styles/commonStyle/showVideo.styled";
import axios from "axios";
import VideoPlayer from "../../components/VideoPlayer";
import AdminNav from "../../components/AdminNav";
import { BodyWrapper } from "../../styles/commonStyle/flexbody.styled";
import { useSelector } from "react-redux";

const ShowVideo = () => {
  const { id } = useParams();
  const [videoData, setVideoData] = useState({});
  const token = useSelector((state) => state.AuthReducer.token);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_ADDRESS}/admin/video/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setVideoData(res.data.document);
      });
  }, []);

  return (
    <ShowVideoMain>
      <AdminNav selected="home" />
      <BodyWrapper>
        <div className="player-wrapper">
          <div className="player-div">
            <VideoPlayer videoId={videoData.videoId} />
          </div>

          <div>
            <p>{videoData.title}</p>
          </div>
          <div>
            <pre>{videoData.description}</pre>
          </div>
        </div>
      </BodyWrapper>
    </ShowVideoMain>
  );
};

export default ShowVideo;
