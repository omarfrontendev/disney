import React, { useState } from 'react'
import MovieListCard from '../../components/MovieListCard'
import { Link } from 'react-router-dom'

import './watchList.css'

const WatchList = ({ movies }) => {

  const [bgk, setBgk] = useState(movies.length ? movies[0].backgroundImg : '')

  return (
    <div className='relative'>
      <div className='bkg__whatch-list' style={{backgroundImage: `url('${bgk}')`}}></div>
      <div className="container">
        <div className="watchList__page page__space_top">
          {movies.length ?
            <>
              {movies.map(m => <MovieListCard setBgk={setBgk} key={m.id} movie={m} />)}
            </>
          : 
            <>
              <div className="empty__page flex center column">
                <h1>Go To Add Some Movies</h1>
                <Link to='/home'>Home</Link>
                <Link to='/movies'>Movies</Link>
                <Link to='/serise'>Serise</Link>
              </div>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default WatchList