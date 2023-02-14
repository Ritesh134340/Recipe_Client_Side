import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { HomeWrapper } from "../../styles/userStyle/home.styled"
import { BsSearch } from "react-icons/bs";
import Carousel from "../../components/Carousel";
import { useSelector,useDispatch } from "react-redux";
import {getAllVideos,filterUploaded} from "../../redux/AppRedux/action"
import VideoGrid from "../../components/VideoGrid";
import Pagination from "../../components/Pagination";
import Footer from "../../components/Footer";



const Home = () => {
  const dispatch=useDispatch()
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarColor, setNavbarColor] = useState("transparent");

 const {loading,uploadedVideos,filteredUploadedVideos}=useSelector((state)=>{return {loading:state.AppReducer.loading,uploadedVideos:state.AppReducer.uploadedVideos,filteredUploadedVideos:state.AppReducer.filteredUploadedVideos}})

 const [perPage,setPerPage]=useState(8);
 const [currentPage,setCurrentPage]=useState(1)

 const firstIndex=(currentPage-1)*perPage;
 const lastIndex=firstIndex+perPage;
 const totalPages=Math.ceil(filteredUploadedVideos.length/perPage);

let filteredVideos=filteredUploadedVideos.slice(firstIndex,lastIndex)

 const handlePageChange=(current)=>{
  setCurrentPage(current)
 }


 useEffect(()=>{
  if(uploadedVideos.length===0){
    dispatch(getAllVideos())
  }
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


        <h1 className="home-head loved">Most Loved Videos</h1>
        <div 
        
        className="video-grid-wrapper">
          
          <VideoGrid rowgap="40px" colgap="20px" columns={4} view="linkview" videos={filteredVideos}/>
        </div>
        <Pagination current={currentPage} total={totalPages} handleChange={handlePageChange} />
        <Footer/>
      </HomeWrapper>
   
    </>
  );
};

export default Home;
