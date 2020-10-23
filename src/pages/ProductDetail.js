import React from 'react';

import HeaderBar from '../components/HeaderBar/HeaderBar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProductCarousel from '../components/Carousel/ProductCarousel';


import Grid from '@material-ui/core/Grid';

export default function ProductDetail () {
    return (
        <div id="main">
            <HeaderBar />
            <Header />
            <div id="content" class="width--large mb-4">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={5}>
                        {/* <div class="product-carousel">
                            <div class="slider-btn prev-btn">
                                <img src="../image/prev-carousel.png" alt="" />
                            </div>
                            
                            <div class="slider-btn next-btn">
                                <img src="../image/next-carousel.png" alt="" />
                            </div>
                            
                            <div class="product-carousel__container">
                                <img src="../image/image-2.png" alt="" />
                            </div>
                        </div> */}
                        <div className="carousel-container">
                            <ProductCarousel/>
                        </div>
                        
                    </Grid>

                    <Grid item xs={12} sm={7}>
                        <p class="tag-category">Authentic Product</p>
                        <h1 class="product-name mb-10">Loka Smart Table</h1>

                        <s class="product-price-before">Rp 4.200.000</s> <span class="discount">(Diskon 15%)</span>
                        <p class="product-price ">Rp 4.200.000</p>

                        <div class="detail">
                            <div class="detail__title">
                                Detail Produk
                            </div>
                            <div class="detail__content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            </div>
                        </div>

                        <div class="detail">
                            <div class="detail__title">
                                Bahan Material
                            </div>
                            <div class="detail__content">
                            <ul>
                                <li>Bahan 1</li>
                                <li>Bahan 2</li>
                                <li>Bahan 3</li>
                                <li>Bahan 4</li>
                            </ul>
                            </div>
                        </div>

                        <p class="marketplace-link">Produk ini juga tersedia di <a href="">Shopee,</a> <a href="">Tokopedia</a> dan <a href="">Bukalapak</a></p>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </div>
    );
}