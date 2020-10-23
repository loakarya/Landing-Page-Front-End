import React, { useEffect, useState } from 'react';
import HeaderBar from '../components/HeaderBar/HeaderBar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HomeCarousel from '../components/Carousel/HomeCarousel';

import { useCookies } from 'react-cookie';

export default function Home () { 
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    
    useEffect(() => {
       if(cookies.token) {
           setLoggedIn(true);
       }
       else {
           setLoggedIn(false);
       }
    }, [])

    console.log(cookies.token);

    const imgUrl = [
        'https://picsum.photos/400/300?random=1',
        'https://picsum.photos/400/300?random=2',
        'https://picsum.photos/400/300?random=3',
        'https://picsum.photos/400/300?random=4',
        'https://picsum.photos/400/300?random=5',
    ];
    console.log(imgUrl);
    return (
        <div id="main">
            <HeaderBar 
                 
            />
            <Header isLoggedIn={isLoggedIn} />
            <div id="content" className="" style={{ paddingTop: 0 }}>
                {/* { isLoggedIn ? 'Logged In' : 'Logged Out' } */}
                <div className="home-carousel-container">
                    <HomeCarousel />
                </div>

                <section>
                    <h1 class="section-title">Produk Unggulan</h1>
                    <div class="home-gallery-container">
                        
                        {imgUrl.map((imgUrl) => 
                            <a href="" class="">
                                <div class="home-gallery" 
                                    style={{backgroundImage: `url(${imgUrl})`}}
                                    > 
                                </div>
                            </a>
                        )}

                    </div>
                </section>

                <article class="testimoni-section"  style={{backgroundImage: `url(${require("../image/image-1.png")})`}}>
                    <div class="black-opacity">
                        <div class="w-80">
                            <h1 class="section-title">Testimoni</h1>

                            <div class="row slider-testimoni">
                                <div class="testimoni mr-15 column">
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
                                <div class="testimoni ml-15 column">
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

                    <div class="box-container grid">
                        <div class="box grid-3">
                            <img src="image/image-1.png" alt="" /> 
                            <div class="box-title">Waste</div>
                            <div class="box-content">
                                Permasalahan pelik yang global, Loak hadir bersungguh-sungguh menjadi solusi untuk hal tersebut. 
                            </div>
                        </div>
                        <div class="box grid-3">
                            <img src="image/image-1.png" alt="" />
                            <div class="box-title">Waste</div>
                            <div class="box-content">
                                Permasalahan pelik yang global, Loak hadir bersungguh-sungguh menjadi solusi untuk hal tersebut. 
                            </div>
                        </div>
                        <div class="box grid-3">
                            <img src="image/image-1.png" alt="" />
                            <div class="box-title">Waste</div>
                            <div class="box-content">
                                Permasalahan pelik yang global, Loak hadir bersungguh-sungguh menjadi solusi untuk hal tersebut. 
                            </div>
                        </div>
                        <div class="box grid-3">
                            <img src="image/image-1.png" alt="" />
                            <div class="box-title">Hi-Quality 
                                Upcycled Product</div>
                            <div class="box-content">
                                Permasalahan pelik yang global, Loak hadir bersungguh-sungguh menjadi solusi untuk hal tersebut. 
                            </div>
                        </div>
                        
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
