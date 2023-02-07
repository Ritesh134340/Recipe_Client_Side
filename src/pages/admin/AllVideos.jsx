import React from 'react'
import AdminNav from '../../components/AdminNav'
import { BodyWrapper } from '../../styles/commonStyle/flexbody.styled'

const AllVideos = () => {
  return (
    <div>
      <AdminNav selected="uploads"></AdminNav>
      <BodyWrapper>
      All videos
      </BodyWrapper>
    
    </div>
  )
}

export default AllVideos
