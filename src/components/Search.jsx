import React,{useState,useEffect} from 'react'
import {BsSearch} from "react-icons/bs"
import { SearchWrapper } from '../styles/adminStyle/search.styled'

const Search = ({handleSearch,height,width,placeholder,first}) => {

  const [searchTerm,setSearchTerm]=useState("")
  
  useEffect(()=>{
    
    let timerId;
    
      clearTimeout(timerId);
      timerId=setTimeout(()=>{
       handleSearch(searchTerm)
      },500)
    
     
    
     
   return ()=>{
    clearTimeout(timerId);
   }
  

  },[searchTerm])

  return (
    <SearchWrapper width={width} height={height}>
      
      <input value={searchTerm} className='search-input' type="text" onChange={(e)=>setSearchTerm(e.target.value)} placeholder={placeholder}/>
      <BsSearch className='search-icon'/>
    </SearchWrapper>
  )
}

export default Search
