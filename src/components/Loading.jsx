import React from "react";
import { LoadingWrapper } from "../styles/commonStyle/loading.styled";
import { SiCodechef } from "react-icons/si";
const Loading = () => {
  return (
    <LoadingWrapper>
      <div className="icon-div">
      <SiCodechef className="chef-icon" />
        <div className="border-div">
       
        </div>
       
      </div>
    </LoadingWrapper>
  );
};

export default Loading;
