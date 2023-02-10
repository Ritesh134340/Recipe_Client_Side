import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { HomeWrapper } from "../../styles/userStyle/home.styled"
import { BsSearch } from "react-icons/bs";
import Carousel from "../../components/Carousel";
import { useSelector,useDispatch } from "react-redux";
import {getAllVideos,filterUploaded} from "../../redux/AppRedux/action"
import VideoGrid from "../../components/VideoGrid";



const Home = () => {
  const dispatch=useDispatch()
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarColor, setNavbarColor] = useState("transparent");

 const {loading,uploadedVideos,filteredUploadedVideos}=useSelector((state)=>{return {loading:state.AppReducer.loading,uploadedVideos:state.AppReducer.uploadedVideos,filteredUploadedVideos:state.AppReducer.filteredUploadedVideos}})


 useEffect(()=>{
  dispatch(getAllVideos())
 },[])

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollPosition > 0) {
      setNavbarColor("rgb(0,0,0,0.5)");
    } else {
      setNavbarColor("transparent");
    }
  }, [scrollPosition]);

  return (
    <>
      <Navbar link="white" color={navbarColor} />

      <HomeWrapper>
     
        <div className="search-wrapper">
          <h1 className="search-head">What's Going To Be Cooked ?</h1>
          <div className="combine">
            <input
              type="text"
              className="search-input"
              placeholder="Search recipe..."
            />
            <BsSearch className="search-icon" />
          
          </div>
        </div>

        <div className="carousel-div-home">
          <h1 className="home-head">Best One Recipe</h1>
          <Carousel />
        </div>


        <h1 className="home-head">Most Loved Videos</h1>
        <div 
        
        className="video-grid-wrapper">
          
          <VideoGrid rowgap="40px" colgap="20px" columns={4} view="linkview" videos={filteredUploadedVideos}/>
        </div>
      </HomeWrapper>
   
    </>
  );
};

export default Home;
