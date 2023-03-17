import styled, { keyframes } from "styled-components";

const LoadingAnimation = keyframes`
from{
    transform:rotate(0deg)
}
to{
    transform:rotate(360deg)
}
`;


export const LoadingWrapper = styled.div`
  width: 100%;
  height:100vh;
  padding-bottom:90px;
  position:absolute;
  top:0;
  z-index:1000;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.5);

  .icon-div {
    margin: auto;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing:border-box;
     
  }
  .border-div{
    border:3px solid gray;
    width:88px;
    height:88px;
    box-sizing:border-box;
    background:linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);
    border-top-color:red;
    border-bottom-color:blue;
    border-right-color:orange;
    border-left-color:green;
    animation: ${LoadingAnimation} 1s linear infinite;
     border-radius:50%;
     
  }
  .chef-icon {
    position: absolute;
    top:44%;
    font-size: 60px;
    color: red;
    padding: 8px;
   
  }

  @media all and (max-width:1024px) and (min-width:769px){
 
    .chef-icon {
    font-size:60px;
    top:46.7%;
    
  }
  .border-div{
    width:85px;
    height:85px;
  }

}


@media all and (max-width:768px) and (min-width:481px){
  .chef-icon {
    font-size:60px;
    top:46%;
    
  }
  .border-div{
    width:85px;
    height:85px;
  }
}

@media all and (max-width:480px) and (min-width:279px){
  .chef-icon {
    font-size:60px;
    top:44.3%;
    
  }
  .border-div{
    width:80px;
    height:80px;
  }
  
}
  
`;
