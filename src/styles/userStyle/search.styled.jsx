import styled from "styled-components";

export const SearchResultWrapper=styled.div`
    margin-top:80px;
    .search-grid-wrapper{
     
        width:85%;
        margin:auto;
        min-height:80vh;
        margin-top:70px;
    }
    .result-show{
       border-bottom:1px solid #ECF2FF;
       
       height:auto;
       padding-top:25px;
       padding-bottom:25px;
        padding-left:50px;
    }
    .result-show>p{
    margin:0px;
    margin-bottom:15px;
    font-size:18px;
    font-weight:500
    }
    .result-show>span{
    margin:0px;
    box-sizing:border-box;
    padding:4px 20px;
    margin-left:15px;
    color:#E23E57;
    border-radius:30px;
    font-weight:700;
    font-size:17px;
    background-color:#D6E6F2;
    }
    .no-recipe-data{
        margin:auto;
        margin-bottom:100px;
        height:200px;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .no-recipe-text{
     letter-spacing:0.5px;
    }
    .no-recipe-text>span{
        font-size:20px;
        font-weight:500;
        color:#E90064;
    }

    @media all and (max-width:1024px) and (min-width:769px){
        .no-recipe-data{
            min-height:38vh;
        }
        .search-grid-wrapper{
    width:95%;
  }
  .search-grid-wrapper{
    min-height:45vh;
  }
}


@media all and (max-width:768px) and (min-width:481px){
    .no-recipe-data{
            min-height:28vh;
        }
        .search-grid-wrapper{
    width:95%;
  }
  .search-grid-wrapper{
    min-height:34vh;
  }
}

@media all and (max-width:480px) and (min-width:279px){
  .no-recipe-data{
    height:auto;
  
  }
  .search-grid-wrapper{
    width:100%;
  }
  .result-show{
    padding-left:10px;
    padding-top:10px;
  }
  .result-show>p{
    font-size:17px;
    margin-bottom:10px;
  }
  .result-show>span{
    font-size:15px;
    font-weight:600;
    padding:3px 15px;
  }
}
`