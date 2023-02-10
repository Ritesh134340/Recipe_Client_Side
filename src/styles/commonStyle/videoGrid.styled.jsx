import styled from "styled-components";



export const VideoGridWrapper=styled.div`
    display: grid;
    margin: auto;
    margin-bottom:30px;
    margin-top: 50px;
    width: 96%;
    grid-template-columns:${(props)=>props.col ? `repeat(${props.col},1fr)` : 'repeat(3, 1fr)'} ;

    row-gap:${(props)=>props.rg ? props.rg : "34px"};
    column-gap:${(props)=>props.rg ? props.cg : "25px"};
    
    

  .video-div {
  }
  .vid-img-div {
    position: relative;
  }
  .thumbnail-image {
    width: 100%;
    border-radius: 9px;
  }
  .del-div {
    display:flex;
    
    align-items:center;
    justify-content: space-between;
    padding:0px 10px;
       ;
  }
  .vid-del-btn {
    color: white;
    display:${(props)=>props.show ? "block": "none"};
    background:linear-gradient(145deg, black,red);
    padding: 8px 18px;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    border: 1px solid white;
    border-radius: 5px;
  }
  .time-div {
    position: absolute;
   
    bottom: 3px;
    right:5px;
    box-sizing: border-box;
   
    padding: 4px;
    background-color: black;
    color: white;
    border-radius: 5px;
  }
  .title{
    margin-top:8px;
    font-size:15px;
    font-weight:600;
    font-family:sans-serif;
  }
  .play-icon{
    padding:8px 15px;
    color:red;
    font-weight:bold;
    border-radius:5px;
    cursor:pointer;
  }
`