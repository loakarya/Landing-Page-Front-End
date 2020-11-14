import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import HeaderBar from '../components/HeaderBar/HeaderBar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HomeCarousel from '../components/Carousel/HomeCarousel';

import Grid from '@material-ui/core/Grid';

//import { useCookies } from 'react-cookie';

export default function Home () { 
    // const [isLoggedIn, setLoggedIn] = useState(false);
    // const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [profileProducts, setProfileProducts] = useState([]);
    
    // useEffect(() => {
    //    if(cookies.token) {
    //        setLoggedIn(true);
    //    }
    //    else {
    //        setLoggedIn(false);
    //    }
    // }, [])

    // console.log(cookies.token);

    useEffect(() => {
        const endpoint = 'profile/products';

        axios.get(endpoint)
        .then((response) => {
            //console.log(response);
            // if (response.status === 200) {
            if (response.data.status) {
                console.log(response.data.data);
                let respProfileProducts = [];
                
                response.data.data.map(resp => {
                    respProfileProducts.push({
                        productId: resp.id,
                        thumbnail: resp.product.thumbnail_url
                    });
                });

                setProfileProducts(respProfileProducts);
            }

            else {

            }
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [])

    const imgUrl = [
        'https://picsum.photos/400/300?random=1',
        'https://picsum.photos/400/300?random=2',
        'https://picsum.photos/400/300?random=3',
        'https://picsum.photos/400/300?random=4',
        'https://picsum.photos/400/300?random=5',
    ];
    console.log(profileProducts);

    return (
        <div id="main">
            <HeaderBar 
                 
            />
            <Header />
            {/* <Header isLoggedIn={isLoggedIn} /> */}
            <div id="content" className="" style={{ paddingTop: 0 }}>
                <div className="home-carousel-container">
                    <HomeCarousel />
                </div>

                <section>
                    <h1 class="section-title">Produk Unggulan</h1>
                    <div class="home-gallery-container">
                        
                        {profileProducts.slice(0, 5).map((product) => 
                            <Link to={`products/${product.productId}`} class="">
                                <div class="home-gallery" 
                                    style={{backgroundImage: `url(${product.thumbnail})`}}
                                    > 
                                </div>
                            </Link>
                        )}

                    </div>
                </section>

                <article class="testimoni-section"  style={{backgroundImage: `url(${require("../image/image-1.png")})`}}>
                    <div class="black-opacity">
                        <div class="w-80">
                            <h1 class="section-title">Testimoni</h1>

                            <div class="row slider-testimoni">
                                <div class="testimoni column">
                                    <div class="head-testimoni">
                                        Sampah rumah ternyata bisa dipakai lagi, puas sekali saya menggunakan layanan on demand Loak.co!
                                    </div>
                                    <div class="content-testimoni">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    </div>
                                    <div class="source-testimoni">
                                        Rani, Ibu Rumah Tangga
                                    </div>
                                </div>
                                <div class="testimoni column">
                                    <div class="head-testimoni">
                                        Mejanya benar-benar elegan dan minimalis.
                                    </div>
                                    <div class="content-testimoni">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                                    </div>
                                    <div class="source-testimoni">
                                        Rani, Ibu Rumah Tangga
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </article>

                <section>
                    <h1 class="section-title">Nilai Kami</h1>

                    <div class="box-container">
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={3}>
                                <div class="box">
                                    <img src="image/image-1.png" alt="" /> 
                                    <div class="box-title">Waste</div>
                                    <div class="box-content">
                                        Permasalahan pelik yang global, Loak hadir bersungguh-sungguh menjadi solusi untuk hal tersebut. 
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <div class="box">
                                    <img src="image/image-1.png" alt="" /> 
                                    <div class="box-title">Waste</div>
                                    <div class="box-content">
                                        Permasalahan pelik yang global, Loak hadir bersungguh-sungguh menjadi solusi untuk hal tersebut. 
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <div class="box">
                                    <img src="image/image-1.png" alt="" /> 
                                    <div class="box-title">Waste</div>
                                    <div class="box-content">
                                        Permasalahan pelik yang global, Loak hadir bersungguh-sungguh menjadi solusi untuk hal tersebut. 
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <div class="box">
                                    <img src="image/image-1.png" alt="" /> 
                                    <div class="box-title">Waste</div>
                                    <div class="box-content">
                                        Permasalahan pelik yang global, Loak hadir bersungguh-sungguh menjadi solusi untuk hal tersebut. 
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
