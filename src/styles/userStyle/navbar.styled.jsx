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
        display:flex;
        align-items: center;
        gap:15px;
        margin:0px 10px;
    }
  
    .profile-image-div{
      
       cursor:pointer;
       overflow:hidden;
       object-fit:cover;
       object-position:top;
       width:40px;
       height:40px;
       border-radius:50%;
      
    }
    .nav-profile-image{
      width:100%;
      height:100%;
     

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