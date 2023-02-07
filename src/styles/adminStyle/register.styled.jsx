import styled from "styled-components";

export const RegisterWrapper=styled.div`
       display:flex;
       gap:5px;
    .chef-main{
        margin:auto;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-radius:13px;
        width:29%;
        text-align:center;
        margin-top:30px;
        padding:5px 15px;
        margin-bottom:20px;

    }
    .chef-form{
       text-align:left;
       margin:auto;
       margin-top:15px;
      
    }

    label{
        font-family:sans-serif;
        font-size:14px;
        color: gray;
       
    }
    input{
        box-sizing:border-box;
        width:100%;
        height:35px;
        padding-left:10px;
        font-size:17px;
        margin-top:5px;
        margin-bottom:15px;
        outline:none;
        border:1px solid rgb(184,188,204);

        &:focus{
            border:1px solid blue;
        }
    }

    .submit-btn{
        display:block;
        width:100%;
        padding:10px 0px;
        font-size:16px;
        outline:none;
        border:none;
        margin:auto;
        border-radius:5px;
        background-color:blue;
        color:white;
        font-weight:bold;
        margin-bottom:20px;
        margin-top:25px;
        cursor:pointer;
       
    }
    .progress-main{
         border: 1px solid gray;display:flex;
         align-items:center;
         position:relative;
         border-radius:6px;
         margin-top:15px;
    }
    .percentage{
        position: absolute;
        left:45%;
    }
   



    .uploaderImage{
        width:100%;
        margin:auto;
        overflow: hidden;
        border:1px solid gray;
        object-position:center; 
        border-radius:5px;
    }
    .uploaderImage>img{
        width:100%;
        box-sizing:border-box;   
    }
    .image-select{
        display:block;
        margin:auto;
        border-radius:5px;
        border:none;
        outline:none;
        padding:8px 15px;
        margin-bottom:10px;
        margin-top:15px;
        letter-spacing:0.6px;
        cursor:pointer;
        font-family:sans-serif;
    }
   
`