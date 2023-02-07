import styled from "styled-components";
import {Link} from "react-router-dom"


export const LoginWrapper=styled.div`
    font-family:sans-serif;
    width:100%;
    box-sizing: border-box;
    margin:auto;
    margin-top:80px;
    margin-bottom:30px;

.logo-in-log{
    display: flex;
    justify-content: center;
    align-items:center;
    gap:10px;
    margin-bottom:20px;
  
 
}
.logo-sign{
    font-size:40px;
    color:rgb(183,28,28)
}



.logo-in-log>h1{
 font-family:sans-serif;
 font-size:24px;

}
@media all and (max-width:1024px) and (min-width:769px){
    width:70%;
    .logo-in-log{
    margin-bottom:50px;
  }
}


@media all and (max-width:768px) and (min-width:481px){
    width:77%;
    .logo-in-log{
    margin-bottom:50px;
  }
}

@media all and (max-width:480px) and (min-width:279px){
    width:95%
}

`


export const InputWrapper=styled.div`
  width:93%;
  margin:auto;
  .pass-inp{
    border-radius:0px;
   outline:none;
   padding-bottom:0px;
   margin-bottom:0px;
   margin-top:0px;
   margin-bottom:0px;
   height:100%;
   border:1px solid transparent;
   width:80%;
   background-color: transparent;
   box-sizing:border-box;
  }
  .eye-common{
    color:gray;
    font-size:18px;
    padding-right:10px;

  }
 
.pass-inp-div{
    display:flex;
    align-items:center;
    justify-content: space-between;
    height:33px;
    border-radius:7px;
    margin-top:10px;
    margin-bottom:30px;
    border:${(props)=>props.isFocus ?"1px solid rgb(34,120,233)":"1px solid rgb(224,226,231)" };
    box-shadow:${(props)=>props.isFocus ? " rgba(34,120,233, 0.2) 0px 2px 8px 0px":"none"};
    background-color: rgb(232,240,254);
}
.em-inp{
   font-family:sans-serif;
   border:1px solid rgb(224,226,231);
   background-color: rgb(232,240,254);
   margin-top:7px;
   margin-bottom:23px;
   font-size:15px;
   cursor:pointer;
   &:focus{
  
  border:1px solid rgb(34,120,233);
  
  box-shadow: rgba(34,120,233, 0.2) 0px 2px 8px 0px;
   outline:none;
}

}




`

export const HeadingWrapper=styled.div `
    margin:auto;
    width:27%;
    box-sizing: border-box;
     padding:15px;
    border-radius:13px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    font-size:14px;
    h5{
        text-align: center;
        margin-top:25px;
        padding-bottom:20px;
        text-decoration:none;
        font-size:14px;
        color:gray;
    }
    h1{
        text-align:center;
    }
    label{
     
        color:gray;
      
    }

   
@media all and (max-width:1024px) and (min-width:769px){
    width:80%;
}


@media all and (max-width:768px) and (min-width:481px){
    width:77%
}

@media all and (max-width:480px) and (min-width:279px){
    width:98%
}



`

export const SubmitWrapper=styled.div`
    width:100%;
    margin-top:8px;
    

    input{
        cursor:pointer;
        width:100%;
        text-align:center;
        height:35px;
        border:1px solid transparent;
        outline:none;
        border-radius:7px;
        background-color:rgb(13,71,161);
        color:white;
        font-weight:bold;
        font-size:17px;
        letter-spacing: 0.6px;
    }
  
`
export const NavLink=styled(Link)`
    text-decoration:none;
    color:rgb(34,120,233);
    padding-left:5px;
    font-size:15px;
    letter-spacing:0.5px;
`

export const MainDiv=styled.div`
  width:98%;

  margin:auto;
  margin-top:20px;
  .google-btn-wrapper{
   
}
.or-div{
  width:100%;
  height:35px;
  border-bottom:1px solid rgb(209,213,219);
  position:relative; 
  margin-bottom:20px; 
}
.or-div>h3{
position:absolute;
left:44%;
top:25%;
font-size:13px;
font-family:sans-serif;
font-weight:600;
padding:7px;
border-radius:50%;
background-color: white;
object-fit: center;
}

.google-btn-div{
    width:100%;
    display:flex;
    margin-top:25px;
    align-items: center;
    gap:10px;
    border:1px solid rgb(209,213,219);
    border-radius:6px;
    justify-content:center;
    cursor:pointer;
    padding:8px 0px;
    
}
.google-icon{
   
    margin:0;
    padding:0;
    font-size:20px;
}
.google-btn-div>button{

    font-weight:800;
    font-size:11px;
    font-family:sans-serif;
    letter-spacing: 0.5px;
    outline:none;
    border:none;
    background-color: white;
    cursor:pointer;
}
  
  input{
       width:100%;
       box-sizing:border-box;
       height:35px;
       margin-top:3px;
       margin-bottom:10px;
       border:1px solid black;
       border-radius: 6px;
       padding-left:10px;
       font-size:17px;
    }
    
    
`
