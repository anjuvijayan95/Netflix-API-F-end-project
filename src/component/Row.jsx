import React,{useEffect,useState} from 'react'
import instance from '../instance'
import './Row.css'

const Row = ({isPoster,title,fetchUrl}) => {

    // base url
    const base_url = "https://image.tmdb.org/t/p/original/";


    const [movies,setMovies]=useState([])

    const fetchData=async()=>{
      const response = await instance.get(fetchUrl)
      setMovies(response.data.results);
    }

    useEffect(()=>{
        return()=>{
            fetchData()
        }
    },[])
    console.log(movies);
  return (
    <>
    <div className='row'>
      <h2>{title}</h2>
      <div className='movies_row'>
        {
            movies.map((movie)=>(
                <img className={`movie ${isPoster && 'movie_poster'}`} src={`${base_url}${isPoster?movie.poster_path:movie.backdrop_path}`}alt="" />
            ))
        }
      </div>
      </div>
    </>
  )
}

export default Row
