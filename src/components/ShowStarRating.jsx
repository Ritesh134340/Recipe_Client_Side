import React from "react";
import { IoMdStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import styled from "styled-components";

const ShowStarRating = ({ rating }) => {
  const stars = [];
  const fullStar = Math.floor(rating);
  const halfStar = rating - fullStar !== 0;
  const emptyStar = Math.floor(5 - rating);

  for (let i = 0; i < fullStar; i++) {
    stars.push(<IoMdStar key={i} className="rating-star-icon" />);
  }
  if (halfStar) {
    stars.push(<IoMdStarHalf key={fullStar} className="rating-star-icon" />);
  }
  for (let i = 0; i < emptyStar; i++) {
    stars.push(
      <IoMdStarOutline key={fullStar + i + 1} className="rating-star-icon" />
    );
  }

  return <ShowStarRatingWrapper>{stars}</ShowStarRatingWrapper>;
};

export const ShowStarRatingWrapper = styled.div`
  .rating-star-icon {
    font-size: 20px;
    padding: 0px;
    margin: -2px;
    color: rgb(255, 164, 28);
  }
`;

export default ShowStarRating;
