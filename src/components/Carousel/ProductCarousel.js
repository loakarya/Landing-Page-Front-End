import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "./SlickCustom.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class ProductCarousel extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log(this.props.pictures);
  // }

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

    // const items = this.state.slide.map((value, index) => {
    //   return (
    //     <div class="product-carousel__container">
    //       <img key={index} src={value} alt="" />
    //     </div>
    //   )
    // })

    return (
      <div>
        <Slider {...settings}>
          {/* {items} */}
          {/* {this.props.pictures[0].map((src) => {
              <div class="product-carousel__container">
                <img src={src} alt="" />
              </div>
            }
          )} */}
            {/* <div class="product-carousel__container">
                <img src={this.props.src} alt="" />
            </div>
            <div class="product-carousel__container">
                <img src="../image/image-2.png" alt="" />
            </div>
            <div class="product-carousel__container">
                <img src="../image/image-1.png" alt="" />
            </div> */}
        </Slider>
      </div>
    );
  }
}