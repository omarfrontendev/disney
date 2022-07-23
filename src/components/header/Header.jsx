import React, { useContext, useState } from 'react'
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from '../../firebase';

import './header.css'
import { AuthContext } from '../../store/auth-context';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const authCtx = useContext(AuthContext)

  const handleAuth = () => {
    // signInWithPopup(auth, provider).then(result => {
    //   const user = result.user;
    //   console.log(user)
    //   authCtx.signInHandler(user.displayName, user.email, user.photoURL);
    //   navigate('/home')
    // })
    // .catch(error => {
    //   alert(error.message)
    // })
      authCtx.signInHandler('', '', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png');
      navigate('/home')
  }

  const logoutHandle = () => {
    // signOut(auth).then(() => {
    //   authCtx.signOutHandler();
    //   navigate('/')
    // })
    // .catch(error => {
    //   alert(error.message)
    // })
    authCtx.signOutHandler();
    navigate('/')
  }

  return (
    <header className='flex space-between absolute'>
      <nav className="container flex ceneter space-between">
        <div className="header__logo" onClick={() => navigate('/home')}>
          <img src="/assets/logo.svg" alt="" />
        </div>
        {authCtx.loggedIn && 
        <>
          <ul className={`header__logo-links flex start ${openMenu ? 'active' : ''}`}>
            <li>
              <Link to="/home" className='flex center'>
                <img src="/assets/home-icon.svg" alt="" />
                <span>Home</span>
              </Link>
            </li>
            {/* <li>
              <a href="" className='flex center'>
                <img src="/assets/search-icon.svg" alt="" />
                <span>search</span>
              </a>
            </li> */}
            <li>
              <Link to="/watch-list" className='flex center'>
                <img src="/assets/watchlist-icon.svg" alt="" />
                <span>watchlist</span>
              </Link>
            </li>
            <li>
              <Link to="/originals" className='flex center'>
                <img src="/assets/original-icon.svg" alt="" />
                <span>originals</span>
              </Link>
            </li>
            <li>
              <Link to="/movies" className='flex center'>
                <img src="/assets/movie-icon.svg" alt="" />
                <span>movies</span>
              </Link>
            </li>
            <li>
              <Link to="/series" className='flex center'>
                <img src="/assets/series-icon.svg" alt="" />
                <span>series</span>
              </Link>
            </li>
          </ul>
          <div 
            className="header__button-menu flex column" 
            onClick={() => setOpenMenu(prev => !prev)}
          >
            <span className={`${openMenu ? 'active' : ''}`}></span>
            <span className={`${openMenu ? 'active' : ''}`}></span>
            <span className={`${openMenu ? 'active' : ''}`}></span>
          </div>
        </>}
        <div className="header__login">
          {authCtx.loggedIn ? 
          <div className='relative user_img' >
            <img src={authCtx.user.uesrPhoto} alt="" />
            <div className="dropdown__mwnu">
              <button className='logout__btn absolute' onClick={logoutHandle}>
                LOGOUT
              </button>
            </div>
          </div>

          :
            <button onClick={handleAuth} className='relative login__btn'>LOGIN</button>
          }
        </div>
      </nav>
    </header>
  )
}

export default Header