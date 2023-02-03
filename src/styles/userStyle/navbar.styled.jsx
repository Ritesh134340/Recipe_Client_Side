import styled from "styled-components";

export const NavWrapper=styled.div`
    display:flex;
    width:100%;
    position: fixed;
    top:0;
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
        font-size:50px;
    }
   
    .ham-icon-div{
        display:none;
    }
    .tabs-div{
        width:300px;
        margin-right:50px;
        display:flex;
        align-items:center;
        justify-content: 
        space-between;
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

    
@media all and (max-width:1024px) and (min-width:769px){
  .tabs-div{
    margin-right:30px;
  }
}


@media all and (max-width:768px) and (min-width:481px){
  .tabs-div{
   width:250px;

  }
}

@media all and (max-width:480px) and (min-width:279px){
    .nav-left{
        margin-left:25px;
    }
     .rav-right{
        position:relative;
     }
    .ham-icon-div{
        display:block;
        margin-right:20px;
        transition: all 600ms ease;
    }
    .ham-icon{
        font-size:35px;
        display:${(props)=>!props.show ? "block" : "none"}
    }
    .cross-icon{
        font-size:35px;
        display:${(props)=>props.show ? "block" : "none"}
    }
    .tabs-div{
      position:absolute;
      flex-direction:column;
      top:70px;
      height:100vh;
      margin-right:0px;
      right:${(props)=>props.show ? "0%" : "-130%"};
      background-color :blue ;
      width:100vw;
      padding-top:50px;
      gap:30px;
      justify-content: flex-start;
      transition:all 400ms ease;
    }
}
`