import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  button {
    z-index: 1;
  }

  .slick-list {
    overflow: visible;
  }
`;

export const Wrap = styled.div`
  cursor: pointer;

  img {
    border: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0, 0, 0 / 69%) 0px 26px 30px -10px,
      rgb(0, 0, 0 / 73%) 0px 16px 10px -10px;

    &:hover {
      transition: border 0.3s ease-in-out;
      transform-origin: bottom top;
      border: 4px solid rgba(249, 249, 249, 0.8);
    }

    &:not(:hover) {
      transition: border 0.5s ease-in-out;
    }
  }
`;