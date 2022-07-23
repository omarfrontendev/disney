import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ movie }) => {

  const navigate = useNavigate();

  return (
    <div className="movie_card" onClick={() => navigate(`/movie/${movie.id}`)}>
      <img src={movie.cardImg} alt="" />
      <div className="movie__title flex space-between">
        <p>{movie.title}</p>
      </div>
    </div>
  )
}

export default MovieCard