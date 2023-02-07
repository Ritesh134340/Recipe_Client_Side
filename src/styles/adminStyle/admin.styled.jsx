import styled from "styled-components";


export const AdminWrapper=styled.div`

   .main-div{
    display:flex;
    gap:5px;
   
   }
   .navigator{
     width:230px;
     height:500px;
     box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
     margin-top:30px;
     margin-left:15px;
     padding-top:25px;

   } 
   .common-sidebar-div{
  
    display:flex;
    font-weight:500;
    gap:11px;
    margin:auto;
    width:80%;
    border-radius:8px;
    padding:4px 10px;
    height:30px;
    align-items:center;
    margin-bottom:5px;
    
   }
   .admin-body{
       flex:1;
       height:99.5vh;
       overflow-y: scroll;
       overflow-x:hidden ;
   }
`

export const Tab=styled.div`
  background-color: ${(props)=>props.selected ? "rgb(243 244 246)" : "white"};
  color: ${(props)=>props.selected ? "black" : "gray"};
`