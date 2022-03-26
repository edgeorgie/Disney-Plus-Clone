import React from 'react'
import { Container, Wrap } from './Styled'

export const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="Viewers" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="Viewers" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="Viewers" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="Viewers" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="Viewers" />
      </Wrap>
    </Container>
  );
}
