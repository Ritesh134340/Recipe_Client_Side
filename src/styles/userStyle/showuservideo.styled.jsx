import styled from "styled-components";

export const ShowUserVideoWrapper=styled.div`  
      margin-top:100px;
      padding-bottom:30px;
      .show-video-title{
        font-weight:700;
        font-size:18px;
        margin-bottom:50px;
   
      }
     .player-wrapper{
        
       width:70%;
       margin:auto;
       margin-top:30px;
       overflow: hidden;
    };
    .player-div{
      
    }
    .favourite-wrapper{
        position:fixed;
        top:145px;
        left:40px;
        border-radius:6px;
        padding:9px 15px;
        color:white;
        font-size:13px;
        letter-spacing:0.4px;
        background:linear-gradient(to right, teal,black);
        cursor:pointer;
    }
    .back-div{
       position:fixed;
       top:70px;
       left:40px;
        display:flex;
        align-items: center;
        margin-bottom:40px;
        width:30px;
        font-size:20px;
        background-color:black;
        color:white;
        padding:8px 14px;
        font-weight:bold;
        border-radius:8px;
        cursor:pointer;
        gap:4px;
        margin-top:20px;
       
    }
`