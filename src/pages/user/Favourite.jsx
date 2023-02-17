import React,{useEffect,useState} from "react";
import { FavouriteWrapper } from "../../styles/userStyle/favourite.styled"
import Navbar from "../../components/Navbar";
import { useSelector,useDispatch } from "react-redux";
import { getFavourite,removeFavourite } from "../../redux/AppRedux/action";
import Loading from "../../components/Loading";
import VideoPlayer from "../../components/VideoPlayer";
import { NavLink } from "../../styles/userStyle/link.styled";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Favourite = () => {
  const dispatch=useDispatch();
  const [videoList,setVideoList]=useState([])
  const [videoId,setVideoId]=useState("")
  const [title,setTitle]=useState("")

  const token=useSelector((state)=>state.AuthReducer.token);
  const loading=useSelector((state)=>state.AppReducer.loading)

  useEffect(()=>{
    const payload={headers:{'Authorization':`Bearer ${token}`}}
    dispatch(getFavourite(payload)).then((res)=>{
      if(res.status===200){
       setVideoList(res.payload.favourite)
      }
    
    })
  },[])

  const handleChange=(src,title)=>{
    setTitle(title)
    setVideoId(src)
  }
  const handleRemove=(id)=>{
    const payload={headers:{'Authorization':`Bearer ${token}`}}
    dispatch(removeFavourite(id,payload))
    .then((res)=>{
      if(res.status===200){
        setVideoList(res.payload.updatedList)
        toast.success(res.payload.mesg, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          })
      }
      else{
        toast.error(res.mesg, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          })
      }
    
    })
   
  }

  return (
    <>
      <Navbar/>
     {   loading ? <Loading/> :  <FavouriteWrapper>
             <NavLink to="/">
             <p className="back-btn-fav">Back</p>
            </NavLink>
          {
            videoId && <div className="player-wrapper">
             <VideoPlayer videoId={videoId}/>
             <p className="player-title">{title}</p>
            </div>
        
            
            }
         {
          videoList && videoList.map((ele,index)=>
          
            <div  key={ele._id} className="ele-wrapper" >
              <div onClick={()=>handleChange(ele.videoId,ele.title)} className="title-wrapper">
              <img src={ele.thumbnails} className="thumb-img" />
              <p className="fav-title">{ele.title}</p>
              </div>
            
              <button className="remove-btn" onClick={()=>handleRemove(ele._id)}>Remove</button>
              </div>
        
          )
         }
         <ToastContainer/>
      </FavouriteWrapper>}
       
    </>
  );
};

export default Favourite;
