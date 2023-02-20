import styled from "styled-components"

export const HomeWrapper=styled.div`
   
    position:relative;
    margin-top:70px;
   
   .pagination-wrapper{
  
    margin:auto;
    display:flex;
    align-items: center;
    justify-content:center;
    margin-top:80px;
    
   }
    .search-wrapper{
        height:400px;
        width:100%;
        background-color: black;
        z-index:7;
      
        position:relative;

        &::before{
          content: '';
          background-position:left;
          background-repeat: no-repeat;
          background-size:cover;
          position:absolute;
          height:100%;
          width:100%;
          opacity:0.8;
          background-image:url("https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60");
          top:0;
        }
    }
  
    .combine{
        width:38%;
        position:absolute;
        top:53%;
        right:30%;
    }
   

    .carousel-div-home{
        margin:auto;
        box-sizing:border-box;
        width:100%;  
    }

    .search-head{
        position:absolute;
        left:34%;
        top:22%;
        color:white;
    }
    .loved{
        padding-top:30px;
   
    }
 .home-head{
    text-align:center;
    font-weight:600;
    font-family:sans-serif;
    margin-bottom:30px;
    box-sizing:border-box;
    margin-top:40px;
    border-bottom:1px solid rgb(214 214 214);
    padding-bottom:19px;
  
 }
 .video-grid-wrapper{
 
    margin-top:40px;
    width:99%;
    margin:auto;
 }
   
`