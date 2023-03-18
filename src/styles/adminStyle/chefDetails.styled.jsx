import styled from "styled-components";

export const ChefDetailsWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  gap: 10px;

  .video-grid-wrapp {
    box-sizing: border-box;
    width: 100%;
  }
  .banner-div {
    box-sizing: border-box;
  }
  .banner-image-wrapper {
    margin: auto;
    width: 100%;
    box-sizing: border-box;
  }
  .banner-image-wrapper > img {
    width: 100%;
  }

  .modal-btn-div {
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1;
    box-sizing: border-box;
    padding-bottom: 38px;
    padding-top: 15px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .modal-btn {
    padding: 8px 15px;
    border-radius: 6px;
    color: white;
    border: 1px solid gray;
    background-color: teal;
    font-weight: bold;
    display: block;
    margin-right: 50px;
    cursor: pointer;
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
  .video-icon {
    display: none;
  }
  .search-wrapper {
    width: 55%;
    margin-left: 40px;
  }

  @media all and (max-width: 1024px) and (min-width: 769px) {
    gap: 10px;
    .modal-content {
      width: 60%;
      margin-top: 100px;
    }
    .video-grid-wrapp {
      width: 100%;
      margin-bottom: 50px;
    }

    .modal-btn-div {
      padding-bottom: 58px;
      padding-top: 45px;
      background-color: white;
    }

    .modal-btn {
      margin: auto;
      cursor: pointer;
      margin-right: 20px;
    }

    .search-wrapper {
      width: 65%;
      margin-left: 20px;
    }
  }
  @media all and (max-width: 768px) and (min-width: 481px) {
    gap: 10px;
    .video-grid-wrapp {
      width: 100%;
      margin-bottom: 50px;
    }
    .modal-content {
      width: 65%;
      margin-top: 80px;
    }
    .modal-btn-div {
      padding-bottom: 58px;
      padding-top: 45px;
      background-color: white;
    }

    .modal-btn {
      margin: auto;
      cursor: pointer;
      margin-right: 20px;
    }

    .search-wrapper {
      width: 65%;
      margin-left: 20px;
    }
  }

  @media all and (max-width: 480px) and (min-width: 279px) {
    gap: 0px;
    box-sizing: border-box;

    .video-icon {
      display: block;
      font-size: 25px;
      margin-right: 10px;
      cursor: pointer;
    }

    .video-grid-wrapp {
      width: 100%;
      margin: auto;
      margin-bottom: 50px;
    }
    .modal {
      z-index: 1;
    }
    .modal-content {
      width: 65%;
      margin-top: 80px;
    }
    .banner-div {
      margin-top: 55px;
    }
    .modal-btn-div {
      padding-bottom: 35px;
      top: 40px;
    }

    .modal-btn {
      display: none;
    }

    .search-wrapper {
      width: 85%;
      margin-left: 7px;
    }
  }
`;
