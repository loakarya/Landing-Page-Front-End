import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './HomeCarousel.css'; 

import Grid from '@material-ui/core/Grid'

export default class HomeCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };

    return (
      <div>
        <Slider {...settings}>
            
              <div className="home-carousel-container-content">
                <Grid container spacing={4}>
                  <Grid item xs={7}>
                    <div className="banner-left-container">
                      <img src="../../image/image-4.jpg" alt="Loakarya"/>
                    </div>
                  </Grid>

                  <Grid item xs={5}>
                    <div className="banner-right-container">
                      <h1>Loka</h1>
                      <h2>Smart Table</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in metus non tortor tristique dignissim congue at dui. Phasellus et lacus nunc. Praesent pretium sed nulla ut bibendum. </p>
                      <Link>
                        <button className="btn btn-secondary btn-secondary--active">Telusuri</button> 
                      </Link>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className="home-carousel-container-content">
                <Grid container spacing={4}>
                  <Grid item xs={7}>
                    <div className="banner-left-container">
                      <img src="../../image/image-3.jpg" alt="Loakarya"/>
                    </div>
                  </Grid>

                  <Grid item xs={5}>
                    <div className="banner-right-container">
                      <h1>Loka</h1>
                      <h2>Smart Table</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in metus non tortor tristique dignissim congue at dui. Phasellus et lacus nunc. Praesent pretium sed nulla ut bibendum. </p>
                      <Link>
                        <button className="btn btn-secondary btn-secondary--active">Telusuri</button> 
                      </Link>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className="home-carousel-container-content">
                <Grid container spacing={4}>
                  <Grid item xs={7}>
                    <div className="banner-left-container">
                      <img src="../../image/image-5.jpg" alt="Loakarya"/>
                    </div>
                  </Grid>

                  <Grid item xs={5}>
                    <div className="banner-right-container">
                      <h1>Loka</h1>
                      <h2>Smart Table</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in metus non tortor tristique dignissim congue at dui. Phasellus et lacus nunc. Praesent pretium sed nulla ut bibendum. </p>
                      <Link>
                        <button className="btn btn-secondary btn-secondary--active">Telusuri</button> 
                      </Link>
                    </div>
                  </Grid>
                </Grid>
              </div>
           
      
        </Slider>
      </div>
    );
  }
}