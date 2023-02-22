
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { getVideoById,addToFavourite } from "../../redux/AppRedux/action";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VideoPlayer from "../../components/VideoPlayer";
import Navbar from "../../components/Navbar";
import { ShowUserVideoWrapper } from "../../styles/userStyle/showuservideo.styled";
import {IoMdArrowBack} from "react-icons/io"
import { NavLink } from "../../styles/userStyle/link.styled";
import Loading from "../../components/Loading";




const UserShowVideo = () => {
  const { id } = useParams();
  const navigate=useNavigate()
  const [videoData, setVideoData] = useState({});
 const dispatch=useDispatch()
 const loading=useSelector((state)=>state.AppReducer.loading);
 const profile=useSelector((state)=>{
    return state.AuthReducer.profile
 })
 

  const handleFavouriteAdd=()=>{
    if(profile){
        const payload={videoId:videoData._id,userEmail:profile.email}

        dispatch(addToFavourite(payload)).then((res)=>{
       
           if(res.status===200){
            toast.success(res.payload.mesg, {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
           }
           else if(res.status===409){
            toast.warn(res.mesg, {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
           }
           else{
            toast.error(res.status, {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
           
           }
          
        })
    }
    if(!profile){
     navigate("/login") 
    }
   
  }


  useEffect(() => {
 
   dispatch(getVideoById(id)).then((res)=>{
    setVideoData(res.payload.document)
   })
   
  }, []);

  return (
 
        <ShowUserVideoWrapper>
        <Navbar/>

        <NavLink to="/"><div className="back-div">{<IoMdArrowBack/>}</div></NavLink>
        <div className="favourite-wrapper"onClick={handleFavouriteAdd}> 
            Add to favourites
            </div>
       
        {loading ? <Loading/> : <div className='player-wrapper'>
          
          <div className="player-div">
          <VideoPlayer videoId={videoData.videoId} height="450px" />
          </div>
      
      <div>
        <p className="show-video-title">{videoData.title}</p>
      </div>
      <div>
        <h4>Video Description : </h4>
        <pre>{videoData.description}</pre>
      </div>
        </div>}
        <ToastContainer/>
        </ShowUserVideoWrapper>
       

  );
};

export default UserShowVideo;
