import styled from "styled-components";


export const AdminWrapper=styled.div`

  box-sizing:border-box;
  .admin-wrapper-main{
   box-sizing:border-box;
   display:flex;
   margin-left:30px;

   margin-top:35px;
   padding:0px 12px ;
   padding-top:10px;
   border-radius:8px;
   justify-content:center;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  .admin-menu-wrapper{
    display:none;
  }

   
   .navigator{
     box-sizing:border-box;
     height:auto;
     border-radius:4px;
   } 

   .common-sidebar-div{
    display:flex;
    font-weight:500;
    gap:11px;
    margin:auto;
    border-radius:8px;
    padding:4px 10px;
    height:30px;
    align-items:center;
    margin-bottom:10px;

    &:hover{
      animation:tabAnimation .4s cubic-bezier(.25,.46,.45,.94) both
    }
    @keyframes tabAnimation
    {
      0%{
      box-shadow:0 0 0 0 transparent
      }
    100%{
      box-shadow:0 0 10px 0 rgba(0,0,0,.25)
    }
    }
   }
   
   .log-out-main{
    display:flex;
    margin:auto;
    justify-content:center;
    border-radius:5px;
    background-color:#F6F7C1;
    cursor:pointer;
    align-items: center;
    gap:5px;
    margin-top:50px;
    margin-bottom:50px;

    
   }
   .sign-out-icon{
     font-size:23px;
    
     color:#E21818;
    
   }
   .admin-logout-btn{
     outline:none;
     border:none;
      color:#E21818;
     cursor:pointer;
     font-weight:600;
     font-size:16px;
     font-family:sans-serif;
     margin-top:10px;
     margin-bottom:10px;
  }

  .sidebar-profile{
     margin:auto;
    padding:0px 20px;
   

  }
  .wel{
    color:green;
    font-size:18px;
    font-weight:600;
   

  }
  .img-wrapper{
    display:flex;

    margin-top:0px;
    margin-bottom:10px;
    align-items: center;
    gap:15px;
  }
  .common-p{
    font-family:sans-serif;
    margin-top:0px;
    margin-bottom:0px;
    font-size:15px;
    font-weight:600;
  
   
  }
  .name-p{
    margin-top:0px;
    margin-bottom:5px;
    font-family:sans-serif;
    font-size:24px;
    font-weight:500;
 
  }
  
  .lower-p{
    margin-bottom:30px;
    color:rgb(120,115,116);
    padding-bottom:15px;
    border-bottom:0.3px solid rgb(245,246,247);
    
  }
  .side-profile-div{
   width:45px;
   height:45px;
   /* display:flex; */
   /* justify-content: center; */
   /* align-items: center; */
   box-sizing:border-box;
   overflow: hidden;
   border-radius:50%;
   object-fit:cover;
   object-position:top;
   
  }
  .profile-img-side{
    width:100%;
    height:100%;
  }
 

  @media all and (max-width:1024px) and (min-width:769px){

  .admin-wrapper-main{
   margin-left:15px;
   margin-top:35px;
   padding:0px 12px;
    }
  
  }


  @media all and (max-width:768px) and (min-width:481px){

    .admin-wrapper-main{
   margin-left:15px;
   margin-top:35px;
   padding:0px 12px;
    }
    

 
  }


  @media all and (max-width:480px) and (min-width:279px){
    background-color:white;
    position:fixed;
    top:0;
    z-index:2;
 
    .admin-wrapper-main{
      position:absolute;
       top:0; 
      
      transition:all 500ms ease;
    left:${(props)=>props.navigator? "0% ": "-120%"};
     z-index:99;
      background-color:#F0EEED;
      height:100vh;
      border-radius:0px;
      margin-top:0px;
      margin-left:0px;
      padding-top:20px ;
      padding-left:25px;
      padding-right:50px;
    
    }
    .admin-menu-wrapper{
      display:block;
      width:100vw;
      display:flex;
      margin-top:8px;
      align-items:center;
      justify-content:flex-end;
      box-sizing:border-box;
      
    }
    .admin-menu-icon{
      font-size:35px;
      padding-right:8px;
     
    }
    .admin-cross-icon{
      font-size:35px;
      padding-right:8px;

  
    }

    .log-out-main{
      margin-top:90px;
    }
    
  }
`

export const Tab=styled.div`
  background-color: ${(props)=>props.selected ? "rgb(221,244,255)" : "white"};
  color: ${(props)=>props.selected ? "black" : "rgb(120,115,116)"};
 
 
`