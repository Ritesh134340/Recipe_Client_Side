import React,{useEffect,useState} from 'react'
import { SearchResultWrapper } from '../../styles/userStyle/search.styled'
import { useSelector,useDispatch } from 'react-redux'
import { findSearch } from '../../redux/AppRedux/action'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from '../../components/Navbar';
import VideoGrid from "../../components/VideoGrid"

const SearchResult = () => {
    const dispatch=useDispatch()
    const searchTerm=useSelector((state)=>state.AppReducer.searchTerm)
    const searchData=useSelector((state)=>state.AppReducer.searchData)
  
    

    useEffect(()=>{
        if(searchTerm){
        dispatch(findSearch(searchTerm)).then((res)=>{
            if(res.status!==200){
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
        }
    
    },[])

  return (
  
        <SearchResultWrapper>
            <Navbar/>
            <div>
              <p>Showing Search result for </p><span>{searchTerm}</span>
            </div>
            <div className="search-grid-wrapper">
            <VideoGrid videos={searchData} view="linkview" videoPath="/uservideo" columns="4" />
            </div>
           
    
        <ToastContainer/>
        </SearchResultWrapper>
     

  )
}

export default SearchResult
