import React from 'react'
import { Logo, Nav, NavMenu, UserImg } from './Styled'

export const Header = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg" alt="logo" />

      <NavMenu>
        <a href="#">
          <img src="/images/home-icon.svg" alt="Home icon" />
          <span>HOME</span>
        </a>

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
      <UserImg src='https://lh3.googleusercontent.com/a-/AOh14Gh67JwFsg77pra-bupCBzkhROEsgPNilZYDtQ7d=s288-p-rw-no' alt='User' />
      
    </Nav>
  );
}
