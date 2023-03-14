import styled from "styled-components";

export const RegisterWrapper=styled.div`  
      
       display:flex;
    .chef-main{
        margin:auto;
        box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(136, 165, 191, 0.48) -6px -2px 16px 1px;
        border-radius:13px;
        width:32%;
        text-align:center;
        margin-top:40px;
        padding:12px 13px;
        padding-bottom:55px;
        margin-bottom:20px;
        background-repeat:no-repeat;
        background-size:conver;
        background-position:center;

    }
    .chef-form{
       text-align:left;
       margin:auto;
       margin-top:25px;
      
    }

    label{
        font-family:sans-serif;
        font-size:13px;
        font-weight:600;
       
    }
    input{
        box-sizing:border-box;
        width:100%;
        height:35px;
        padding-left:10px;
        border-radius:4px;
        background-color:rgba(255,255,255,0.5);
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
        color:white;
        font-weight:bold;
        margin-top:30px;
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
        cursor:pointer;
        padding:8px 15px;
        margin-bottom:25px;
        margin-top:15px;
        letter-spacing:0.6px;
        cursor:pointer;
        font-family:sans-serif;
    }
.register-heading{
    text-align:center;
    margin-top:30px;
}
    @media all and (max-width:1024px) and (min-width:769px){
        .chef-main{
        border-radius:10px;
        width:75%;
        margin-top:40px;
    }
}


@media all and (max-width:768px) and (min-width:481px){
    .chef-main{
        border-radius:10px;
        width:75%;
        margin-top:40px;
    }
}

@media all and (max-width:480px) and (min-width:279px){
    gap:0px;
    box-sizing:border-box;
    .chef-main{
        box-sizing:border-box;
        border-radius:10px;
        margin-top:10px;
        width:98%;
        padding-top:1px;
     
    }
    .register-heading{
    margin-top:50px;
}
.image-select{
    margin-top:10px;
}
}
 
`