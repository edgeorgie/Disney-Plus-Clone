import React from 'react'
import { ImgSlider } from '../ImgSlider/ImgSlider'
import { Movies } from '../Movies/Movies'
import { Viewers } from '../Viewers/Viewers'
import { Container } from './Styled'

export const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
      Home
    </Container>
  )
}
