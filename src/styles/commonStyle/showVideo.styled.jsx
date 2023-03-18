import styled from "styled-components";

export const ShowVideoMain = styled.div`
  display: flex;
  gap: 5px;

  .player-wrapper {
    width: 90%;
    margin: auto;
    margin-top: 30px;
    overflow: hidden;
  }
  .player-div {
    overflow: hidden;
  }

  @media all and (max-width: 1024px) and (min-width: 769px) {
    .player-wrapper {
      width: 96%;
    }
  }

  @media all and (max-width: 768px) and (min-width: 481px) {
    .player-wrapper {
      width: 96%;
    }
  }

  @media all and (max-width: 480px) and (min-width: 279px) {
    gap: 0px;
    .player-wrapper {
      width: 98%;
    }
    .player-div {
      margin-top: 20px;
    }
  }
`;
