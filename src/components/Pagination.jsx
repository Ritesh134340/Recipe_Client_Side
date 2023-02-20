import React,{useState} from 'react';
import styled from "styled-components"
const createArray=(total)=>{
   return  new Array(total).fill(0);
}


const Pagination = ({current,total,handleChange}) => {
  const pages=createArray(total).map((ele,index)=>{
    return <button disabled={current===index+1} key={index} onClick={()=>handleChange(index+1)}>{index+1}</button>
  })
   

  return (
    <PaginationWrapper>
        <div className='pagination-btn-wrapper'>
        <button disabled={current===1} onClick={()=>handleChange(current-1)} className='change-button'>Prev</button>
      <div className="show-current">{current}</div>
      
      <button disabled={total===current} onClick={()=>handleChange(current+1)}className='change-button'>Next</button>
        </div>
    
     {/* <div>
     {pages}
     </div> */}

    </PaginationWrapper>

    
  );

}



export default Pagination


const PaginationWrapper=styled.div`
    margin-top:30px;
    display:flex;
    align-items: center;
    justify-content: center;
    padding-bottom:50px;

   
    .pagination-btn-wrapper{
        display:flex;
        align-items: center;
        gap:8px;
        margin:auto;
    
      
    }
    .show-current{
     padding:8px 15px;
     height:100%;
     color:white;
     border-radius:5px;
     font-size:16px;
     background-color: blue;
    }
    .change-button{
      padding:8px 19px;
      cursor:pointer;
      border-radius:4px;
      border:1px solid gray;
      font-size:15px;
      outline:none;
     
    }
`
