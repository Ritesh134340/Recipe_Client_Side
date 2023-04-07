import React, { useState } from "react";
import styled from "styled-components";

const ModifyDescription = ({ description }) => {
  const [showMore, setShowMore] = useState(false);

  const elements = description?.split(/(https?:\/\/[^\s]+)/g);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const renderedElements = elements?.map((element, index) => {
    if (element?.match(/https?:\/\/[^\s]+/)) {
      return (
        <pre key={index} style={{ fontSize: "13px" }}>
          <a href={element} target="_blank" rel="noopener noreferrer">
            {element}
          </a>
        </pre>
      );
    } else {
      return (
        <pre key={index} className="para-wrapper">
          {element}
        </pre>
      );
    }
  });

  return (
    <DisWrapper showText={showMore}>
    
       <div className="des-main-part">
       <h4>Video Description : </h4>
       {renderedElements}
       </div>
     
        <p className="show-more-text" onClick={handleShowMore}>
          {showMore ? "Show Less" : "... Show more"}
        </p>

    </DisWrapper>
  );
};

export default ModifyDescription;

const DisWrapper = styled.div`
  padding: 8px 20px;
  background-color: #ecf2ff;
  border-radius: 5px;

  .des-main-part{
    height:${(props)=>!props.showText ? "200px":"auto"};
  overflow:hidden;
  
  }
  .para-wrapper {
    white-space: normal;
    line-height: 23px;
    font-size: 15px;
    font-family: sans-serif;
    color:gray;
  }
`;
