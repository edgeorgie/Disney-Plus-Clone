import React from 'react'
import { AddButton, Background, Container, Controls, Description, GroupWatchButton, ImageTitle, PlayButton, Subtitle, TrailerButton } from './Styled'

export const Detail = () => {
  return (
    <Container>
      <Background>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0B2682B4B01548242036066A1428197E2CC6DB23135B43CEE90A854D4F1055F8/scale?width=800&aspectRatio=1.78&format=jpeg"
          alt="Background of the movie"
        />
      </Background>
      <ImageTitle>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/The_Simpsons_yellow_logo.svg"
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
