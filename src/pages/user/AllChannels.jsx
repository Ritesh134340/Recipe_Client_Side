import React, { useEffect, useState } from "react";
import Search from "../../components/Search";
import { getChef, channelFilter } from "../../redux/AppRedux/action";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "../../styles/userStyle/link.styled";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";
import { AllChannelsWrapper } from "../../styles/userStyle/allchannels.styled";
import Footer from "../../components/Footer";

const AllChannels = () => {
  const dispatch = useDispatch();
  const { channelData, filteredChannel, loading } = useSelector((state) => {
    return {
      channelData: state.AppReducer.channelData,
      filteredChannel: state.AppReducer.filteredChannel,
      loading: state.AppReducer.loading,
    };
  });

  const handleSearch = (searchTerm) => {
    const newData =
      channelData &&
      channelData.filter(
        (ele) =>
          ele.channel.toLowerCase().includes(searchTerm.toLowerCase()) ||
          ele.chefName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    dispatch(channelFilter(newData));
  };

  useEffect(() => {
    dispatch(getChef());
  }, []);
  return (
    <AllChannelsWrapper>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <div className="chef-channel-wrapper">
          <div className="channel-head">
            <h3>Find Best Channels Here</h3>
          </div>
          <div className="search-holder">
            <Search
              width="100%"
              handleSearch={handleSearch}
              placeholder="Search by channel or chef name"
            />
          </div>

          <div className="channel-wrapper-main">
            {filteredChannel &&
              filteredChannel.map((ele) => (
                <div key={ele._id} className="indv-div-home">
                  <div className="logo-with-channel">
                    <div
                      className="profile-img"
                      style={{
                        backgroundImage: `url(${ele.logo})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top",
                      }}
                    ></div>
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
            {filteredChannel && filteredChannel.length === 0 && (
              <div className="no-data-wrapper">
                <h3 className="no-data">
                  <span className="query">Query </span>Result Not Found...
                </h3>
              </div>
            )}
          </div>
        </div>
      )}
      <Footer />
    </AllChannelsWrapper>
  );
};

export default AllChannels;
