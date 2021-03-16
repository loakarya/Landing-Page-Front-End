import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class ProductCarousel extends Component {
  constructor(props) {
    super(props);
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
      autoplaySpeed: 4000,
    };

    return (
      <div>
        <Slider {...settings}>
          {this.props.pictures.map((item, index) => (
            <div
              className="product-carousel__container"
              key={`carousel-image-${index}`}
            >
              <img src={item.src} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
