import styled from "styled-components";

export const ChefDetailsWrapper = styled.div`
   display:flex;
   gap:5px;
  .banner-div {
    margin: auto;
    box-sizing: border-box;
  }
  .banner-image {
    display: block;
    margin: auto;
    height: auto;
    width: 96%;
  }
  .modal-btn-div {
    margin-top: 30px;
    margin-bottom: 40px;
  }
  .modal-btn {
    padding: 8px 15px;
    border-radius: 6px;
    color: white;
    border: 1px solid gray;
    background-color: teal;
    font-weight: bold;
    display: block;
    margin: auto;
    cursor: pointer;
  }

  .modal {
    position: fixed;
    z-index: 1;
    padding-top: 50px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
    display: ${(props) => (props.showModal ? "block" : "none")};
  }
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    border-radius: 8px;
    padding: 20px;
    border: 1px solid #888;
    width: 30%;
  }
  .cross-icon-div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .cross-icon {
    box-sizing: border-box;
    padding: 0px 15px 0px 0px;
    font-size: 42px;
    cursor: pointer;
    font-weight: 900;
    color: gray;
    &:hover {
      color: black;
    }
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
  .video-form {
  }
  .input-sp {
    margin-bottom: 10px;
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
  .thumb-prev {
    width: 100%;
    height: 150px;
    display: block;
    margin: auto;
    margin-bottom: 20px;
  }
  .upload-btn {
    display: block;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 5px;
    cursor: pointer;
    padding: 8px 15px;
    color: white;
    background-color: black;
    font-weight: bold;
    border-radius: 6px;
    font-size: 16px;
  }
  .progress-wrapper {
    border: 1px solid red;
  }

 
`;
