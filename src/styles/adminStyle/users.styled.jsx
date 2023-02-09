import styled from "styled-components";

export const UsersWrapper = styled.div`
  display: flex;
  gap: 5px;
  .user-del-btn{
    padding:8px 15px;
    background-color: red;
    color:white;
    font-weight:600;
    border-radius:4px;
    border:none;
    outline:none;
    margin-right:20px;
    margin-left:20px;
   cursor:pointer;

  }
  .table-main{
    border:1px solid black;
    border-radius:8px;
    padding:20px 30px;
    margin:auto;
    width:80%;
    margin-top:40px;
    margin-bottom:30px;
    border-collapse: separate;
    border-spacing:0px 20px;
  }
  
  td{
    border-bottom:1px solid rgb(236,237,240);
  }
  .thead{
    background-color: rgb(142,170,85);
  }

.table-body{
   
}
.body-row{
    background-color: rgb(236,240,223);
    &:nth-child(even){
        background-color: rgb(215,227,191);
        padding-top:30px;
    }
}

  .image-data {
    width: 50px;
    height: 50px;
  }
  .pro-img {
    width: 100%;
    height: 100%;
  }
  .search-div{
    margin-top:30px;
  }
`;
