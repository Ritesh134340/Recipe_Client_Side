import React from "react";
import { VideoGridWrapper } from "../styles/commonStyle/videoGrid.styled";
import { NavLink } from "../styles/userStyle/link.styled";


const VideoGrid = ({ videos,handleVideoDelete,show ,view,columns,rowgap,colgap,videoPath}) => {

  return (
    <>
    { view==="customview" && <VideoGridWrapper col={columns} show={show} rg={rowgap} cg={colgap}>
      
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
                <NavLink to={`${videoPath}/${ele._id}`}><button className="play-icon">Play</button></NavLink>
               
              </div>
            <div className="title">
              <p>{ele.title}</p>
            </div>
          </div>
        ))}
    </VideoGridWrapper>}

{view==="linkview" && <VideoGridWrapper rg={rowgap} cg={colgap} col={columns} show={show}>
      
{videos &&
  videos.map((ele) => (
    <div key={ele._id} className="video-div">
     <NavLink to={`${videoPath}/${ele._id}`}>

      <div className="vid-img-div">
        <img
          src={ele.thumbnails}
          alt="thumbnail"
          className="thumbnail-image"
        />
         
            <p className="time-div">{ele.time}</p>
      </div>
      </NavLink>
      <div className="logo-with-channel">
       <div className="channel-image">
        <img src={ele.channelLogo} alt="logo" />
       </div>
       <p className="channel-name">{ele.channelName}</p>
      </div>
      
      <div className="title">
        <p>{ele.title}</p>
      </div>
    </div>
  ))}
</VideoGridWrapper>}

    </>
  );
};

export default VideoGrid;
