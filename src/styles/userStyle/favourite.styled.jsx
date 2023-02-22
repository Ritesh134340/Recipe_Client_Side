import styled from "styled-components";

export const FavouriteWrapper = styled.div`


 
  .search-box-wrapper{
      width:40%;
      margin:auto;
      margin-top:70px;
      margin-bottom:60px;
   
  }
  .favourite-heading-wrapper{
    text-align:center;
    margin-bottom:40px;
    padding-top:100px;
    font-size:15px;
  
  }
  .player-wrapper{
    width:66%;
    margin:auto;
   
  }
  .favourite-grid-wrapper{
     display:grid;
     grid-template-columns:repeat(3,1fr);
   
     gap:30px;
     margin:auto;
     margin-bottom:40px;
     width:80%;
    
  }
  .ele-wrapper{
    border-radius:8px;
     box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
     box-sizing:border-box;
     border-radius:8px;
     overflow:hidden;

  } 
  .title-wrapper{
   position:relative;
   cursor:pointer;

   &:hover{
  
    .play-text{
      display:block;
      transition:all 700ms ease-in-out;
    }
   }
 
  }
  .fav-time-wrapper{
    position:absolute;
    bottom:22%;
    right:3%;
    color:white;
    padding:2px 8px;
    border-radius:6px;
    background-color:black;
  }
  .play-text{
    position:absolute;
    top:35%;
    left:43%;
    height:20px;
    width:35px;
    padding:7px 12px;
    border-radius:8px;
    margin-top:0px;
    background: linear-gradient(90deg, #fcff9e 0%, #c67700 100%);
   color:white;
   overflow: hidden;
   display:none;
  }

  .title-wrapper>img{
    width:100%;
  }
  .fav-title{
    font-size:13px;
    font-weight:600;
    margin-top:8px;
    padding-left:5px;
  }
  .thumb-img{
   height:100%;
  }
  .player-title{
    font-size:14px;
    font-weight:bold;
 
  }
  .remove-btn{
    padding:8px 15px;
    margin-left:8px;
    margin-bottom:10px;
    cursor:pointer;
    background-color:red;
    color:white;
    border-radius:5px;
    outline:none;
    border:none;

  }
 
 .fav-data-div{
  width:100%
  text-align:center;
  height:200px;
  display:flex;
  align-items:center;
  justify-content:center;
 }

 .fav-data-div>p>span{
  color:green;
  font-weight:700;
  font-size:20px;
  padding-right:5px;
 }
 .fav-data-div>p{
  font-size:16px;
  font-weight:700;
  color:gray;
 }

 


  @media all and (max-width:1024px) and (min-width:769px){
    .search-box-wrapper{
      width:53%;
  }
  .player-wrapper{
    width:95%;
  }
    .favourite-grid-wrapper{
     width:90%;
     margin-top:80px;
     padding-bottom:220px;
    }
    .fav-data-div{
     height:500px;
  
 }

}


@media all and (max-width:768px) and (min-width:481px){
  .player-wrapper{
    width:95%;
  }
  .search-box-wrapper{
      width:55%; 
  }
  .fav-data-div{
  height:30px;
 }
   .favourite-grid-wrapper{
    width:90%;
    margin-top:80px;
    padding-bottom:55px;
    grid-row-gap:50px;

   }
}

@media all and (max-width:480px) and (min-width:279px){
  .favourite-grid-wrapper{
    width:98%;
    grid-template-columns:repeat(1,1fr)
  }
  .player-wrapper{
    width:95%;
  
  }
  .search-box-wrapper{
      width:95%;
    
  }
  .fav-data-div{
  padding-bottom:30px;
 }
  
}
`;
