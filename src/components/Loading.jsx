import React from 'react'
import { LoadingWrapper } from '../styles/commonStyle/loading.styled'
import {SiCodechef} from "react-icons/si";
const Loading = () => {
  return (

        <LoadingWrapper>
           <div className="icon-div">
            <div className="border-div"></div>
            <SiCodechef className="chef-icon"/>
           </div>
        </LoadingWrapper>
      
    
  )
}

export default Loading
