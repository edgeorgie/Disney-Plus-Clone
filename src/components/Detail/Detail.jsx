import React from 'react'
import { AddButton, Background, Container, Controls, Description, GroupWatchButton, ImageTitle, PlayButton, Subtitle, TrailerButton } from './Styled'

export const Detail = () => {
  return (
    <Container>
      <Background>
        <img
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt="Background of the movie"
        />
      </Background>
      <ImageTitle>
        <img
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt="Title img"
        />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="Play button" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="Trailer button" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="Group icon" />
        </GroupWatchButton>
      </Controls>
      <Subtitle>2022 - Action, Drama, Thriller</Subtitle>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod
      </Description>
    </Container>
  );
}
