import React from 'react'
import { Carousel, Wrap } from './Styled'

export const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="img slider" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt="img slider" />
      </Wrap>
    </Carousel>
  );
}
