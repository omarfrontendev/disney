import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../store/auth-context'
import { useParams } from 'react-router-dom';
import { BsFillPlayFill } from 'react-icons/bs'
import { RiAddCircleLine } from 'react-icons/ri'
import { BsFillCheckCircleFill } from 'react-icons/bs'

import './movie.css'

const Movie = ({ movies }) => {

  const params = useParams().ID;
  const currentMovies = movies.find(movie => movie.id === +params);
  const ctx = useContext(AuthContext);

  const [movieAdded, setMovieAdded] = useState(false);

  useEffect(() => {
    const checkAdded = ctx.watchList.find(m => m.id === currentMovies.id);
    if(!checkAdded){
      setMovieAdded(false);
    }else {
      setMovieAdded(true)
    }
  }, [])

  if(!currentMovies) {
    return (
      <div className="container flex center" style={{height: '100vh', color: 'red'}}>
        <h1>Error Page</h1>
      </div>
    );
  };

  const addMovieHandler = () => {
    setMovieAdded(true);
    ctx.setWatchList([
      ...ctx.watchList,
      currentMovies
    ]);
  };

  const removMovieHandler = () => {
    setMovieAdded(false);
    const updatedList = ctx.watchList.filter(m => m.id !== currentMovies.id)
    ctx.setWatchList(updatedList)
  };

  return (
    <>
      <div 
        className="movie__page page__space_top relative" 
        style={{backgroundImage: `url('${currentMovies.backgroundImg}')`}}
      >
        <div className="container">
          <div className="movie__page__content relative flex column">
            <img src={currentMovies.titleImg} alt="" className='img_title' />
            <div className="btns_destails flex">
              <a href="#" className='btn__play flex center relative' target='_blank'>
                <BsFillPlayFill className='play__icon' />Play
              </a>
              <a href="#" className='btn__play __trailer flex center relative' target='_blank'>
                <BsFillPlayFill className='play__icon' />trailer
              </a>
              {movieAdded ?
                <button onClick={removMovieHandler} className='add_btn remove__btn'>
                  <BsFillCheckCircleFill className='add_icon' />
                </button>
              : 
                <button onClick={addMovieHandler} className='add_btn'>
                  <RiAddCircleLine className='add_icon' />
                </button>
              }
              <div>
                <button className="group__btn flex center">
                  <img src='/assets/group-icon.png' />
                </button>
              </div>
            </div>
            <div className="flex column text__details">
              <p className="subtitle">{currentMovies.subTitle}</p>
              <p className='desc'>{currentMovies.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Movie