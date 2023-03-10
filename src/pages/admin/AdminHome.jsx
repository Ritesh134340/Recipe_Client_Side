import React, { useEffect, useState } from "react";
import Search from "../../components/Search";
import { AdminHomeWrapper } from "../../styles/adminStyle/adminHome.styled";
import { getChef, searchFilter } from "../../redux/AdminRedux/action";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "../../styles/userStyle/link.styled";
import Loading from "../../components/Loading";
import AdminNav from "../../components/AdminNav";
import { BodyWrapper } from "../../styles/commonStyle/flexbody.styled";

const AdminHome = () => {
  const dispatch = useDispatch();

  const { data, filtered, loading } = useSelector((state) => {
    return {
      data: state.AdminReducer.data,
      filtered: state.AdminReducer.filtered,
      loading: state.AdminReducer.loading,
    };
  });

  const {token}=useSelector((state)=>{return {token:state.AuthReducer.token}})

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
    if(data.length===0){
      dispatch(getChef({headers:{'Authorization':`Bearer ${token}`}}));
    }
  }, []);

  return (
          
    <>
    <div style={{paddingLeft:"30px",color:"#3A98B9",borderBottom:"0.5px solid #F5F5F5",marginBottom:"30px"}}>
    <h1 >Recipe Dashboard</h1>
    </div>
    
    <AdminHomeWrapper>
         
         <AdminNav selected="home" />
        {loading ? (
       <Loading />
     ) :  <BodyWrapper>
      
           <div className="search-holder">
             <Search
               handleSearch={handleSearch}
               placeholder="Search by channel or chef name"
             />
           </div>

           <div>
             {filtered &&
               filtered.map((ele) => (
                 <div key={ele._id} className="indv-div-home">
                   <div className="logo-with-channel">
                     <div className="profile-img">
                       <img src={ele.logo} alt="profile" />
                     </div>
                     <div>
                       <h3 className="channel-name">{ele.channel}</h3>
                       <p className="chef-name">{ele.chefName}</p>
                     </div>
                   </div>
                   <NavLink to={`/chefdetails/${ele._id}`}>
                     <button className="details-btn">Details</button>
                   </NavLink>
                 </div>
               ))}
             {filtered && filtered.length === 0 && (
               <h3 className="no-data">
                 <span className="query">Query </span>Result Not Found...
               </h3>
             )}
           </div>
         </BodyWrapper>}
       </AdminHomeWrapper>
    </>
      
      
      
   
  );
};

export default AdminHome;
