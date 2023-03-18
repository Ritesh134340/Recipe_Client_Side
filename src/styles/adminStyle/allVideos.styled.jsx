import styled from "styled-components";

export const AllVideosWrapper = styled.div`
  display: flex;
  gap: 5px;
  .searchWrapper {
    position: sticky;
    top: 0px;
    background-color: white;
    z-index: 1;
    padding: 30px 0px;
    margin-top: 10px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .search-holder {
    width: 50%;
    margin-right: 150px;
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
  #select-filter {
    width: 120px;
    font-size: 16px;
    margin-left: 35px;
    border-radius: 6px;
    height: 40px;
    cursor: pointer;
  }
  #select-filter > option {
    padding: 8px 4px;
    font-size: 17px;
  }

  @media all and (max-width: 1024px) and (min-width: 769px) {
    gap: 8px;
    .search-holder {
      width: 65%;
      margin-right: 20px;
    }

    #select-filter {
      margin-left: 20px;
    }
  }

  @media all and (max-width: 768px) and (min-width: 481px) {
    gap: 5px;
    .search-holder {
      width: 65%;
      margin-right: 20px;
    }

    #select-filter {
      margin-left: 20px;
    }
  }

  @media all and (max-width: 480px) and (min-width: 279px) {
    gap: 0px;
    .searchWrapper {
      margin-top: 30px;
      top: 20px;
    }
    .search-holder {
      width: 75%;
      margin-right: 5px;
    }

    #select-filter {
      width: 70px;
      font-size: 14px;
      margin-left: 5px;
      border-radius: 4px;
      height: 40px;
    }
    #select-filter > option {
      padding: 8px 4px;
      font-size: 17px;
    }
  }
`;
