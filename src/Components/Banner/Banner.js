import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../axios'
import { API_KEY,imageUrl } from '../../constant/const'
function Banner() {
  const [Movie,setMOvie]=useState()
  useEffect(()=>{
    axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{
      console.log(response.data.results[0])
      setMOvie(response.data.results[3])
    })
  },[])
  return (
    <div 
          style = {{backgroundImage:`url(${Movie ? imageUrl+Movie.backdrop_path:""})`}}
        className='banner'>
        <div className='content'>
          <h1 className='title'>{Movie ? Movie.title:""}</h1>
          <div className='buttons'>
            <button className='button'>play</button>
            <button className='button'>My list</button>
          </div>
          <h1 className='discription'>{Movie ? Movie.overview:""}</h1>
        </div>
      <div className="fade">
        
      </div>
    </div>
  )
}

export default Banner
