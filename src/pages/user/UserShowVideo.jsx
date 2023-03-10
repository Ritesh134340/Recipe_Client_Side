import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {RiDeleteBin6Line} from "react-icons/ri"
import {
  getVideoById,
  addComment,
  addToFavourite,
  submitRating,
} from "../../redux/AppRedux/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VideoPlayer from "../../components/VideoPlayer";
import Navbar from "../../components/Navbar";
import { ShowUserVideoWrapper } from "../../styles/userStyle/showuservideo.styled";
import Loading from "../../components/Loading";
import { BiAddToQueue } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import ShowStarRating from "../../components/ShowStarRating";
import Footer from "../../components/Footer";
import { BsEmojiLaughing } from "react-icons/bs";
import { TimeCalculator } from "../../utils/calculateTime";
import {uid} from "uid"
import {BsThreeDotsVertical} from "react-icons/bs"
import emoji from "node-emoji";


const UserShowVideo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const [showEmojiContainer, setShowEmojiContainer] = useState(false);
  const [modalClose, setModalClose] = useState(false);
  const [videoData, setVideoData] = useState({});
  const [emojiText, setEmojiText] = useState("");
  const [emojiSearchData, setEmojiSearchData] = useState([]);
  const [authorInputText, setAuthorInputText] = useState("");
  const [showCommetBox, setShowCommentBox] = useState(false);
  const [commentData, setCommentData] = useState({});
  const [rating, setRating] = useState(1);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.AppReducer.loading);
  const noOfUsers = videoData && videoData.ratedBy && videoData.ratedBy.length;
  const profile = useSelector((state) => {
    return state.AuthReducer.profile;
  });
 console.log(videoData)
  const token = useSelector((state) => state.AuthReducer.token);
  const role = useSelector((state) => state.AuthReducer.role);
  const [selected,setSelected]=useState("")
  
 const handleDots=(id)=>{
   selected==="" ?  setSelected(id) : setSelected("")
 
 }
 const handleCommentDelete=(id)=>{
  alert(id)
 }
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  const handleSubmitRating = () => {
    const converted = parseInt(rating);
    if (isNaN(converted)) {
      toast.error("Invalid input !", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      if (converted > 5 || converted === 0) {
        toast.error("Invalid input !", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        if (token && role === "user") {
          const payload = { rating: converted, videoId: videoData._id };
          dispatch(
            submitRating(payload, {
              headers: { Authorization: `Bearer ${token}` },
            })
          ).then((res) => {
            if (res.status === 200) {
              toast.success(res.payload.mesg, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
              dispatch(getVideoById(id)).then((res) => {
                setVideoData(res.payload.document);
              });
              setModalClose(false);
              setRating(1);
            } else {
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
        } else {
          navigate("/login");
        }
      }
    }
  };
  const handleFavouriteAdd = () => {
    if (token && role === "user") {
      const payload = { videoId: videoData._id, userEmail: profile.email };

      dispatch(
        addToFavourite(payload, {
          headers: { Authorization: `Bearer ${token}` },
        })
      ).then((res) => {
        if (res.status === 200) {
          toast.success(res.payload.mesg, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else if (res.status === 409) {
          toast.warn(res.mesg, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else {
          toast.error(res.status, {
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
    } else {
      navigate("/login");
    }
  };

  const handleAddComment = () => {
    if (token && role === "user") {
      if (authorInputText !== "") {
        const commentId=uid(16)
        const payload = {
          videoId: videoData._id,
          comment: authorInputText,
          image: profile.image,
          name: profile.name,
          commentId:commentId
        };
      
        dispatch(
          addComment(payload, { headers: { Authorization: `Bearer ${token}` } }) )
          .then((res)=>{
            setCommentData(res.payload.comments)
            setAuthorInputText("")
            setShowEmojiContainer(false)
            if(res.staus===200){
              toast.success(res.payload.mesg, {
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
            else{
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
          
          })
       
      } else {
        toast.error("Invalid input !", {
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
    } else {
      navigate("/login");
    }
  };

  const handleModalRate = () => {
    if (token && role === "user") {
      setModalClose(true);
    } else {
      navigate("/login");
    }
  };




  useEffect(() => {
    dispatch(getVideoById(id)).then((res) => {
      setVideoData(res.payload.document);
      setCommentData(res.payload.comments);
    });
  }, []);

  useEffect(() => {
    if (emojiText === "") {
      let emojiArray = emoji.search(emojiText);
      let newemojiArray = emojiArray.splice(1122, 1217);
      setEmojiSearchData(newemojiArray);
    } else {
      let emojiArray = emoji.search(emojiText);
      setEmojiSearchData(emojiArray);
    }
  }, [emojiText]);



  return (
    <>
      <ShowUserVideoWrapper
        showDesc={showMore}
        showCommentBx={showCommetBox}
        modalShow={modalClose}
        showEmoji={showEmojiContainer}
      >
       
        <Navbar />
        <div className="rating-modal">
          <div className="rating-modal-content">
            <div className="cross-container">
              <RxCross2
                className="rating-cross-icon"
                onClick={() => setModalClose(false)}
              />
            </div>
            <div className="main-modal-content">
              <h3 className="rating-head">Rate this Video :</h3>

              <p className="rating-discription">
                <span className="rat-highlight">User's</span> feedback is very
                important to us.We look closely each feedback given by our
                users. This will help us to bring more quality content for you.
              </p>
              <p className="input-tag">
                Your rating for this video{" "}
                <input
                  className="rating-input"
                  type="text"
                  maxLength="1"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />{" "}
                / 5{" "}
              </p>
            </div>

            <button className="rating-sub-btn" onClick={handleSubmitRating}>
              {loading ? "Adding..." : "Submit"}
            </button>
          </div>
        </div>

        {loading ? (
          <Loading />
        ) : (
          <div className="player-wrapper">
            <div className="player-div">
              <VideoPlayer videoId={videoData.videoId} />
            </div>
             <div className="ch-log-nam-wrapper">
              <div className="ch-show-log" style={{backgroundImage:`url(${videoData.channelLogo})`}}></div>
              <div className="ch-show-nam">
                <p>{videoData.channelName}</p>
              </div>
             </div>
            <div>
              <p className="show-video-title">{videoData.title}</p>
            </div>
            <div className="rating-div">
              <div className="star-div">
                <ShowStarRating rating={videoData.rating} />
                <p className="users-rating-text"> Rated by {noOfUsers} users</p>
              </div>
              <div className="favourite-wrapper">
                <div onClick={handleFavouriteAdd} className="fav-btn-wrapper">
                  <BiAddToQueue className="add-icon" /> <p>Add to favourites</p>
                </div>
                <p className="rate-now-btn" onClick={handleModalRate}>
                  Rate Now
                </p>
              </div>
            </div>
            <div className="vid-des-div">
              <h4>Video Description : </h4>
              <pre className="video-desc">{videoData.description}</pre>
              <p className="show-more-text" onClick={handleShowMore}>
                {showMore ? "Show Less" : "... Show more"}
              </p>
            </div>

            <div className="comment-div">
              <p className="show-comment">{commentData && commentData.comment?.length ? commentData.comment?.length : "0" } Comments</p>

              <div className="author-wrapper">
                <div
                  className="comment-author-image"
                  style={{ backgroundImage: `url(${profile.image})` }}
                ></div>
                <div className="comment-and-btn-wrapper">
                  <input
                    onFocus={() => setShowCommentBox(true)}
                    type="text"
                    placeholder="Add a comment..."
                    name=""
                    id=""
                    className="comment-input"
                    value={authorInputText}
                    onChange={(e) => setAuthorInputText(e.target.value)}
                  />
                  <div className="comment-btn-container">
                    <div className="comment-btn-holder">
                      <div className="emoji-div">
                        <BsEmojiLaughing
                          className="emoji-icon"
                          onClick={() => {
                            setEmojiText("");
                            setShowEmojiContainer(!showEmojiContainer);
                          }}
                        />
                        <div className="emoji-container">
                          <div className="emoji-container-main">
                            <div className="emoji-search-div">
                              <input
                                value={emojiText}
                                type="text"
                                className="emoji-input-box"
                                onChange={(e) => setEmojiText(e.target.value)}
                                placeholder="Search emoji"
                              />
                            </div>

                            <div className="emoji-search-result-div">
                              <div className="emoji-wrapper">
                                {emojiSearchData &&
                                  emojiSearchData.reverse().map((ele) => {
                                    return (
                                      <div
                                        className="emoji-holder-div"
                                        key={ele.key}
                                        onClick={() =>
                                          setAuthorInputText(
                                            authorInputText + " " + ele.emoji
                                          )
                                        }
                                      >
                                        {ele.emoji}
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="comment-btn-div">
                        <p onClick={() => setAuthorInputText("")}>Cancel</p>
                        <p
                          style={{
                            backgroundColor: authorInputText
                              ? "rgb(6,95,212)"
                              : "rgb(242,242,242)",
                            color: !authorInputText
                              ? "rgb(148,148,148)"
                              : "white",
                          }}
                          onClick={handleAddComment}
                        >
                          Comment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
                <div className="user-comment-main">
                  {
                    commentData && commentData.comment?.map((ele,index)=>
                    <div className="user-comment-div" key={ele.commentId}>
                      
                    <div
                      className="comment-author-image"
                      style={{ backgroundImage: `url(${ele.userImage})` }}
                    >

                    </div>

                    <div className="comment-text-div">
                   <div>
                   <p className="user-name-text">
                        {ele.userName}{" "}
                        <span className="show-comment-time">{TimeCalculator(ele.postedAt)}</span>
                      </p>
                     
                      <p className="user-comment-text">
                       {ele.userComment}
                      </p>
                    
                     
                   </div>
                      { (profile.id===ele.userId) && <div className="dots-wrapper">
                        <BsThreeDotsVertical className="dots-icon" onClick={()=>handleDots(ele.commentId)}/>
                        <div className="comment-del-div" style={{display:selected===ele.commentId?"block":"none"}}>
                          <div className="del-icon-wrapper" onClick={()=>handleCommentDelete(ele.commentId)}>
                          <RiDeleteBin6Line className="del-icon"/>
                        <p className="del-text">Delete</p>
                          </div>
                       
                       </div>
                       </div>}
                    </div>
                  </div>
                    )
                  }
                 
                </div>
              
            </div>
          </div>
        )}
        <ToastContainer />
      </ShowUserVideoWrapper>
      <Footer />
    </>
  );
};

export default UserShowVideo;
