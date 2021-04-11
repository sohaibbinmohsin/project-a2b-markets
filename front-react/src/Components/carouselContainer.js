// code from https://react-bootstrap.github.io/components/carousel/

import React from 'react';
import { Carousel } from 'react-bootstrap';
import './carouselContainer.css'
import img1 from '../../images/slideShow1.png';
import img2 from '../../images/slideShow2.jpg';
import img3 from '../../images/slideShow3.jpg';

const CarouselContainer = () => {
    return (
        <Carousel className="carousel-inner" pause={false}>
  <Carousel.Item interval={2000}>
    <img 
      className="d-block w-100"
      src={img1}
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
      src={img2}
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
      src={img3}
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