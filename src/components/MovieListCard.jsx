import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieListCard = ({ movie, setBgk }) => {

  const navigate = useNavigate();
  return (
    <div 
      className="movie__watch__card relative"
      onClick={() => navigate(`/movie/${movie.id}`)}
      onMouseEnter={() => setBgk(movie.backgroundImg)}
    >
      <img src={movie.backgroundImg} alt="" />
      <h4>Click To View</h4>
      <div className="movie_details">
        <p>{movie.title}</p>
        <span>{movie.type}</span>
      </div>
    </div>
  )
}

export default MovieListCard