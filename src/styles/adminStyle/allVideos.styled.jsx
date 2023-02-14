import styled from "styled-components";

export const AllVideosWrapper=styled.div`
    display:flex;
    gap:5px;
  .searchWrapper{
    margin-top:40px;
    margin-bottom:30px;
    display:flex;
    align-items: center;
    
  }   
  .no-data {
    color: gray;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
  .query {
    color: green;
  }
  #select-filter{
    width:120px;
    font-size:16px;
    margin-left:25px;
    
    border-radius:6px;
    height:40px; 
    cursor:pointer;

  }
  #select-filter>option{
    padding:8px 4px;
    font-size:17px;
    
    &:hover{
        background-color: teal;
    }
   
  }
`