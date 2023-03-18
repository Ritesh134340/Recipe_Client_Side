import React from "react";
import styled from "styled-components";
export const Heading = () => {
  return (
    <HeadingWrapper>
      <h1 className="admin-heading-top">Recipe Dashboard</h1>
    </HeadingWrapper>
  );
};

const HeadingWrapper = styled.div`
  color: #3a98b9;
  width: 100%;
  margin-bottom: 15px;

  .admin-heading-top {
    font-size: 25px;
    text-align: center;
  }

  @media all and (max-width: 1024px) and (min-width: 769px) {
    .admin-heading-top > h1 {
      font-size: 22px;
    }
  }

  @media all and (max-width: 768px) and (min-width: 481px) {
    .admin-heading-top > h1 {
      font-size: 22px;
    }
  }

  @media all and (max-width: 480px) and (min-width: 279px) {
  }
`;
