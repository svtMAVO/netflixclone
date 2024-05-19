import React,{useEffect,useState} from 'react'
import './Ropost.css'
import axios from '../axios'
import { API_KEY, imageUrl } from '../../constant/const'
import YouTube from 'react-youtube'

function Ropost(props) {
  const[movies,setMovies]=useState([])
  const[urlid,seturlId]=useState('')
  useEffect(() => {
  axios.get(props.url).then(response=>{
    console.log(response.data) 
    setMovies(response.data.results)
  }).catch(err=>{
    alert('network error')
   
  })
  }, [])
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handilemovie=(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if (response.data.results.length!==0){
        seturlId(response.data.results[0])

      }
    })
  }
   
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      
      <div className='rowpost'>
      {movies.map((obj)=>
          
        
      <img onClick={()=>handilemovie(obj.id)} className='poster' src={`${imageUrl+obj.backdrop_path}`}alt="poster" />
      )}
      </div>
      {urlid && <YouTube opts={opts} videoId={urlid.key}/>}
    </div>
  )
}


export default Ropost
