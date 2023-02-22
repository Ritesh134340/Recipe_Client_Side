import React, { useEffect, useState } from "react";
import Search from "../../components/Search";
import { getChef, searchFilter } from "../../redux/AdminRedux/action";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "../../styles/userStyle/link.styled";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";
import { AllChannelsWrapper } from "../../styles/userStyle/allchannels.styled";
import Footer from "../../components/Footer"

const AllChannels = () => {
    const dispatch = useDispatch();

  const { data, filtered, loading } = useSelector((state) => {
    return {
      data: state.AdminReducer.data,
      filtered: state.AdminReducer.filtered,
      loading: state.AdminReducer.loading,
    };
  });

  const handleSearch = (searchTerm) => {
    const newData =
      data &&
      data.filter(
        (ele) =>
          ele.channel.toLowerCase().includes(searchTerm.toLowerCase()) ||
          ele.chefName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    dispatch(searchFilter(newData));
  };

  useEffect(() => {
    
      dispatch(getChef());
  }, []);
  return (
    
    <AllChannelsWrapper>
     
   <Navbar/>
   {loading ? (
  <Loading />
) :  <div className="chef-channel-wrapper">
    <div className="channel-head"><h3>Find Best Channels Here</h3></div>
      <div className="search-holder">
        <Search width="100%"
          handleSearch={handleSearch}
          placeholder="Search by channel or chef name"
        />
      </div>

      <div>
        {filtered &&
          filtered.map((ele) => (
            <div key={ele._id} className="indv-div-home">
              <div className="logo-with-channel">
                <div className="profile-img" style={{backgroundImage:`url(${ele.logo})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:"top"}}>
                  
                </div>
                <div>
                  <h3 className="channel-name">{ele.channel}</h3>
                  <p className="chef-name">{ele.chefName}</p>
                </div>
              </div>
              <NavLink to={`/channeldetails/${ele._id}`}>
                <button className="details-btn">Details</button>
              </NavLink>
            </div>
          ))}
        {filtered.length === 0 && (
          <h3 className="no-data">
            <span className="query">Query </span>Result Not Found...
          </h3>
        )}
      </div>
    </div>}
    <Footer/>
  </AllChannelsWrapper>

  )
}

export default AllChannels
