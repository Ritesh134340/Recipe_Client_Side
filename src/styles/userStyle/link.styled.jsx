import styled from "styled-components";
import {Link} from "react-router-dom"

export const NavLink=styled(Link)`
  text-decoration:none;
  font-weight:bold;
  color:${(props)=>props.color? props.color : "black"}; 
  
  @media all and (max-width:480px) and (min-width:279px){
    color:white;
  }
`