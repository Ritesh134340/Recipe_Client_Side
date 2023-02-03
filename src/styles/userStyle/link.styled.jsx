import styled from "styled-components";
import {Link} from "react-router-dom"

export const NavLink=styled(Link)`
  text-decoration:none;
  font-weight:bold;
  color:${(props)=>props.color? props.color : "black"};  
`