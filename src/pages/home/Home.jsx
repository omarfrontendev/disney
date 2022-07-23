import React from 'react'
import Header from '../../components/header/Header' 
import MainSlider from '../../components/MainSlider'
import PopularMovies from '../../components/PopularMovies'
import Viewers from '../../components/Viewers'

import './home.css'

const Home = ({ movies }) => {

  return (
    <>
      <div className="home_page">
        <MainSlider />
        <Viewers />
        <PopularMovies title='Recommended for you' movies={movies.filter(m => m.type === 'recommend')} />
        <PopularMovies title='Originals' movies={movies.filter(m => m.type === 'original')} />
        <PopularMovies title='Trending' movies={movies.filter(m => m.type === 'trending')} />
        <PopularMovies title='New' movies={movies.filter(m => m.type === 'new')} />
        <PopularMovies title='Series' movies={movies.filter(m => m.type === 'series')} />
      </div>
    </>
  )
}

export default Home