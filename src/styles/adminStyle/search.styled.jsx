import styled from "styled-components"

export const SearchWrapper=styled.div`
    display:flex;
    align-items: center;
    width:${(props)=>props.width ? props.width :"40%"};
    height:${(props)=>props.height? props.height :"40px"};
    margin:auto;
    border:1px solid gray;
    border-radius:6px;
    overflow:hidden;
    box-sizing:border-box;


   .search-input{
    border-radius:none;
    border:none;
    border-right:1px solid silver;
    outline:none ;
    height:100%;
    flex:1;
    font-size:17px;
    padding-left:12px;

    
   } 
   .search-icon{
    font-size:25px;
    color:gray;
    padding:15px 8px;
    cursor:pointer;
    background-color:rgb(238 238 238)
    
   }
`