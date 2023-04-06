import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

import { HomeWrapper } from "../../styles/userStyle/home.styled";
import { BsSearch } from "react-icons/bs";
import Carousel from "../../components/Carousel";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../components/Loading";
import { getAllVideos, setSearchTerm } from "../../redux/AppRedux/action";
import { getHomeData } from "../../redux/AdminRedux/action";
import VideoGrid from "../../components/VideoGrid";
import Pagination from "../../components/Pagination";
import Footer from "../../components/Footer";
import Search from "../../components/Search";
import { useNavigate, useSearchParams } from "react-router-dom";

const Home = () => {
 
  const dispatch = useDispatch();
  const [suggTerm, setSuggTerm] = useState("");
  const [showSugg, setShowSugg] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarColor, setNavbarColor] = useState("transparent");

  const { uploadedVideos, filteredUploadedVideos, loading, suggestions } =
    useSelector((state) => {
      return {
        loading: state.AppReducer.loading,
        uploadedVideos: state.AppReducer.uploadedVideos,
        filteredUploadedVideos: state.AppReducer.filteredUploadedVideos,
        suggestions: state.AppReducer.suggestions,
      };
    });

    
  const [suggestion, setSuggestion] = useState([]);
  const perPage = 8;
  const [homeData, setHomeData] = useState({});
  const currentPage = Number(searchParams.get("page")) || 1;
  const firstIndex = (currentPage - 1) * perPage;
  const lastIndex = firstIndex + perPage;
  const totalPages = Math.ceil(filteredUploadedVideos.length / perPage);

  let filteredVideos = filteredUploadedVideos.slice(firstIndex, lastIndex);

  const handlePageChange = (current) => {
    if(current<=totalPages && current>0){
      setSearchParams({ page: current });
    }
    
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      setShowSugg(true);
    } else {
      setShowSugg(false);
    }

    const filtered =
      suggestions &&
      suggestions.filter((ele) => {
        return ele.title.includes(searchTerm.toLowerCase());
      });

    setSuggestion(filtered.slice(0, 6));
  };

 



  const handleClickSearch = async (searchTerm) => {

    if (searchTerm) {
      setSuggTerm(searchTerm);
     
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
      {loading ? (
        <Loading />
      ) : (
        <HomeWrapper bg={homeData?.heroImage}>
          <Navbar color={navbarColor} link="white" />

          <div className="search-wrapper">
            <div className="head-with-search">
              <h1 className="search-head">
                {homeData ? homeData.heroText : "What's going to be cooked ?"}
              </h1>
              <div className="combine">
                <Search
                  placeholder="Search recipe video title"
                  width="100%"
                  height="50px"
                  handleSearch={handleSearch}
                  handleClickSearch={handleClickSearch}
                  sugg={suggTerm}
                />

                {showSugg && suggestion?.length > 0 && (
                  <div className="suggestion-wrapper">
                    {suggestion &&
                      suggestion.map((ele) => {
                        return (
                          <div
                            className="sugg-wrapper"
                            key={ele._id}
                            onClick={() => handleClickSearch(ele.title)}
                          >
                            <BsSearch />
                            <p>{ele.title}</p>
                          </div>
                        );
                      })}
                  </div>
                )}
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
      )}
    </>
  );
};

export default Home;
