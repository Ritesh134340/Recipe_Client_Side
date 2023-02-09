import React,{useState,useEffect} from 'react'
import AdminNav from '../../components/AdminNav'
import { BodyWrapper } from '../../styles/commonStyle/flexbody.styled'
import { AllVideosWrapper } from '../../styles/adminStyle/allVideos.styled'
import VideoGrid from '../../components/VideoGrid';
import axios from "axios"
import Search from '../../components/Search';
import Loading from '../../components/Loading';


const AllVideos = () => {
  const [allVideo,setAllVideo]=useState([])
  const [filtered,setFiltered]=useState([])
  const [loading,setLoading]=useState(false)
  const [sort,setSort]=useState("")

  const handleSearch=(searchTerm)=>{
     const newFilter= allVideo && allVideo.filter((ele)=>
         ele.title.toLowerCase().includes(searchTerm.toLowerCase())
       )
       setFiltered(newFilter)
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
    
    setLoading(true)
    axios.get(urlString).then((res)=>{
     
      setAllVideo(res.data.data)
      setFiltered(res.data.data)
      setLoading(false)
    }).catch((err)=>{
     setLoading(false)
     console.log(err)
    })
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
         videos={filtered}
         view="linkview"
     />}
      </BodyWrapper>
      </AllVideosWrapper>
  
  )
}

export default AllVideos
