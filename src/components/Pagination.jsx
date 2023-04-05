import React from "react";
import styled from "styled-components";
import {MdKeyboardArrowRight} from "react-icons/md"
import {MdKeyboardArrowLeft} from "react-icons/md"
const createArray = (current, total) => {
  const displayButtons = 7;
  let start = current - Math.floor(displayButtons / 2);
  if (start < 1) {
    start = 1;
  }
  let end = start + displayButtons - 1;
  if (end > total) {
    end = total;
    start = end - displayButtons + 1;
    if (start < 1) {
      start = 1;
    }
  }
  return new Array(end - start + 1).fill(start).map((ele, index) => {
    return ele + index;
  });
};

const Pagination = ({ current, total, handleChange }) => {
  let pages = createArray(current, total).map((ele, index) => {
    return (
      <div
        disabled={current === ele}
        key={index}
        onClick={() => handleChange(ele)}
        style={{
          backgroundColor: current === ele ? "red" : "white",
          color: current === ele ? "white" : "black"
        }}
      >
        {ele}
      </div>
    );
  });

  return (
    <PaginationWrapper>
      <div className="pagination-btn-wrapper">
        <MdKeyboardArrowLeft
          style={{ backgroundColor: current === 1 ? "#BAD7E9" : "#3A98B9" }}
          disabled={current === 1}
          onClick={() => handleChange(current - 1)}
          className="change-button"
        />

        <div className="show-current">{pages}</div>

        <MdKeyboardArrowRight
          style={{
            backgroundColor: total === current ? "#BAD7E9" : "#3A98B9"
          }}
          disabled={total === current}
          onClick={() => handleChange(current + 1)}
          className="change-button"
        />
      </div>
    </PaginationWrapper>
  );
};


export default Pagination;

const PaginationWrapper = styled.div`
  


  .pagination-btn-wrapper {
    display: flex;
    align-items: center;
    margin: auto;
    user-select:none;
  }
  .show-current{
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .show-current>div{
    width:35px;
    height:35px;
    display:flex;
    justify-content:center;
    align-items:center;
    border:0.1px solid #EEEEEE;
    border-radius:3px;
    cursor:pointer;
    user-select:none;
  }
  .change-button {
    padding: 8.5px 10px;
    cursor: pointer;
    border:none;
    outline: none;
    font-weight:bold;
    color:white;
    font-size:20px;
    border-radius:5px;
   
  }
`;
