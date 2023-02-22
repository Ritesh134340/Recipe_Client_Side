import styled from "styled-components"

export const ChannelDetailsWrapper=styled.div`
  margin-top:80px;
  .channeldetails-wrapper-main{
    width: 85%;
    box-sizing:border-box;
    margin:auto;
  }
  .banner-div {
    margin: auto;
    box-sizing: border-box;
  }
  .banner-image {
    display: block;
    margin: auto;
    height: auto;
    width:100%;
   
  }
  .modal-btn-div {
    margin-top: 50px;
    margin-bottom: 80px;
    display:flex;
    align-items: center;
  }

  .no-data {
    color: gray;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.5px;
 
    
  }
  .query {
    color: green;
  }

  .label {
    font-size: 14px;
    font-family: sans-serif;
    font-weight: 500;
    color: gray;
    margin-bottom: 5px;
    display: block;
    letter-spacing: 0.6px;
  }
 
  

  .input {
    width: 100%;
    height: 38px;
    box-sizing: border-box;
    margin-top: 9px;
    margin-bottom: 10px;
    outline: none;
    border: 1px solid gray;
    padding-left: 8px;
  }
  
  @media all and (max-width:1024px) and (min-width:769px){
    .channeldetails-wrapper-main{
  width:98%;
  padding-bottom:40px;


 }
}


@media all and (max-width:768px) and (min-width:481px){
  .channeldetails-wrapper-main{
  width:98%;
  padding-bottom:40px;

 }
}

@media all and (max-width:480px) and (min-width:279px){
 .channeldetails-wrapper-main{
  width:99%;
  padding-bottom:40px;

 }
}

 
`