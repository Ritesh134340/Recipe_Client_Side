import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { HomeWrapper } from "../../styles/userStyle/home.styled";
import Carousel from "../../components/Carousel";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllVideos,
  setSearchTerm,
} from "../../redux/AppRedux/action";
import { getHomeData } from "../../redux/AdminRedux/action";

import VideoGrid from "../../components/VideoGrid";
import Pagination from "../../components/Pagination";
import Footer from "../../components/Footer";
import Search from "../../components/Search";
import { useNavigate } from "react-router-dom";

const data = [
  {
    image:
      "https://yt3.googleusercontent.com/ytc/AL5GRJVmL-c8HxJp0vFE_9YaVsujNWmz_EdAzibwnOwNRg=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    image:
      "https://yt3.googleusercontent.com/Y9WNjujyk3DD1-us69Hksq8cjX8FI1VA1dopoC8prw1WwhjiN8JQiKnHJRtLuj3hITSynJxi=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    image:
      "https://yt3.googleusercontent.com/ytc/AL5GRJUnX5BZBfCeHOGrriZYY-uPaNFaD9pxOlcVXbszDQ=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    image:
      "https://yt3.googleusercontent.com/ytc/AL5GRJXQpmLL88JcuzwZgY7o9k4ZyziLw_PtAJkrHoaj=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    image:
      "https://yt3.googleusercontent.com/GVTtEiBD6Mt1FR_Y5FKgYa8mHXcJiNfzDTa991tu1LZ3OrOANZC4J1-kSMmuaEys86yY336pcg=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    image:
      "https://yt3.googleusercontent.com/5r_5Sfai3atj0lLu9luwMNO-XfnOP8IB3DSDqX88nnHIO6en34IJvDeBL-tbI8EDJDlS1WhW=s88-c-k-c0x00ffffff-no-rj",
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarColor, setNavbarColor] = useState("transparent");

  const {uploadedVideos, filteredUploadedVideos } = useSelector(
    (state) => {
      return {
        loading: state.AppReducer.loading,
        uploadedVideos: state.AppReducer.uploadedVideos,
        filteredUploadedVideos: state.AppReducer.filteredUploadedVideos,
      };
    }
  );

  const [perPage, setPerPage] = useState(8);
  const [homeData, setHomeData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const firstIndex = (currentPage - 1) * perPage;
  const lastIndex = firstIndex + perPage;
  const totalPages = Math.ceil(filteredUploadedVideos.length / perPage);

  let filteredVideos = filteredUploadedVideos.slice(firstIndex, lastIndex);

  const handlePageChange = (current) => {
    setCurrentPage(current);
  };
  const handleSearch = (searchTerm) => {};

  const handleClickSearch = (searchTerm) => {
    if (searchTerm) {
      dispatch(setSearchTerm(searchTerm));
      navigate("/searchresult");
    }
  };

  useEffect(() => {
    if (uploadedVideos.length === 0) {
      dispatch(getAllVideos());
    }
  }, []);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollPosition > 0) {
      setNavbarColor("rgba(0,0,0,0.3)");
    } else {
      setNavbarColor("transparent");
    }
  }, [scrollPosition]);

  useEffect(() => {
    dispatch(getHomeData()).then((res) => {
      setHomeData(res.payload.homeData);
    });
  }, []);

  return (
    <>
      <HomeWrapper bg={homeData?.heroImage}>
        <Navbar color={navbarColor} link="white" />

        <div className="search-wrapper">
          <div className="head-with-search">
            <h1 className="search-head">{homeData?homeData.heroText :"What's going to be cooked ?"}</h1>
            <div className="combine">
              <Search
                placeholder="Search recipe video title"
                width="100%"
                height="50px"
                handleSearch={handleSearch}
                handleClickSearch={handleClickSearch}
              />
            </div>
          </div>
        </div>
        <div></div>

        <div className="carousel-div-home">
          <h1 className="home-head">Best One Recipe</h1>
          <Carousel data={homeData?.carouselData} />
        </div>

        <h1 className="home-head loved">Most Loved Videos</h1>
        <div className="video-grid-wrapper">
          <VideoGrid
            rowgap="40px"
            colgap="20px"
            columns={4}
            view="linkview"
            videos={filteredVideos}
            videoPath="/uservideo"
          />
        </div>
        {filteredUploadedVideos.length !== 0 && (
          <div className="pagination-wrapper">
            <Pagination
              current={currentPage}
              total={totalPages}
              handleChange={handlePageChange}
            />
          </div>
        )}
        <Footer />
      </HomeWrapper>
    </>
  );
};

export default Home;
