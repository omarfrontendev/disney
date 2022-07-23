import { useState, createContext, useEffect } from "react";

const AuthContext = createContext({
  user: {},
  loggedIn: false,
  signInHandler: () => {},
  signOutHandler: () => {},
  watchList: [],
  setWatchList: () => {},
});

export { AuthContext };


const AuthProvider = ({ children }) => {

  const userInLocal = localStorage.getItem('user');
  const loggedInValue = localStorage.getItem('loggedIn');

  const [user, setUser] = useState(userInLocal ? JSON.parse(userInLocal) : {});
  const [loggedIn, setLoggedIn] = useState(loggedInValue ? JSON.parse(loggedInValue) : null);
  const [watchList, setWatchList] = useState([]);

  //  Login Handler:=

  const signInHandler = (userName, uesrEmail, uesrPhoto) => {
    setUser({
      userName,
      uesrEmail,
      uesrPhoto
    })
    setLoggedIn(true);
  }

  // Save To LocalStorage : =
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('loggedIn', JSON.stringify(loggedIn)); 
  }, [user])



  //  Logout Handler : =

  const signOutHandler = () =>{
    setUser({
      userName: null,
      userEmail: null,
      userPhoto: null
    })
    setLoggedIn(null);
    localStorage.removeItem('user');
    localStorage.removeItem('loggedIn');
  }


  // Add Movies To List 

  const addMovie = movie => {
    setWatchList([
      ...watchList,
      movie
    ]);
  };
  
  const removeMovie = id => {
    setWatchList(prev => prev.filter(m => m.id !== id))
  };

  console.log(watchList)

  return (
    <AuthContext.Provider value={{
      user,
      loggedIn,
      signInHandler,
      signOutHandler,
      watchList,
      setWatchList,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;