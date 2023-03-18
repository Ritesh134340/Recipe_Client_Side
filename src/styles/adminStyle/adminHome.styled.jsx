import styled from "styled-components";

export const AdminHomeWrapper = styled.div`
  display: flex;

  .heading-wrapper {
    margin: auto;
    position: sticky;
    top: 0px;
    width: 98%;
    background-color: white;
    margin-top: 20px;
    margin-bottom: 50px;
    padding-top: 10px;
    padding-bottom: 30px;
  }

  .search-holder-main {
    width: 52%;
    margin: auto;
  }
  .indv-div-home {
    width: 80%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 15px;
    margin: auto;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 12px;
  }
  .logo-with-channel {
    display: flex;
    gap: 15px;
    align-items: center;
  }
  .channel-name {
    font-size: 15px;
    margin-bottom: 5px;
  }
  .profile-img {
    border-radius: 50%;
    width: 70px;
    height: 70px;
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
  }
  .chef-name {
    font-size: 11px;
    margin-top: 0px;
  }
  .details-btn {
    margin-right: 45px;
    padding: 8px 15px;
    background-color: black;
    color: white;
    font-size: bold;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    outline: none;
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

  @media all and (max-width: 1024px) and (min-width: 769px) {
    .search-holder-main {
      width: 88%;
    }
    .indv-div-home {
      width: 90%;
      padding: 8px 10px;
      border-radius: 8px;
    }
    .details-btn {
      margin-right: 20px;
    }
    .profile-img {
      width: 60px;
      height: 60px;
    }
  }

  @media all and (max-width: 768px) and (min-width: 481px) {
    .search-holder-main {
      width: 88%;
    }
    .indv-div-home {
      width: 90%;
      padding: 8px 10px;
      border-radius: 8px;
    }
    .details-btn {
      margin-right: 20px;
    }
    .profile-img {
      width: 60px;
      height: 60px;
    }
  }

  @media all and (max-width: 480px) and (min-width: 279px) {
    .heading-wrapper {
      top: 20px;
      margin-bottom: 30px;
    }
    .log-out-main {
      margin-top: 120px;
    }

    .search-holder-main {
      width: 92%;
    }
    .indv-div-home {
      width: 97%;
      box-sizing: border-box;
      padding: 8px 10px;
      border-radius: 8px;
    }
    .details-btn {
      margin-right: 5px;
    }
    .profile-img {
      width: 40px;
      height: 40px;
    }
  }
`;
