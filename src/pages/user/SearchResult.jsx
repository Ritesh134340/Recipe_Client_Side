import React, { useEffect } from "react";
import { SearchResultWrapper } from "../../styles/userStyle/search.styled";
import { useSelector, useDispatch } from "react-redux";
import { findSearch } from "../../redux/AppRedux/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../components/Navbar";
import VideoGrid from "../../components/VideoGrid";
import Footer from "../../components/Footer";
import { useSearchParams } from "react-router-dom";


const SearchResult = () => {
 
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.AppReducer.searchTerm);
  const [searchParams,setSearchParams]=useSearchParams();
  const searchData = useSelector((state) => state.AppReducer.searchData);

  useEffect(() => {
    if (searchTerm) {
      setSearchParams({"q":searchTerm})
      dispatch(findSearch(searchTerm)).then((res) => {
        if (res.status !== 200) {
          toast.error(res.mesg, {
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
      });
    }
  }, []);

  return (
    <SearchResultWrapper>
      <Navbar />
      <div className="result-show">
        <p>Showing Search result for : </p>
        <span>{searchTerm}</span>
      </div>
      <div className="search-grid-wrapper">
        {searchData && searchData.length > 0 ? (
          <VideoGrid
            videos={searchData}
            view="linkview"
            videoPath="/uservideo"
            columns="4"
          />
        ) : (
          <div className="no-recipe-data">
            <p className="no-recipe-text">
              <span>Recipe</span> not Available
            </p>
          </div>
        )}
      </div>

      <Footer />
      <ToastContainer />
    </SearchResultWrapper>
  );
};

export default SearchResult;
