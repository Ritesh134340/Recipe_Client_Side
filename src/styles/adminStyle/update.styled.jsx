import styled from "styled-components";

export const UpdateWrapper = styled.div`
  display: flex;
  gap: 10px;
  .main-heading-wrapper {
    padding-bottom: 10px;
    margin: auto;
    width: 85%;

    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  }
  .hero-image-wrapper {
    margin: auto;
    width: 85%;
    margin-top: 25px;
    box-sizing: border-box;
  }
  .hero-title {
    text-align: center;
    margin-top: 25px;
    margin-bottom: 35px;
  }
  .hero-image {
    display: block;
    margin: auto;
    width: 100%;
    max-height: 500px;
    border-radius: 8px;
  }
  .update-input-wrapper {
    margin-top: 20px;
    padding-left: 15px;
    padding-right: 15px;
  }
  .update-input-wrapper > div > label {
    font-size: 13px;
    font-family: sans-serif;
    font-weight: 200;
    color: rgb(128, 128, 128);
  }
  .update-input-wrapper > div > input {
    width: 100%;
    height: 35px;
    box-sizing: border-box;
    margin-bottom: 15px;
    margin-top: 5px;
    font-size: 15px;
    border: none;
    padding-left: 8px;
    border-bottom: 0.6px solid #ccc;
    outline: none;
  }
  .new-data-wrapper {
    margin: auto;
    border-radius: 13px;
    box-shadow: rgba(63, 73, 127, 0.3) 0px 1px 2px 0px,
      rgba(63, 73, 127, 0.15) 0px 2px 6px 2px;
    padding: 12px 0px 38px 25px;
    margin-bottom: 30px;
  }
  .new-data-input-wrapper {
    margin-top: 30px;
    width: 50%;
  }
  .new-data-wrapper > h3 {
    color: gray;
    font-weight: 400;
  }
  .main-carousel-update-hide {
    display: none;
  }
  .main-carousel-update {
    display: block;
    position: fixed;
    width: 100%;
    box-sizing: border-box;
    height: 100vh;
    z-index: 2;
    background-color: rgba(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.5);
  }
  .main-carousel-data-wrapper-update {
    background-color: white;
    margin: auto;
    width: 35%;
    border-radius: 5px;
    padding: 15px;
    margin-top: 8%;
  }
  .cross-wrapper-update {
    display: flex;
    font-size: 25px;
    margin-bottom: 13px;
    align-items: center;
    justify-content: flex-end;
  }
  #update-cross-icon {
    cursor: pointer;
  }
  .update-save-btn {
    margin-top: 45px;
    cursor: pointer;
  }
  .modal-content-div-update {
    margin: auto;
  }
  .modal-content-div-update > input {
    margin-top: 6px;
    margin-bottom: 15px;
    border-radius: 5px;
    width: 100%;
    border: 0.8px solid #ccc;
    outline: none;
    box-sizing: border-box;
    height: 35px;
    padding-left: 8px;
    font-size: 14px;
  }
  .modal-content-div-update > button {
    padding: 8px 15px;
    border-radius: 8px;
  }
  .modal-content-div-update > label {
    font-size: 13px;
  }
  .new-data-input-wrapper > label {
    font-size: 14px;
    font-weight: 400;
  }
  .new-data-input-wrapper > input {
    box-sizing: border-box;
    border-radius: 4px;
    width: 100%;
    height: 35px;
    padding-left: 10px;
    border: 1px solid #ccc;
    outline: none;
    margin-top: 5px;
    margin-bottom: 13px;
  }
  .new-data-btn-div {
    margin: auto;
    margin-top: 30px;
  }
  .new-data-btn-div > button {
    display: flex;
    align-items: center;
    font-size: 16px;
    gap: 10px;
    border-radius: 8px;
    padding: 8px 15px;
    border: 1px solid gray;
    outline: none;
    cursor: pointer;
    background-color: white;
  }
  .hero-btn-wrapper > button {
    border: none;
    outline: none;
    padding: 13px 15px;
    font-weight: bold;
    margin-top: 5px;
    cursor: pointer;
    border-radius: 6px;
    background: linear-gradient(90deg, #9ebd13 0%, #008552 100%);
    color: white;
  }
  .add-icon {
    font-weight: 400;
  }
  .remove-btn-wrapper {
    box-sizing: border-box;
    position: relative;
  }
  .remove-btn-close {
    padding: 8px 15px;
    margin-bottom: 10px;
    border-radius: 8px;
    border: none;
    outline: none;
    margin-top: 13px;
    color: white;
    background: linear-gradient(90deg, #1cb5e0 0%, #000851 100%);
    cursor: pointer;
  }
  .carousel-head {
    text-align: center;
    margin-top: 35px;
    margin-bottom: 25px;
  }
  .remove-btn-open {
    position: absolute;
    border-radius: 8px;
    padding: 8px 15px;
    margin-bottom: 10px;
    background: linear-gradient(135deg, black 0%, red);
    bottom: 0px;
    border: none;
    outline: none;
    font-weight: bold;
    color: white;
    right: 15px;
    transition: all 0.3s ease;
  }

  .save-change {
    padding: 8px 15px;
    margin-bottom: 10px;
    border-radius: 8px;
    border: none;
    outline: none;
    margin-top: 13px;
    color: white;
    background: linear-gradient(90deg, #1cb5e0 0%, #000851 100%);
    cursor: pointer;
  }
  .show-more-div {
    display: flex;
    justify-content: space-between;
    user-select: none;
    border-radius: 2px;
    padding-left: 18px;
    padding-top: 8px;
    background-color: #f5f5f5;
    padding-right: 15px;
    cursor: pointer;
    align-items: center;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
  }
  .show-more-icon {
    font-size: 28px;
  }
  .show-more-wrapper {
    flex: 1;
    overflow: hidden;
  }
  .carousel-child-wrapper {
    border: 1px solid #ccc;
    width: 100%;
    margin: auto;
    display: flex;
    border-radius: 8px;
    justify-content: space-between;
    margin-bottom: 28px;
  }
  .carousel-img {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    width: 40%;
  }
  .carousel-data-wrapper {
    margin: auto;
    width: 85%;
    box-sizing: border-box;
  }
  .show-content {
    height: auto;
    transition: all 0.8s cubic-bezier(0, 1, 0, 1);
    position: relative;
    transform-origin: top;
    background-color: #fff;
  }
  .hide-content {
    height: 0px;
    overflow: hidden;
    transition: all 0.8s cubic-bezier(1, 0, 1, 0);
  }

  @media all and (max-width: 1024px) and (min-width: 769px) {
    .carousel-img {
      width: 50%;
    }
    .hero-image-wrapper {
      width: 95%;
    }
    .carousel-data-wrapper {
      width: 95%;
    }

    .main-carousel-data-wrapper-update {
      width: 45%;
      padding: 15px 20px;
      padding-bottom: 30px;
      margin-top: 9%;
    }
    .carousel-child-wrapper {
      flex-direction: column;
    }
    .carousel-img {
      width: 100%;
    }
    .remove-btn-close {
      margin-top: 0px;
    }
    .new-data-input-wrapper {
      box-sizing: border-box;
      width: 90%;
    }
    .main-heading-wrapper {
      width: 98%;
    }
  }

  @media all and (max-width: 768px) and (min-width: 481px) {
    gap: 5px;
    .new-data-input-wrapper {
      box-sizing: border-box;
      width: 90%;
    }
    .carousel-img {
      width: 50%;
    }
    .hero-image-wrapper {
      width: 98%;
    }
    .carousel-data-wrapper {
      width: 98%;
    }

    .main-carousel-data-wrapper-update {
      width: 45%;
      padding: 15px 20px;
      padding-bottom: 30px;
      margin-top: 9%;
    }
    .carousel-img {
      width: 100%;
    }
    .carousel-child-wrapper {
      flex-direction: column;
    }
    .remove-btn-close {
      margin-top: 0px;
    }
    .main-heading-wrapper {
      width: 98%;
    }
  }

  @media all and (max-width: 480px) and (min-width: 279px) {
    margin-top: 40px;
    gap: 0px;
    .main-heading-wrapper {
      width: 100%;
      padding-bottom: 3px;
      position: sticky;
      top: 0px;
      background-color: white;
      z-index: 1;
    }
    .new-data-input-wrapper {
      box-sizing: border-box;
      width: 100%;
    }
    .new-data-input-wrapper > input {
      box-sizing: border-box;
      margin-bottom: 13px;
    }
    .new-data-wrapper {
      padding-right: 5px;
      padding-left: 10px;
    }
    .main-carousel-data-wrapper-update {
      width: 90%;
      padding: 15px 10px;
      padding-bottom: 30px;
      margin-top: 12%;
    }
    .hero-btn-wrapper {
      margin-top: 10px;
    }
    .hero-image-wrapper {
      width: 99%;
      padding-top: 0px;
    }
    .carousel-img {
      width: 100%;
    }
    .hero-title > h3 {
      padding: 15px 0px;
      margin-top: 8px;

      background-color: #eeeeee;
    }
    .hero-image {
      height: auto;
      width: 100%;
    }
    .carousel-head {
      padding: 0.1px 0px;
      background-color: #eeeeee;
    }
    .update-input-wrapper {
      padding-right: 7px;
      padding-left: 7px;
    }
    .update-input-wrapper > div > input {
      padding-left: 3px;
    }
    .remove-btn-close {
      margin-top: 0px;
    }
    .carousel-child-wrapper {
      flex-direction: column;
    }

    .hero-title {
      margin-top: 0px;
      margin-bottom: 0px;
    }
    .carousel-data-wrapper {
      width: 98%;
    }
  }
`;
