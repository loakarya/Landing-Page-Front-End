import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "./SlickCustom.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class ProductCarousel extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  // state = {
  //   slide: this.props.pictures
  // }

  
  render() {
    // console.log(this.state.slide);
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000
    };

    return (
      <div>
        <Slider {...settings}>
          <div class="product-carousel__container">
              <img src={this.props.src} alt="" />
          </div> 
        </Slider>
      </div>
    );
  }
}