import React from "react";
import { VideoGridWrapper } from "../styles/commonStyle/videoGrid.styled";
import { NavLink } from "../styles/userStyle/link.styled";
import {BsFillPlayBtnFill} from "react-icons/bs"

const VideoGrid = ({ videos,handleVideoDelete,show }) => {
  return (
    <VideoGridWrapper show={show}>
      
      {videos &&
        videos.map((ele) => (
          <div key={ele._id} className="video-div">
            <div className="vid-img-div">
              <img
                src={ele.thumbnails}
                alt="thumbnail"
                className="thumbnail-image"
              />
               
                  <p className="time-div">{ele.time}</p>
              
              
            </div>
            <div className="del-div">
                <button
                  className="vid-del-btn"
                  onClick={(e) => handleVideoDelete(ele._id)}
                >
                  Delete
                </button>
                <NavLink to={`/showvideo/${ele._id}`}><button className="play-icon">Play</button></NavLink>
               
              </div>
            <div className="title">
              <p>{ele.title}</p>
            </div>
          </div>
        ))}
    </VideoGridWrapper>
  );
};

export default VideoGrid;
