import React from 'react'
import MovieCard from './header/MovieCard';

const PopularMovies = ({ movies, title }) => {




  return (
    <section className='section__propular__movies container'>
      <div className="propular_movies">
        <h3>{title}</h3>
        <div className="movies_container">
          {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    </section>
  )
}

export default PopularMovies