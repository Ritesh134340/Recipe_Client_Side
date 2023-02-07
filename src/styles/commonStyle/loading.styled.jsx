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
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.3);

  .icon-div {
    margin: auto;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
     
  }
  .border-div{
    border:2px solid #ccc;
    width:80px;
    height:80px;
    border-top-color: #333;
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
  
  
`;
