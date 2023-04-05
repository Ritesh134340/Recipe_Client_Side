import styled from "styled-components";
import React, { useState } from "react";
import { IoMdStarOutline, IoMdStar, IoMdStarHalf } from "react-icons/io";

const StarInput = ({ initialRating ,ratingSetter}) => {
    const [rating, setRating] = useState(initialRating);

    const handleStarClick = (clickedIndex) => {

      if (clickedIndex < initialRating) {
        ratingSetter(clickedIndex + 1)
        setRating(clickedIndex + 1);
      } else if (clickedIndex === initialRating && rating === initialRating + 1) {
        ratingSetter(initialRating)
        setRating(initialRating);
      } else {
        ratingSetter(clickedIndex + 1)
        setRating(clickedIndex + 1);
      }
    };
  
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<IoMdStar key={i} onClick={() => handleStarClick(i)} className="rating-star-icon" />);
      } else if (i === Math.floor(rating) && rating % 1 !== 0) {
        stars.push(<IoMdStarHalf key={i} onClick={() => handleStarClick(i)} className="rating-star-icon"/>);
      } else {
        stars.push(<IoMdStarOutline key={i} onClick={() => handleStarClick(i)} className="rating-star-icon" />);
      }
    }
  
    return <ShowStarRatingWrapper>      {stars}
    </ShowStarRatingWrapper>;
}



export default StarInput

export const ShowStarRatingWrapper = styled.div`
  .rating-star-icon {
    font-size: 28px;
    cursor:pointer;
    padding: 0px;
    color: rgb(255, 164, 28);
  }
`;