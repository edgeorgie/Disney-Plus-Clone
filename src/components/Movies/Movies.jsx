import React from 'react'
import { Container, Content, Wrap } from './Styled'
import { selectMovies } from '../../features/movie/movieSlice';
import { useSelector } from 'react-redux';

export const Movies = () => {
  const movies = useSelector(selectMovies)

  console.log('movies', movies)
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        {
          movies && movies.map(movie => (
            <Wrap key={movie.id}>
              <img src={movie.cardImg} alt={movie.title} />
              
            </Wrap>
          ))
        }
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0B2682B4B01548242036066A1428197E2CC6DB23135B43CEE90A854D4F1055F8/scale?width=800&aspectRatio=1.78&format=jpeg"
            alt="Simpsons"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0B2682B4B01548242036066A1428197E2CC6DB23135B43CEE90A854D4F1055F8/scale?width=800&aspectRatio=1.78&format=jpeg"
            alt="Simpsons"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0B2682B4B01548242036066A1428197E2CC6DB23135B43CEE90A854D4F1055F8/scale?width=800&aspectRatio=1.78&format=jpeg"
            alt="Simpsons"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0B2682B4B01548242036066A1428197E2CC6DB23135B43CEE90A854D4F1055F8/scale?width=800&aspectRatio=1.78&format=jpeg"
            alt="Simpsons"
          />
        </Wrap>
      </Content>
    </Container>
  );
}
