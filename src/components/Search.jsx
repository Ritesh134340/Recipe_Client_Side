import React,{useState} from 'react'
import {BsSearch} from "react-icons/bs"
import { SearchWrapper } from '../styles/adminStyle/search.styled'

const Search = ({handleSearch,height,width,placeholder}) => {


  return (
    <SearchWrapper width={width} height={height}>
      
      <input className='search-input' type="text" onChange={(e)=>handleSearch(e.target.value)} placeholder={placeholder}/>
      <BsSearch className='search-icon'/>
    </SearchWrapper>
  )
}

export default Search
