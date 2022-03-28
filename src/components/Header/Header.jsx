import React, { useState } from 'react'
import { Logo, Nav, NavMenu, UserImg, Login, LoginContainer } from './Styled'
import { Link, useNavigate } from 'react-router-dom'
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from '../../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { auth, provider } from '../../firebase'

export const Header = () => {
  const [login, setLogin] = useState(false)
  const navigate = useNavigate()
  // const dispatch = useDispatch()
  // const userName = useSelector(selectUserName)
  // const userPhoto = useSelector(selectUserPhoto)

  // useEffect(() => {
  //   auth.onAuthStateChanged(async (user) => {
  //     if (user) {
  //       dispatch(setUserLogin({
  //         name: user.displayName,
  //         email: user.email,
  //         photo: user.photoURL,
  //       }))
  //       navigate('/')
  //     }
  //   })
  // }, [])

  const signIn = () => {
    setLogin(true)
    navigate("/home");
  }

  // const signIn = () => {
  //   auth.signInWithPopup(provider)
  //     .then(result => { 
  //       let user = result.user
  //       dispatch(setUserLogin({
  //         name: user.displayName,
  //         email: user.email,
  //         photo: user.photoURL,
  //       }))
  //       navigate('/home')
  //     })
  // }

  const signOut = () => {
    // auth.signOut()
    //   .then(() => {
    //     dispatch(
    //       setSignOut()
    //     );
    setLogin(false)
        navigate('/login')
      //})
  }

  return (
    <Nav>
      <Logo src="/images/logo.svg" alt="logo" />

      {!login ? (
        <LoginContainer>
          <Login onClick={signIn}>LOGIN</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <Link to="/home">
              <img src="/images/home-icon.svg" alt="Home icon" />
              <span>HOME</span>
            </Link>

            <a href="#">
              <img src="/images/search-icon.svg" alt="Search icon" />
              <span>SEARCH</span>
            </a>

            <a href="#">
              <img src="/images/watchlist-icon.svg" alt="Watchlist icon" />
              <span>WATCHLIST</span>
            </a>

            <a href="#">
              <img src="/images/original-icon.svg" alt="Original icon" />
              <span>ORIGINALS</span>
            </a>

            <a href="#">
              <img src="/images/movie-icon.svg" alt="Movie icon" />
              <span>MOVIES</span>
            </a>

            <a href="#">
              <img src="/images/series-icon.svg" alt="Series icon" />
              <span>SERIES</span>
            </a>
          </NavMenu>
            <UserImg
            onClick={signOut}
            src="https://lh3.googleusercontent.com/a-/AOh14Gh67JwFsg77pra-bupCBzkhROEsgPNilZYDtQ7d=s288-p-rw-no"
            alt="User"
          />
        </>
      )}
    </Nav>
  );
}
