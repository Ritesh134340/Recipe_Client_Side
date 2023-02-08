import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { HomeWrapper } from "../../styles/userStyle/home.styled"
import { BsSearch } from "react-icons/bs";
import Carousel from "../../components/Carousel";



const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarColor, setNavbarColor] = useState("transparent");

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
      </HomeWrapper>
   
    </>
  );
};

export default Home;
