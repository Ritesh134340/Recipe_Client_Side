import React,{useState,useEffect} from 'react'
import AdminNav from '../../components/AdminNav'
import { BodyWrapper } from '../../styles/commonStyle/flexbody.styled'
import { AllVideosWrapper } from '../../styles/adminStyle/allVideos.styled'
import VideoGrid from '../../components/VideoGrid';
import Search from '../../components/Search';
import Loading from '../../components/Loading';
import { useSelector,useDispatch } from 'react-redux';
import { getVideos,filterAllVideosAdmin } from '../../redux/AdminRedux/action';


const AllVideos = () => {
  
  const dispatch=useDispatch();
  const [sort,setSort]=useState("")
  const {loading,allVideos,allFilteredVideos}=useSelector((state)=>{return {allVideos:state.AdminReducer.allVideos,allFilteredVideos:state.AdminReducer.allFilteredVideos,loading:state.AdminReducer.loading}})



  const handleSearch=(searchTerm)=>{
     const newFilter= allVideos && allVideos.filter((ele)=>
         ele.title.toLowerCase().includes(searchTerm.toLowerCase())
       )

       dispatch(filterAllVideosAdmin(newFilter))
     
  }

  const handleSort=(e)=>{
    setSort(e.target.value)
  }


  useEffect(()=>{
    let urlString;
    if(sort!==""){
       urlString=`${process.env.REACT_APP_SERVER_ADDRESS}/admin/getall/videos?publishedAt=${sort}`
    }
    else{
      urlString=`${process.env.REACT_APP_SERVER_ADDRESS}/admin/getall/videos`
    }
    
    dispatch(getVideos(urlString))

   },[sort])

  return (
  
      <AllVideosWrapper>
      <AdminNav selected="uploads"></AdminNav>
      <BodyWrapper>
        <div className="searchWrapper">
           <select onChange={handleSort} id="select-filter">
            <option value="">Sort by</option>
            <option value="desc">Latest</option>
            <option value="asc">Oldest</option>
           </select>
            <Search handleSearch={handleSearch} style={{marginLeft:"0px"}} placeholder="Search video with title"/>
        </div>
        {loading ? <Loading/> : <VideoGrid  show={false}
         videos={allFilteredVideos}
         view="linkview"
     />}
      </BodyWrapper>
      </AllVideosWrapper>
  
  )
}

export default AllVideos
