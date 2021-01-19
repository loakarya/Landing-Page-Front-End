import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import HeaderBar from '../components/HeaderBar/HeaderBar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HomeCarousel from '../components/Carousel/HomeCarousel';
import Loading from '../components/Loading/Loading';

import Grid from '@material-ui/core/Grid';

//import { useCookies } from 'react-cookie';

export default function Home () { 
    // const [isLoggedIn, setLoggedIn] = useState(false);
    // const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [profileProducts, setProfileProducts] = useState([]);
    const [profileArticles, setProfileArticles] = useState([]);
    const [isLoading, setLoading] = useState(true);
    let loading = <div></div>;
    
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
        const endpoint1 = 'profile/products';
        const endpoint2 = 'article';

        const req1 = axios.get(endpoint1);
        const req2 = axios.get(endpoint2);

        req1.then((response) => {
            // if (response.status === 200) {
            if (response.data.status) {
                let respProfileProducts = [];
                
                response.data.data.map(resp => {
                    respProfileProducts.push({
                        productId: resp.product_id,
                        thumbnail: resp.product.thumbnail_url
                    });
                });

                setProfileProducts(respProfileProducts);
            }

            else {

            }
        })
        req1.catch(function (error) {
            console.log(error);
        })

        req2.then((response) => {
            if (response.status === 200) {
                if (response.data.status) {
                    let respArticles = [];
                
                    response.data.data.map(resp => {
                        respArticles.push({
                            id: resp.id,
                            thumbnail: 'https://dev.api.loakarya.co/storage/article/' + resp.thumbnail_url,
                            title: resp.title,
                            slug: resp.slug,
                            content: resp.content
                        });
                    });
                    
                    setProfileArticles(respArticles);
                    getContentString(respArticles);
                    setLoading(false);
                }
            }
        })
    }, [])

    function getContentString (data) {
        const allArticles = [...data];

        for (var i=0; i < allArticles.length ; i++) {
            allArticles[i].content = allArticles[i].content.replace(/<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g, ' ');
        }

        setProfileArticles(allArticles);
    }

    if(isLoading) return (
        <Loading />
    );

    return (
        <div id="main">
            <HeaderBar 
                 
            />
            <Header />
            {/* <Header isLoggedIn={isLoggedIn} /> */}
            <div id="content" className="overflow-x-hidden" style={{ paddingTop: 0 }}>
                <div className="home-carousel-container">
                    <HomeCarousel />
                </div>

                <section>
                    <h1 class="section-title">Produk</h1>
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

                <article class="testimoni-section"  style={{backgroundImage: `url(${require("../image/testimoni.png")})`}}>
                    <div class="black-opacity">
                        <div class="w-80">
                            <h1 class="section-title">Testimoni</h1>

                            <div class="row slider-testimoni">
                                <div class="testimoni column">
                                    <div class="head-testimoni">
                                        Sampah rumah ternyata bisa dipakai lagi, puas sekali saya menggunakan layanan on demand Loakarya!
                                    </div>
                                    <div class="content-testimoni">
                                        Loakarya membantu saya mengolah limbah menjadi produk baru. Prosesnya mudah, pelayananya menarik, dan saya puas dengan hasilnya. 
                                    </div>
                                    <div class="source-testimoni">
                                        Hanifan, Mahasiswa
                                    </div>
                                </div>
                                <div class="testimoni column">
                                    <div class="head-testimoni">
                                        Mejanya benar-benar elegan dan minimalis.
                                    </div>
                                    <div class="content-testimoni">
                                        Loakarya memberi warna baru dalam gaya hidup saya. Saya tidak perlu bingung lagi jika ingin membeli furniture sambil menjaga lingkungan.  
                                    </div>
                                    <div class="source-testimoni">
                                        Ray, Freelancer
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </article>

                <section>
                    <h1 class="section-title">Nilai Kami</h1>

                    <div class="box-container">
                        <Grid 
                            container 
                            spacing={2} 
                            alignItems="stretch"
                            >
                            <Grid item xs={12} sm={6} md={3} height="100%" mb-2>
                                <div class="box" style={{backgroundImage: `url(${require("../image/value1.png")})`}}>
                                    {/* <img src="image/image-1.png" alt="" />  */}
                                    <div class="box-title">Kolaborasi</div>
                                    <div class="box-content">
                                        Dalam tiap proses pembuatan produk kami berkolaborasi dengan konsumen, agar tiap ideasi yang dihasilkan sesuai dengan kebutuhan. 
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} height="100%">
                                <div class="box" style={{backgroundImage: `url(${require("../image/value2.png")})`}}>
                                    {/* <img src="image/image-1.png" alt="" />  */}
                                    <div class="box-title">Lingkungan</div>
                                    <div class="box-content">
                                        Keberlanjutan lingkungan adalah fokus kami. Kami berupaya mengurangi limbah dengan menggunakannya sebagai material pada produk kami.
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} height="100%">
                                <div class="box" style={{backgroundImage: `url(${require("../image/value3.png")})`}}>
                                    {/* <img src="image/image-1.png" alt="" />  */}
                                    <div class="box-title">Koneksi</div>
                                    <div class="box-content">
                                        Kami menghubungkan tiap stakeholder dalam proses bisnis kami; mulai dari pengepul sampai dengan pengrajin. 
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} height="100%">
                                <div class="box" style={{backgroundImage: `url(${require("../image/value4.png")})`}}>
                                    {/* <img src="image/image-1.png" alt="" />  */}
                                    <div class="box-title">Pemberdayaan Sosial</div>
                                    <div class="box-content">
                                        Pengrajin daerah sekitar kami berdayakan sebagai langkah turut meningkatkan kesejahteraan masyarakat. 
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </section>

                <section>
                    <h1 class="section-title">Artikel Terbaru</h1>
                    <Grid container spacing={4} className="mb-4">
                        {profileArticles.slice(0, 3).map((article) => 
                            <Grid item xs={12} sm={6} md={3}>
                                <div>
                                    <div className="a-image" style={{ backgroundImage: `url(${article.thumbnail})` }}>
                                    </div>
                                    <Link to={`articles/${article.slug}`} className="a-title">{article.title}</Link>
                                    <div className="a-content">{article.content}</div>
                                    <Link to={`articles/${article.slug}`} className="a-link">Baca Artikel</Link>
                                </div>
                            </Grid>
                        )}

                    </Grid>

                    <div className="text--center mt-4">
                        <Link to="/articles">
                            <button className="btn btn-secondary btn-secondary--active">Lihat Artikel Lain</button> 
                        </Link>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
