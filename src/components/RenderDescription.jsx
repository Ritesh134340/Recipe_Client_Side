import React,{useState,useEffect} from 'react'

const RenderDescription = ({description}) => {
 

  const urlRegex = /(https?:\/\/[^\s]+)/g;

 

  return (
    <pre>
     
        {
        description &&  description.replace(urlRegex, (url)=>{
         return <a href={url}>{url}</a>
       })
        }
    </pre>
  )
}

export default RenderDescription