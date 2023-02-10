import styled from "styled-components"

export const HomeWrapper=styled.div`
    height:400px;
    position:relative;
    

    .search-wrapper{
        height:100%;
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
          opacity:0.7;
          background-image:url("https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60");
          top:0;
        }
    }
    .combine{
        position:absolute;
        display:flex;
        align-items: center;
        gap:10px;
        top:53%;
        right:31%;
    }
    .search-input{
        border-radius:6px;
        width:400px;
        height:40px;
        background-color: white;
        outline:none;
        border:1px solid gray;
        padding-left:13px;
        font-size:17px;

    }
  
    .search-icon{
        font-size:40px;
        color:white;
        cursor:pointer;

    }

    .carousel-div-home{
        
        width:100%;
        margin:auto;
       
    }

    .search-head{
        position:absolute;
        left:34%;
        top:22%;
        color:white;
    }
 .home-head{
    text-align:center;
    font-weight:600;
    font-family:sans-serif;
    margin-bottom:30px;
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