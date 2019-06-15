import React, { Component } from "react";
import {Carousel} from 'react-bootstrap';
import './Slider.css';


class Slider extends Component {
  render() {
    return (
    <Carousel className="carousel-home">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/image-3-1170x658.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/healthy01.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/image-12-1170x658.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>);
  }
}

export default Slider;
