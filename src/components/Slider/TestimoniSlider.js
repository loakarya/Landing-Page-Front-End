import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "./TestimoniSlider.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class TestimoniSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };

    return (
      <div>
        <Slider {...settings}>
            <div class="product-carousel__container">
                <img src="../image/image-1.png" alt="" />
            </div>
            <div class="product-carousel__container">
                <img src="../image/image-2.png" alt="" />
            </div>
            <div class="product-carousel__container">
                <img src="../image/image-1.png" alt="" />
            </div>
            <div class="product-carousel__container">
                <img src="../image/image-1.png" alt="" />
            </div>
        </Slider>
      </div>
    );
  }
}