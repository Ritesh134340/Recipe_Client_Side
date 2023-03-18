import styled from "styled-components";

export const UsersWrapper = styled.div`
  display: flex;
  gap: 10px;

  .user-del-btn {
    padding: 8px 15px;
    background-color: red;
    color: white;
    font-weight: 600;
    border-radius: 4px;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .table-main {
    border: 1px solid #539165;
    border-radius: 8px;
    margin: auto;
    width: 70%;
    margin-top: 30px;
    /* padding:0px 3px; */
    margin-bottom: 30px;
    border-collapse: separate;
    border-spacing: 0px 8px;
  }

  td {
    border-bottom: 1px solid rgb(236, 237, 240);
  }
  .thead {
    background-color: rgb(142, 170, 85);
    text-align: left;
  }
  .data-common-gender {
  }
  .thead > tr > th {
    padding: 18px 0px;
    padding-left: 10px;
  }

  .table-body {
    text-align: left;
  }
  .body-row {
    background-color: rgb(236, 240, 223);

    &:nth-child(even) {
      background-color: rgb(215, 227, 191);
      padding-top: 30px;
    }
  }

  .pro-img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    border: 1px solid gray;
  }
  .search-div {
    padding-bottom: 10px;
    background-color: white;
    position: sticky;
    top: 0;
  }
  .name-with-email {
    line-height: 23px;
  }
  .data-common-name {
    font-weight: 500;
  }
  .data-common {
    font-size: 12px;
    color: gray;
  }
  .search-wrapper {
    width: 50%;
    margin: auto;
  }
  tbody > tr > td {
    padding: 5px 0px;
    padding-left: 10px;
  }

  @media all and (max-width: 1024px) and (min-width: 769px) {
    .table-main {
      width: 98%;
    }
    .search-wrapper {
      width: 80%;
    }
  }

  @media all and (max-width: 768px) and (min-width: 481px) {
    .table-main {
      width: 98%;
    }
    .search-wrapper {
      width: 85%;
    }
  }

  @media all and (max-width: 480px) and (min-width: 279px) {
    gap: 0px;
    box-sizing: border-box;
    .table-main {
      box-sizing: border-box;
      width: 100%;
      border: none;
      border-spacing: 0px 10px;
      padding: 0px 2px;
    }
    .search-div {
      margin-top: 45px;
    }
    .search-wrapper {
      width: 98%;
    }
    .pro-img {
      width: 40px;
      height: 40px;
    }

    tbody > tr > td {
      padding: 5px 0px;
      padding-left: 10px;
    }
    .thead > tr > th {
      font-size: 13px;
      padding: 18px 0px;
      padding-left: 7px;
    }

    .name-with-email {
      line-height: 18px;
    }
    .data-common-name {
      font-weight: 500;
      font-size: 12px;
    }
    .data-common {
      font-size: 9px;
      color: gray;
    }
    .data-common-gender {
      font-size: 12px;
    }
    .user-del-btn {
      padding: 2px 5px;
      font-size: 13px;
    }
  }
`;
