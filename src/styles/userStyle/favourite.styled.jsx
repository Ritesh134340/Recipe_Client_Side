import styled from "styled-components"

export const FavouriteWrapper=styled.div`
  margin-top:70px; 
  border:1px solid transparent;
 
  .favourite-heading-wrapper{
    text-align:center;
    margin-bottom:50px;
    margin-top:40px;
  
  }
  .player-wrapper{
    width:80%;
    height:60%;
    margin:auto;
    border-radius:13px;
    overflow:hidden;
  }
  .ele-wrapper{
   
     height:90%;
     width:80%;
     margin:auto;
     display:flex;
     align-items:center;
     justify-content:space-between;
     box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
     padding-right:20px;
     box-sizing:border-box;
     margin-bottom:30px;
    border-radius:8px;
    overflow:hidden;
    cursor:pointer;
  } 
  .title-wrapper{
    display:flex;
    justify-content: space-between;
    align-items: center;
    gap:20px;
  }
  .fav-title{
    font-size:13px;
    font-weight:600;
  
  }
  .thumb-img{
   height:100%;
  }
  .player-title{
    font-size:14px;
    font-weight:bold;
    margin-bottom:70px;
  }
  .remove-btn{
    padding:8px 15px;
    cursor:pointer;
    background-color:red;
    color:white;
    border-radius:5px;
    outline:none;
    border:none;

  }
`