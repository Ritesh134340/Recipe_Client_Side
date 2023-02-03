import styled from "styled-components"

export const ChefDetailsWrapper=styled.div`

    .banner-div{
        margin:auto;
      box-sizing:border-box
    }
    .banner-image{
        display:block;
        margin:auto;
        height:auto;
        width:96%;
    }
    .modal-btn-div{
     margin-top:30px;
     margin-bottom:40px;
    }
    .modal-btn{
    padding:8px 15px;
    border-radius:6px;
    color:white;
    background-color:teal;
    font-weight:bold;
    display:block;
    margin:auto;
    }
    .modal{
       width:100%;
       height:100vh;
       position: fixed;
       top:0;
       background-color: rgb(0,0,0);
       z-index:1;
       background-color: rgba(0,0,0,0.4);
       /* display:none; */
    
    }
    .modal-content{
        border:1px solid black;
      background-color: white;
      width:50%;
      margin:auto;
      height:250px;
   

    }
    .cross-icon{
        
    }
`