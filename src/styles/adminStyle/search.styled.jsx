import styled from "styled-components"

export const SearchWrapper=styled.div`
    display:flex;
    align-items: center;
    width:${(props)=>props.width ? props.width :"40%"};
    height:${(props)=>props.height? props.height :"40px"};
    border-radius:4px;
    border:1px solid gray;
    margin:auto;

   .search-input{
    border:none;
    outline:none ;
    flex:1;
    font-size:17px;
    padding-left:12px;
    
   } 
   .search-icon{
    font-size:25px;
    color:gray;
    padding:5px;
    padding-right:10px;
   }
`