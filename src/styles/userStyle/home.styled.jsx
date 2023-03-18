import styled from "styled-components";

export const HomeWrapper = styled.div`
  position: relative;

  .pagination-wrapper {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
  }
  .search-wrapper {
    height: 460px;
    width: 100%;
    background-color: black;
    z-index: 7;
    position: relative;

    &::before {
      content: "";
      background-position: left;
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      height: 100%;
      width: 100%;
      opacity: 0.7;
      background-image: url(${(props) =>
        props.bg
          ? props.bg
          : "https://static.wixstatic.com/media/a936fed67f61499e9facde45392e47c8.jpg/v1/fill/w_980,h_426,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a936fed67f61499e9facde45392e47c8.jpg"});
      top: 0;
    }
  }

  .combine {
    width: 100%;
  }

  .carousel-div-home {
    margin: auto;
    box-sizing: border-box;
    width: 100%;
  }

  .search-head {
    width: 100%;
    color: white;
  }
  .loved {
    padding-top: 30px;
  }
  .home-head {
    text-align: center;
    font-weight: 600;
    font-family: sans-serif;
    margin-bottom: 15px;
    box-sizing: border-box;
    margin-top: 25px;
    font-size: 22px;
    border-bottom: 1px solid rgb(214 214 214);
    padding-bottom: 8px;
  }
  .video-grid-wrapper {
    margin-top: 40px;
    width: 99%;
    margin: auto;
  }
  .head-with-search {
    position: absolute;
    width: 40%;
    text-align: center;
    top: 30%;
    left: 32%;
  }

  @media all and (max-width: 1024px) and (min-width: 769px) {
    .search-head {
      font-size: 30px;
    }
    .head-with-search {
      position: absolute;
      width: 55%;
      text-align: center;
      top: 33%;
      left: 23%;
    }
  }

  @media all and (max-width: 768px) and (min-width: 481px) {
    .search-head {
      font-size: 30px;
    }
    .head-with-search {
      position: absolute;
      width: 58%;
      text-align: center;
      top: 33%;
      left: 23%;
    }
  }

  @media all and (max-width: 480px) and (min-width: 279px) {
    .search-head {
      font-size: 23px;
    }
    .head-with-search {
      position: absolute;
      width: 90%;
      text-align: center;
      top: 33%;
      left: 5%;
    }
    .search-wrapper {
      height: 300px;
      box-sizing: border-box;
    }
  }
`;
