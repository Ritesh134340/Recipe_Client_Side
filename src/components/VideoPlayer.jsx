import React,{useEffect} from 'react'
import YouTube from "react-youtube";


const VideoPlayer = ({videoId,height}) => {
    
    const opts = {
      height:height,
      width: "100%",
      constrols:true,
      playerVars: {
        autoplay: 0,
        controls: 1,
        loop: 0,
        modestbranding:0,
        rel: 0,
        showinfo: 1,
  
      }
    };
  

  return (
    <div >
       <YouTube videoId={videoId} opts={opts} />
    </div>
  )
}

export default VideoPlayer
