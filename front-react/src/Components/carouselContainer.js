// code from https://react-bootstrap.github.io/components/carousel/

import React from 'react';
import { Carousel } from 'react-bootstrap';
import './carouselContainer.css'


const CarouselContainer = () => {
    return (
        <Carousel className="carousel-inner" pause={false}>
  <Carousel.Item interval={2000}>
    <img 
      className="d-block w-100"
      src='/img/slideShow1.png'
      height = "300px"
      width = "500px"
      alt="Deal 1"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src='/img/slideShow2.jpg'
      height = "300px"
      width = "500px"
    //   margin-right = "100px"
    //   margin-left = "100px"
      alt="Deal 2"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src='/img/slideShow3.jpg'
      height = "300px"
      width = "500px"
      alt="Deal 3"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default CarouselContainer;