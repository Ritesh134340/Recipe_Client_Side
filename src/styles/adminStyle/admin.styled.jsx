import styled from "styled-components";


export const AdminWrapper=styled.div`

   .main-div{
    display:flex;
    gap:5px;
   
   }
   .navigator{
     width:215px;
     height:500px;
     box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
     margin-top:30px;
     padding-left:5px;
     padding-right:5px;
     margin-left:20px;
     padding-top:25px;
     border-radius:4px;
    

   } 
   .common-sidebar-div{
    
    display:flex;
    font-weight:500;
    gap:11px;
    margin:auto;
    width:80%;
    border-radius:8px;
    padding:4px 10px;
    height:30px;
    align-items:center;
    margin-bottom:5px;
   
    
   }
   .admin-body{
       flex:1;
       height:99.5vh;
       overflow-y: scroll;
       overflow-x:hidden ;
   }
   .log-out-div{
    margin:auto;
    margin-top:70px;
    display:flex;
    align-items: center;
    justify-content: center;
    padding-top:8px;
    padding-bottom:8px;
    border-radius:8px;
    background-color:rgb(241 241 241);

   }
   .log-out-main{
    display:flex;
    cursor:pointer;
    align-items: center;
    gap:5px;

   }
   .sign-out-icon{
     font-size:23px;
     margin-top:0px;
     color:rgb(120,115,116);
     margin-bottom:0px;
   }
   .admin-logout-btn{
    margin-top:0px;
     margin-bottom:0px;
     outline:none;
     border:none;
      color:rgb(120,115,116);
     cursor:pointer;
     font-weight:600;
     font-size:16px;
     font-family:sans-serif;
     
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
`

export const Tab=styled.div`
  background-color: ${(props)=>props.selected ? "rgb(221,244,255)" : "white"};
  color: ${(props)=>props.selected ? "black" : "rgb(120,115,116)"};
 
 
`