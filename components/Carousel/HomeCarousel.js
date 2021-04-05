import React, { Component } from 'react';
import Link from 'next/link';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import "./HomeCarousel.css";

import Grid from '@material-ui/core/Grid';

export default class HomeCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    const sliders = [
      {
        id: 1,
        src: '/images/slider1.jpg',
        h1: 'Tentang',
        h2: 'Kami',
        p:
          'Kami mengingkatkan nilai barang bekas dengan metode upcycling dan recycling untuk mengedepankan konsep eco-living; kehidupan ramah lingkungan.',
        link1: '/about',
        textLink1: 'Telusuri',
      },
      {
        id: 2,
        src: '/images/slider2.jpg',
        h1: 'Produk',
        h2: 'dan Layanan',
        p:
          'Dari memadukan dan mencocokan material hingga memahami furnitur mana yang terbaik untuk berbagai tempat; menata ruang adalah seni.',
        link1: '/services',
        textLink1: 'Layanan',
        link2: '/products',
        textLink2: 'Produk',
      },
      {
        id: 3,
        src: '/images/slider3.jpg',
        h1: 'Hubungi',
        h2: 'Kami',
        p:
          'Apakah anda memiliki pertanyaan tentang produk, layanan, atau apa pun? Tim kami siap menjawab semua pertanyaan anda.',
        link1: '/contact',
        textLink1: 'Telusuri',
      },
    ];

    return (
      <div>
        <Slider {...settings}>
          {sliders.map((slider, index) => (
            <div key={index} className="home-carousel-container-content">
              <Grid container spacing={4}>
                <Grid item xs={12} sm={7}>
                  <div className="banner-left-container">
                    <img
                      src={slider.src}
                      alt={'Home carousel image ' + index + '.'}
                    />
                  </div>
                </Grid>

                <Grid item xs={12} sm={5}>
                  <div className="banner-right-container">
                    <h1>{slider.h1}</h1>
                    <h2>{slider.h2}</h2>
                    <p>{slider.p}</p>
                    <div className="banner-button-container">
                      {slider.link2 && (
                        <Link href={slider.link2}>
                          <button className="btn btn-secondary btn-secondary--active2 btn-can-hover-blue">
                            {slider.textLink2}
                          </button>
                        </Link>
                      )}
                      <Link href={slider.link1}>
                        <button className="btn btn-secondary btn-secondary--active btn-can-hover-green">
                          {slider.textLink1}
                        </button>
                      </Link>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          ))}
          {/* <Grid container spacing={4}>
                  <Grid item xs={12} sm={7} >
                    <div className="banner-left-container">
                      <img src="../../image/image-4.jpg" />
                    </div>
                  </Grid>

                  <Grid item xs={12} sm={5}>
                    <div className="banner-right-container">
                      <h1>Loka</h1>
                      <h2>Smart Table</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in metus non tortor tristique dignissim congue at dui. Phasellus et lacus nunc. Praesent pretium sed nulla ut bibendum. </p>
                      <div className="banner-button-container">
                        <Link>
                          <button className="btn btn-secondary btn-secondary--active">Telusuri</button> 
                        </Link>
                      </div>
                      
                    </div>
                  </Grid>
                </Grid> */}

          {/* <div className="home-carousel-container-content">
                <Grid container spacing={4}>
                  <Grid item xs={7}>
                    <div className="banner-left-container">
                      <img src="../../image/image-3.jpg" />
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
                      <img src="../../image/image-5.jpg" />
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
              </div> */}
        </Slider>
      </div>
    );
  }
}
