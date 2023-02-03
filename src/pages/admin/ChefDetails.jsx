import React, { useEffect, useState } from "react";
import { ChefDetailsWrapper } from "../../styles/adminStyle/chefDetails.styled";
import { useParams } from "react-router-dom";
import { chefById } from "../../redux/AdminRedux/action";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../components/Loading";
import {RxCross2} from "react-icons/rx"

const ChefDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [showModal,setShowModal]=useState(false)
  const { byId, loading } = useSelector((state) => {
    return {
      byId: state.AdminReducer.byId,
      loading: state.AdminReducer.loading,
    };
  });

  useEffect(() => {
    const payload = { id: id };
    dispatch(chefById(payload));
  }, []);

  return (
    <ChefDetailsWrapper>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="banner-div">
            <img src={byId.banner} alt="banner" className="banner-image" />
          </div>
          <div className="modal-btn-div">
            <button className="modal-btn" >Add New Video</button>
          </div>
          <div className="modal">
            <div className="modal-content">
              <RxCross2 className='cross-icon'/>
            </div>
          </div>
        </div>
      )}
    </ChefDetailsWrapper>
  );
};

export default ChefDetails;
