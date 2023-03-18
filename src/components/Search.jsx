import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { SearchWrapper } from "../styles/adminStyle/search.styled";

const Search = ({
  handleSearch,
  height,
  width,
  placeholder,
  handleClickSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let timerId;
    if (searchTerm !== "") {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        handleSearch(searchTerm);
      }, 500);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  const handleBack = (e) => {
    if (e.key === "Backspace") {
      setSearchTerm(e.target.value);
      handleSearch(searchTerm);
    }
    if(e.key==="Enter"){
      setSearchTerm(e.target.value)
      handleClickSearch(searchTerm)
    }
  };

  

  return (
    <SearchWrapper width={width} height={height}>
      <input
        value={searchTerm}
        className="search-input"
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        onKeyUp={handleBack}
      />
      <BsSearch
        className="search-icon"
        onClick={() => handleClickSearch(searchTerm)}
      />
    </SearchWrapper>
  );
};

export default Search;
