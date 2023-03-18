import styled from "styled-components";
import { SiCodechef } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsTelegram } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-main">
        <div className="icon-div">
          {/* <div className="made-india-div">
            <p>Made with ❤️ in India.</p>
          </div> */}
          <div className="recipe-icon-wrapper">
            <SiCodechef className="chef-icon" />
            <p className="chef-icon-p">Recipe.com</p>
          </div>
        </div>

        <div className="left-and-right">
          <div className="left-div">
            <div className="about">
              <h3>About</h3>
              <p>
                Welcome to our website! Our site is powered by the MERN stack,
                and we utilize the YouTube API to bring you the latest and most
                popular recipe videos on the web.
              </p>
              <p>
                Our user-friendly interface makes it easy to find and save the
                content you love.
              </p>

              <p>
                Thank you for choosing our website.we look forward to bringing
                you even more great content in the future!
              </p>
            </div>
          </div>
          <div className="mid-div">
            <div className="projects">
              <h3>More Projects</h3>
              <div className="project-link">
                <FaExternalLinkAlt className="link-icon" />
                <p>
                  <a href="https://ritesh134340.github.io" target="_blank">
                    Visit Now{" "}
                  </a>
                </p>
              </div>
            </div>
            <div className="contact">
              <h3>Contact Us</h3>
              <div className="email-div">
                <FaHome className="email-icon" />
                <p>Begusarai, Bihar</p>
              </div>
              <div className="email-div email-second">
                <MdEmail className="email-icon" />
                <p>
                  <a
                    href={"mailto:riteshkumar134340@gmail.com"}
                    target="_blank"
                  >
                    ritesh134340@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="right-div">
            <div className="social-div">
              <h3>Follow Us</h3>
              <div className="icon-wrapper">
                <a href="https://github.com/Ritesh134340" target="_blank">
                  <AiFillGithub className="social-common git" />
                </a>

                <a
                  href="https://www.linkedin.com/in/ritesh134340/"
                  target="_blank"
                >
                  <BsLinkedin className="social-common linkd" />
                </a>

                <a href="https://t.me/ritesh134340" target="_blank">
                  {" "}
                  <BsTelegram className="social-common tele" />
                </a>
              </div>
            </div>
            <div className="qr-div">
              <img
                className="qr-image"
                src="https://firebasestorage.googleapis.com/v0/b/recipe-238bd.appspot.com/o/qrcode%2Ftele.png?alt=media&token=1de5a40b-7249-4000-8ff1-81e5668818ee"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="made-with">
          <div>
            <p>Copyright &copy; 2023 All Rights Reserved by Recipe.</p>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  margin-top: 20px;
  background-color: #393053;
  width:100%;
  box-sizing:border-box;
  
  .qr-div {
    margin-top: 50px;
  }
  .qr-image {
    width: 100px;
    height: 100px;
    margin: auto;
    display: block;
  }
  .project-link {
    margin-top: 0px;
    margin-bottom:0px;
    padding-bottom:0px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .project-link p{
    font-size:14px;
   
  }
  .email-div {
    display: flex;
    align-items: center;
    gap: 8px;
    color:#cecccd;
    margin-top:10px;
    margin-bottom:0px;
    padding-top:0px;
    font-size:15px;
    margin-bottom:0px;

 
  }
  .email-second{
    margin-top:-12px;
  }
 
  .email-icon {
    font-size: 20px;
    margin-top:0px;
    padding-top:0px;
  }

  .left-and-right {
    display: flex;
    box-sizing:border-box;
    justify-content: space-between;
  }
  .left-and-right a{
    color:#cecccd;
   text-decoration:none;
   font-size:14px;
   &:hover{
    color:white;
   }
  }
  .left-div {
    width:42%;
  }
  .right-div {
    text-align:center;

   
  }
  .mid-div{
    margin-bottom:0px;
  }
  .contact {
    color: white;
    margin-top:0px;


  }
  .projects {
    color: white;
    margin-bottom: 0px;
    padding-bottom:0px;
  }
  .link-icon{
    font-size:20px;
    color:#cecccd;
  }
  .footer-main {
    width:86%;
    box-sizing: border-box;
    padding: 8px 0px;
    margin: auto;
    margin-bottom:0px;

  }
  .made-with {
  text-align: center;
   margin-auto;
   width:100%;
 
   color:gray;

font-family:sans-serif;
font-size:15px;

  }
 
  .icon-div {
    color: white;
    margin-top:9px;
    margin-bottom:13px;
  }
  .recipe-icon-wrapper{
    display:flex;
    align-items:baseline;
  }
  .made-india-div{
    color:#cecccd;
    text-align: center;
  }
  .chef-icon-p{
   color:#cecccd;
   font-size:15px;
   font-weight:700;
   margin-bottom:0px;
   padding-bottom:0px;
  }
  .chef-icon {
    font-size: 35px;
  }
  .social-div {
    color: white;
    margin-top: 0px;
    text-align:center;
  }
  .icon-wrapper {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }
  .social-common {
    margin-top:15px;
    cursor: pointer;
 
   
  }
  .linkd{
   font-size:20px;
  }
  .git{
   font-size:25px;
  }
  .tele{
   font-size:23px;
  }
  .about {
    color: white;
  }
  .about p{
   
    color:#cecccd;
    line-height:20px;
    letter-spacing:0.6px;
    font-size:14px;
  }
 .left-and-right h3{
   font-weight:500;
   margin-bottom:10px;
  
    font-size:15px;
    letter-spacing:0.7px;
  }


  @media all and (max-width:1024px) and (min-width:769px){
    .footer-main{
        width:94%;
        padding-bottom:15px;
    }
    .left-div{
        width:48%;
    }
}


@media all and (max-width:768px) and (min-width:481px){
    .footer-main{
        padding-bottom:15px;
        width:94%;
    }
    .left-div{
        width:48%;
    }
}

@media all and (max-width:480px) and (min-width:279px){

   .footer-main{
     width:95%;
     padding-left:5px;
     padding-right:5px;
   }
 .left-and-right{

   flex-direction: column;
   justify-content: center;
 }
 .left-div{
    width:100%;
    
  
 }
 .mid-div{
    display:flex;
 
    justify-content: space-between;
    padding-left:10px;
 }
 .right-div{
 margin-top:30px;
 margin-bottom:25px;
  display:flex;
 align-items:center;
  justify-content: space-between;
 
 }
 .social-div{
  
  
 }
 .qr-div{

  margin-top:0px;
 }
}
`;
