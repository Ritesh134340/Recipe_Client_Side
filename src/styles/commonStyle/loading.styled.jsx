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
  height: 100vh;
  box-sizing:border-box;
  position: absolute;
  top: 0;
  display:flex;
  justify-content:center;
  align-items:center;
  z-index: 1000;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.5);

  .icon-div {
    display:flex;
    justify-content:center;
    align-items:center;
    width: 90px;
    height: 90px;
    position: relative;
    box-sizing: border-box;
  }
  .border-div {
    border: 3px solid gray;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);
  
    border-top-color: red;
    border-bottom-color: blue;
    border-right-color: orange;
    border-left-color: green; 
     animation: ${LoadingAnimation} 1s linear infinite;
    position:absolute;
    top:7%;
    border-radius: 50%;
  }
  .chef-icon {
    z-index:2;
    font-size: 55px;
    color: red;
    padding:4px;
  }


`;
