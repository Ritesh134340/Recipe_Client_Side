import styled from "styled-components";

export const UpdateWrapper = styled.div`
  display: flex;
  gap: 10px;

  .hero-image-wrapper {
    border-top: 0.5px solid  #ccc;
    margin: auto;
    width:85%;
    margin-top:25px;
    box-sizing: border-box;
    
  }
  .hero-title {
   
    text-align:center;
    margin-top:25px;
    margin-bottom:35px;
  }
  .hero-image {
    display: block;
    margin: auto;
    width:100%;
    border-radius:8px;
  }
  .update-input-wrapper {
    margin-top: 20px;
    padding-left: 15px;
    padding-right: 15px;
  }
  .update-input-wrapper > div > label {
    font-size: 15px;
    font-family: sans-serif;
    font-weight: 200;
    color: rgb(128,128,128);
  }
  .update-input-wrapper > div > input {
    width: 100%;
    height: 35px;
    box-sizing:border-box;
    margin-bottom: 15px;
    margin-top: 5px;
    font-size:16px;
    border: none;
    padding-left: 8px;
    border-bottom: 0.6px solid #ccc;
    outline: none;
  }
  .new-data-wrapper{
    border:2px solid red;
  }
  .remove-btn-wrapper {
    box-sizing: border-box;
    position: relative;
  }
  .remove-btn-close {
    padding: 8px 15px;
    margin-bottom: 10px;
    border-radius: 8px;
    border:none;
    outline:none;
    margin-top: 13px;
    color:white;
    background: linear-gradient(90deg, #1CB5E0 0%, #000851 100%);
    cursor: pointer;
  }
  .carousel-head{
    text-align:center;
    margin-top:35px;
    margin-bottom:25px;
  }
  .remove-btn-open {
    position: absolute;
    border-radius: 8px;
    padding: 8px 15px;
    margin-bottom: 10px;
    background:linear-gradient(135deg, black 0% ,red);
    bottom: 0px;
    border:none;
    outline:none;
    font-weight:bold;
    color:white;
    right: 15px;
    transition:all 0.3s ease;
  }

  .save-change{
    padding: 8px 15px;
    margin-bottom: 10px;
    border-radius: 8px;
    border:none;
    outline:none;
    margin-top: 13px;
    color:white;
    background: linear-gradient(90deg, #1CB5E0 0%, #000851 100%);
    cursor: pointer;
  }
  .show-more-div {
    display: flex;
    justify-content: space-between;
    user-select: none;
    border-radius: 2px;
    padding-left: 18px;
    background-color: #f5f5f5;
    padding-right: 15px;
    cursor: pointer;
    align-items: center;
    box-sizing:border-box;
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
    width:85%;
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
`;
