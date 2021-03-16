import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "./TestimoniSlider.css";
import "slick-carousel/slick/slick-theme.css";

import ProductCarouselImage1 from "../../image/image-1.png";
import ProductCarouselImage2 from "../../image/image-2.png";

export default class TestimoniSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    };

    return (
      <div>
        <Slider {...settings}>
          <div className="product-carousel__container">
            <img src={ProductCarouselImage1} alt="" />
          </div>
          <div className="product-carousel__container">
            <img src={ProductCarouselImage2} alt="" />
          </div>
          <div className="product-carousel__container">
            <img src={ProductCarouselImage1} alt="" />
          </div>
          <div className="product-carousel__container">
            <img src={ProductCarouselImage1} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
