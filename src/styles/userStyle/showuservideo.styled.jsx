import styled from "styled-components";

export const ShowUserVideoWrapper = styled.div` 
      border:1px solid transparent;
      margin-top:70px;
      padding-bottom:30px;
      min-height:100vh;
   
      .dots-wrapper{
        position:relative;
      }
      .del-icon-wrapper{
        display:flex;
        margin-top:20px;
        margin-bottom:20px;
        padding:0px 20px;
        gap:13px;
        justify-content:center;
        align-items:center;
        &:hover{
          background-color:rgb(238,238,238);
          
        }
       
      }
      .comment-del-div{
        position:absolute;
        top:100%;
        right:30%;
        z-index:50;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        background-color:white;
        border-radius:8px;
        cursor:pointer;
      }
      .del-icon{
        font-size:25px;
        padding:8px 0px;
      
      }
      .del-text{
        width:100%;
        margin-top:0px;
        margin-bottom:0px;
        user-select:none;
        box-sizing:border-box;
        &:hover{
          background-color:rgb(238,238,238);
          
        }
      }
      .dots-icon{
        font-size:18px;
        cursor:pointer;
        padding:5px;
        border-radius:50%;
      }
      .comment-text-div{
        flex:1;
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-left:18px;
      
      }
      .like-icon{
        font-size:20px;
        cursor:pointer;
       
      }
      .like-div{
   
        display:flex;
        align-items:center;
        gap:15px;
      }
      .user-name-text{
        color:#0f0f0f;
        font-size:13px;
        margin-bottom:7px;
        margin-top:0px;
        font-family: 'Roboto', sans-serif;
        line-height:18px;
        font-weight:500;


       
      }
    
      .user-comment-text{
       
        font-family: 'Roboto', sans-serif;
        color:#0f0f0f;
        font-size:14px;
        margin-top:0px;
        line-height:20px;
        font-weight:400;
      }
.show-comment{
  color:rgb(107,107,107);
}
.show-comment-time{
  font-size:12px ;
  font-weight:400;
  font-family:'Roboto',sans-serif;
  line-height:18px;
  padding-left:8px;
}
      .comment-input{
        height:40px;
        border:none;
        outline:none;
        box-sizing:border-box;
        padding-left:13px;
        padding-top:8px;
        font-family:'Roboto',sans-serif;
        font-weight:400;
        font-size:16px;
        padding-bottom:3px;
        width:100%;
        box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
       

        &:focus{
          border-bottom:2px solid black;
        
        }

      }


      .comment-btn-holder{
        display:flex;
        justify-content:space-between;
        align-items:center;
      } 
      .emoji-div{
        position:relative;
      }
      .emoji-container-main{
        width:95%;
        box-sizing:border-box;
        margin:auto;
      }
      .emoji-search-div{
       width:100%;
       margin-bottom:18px;
       margin-top:10px;
       box-sizing:border-box;
      }
      .emoji-input-box{
        width:100%;
        box-sizing:border-box;
        border:none;
        outline:none;
        background-color:rgb(249,249,249);
        height:35px;
        padding-left:8px;
        font-size:15px
      }
      .emoji-holder-div{
        cursor:pointer;
        box-sizing:border-box;
        font-size:19px;
      }
      .emoji-wrapper{
        width:100%;
        box-sizing:border-box;
        justify-content:center;
        height:170px;
        display:flex;
        gap:6px;
        flex-wrap:wrap;
        overflow-y:scroll; 
      }
      .emoji-search-result-div{
        width:100%;
        box-sizing:border-box;
      }
      .emoji-container{
        position:absolute;
        left:0;
        box-sizing:border-box;
        top:100%;
        width:400px;
        height:250px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        background-color:white;
        border-radius:13px;
        display:${(props) => (props.showEmoji ? "block" : "none")};
        padding-bottom:15px;
        
      }
      .emoji-icon{
        user-select:none;
        font-size:22px;
        background-color:rgb(242,242,242);
        cursor:pointer;
        border-radius:50%;
        padding:8px;
        &:hover{
          background-color:rgb(235,235,235);
        }
        
      }
      .comment-btn-div{
          display:flex;
          align-items:center;
          gap:23px;
        
      }
      .comment-btn-div>p:nth-child(1){
        font-family:'Roboto',sans-serif;
        font-weight:500;
        font-size:14px;
        line-height:36px;
        color:#0f0f0f;
        cursor:pointer;
        user-select:none;
        background-color:white;
        padding:0px 15px;
        &:hover{
          background-color:rgb(235,235,235);
          border-radius:30px;
        
        }
      }
      .comment-btn-div>p:nth-child(2){
        padding:0px 15px;
        cursor:pointer;
        user-select:none;
        border-radius:30px;
        background-color:rgb(6,95,212);
        
        font-family:'Roboto',sans-serif;
        font-weight:500;
        font-size:14px;
        line-height:36px;
      }
      .comment-and-btn-wrapper{
        flex:1;
        box-sizing:border-box;
       
      }
      .author-wrapper{
        display:flex;
        gap:15px;
        box-sizing:border-box;
        margin-top:20px;
        align-items:centre;
        margin-bottom:25px;
      }
      .comment-btn-container{
        box-sizing:border-box;
        display:${(props) => (props.showCommentBx ? "block" : "none")}
       
      }
      .user-comment-main{
        margin-top:15px;
  
     
      }
      .user-comment-div{
        display:flex;
        padding-bottom:5px;
        margin-bottom:18px;
       
      }
      .comment-author-image{
        display:inline-block;
        align-items:center;
        width:40px;
        height:40px;
        border-radius:50%;
        background-repeat:no-repeat;
        background-size:cover;
        background-position:top;
        
      }
      .comment-div{
       padding-bottom:30%;
       margin-top:20px;
      }
      .rating-div{
        margin-bottom:30px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        background-color:#EEEEEE;
        padding:15px 5px;
        padding-left:8px;
        border-radius:8px;
        box-sizing:border-box;
      }
      
     .favourite-wrapper{
       display:flex;
       align-items:center;
       gap:30px;
        cursor:pointer;
    }
    .fav-btn-wrapper{
      display:flex;
      font-size:15px;
      align-items:center;
      gap:5px;
      font-weight:500;
      font-weight:500px;
      
    }
    .users-rating-text{
      font-size:15px;
    }
     .add-icon{
      color:gray;
      font-size:20px;
     }
      .rate-now-btn{
        user-select:none;
        margin-right:30px;
        cursor:pointer;
        font-size:15px;
        font-weight:700;
        color:rgb(66,129,172);
        border-radius:5px;
      }
      .star-div{
        display:flex;
        align-items:center;
        gap:8px;
      }
      .vid-des-div{
        padding:8px;
        background-color:#ECF2FF;
        transition:all 600ms ease-in-out;
        border-radius:5px;
      }
      .show-more-text{
        color:blue;
        font-size:14px;
        cursor:pointer;
        user-select:none;
      }
      .rating-modal{
        position:fixed;
        top:0;
        left:0;
        display:${(props) => (props.modalShow ? "block" : "none")};
        background-color:rgba(0,0,0,0.5);
        width:100%;
        height:100vh;
        z-index:999;
        justify-content:center;
        align-items:center;
      }
      .rating-input{
        width:25px;
        height:25px;
        font-size:16px;
        text-align:center;
        outline:none;
        margin-left:10px;
        margin-right:10px;
        border:none;
        border-bottom:2px solid rgba(0, 128, 255, 0.5);
        &:focus{
          box-shadow: 0px 2px 10px rgba(0, 128, 255, 0.5);
          border:1px solid  rgba(0, 128, 255, 0.5)
        }
      }
      .main-modal-content{
        width:90%;
        margin:auto;
        padding:10px;
      
      }
      .cross-container{
  
          display:flex;
          align-items:center;
          justify-content:flex-end;
          padding-right:15px;
          padding-top:15px;
          box-sizing:border-box;
      }
      .rating-cross-icon{
      font-size:23px;
      cursor:pointer;
      }
      .input-tag{
        display:inline-block;
         margin-left:30px;
        
        font-size:17px;
        color:gray;
      }
      .rating-sub-btn{
        display:block;
        margin:auto;
        cursor:pointer;
        padding:7px 15px;
        border-radius:4px;
        border:none;
        outline:none;
        font-size:17px;
        margin-top:25px;
        margin-bottom:20px;
      }
      .rating-head{
        font-weight:500;
      }
      .rating-discription{
        font-size:15px;
        line-height:23px;
        letter-spacing:0.4px;

      }
      .rat-highlight{
        color:#DF2E38;
        font-size:18px;
      }
      .rating-modal-content{
       width:40%;
       height:60%;
       margin:auto;
       margin-top:10%;
       border-radius:8px;
       background-color:white;
      }
      .video-desc{
        height:${(props) => (props.showDesc ? "auto" : "150px")};
        overflow:hidden;
      }
      .show-video-title{
        font-weight:500;
        font-size:16px;
        margin-top:0px;
        margin-bottom:20px;
   
      }
     .player-wrapper{
       width:70%;
       margin:auto;
       margin-top:30px;
       overflow: hidden;
    };
  .ch-log-nam-wrapper{
  display:flex;
  align-items:center;
  margin-top:20px;
  gap:8px;
 margin-bottom:15px;
  }
  .ch-show-nam>p{
    font-weight:600;
    font-size:18px;
  }
  .ch-show-log{
   width:50px;
   height:50px;
   border-radius:50%;
   background-size:cover;
   background-repeat-no-repeat;
   background-position:top;
  }
  .ch-show-nam{

  }

    @media all and (max-width:1024px) and (min-width:769px){
   .player-wrapper{
    width:92%;
   }
   .comment-div{
       padding-bottom:33%;
     
      }
}


@media all and (max-width:768px) and (min-width:481px){
 
 .player-wrapper{
   width:94%;
 }
 .comment-div{
       padding-bottom:35%;
      }
}

@media all and (max-width:480px) and (min-width:279px){
 .player-wrapper{
  width:100%;
 }
 .rating-div{
  margin-top:8px;
   border-radius:0px;
 }
 .add-icon{
  font-size:17px;
 }
 .star-div{
  gap:0px;
  flex-direction:column;
  margin-left:10px;
 }
 .fav-btn-wrapper{
  gap:4px;
 }
 .fav-btn-wrapper>p{
  font-size:13px;
  white-space:nowrap;
 }
 .users-rating-text{
  font-size:14px;
  margin-top:4px;
 }
 .favourite-wrapper{
  gap:12px;
  padding-right:5px;
 }
 .rate-now-btn{
  margin-right:0px;
  font-size:13px;
  white-space:nowrap
 }
 .show-video-title{
  font-size:15px;
  line-height:22px;
  padding-left:8px;
  margin-bottom:0px;
 }
 .ch-log-nam-wrapper{
  padding-left:8px;
 }
 .ch-show-log{
  width:40px;
  height:40px;
 }
 .ch-show-nam{
  font-size:16px
 }
 .show-comment{
  padding-left:8px;
 }
 .emoji-wrapper{
        height:150px;
      }
 .emoji-container-main{
        width:99%;
      }
   .comment-div{
       padding-bottom:58%;
      }
 .emoji-container{
        top:110%;
        width:300px;
        height:230px;
        padding-bottom:0px;
        border-radius:10px;
      }

} 
  
`;
