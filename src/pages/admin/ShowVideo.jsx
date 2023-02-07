import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShowVideoMain } from "../../styles/commonStyle/showVideo.styled";
import axios from "axios"
import VideoPlayer from "../../components/VideoPlayer";
import AdminNav from "../../components/AdminNav";
import { BodyWrapper } from "../../styles/commonStyle/flexbody.styled";


const ShowVideo = () => {
  const { id } = useParams();
  const [videoData, setVideoData] = useState({});
 
  useEffect(() => {
   axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/admin/video/${id}`).then((res)=>{
    setVideoData(res.data.document)
   })
   
  }, []);

  return (
    <ShowVideoMain>
      <AdminNav selected="home"/>
      <BodyWrapper>
        <div className='player-wrapper'>
          <div className="player-div">
          <VideoPlayer videoId={videoData.videoId} />
          </div>
      
      <div>
        <p>{videoData.title}</p>
      </div>
      <div>
        <p>{videoData.description}</p>
      </div>
        </div>
     
        </BodyWrapper>
     
    </ShowVideoMain>
  );
};

export default ShowVideo;
