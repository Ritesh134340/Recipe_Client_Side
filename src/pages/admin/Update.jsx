import React,{useEffect,useState} from 'react'
import AdminNav from '../../components/AdminNav'
import { BodyWrapper } from '../../styles/commonStyle/flexbody.styled';
import { useSelector,useDispatch } from 'react-redux';
import Loading from '../../components/Loading';
import { getHomeData,updateHomeData,addHomeData,deleteHomeData,updateHeroImage } from '../../redux/AdminRedux/action';
import { UpdateWrapper } from '../../styles/adminStyle/update.styled';
import {Heading} from "../../components/Heading"
import {IoIosArrowDropdown} from 'react-icons/io';
import {IoIosArrowDropup} from 'react-icons/io';
import {GrNewWindow} from "react-icons/gr";


export const Update = () => {
    const [newImage,setNewImage]=useState("");
    const [newText,setNewText]=useState("");
    const [editText,setEditText]=useState("");
    const [editImage,setEditImage]=useState("");
    const dispatch=useDispatch()
    const loading=useSelector((state)=>state.AdminReducer.loading);
    const token=useSelector((state)=>state.AuthReducer.token);
    const role=useSelector((state)=>state.AuthReducer.role)
   const [showMore,setShowMore]=useState(false)
    const homeData=useSelector((state)=>state.AdminReducer.homeData);
    const [hideId,setHideId]=useState("")



  const handleShow=(id)=>{
     setShowMore(!showMore)
     if(hideId===id){
      return setHideId("")
     }
     return setHideId(id)
  }

  const handleUpdateCarouselImage=(id)=>{
   
   const payload={
      imageId:id,
      image:editImage,
      text:editText,
      objectId:homeData._id
   }


   dispatch(updateHomeData(payload,{headers:{'Authorization':`Bearer ${token}`}}))
   .then((res)=>{
      if(res.status===200){
         dispatch(getHomeData())
         alert(res.payload.mesg)
      }
      else{
         alert(res.mesg)
      }
   })

  }

  const handleRemoveCarousel=(id)=>{
    const payload={
      objectId:homeData._id,
      imageId:id
    }
    dispatch(deleteHomeData(payload,{headers:{'Authorization':`Bearer ${token}`}}))
    .then((res)=>{
      if(res.status===200){
         dispatch(getHomeData())
         alert(res.payload.mesg)
         
      }
      else{
         alert(res.mesg)
      }
     
    })

  }

   const handleAddNewData=()=>{
      const payload={
         image:newImage,
         dataId:homeData._id,
         text:newText,
      }
        dispatch(addHomeData(payload,{headers:{'Authorization':`Bearer ${token}`}}))
        .then((res)=>{
         if(res.status===200){
            dispatch(getHomeData())
            alert(res.payload.mesg)
         }
         else{
            alert(res.mesg)
         }
        })
   }
   
    useEffect(()=>{
       dispatch(getHomeData())
    },[])


  return (
     
        <UpdateWrapper>
        <AdminNav selected="update" />

       {
       loading ? <Loading/> :    <BodyWrapper>
         <Heading/>
         <div className="hero-image-wrapper">
            <div className="hero-title"><h2>Hero Image</h2></div>
         <img src={homeData?.heroImage} alt="hero" className="hero-image"/>
         </div>


         <div className="carousel-head"><h3>Carousel Images</h3></div>
         <div className='carousel-data-wrapper'>
           
            {
            homeData && homeData.carouselData?.map((ele)=>
            <div key={ele._id} className="carousel-child-wrapper">
            <img src={ele.image} alt="carousel" className="carousel-img"/>

            <div className="show-more-wrapper">
          
               <div className="show-more-div" onClick={()=>handleShow(ele._id)}>

                  <p>{hideId!==ele._id ? "Show More" : "Show Less"}</p>
                  {
                     ele._id!==hideId ?<IoIosArrowDropdown className="show-more-icon" />:
                  <IoIosArrowDropup className="show-more-icon"/>
                  }
               </div>
             


               <div className="update-input-wrapper">
               <div className={hideId!==ele._id ? "hide-content" : "show-content"}>
               <label>Image Link</label><br/>
              <input type="text" defaultValue={ele.image} onChange={(e)=>setEditImage(e.target.value)}/><br/>
              <label>Image Text</label><br/>
              <input type="text" defaultValue={ele.text} onChange={(e)=>setEditText(e.target.value)}/><br/>
              <button className="save-change" onClick={()=>handleUpdateCarouselImage(ele._id)}>Save Changes</button>
               </div>
                <div className="remove-btn-wrapper">
               <button className={hideId!==ele._id ? "remove-btn-close" : "remove-btn-open"}onClick={()=>handleRemoveCarousel(ele._id)}>Remove</button>
               </div>
               </div>
           
              
            </div>
           
            </div>
           
            )
            }
           <div className="new-data-wrapper">
            <label>New Image Link</label><br/>
            <input type="text" placeholder='Image link to be added' onChange={(e)=>setNewImage(e.target.value)}/><br/>
            <label>Text</label><br/>
            <input type="text" placeholder='Image text to show' onChange={(e)=>setNewText(e.target.value)}/><br/>

            <div className="new-data-btn-div">
               <GrNewWindow/>
               <button onClick={handleAddNewData}>
               Add New Data
            </button>
            </div>
            
         </div>
         </div>


          
         
       </BodyWrapper>
       }  

       </UpdateWrapper>
  )
  }
