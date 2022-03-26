import React from 'react'
import { ImgSlider } from '../ImgSlider/ImgSlider'
import { Viewers } from '../Viewers/Viewers'
import { Container } from './Styled'

export const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      Home
    </Container>
  )
}
