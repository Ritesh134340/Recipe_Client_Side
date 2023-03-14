import styled from "styled-components";

export const NavWrapper=styled.div`

    display:flex;
    width:100%;
    position: fixed;
    top:0px;
    box-shadow:${(props)=>props.color ? "none" : "rgba(0, 0, 0, 0.24) 0px 3px 8px"} ;
    align-items:center;
    height:70px;
    background-color:${(props)=>props.color?props.color:"white"};
    justify-content:space-between;
    z-index:999;
    transition:all 500ms ease-in-out;
   
    .nav-left{
        margin-left:40px;
    }
    .chef-icon{
        font-size:40px;
        background:#FCFFE7;
        padding:8px;
        border-radius:50%;
    }
    
   
    .ham-icon-div{
        display:none;
    }
    .tabs-div{
        margin-right:50px;
     
        display:flex;
        gap:20px;  
        align-items:center;
        justify-content: 
        space-evenly;
    }
    .profile-div{
      cursor:pointer;
        display:flex;
        align-items: center;
        gap:15px;
        margin:0px 10px;
    }
    .profile-details-div{
      position:fixed;
      box-sizing:border-box;
      width:100%;
      height:100vh;
      background-color:rgb(0,0,0);
      background-color:rgba(0,0,0,0.5);
      top:0;
      display:flex;
      align-items:center;
      justify-content:center;
      padding:8px;
    }
    .details-close{
      cursor:pointer;
      font-size:25px;
      padding-right:10px;
      padding-top:10px;
    }
    .nav-modal-content{
      background-color:white;
      width:30%;
      border-radius:5px;
      padding:0px 25px 35px 25px;
    }
    .main-content{

     width:100%;
     margin:auto;
     margin-top:10px;
    }
    .close-wrapper{
      display:flex;
      justify-content:flex-end;
      align-items:center;
    }
    .manage-acc{
      color:#9ca3af;
      font-size:12px;
      letter-spacing:0.5px;
      line-height:16px;
      font-weight:400;
 
    }
    .main-content>label{
      font-size:13px;
      color:gray;
    }
    .main-content>input{
     width:100%;
     padding-left:8px;
     height:35px;
     margin-top:5px;
     border:1px solid gray;
     outline:none;
     margin-bottom:13px;
     border-radius:3px;
     box-sizing:border-box;

    }
    .main-content>button{
      border-radius:6px;
      padding:8px 13px;
      font-weight:bold;
      cursor:pointer;
      border-none;
      outline-none;
      display:block;
      margin-top:30px;
    }
   
    .profile-name{
      font-size:14px;
      font-weight:500;
    }
    .edit-image-wrapper{
      display:flex;
      box-sizing:border-box;
      margin-bottom:20px;
      gap:10px;
      position:relative;
    }
    .edit-image-wrapper>img{
      border:1px solid gray;
      width:80px;
      font-weight:500;
      padding:3px;
      height:80px;
      object-fit:top;
      border-radius:5px;
    }
    .change{
      position:absolute;
      bottom:0%;
      left:23%;
      border:none;
      outline:none;
      padding:3px 10px;
      font-size:13px;
      font-weight:600;
      border-radius:30px;
      background-color:#3F497F;
      color:white;
      cursor:pointer;
    }
  
    .profile-image-nav-div{
       cursor:pointer;
       width:45px;
       height:45px;
       background-size:cover;
       background-repeat:no-repeat;
       background-position:top;
       border-radius:50%;
    }
    .progress-main {
    display: flex;
    align-items: center;
    padding: 6px;
  }

    .log-btn{
        padding:8px 15px;
        background-color:black;
        color:white;
        cursor:pointer;
        outline:none;
        border-radius:8px;
        border:none;
        font-weight:bold;
    }
.nav-user-name{
  
    color:${(props)=>props.nameColor ? props.nameColor : "black"};
  letter-spacing:0.5px;
  font-weight: bold;  
}
    
@media all and (max-width:1024px) and (min-width:769px){
  .tabs-div{
    margin-right:15px;
  }
}


@media all and (max-width:768px) and (min-width:481px){
  .tabs-div{
    margin-right:10px;
  }
}

@media all and (max-width:480px) and (min-width:279px){
   .chef-icon{
    font-size:30px;
    color:#EB455F;
   }
  
    .nav-left{
        margin-left:18px;
    }
     .rav-right{
        position:relative;
     }
    .ham-icon-div{
        display:block;
        margin-right:13px;
        transition: all 600ms ease;
    }
    .ham-icon{
        font-weight:100;
        color:black;
        font-size:33px;
        display:${(props)=>!props.show ? "block" : "none"}
    }
    .cross-icon{
      transition: all 600ms ease;
        font-size:35px;
        display:${(props)=>props.show ? "block" : "none"}
    }
    .nav-user-name{
        color:white;
    }
    .tabs-div{
      position:absolute;
      box-sizing:border-box;
      flex-direction:column;
      top:0px;
      height:100vh;
      margin-right:0px;
      left:${(props)=>props.show ? "-18%" : "-130%"};
      top:${(props)=>props.show ? "0%" : "-150vh"};
      background-color :#00425A ;

      width:100vw;
      padding-top:50px;
      gap:30px;
      justify-content: flex-start;
      transition:all 500ms ease;
    }
    .profile-div{
        flex-direction:column;
    }
}
`