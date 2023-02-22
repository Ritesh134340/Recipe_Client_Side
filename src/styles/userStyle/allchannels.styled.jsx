import styled from "styled-components";

export const AllChannelsWrapper=styled.div`

width:100%;
box-sizing:border-box;
 .channel-head{

  text-align:center;
 }
   .chef-channel-wrapper{
 
    padding-bottom:50px;
  margin:auto;
  margin-top:110px;
  width:80%;

   }

 .search-holder {
  width:48%;
  margin:auto;
   margin-top: 30px;
   margin-bottom: 60px;
 }
 .indv-div-home {
   width: 80%;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   padding: 15px;
   margin: auto;
   margin-bottom: 32px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-radius: 12px;
 }
 .logo-with-channel {
   display: flex;
   gap: 15px;
   align-items: center;
 }
 .channel-name {
   font-size: 15px;
   margin-bottom: 5px;
 }
 .profile-img {
   border-radius: 50%;
   width: 70px;
   height: 70px;
   object-fit:cover;

 }
 .profile-img>img{
  display:block;
 }
 .chef-name {
   font-size: 11px;
   margin-top: 0px;
 }
 .details-btn {
   margin-right: 45px;
   padding: 8px 15px;
   background-color: black;
   color: white;
   font-size: bold;
   border: none;
   border-radius: 7px;
   cursor: pointer;
   outline: none;
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

 @media all and (max-width:1024px) and (min-width:769px){
  .chef-channel-wrapper{
    width:95%;
  }
  .indv-div-home {
    width:85%
  }
  .search-holder {
  width:60%;
  
 }
}


@media all and (max-width:768px) and (min-width:481px){
  .chef-channel-wrapper{
    width:95%;
  }
  .indv-div-home {
    width:85%
  }
  .search-holder {
  width:60%;
  
 }
}

@media all and (max-width:480px) and (min-width:279px){
  .search-holder {
  width:90%;
  
 }
  .chef-channel-wrapper{
    width:100%;
  }
  .indv-div-home {
    box-sizing:border-box;
   width:97%;
   padding-right:8px;
   padding-left:8px;
   margin-bottom: 30px;
   justify-content: space-between;
   border-radius: 8px;
  }
  .details-btn {
   margin-right: 0px;
   padding: 6px 10px;

 }
 .profile-img {
   width: 50px;
   height: 50px;
   
 }
 .channel-name{
  font-size:14px
 }
}
`