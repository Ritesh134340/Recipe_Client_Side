import React,{useEffect} from 'react'
import YouTube from "react-youtube";
import styled from "styled-components"


const VideoPlayer = ({videoId}) => {
    
    const opts = {
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
  
      <PlayerWrapper>
      <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope ; picture-in-picture; web-share"  allowfullscreen="allowfullscreen" ></iframe>
      </PlayerWrapper>
  )
}

export default VideoPlayer


export const PlayerWrapper=styled.div`
  margin:auto;
  width: 100%;
  height: 500px;


  @media all and (max-width:1024px) and (min-width:769px){
   height:400px;
}


@media all and (max-width:768px) and (min-width:481px){
  height:380px;

}

@media all and (max-width:480px) and (min-width:279px){
  height:200px;
}

  
`
