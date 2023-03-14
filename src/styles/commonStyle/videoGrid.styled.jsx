import styled from "styled-components";





export const VideoGridWrapper=styled.div`

    user-select:none;
    display: grid;
    margin: auto;
    margin-bottom:30px;
    margin-top: 50px;
    width: 96%;
    grid-template-columns:${(props)=>props.col ? `repeat(${props.col},1fr)` : 'repeat(3, 1fr)'} ;

    row-gap:${(props)=>props.rg ? props.rg : "34px"};
    column-gap:${(props)=>props.rg ? props.cg : "25px"};
    box-sizing:border-box;
    

  .video-div-link {
   padding:5px;
  &:hover{
    animation: myAnimation .4s cubic-bezier(.25,.46,.45,.94) both;
  }
 

@keyframes myAnimation {
  0%{transform:scale(1);
  box-shadow:0 0 0 0 transparent}
  100%{transform:scale(1.03);box-shadow:0 0 20px 0 rgba(0,0,0,.35)}}
  }
  

  .logo-with-channel{
    display:flex;
    align-items:center;
    gap:8px;
    margin-bottom:0px;
    margin-top:5px;

  }
  .channel-image{
    width:40px;
    height:40px;
    border-radius:50%;
    overflow:hidden;
    object-fit:cover;
    object-position:center;

  }
  .channel-name{
    font-size:14px;
    font-weight:bold
  }
  .channel-image>img{
    width:100%;
    height:100%;
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
    
    bottom:-19px;
    right:5px;
    box-sizing: border-box;
    padding:2px 5px;
    background-color: black;
    color: white;
    border-radius: 5px;
  }
  .title{
    font-size:14px;
    font-weight:500;
    width:100%;
    box-sizing:border-box;
    font-family:sans-serif;
  }
  .play-icon{
    padding:8px 15px;
    color:red;
    font-weight:bold;
    border-radius:5px;
    cursor:pointer;
  }
  @media all and (max-width:1024px) and (min-width:769px){
   
   grid-template-columns:repeat(3,1fr);
   row-gap:24px;
   column-gap:12px;
}


@media all and (max-width:768px) and (min-width:481px){
  grid-template-columns:repeat(3,1fr)
  row-gap:24px;
  column-gap:8px;
}

@media all and (max-width:480px) and (min-width:279px){
  grid-template-columns:repeat(1,1fr)
}
`


export const CustomWrapper=styled.div`
    user-select:none;
    display: grid;
    margin: auto;
    margin-bottom:30px;
    margin-top: 50px;
    width: 96%;
    grid-template-columns:${(props)=>props.col ? `repeat(${props.col},1fr)` : 'repeat(3, 1fr)'} ;

    row-gap:${(props)=>props.rg ? props.rg : "34px"};
    column-gap:${(props)=>props.rg ? props.cg : "25px"};
    box-sizing:border-box;
    
  .logo-with-channel{
    display:flex;
    align-items:center;
    gap:8px;
    margin-bottom:0px;
    margin-top:5px;

  }
  .channel-image{
    width:40px;
    height:40px;
    border-radius:50%;
    overflow:hidden;
    object-fit:cover;
    object-position:center;

  }
  .channel-name{
    font-size:14px;
    font-weight:bold
  }
  .channel-image>img{
    width:100%;
    height:100%;
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
    margin:0px;
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
    bottom:-8px;
    right:5px;
    box-sizing: border-box;
    padding:2px 5px;
    background-color: black;
    color: white;
    border-radius: 5px;
  }
  .title{
    font-size:14px;
    font-weight:500;
    width:100%;
    box-sizing:border-box;
    font-family:sans-serif;
  }
  .play-icon{
    margin:0px;
    padding:8px 18px;
    color:red;
    font-weight:bold;
    border-radius:5px;
    cursor:pointer;
  }
  @media all and (max-width:1024px) and (min-width:769px){
   
   grid-template-columns:repeat(2,1fr)
}


@media all and (max-width:768px) and (min-width:481px){
  grid-template-columns:repeat(2,1fr)
}

@media all and (max-width:480px) and (min-width:279px){
  grid-template-columns:repeat(1,1fr)
}
`
