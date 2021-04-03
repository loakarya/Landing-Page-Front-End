import Head from "next/head";

import React from "react";
import Axios from "Axios";
import Link from "next/link";

import HeaderBar from "../components/HeaderBar/HeaderBar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HomeCarousel from "../components/Carousel/HomeCarousel";

import { Grid, Typography, Link as LinkText } from "@material-ui/core";

export default function Home(props) {
  return (
    <div id="main">
      <Head>
        <title>Loakarya Indonesia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          property="og:description"
          content="Produk furnitur ramah lingkungan dan layanan desain interior dengan konsep eco-living. Memenuhi kebutuhan anda dan juga melestarikan lingkungan."
        />
        <meta name="robots" content="index-follow" />
        <link rel="canonical" href="https://loakarya.co" />
        <meta
          property="og:title"
          content="Halaman Depan Situs Resmi Loakarya Indonesia"
        />
        <meta property="og:site_name" content="Loakarya Indonesia" />
        <meta
          property="og:image"
          content="https://resources.loakarya.co/loakarya-og-image.jpg"
        />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:url" content="https://loakarya.co" />
        <meta property="og:type" content="website" />
      </Head>
      <HeaderBar />
      <Header />
      {/* <Header isLoggedIn={isLoggedIn} /> */}
      <div id="content" className="overflow-x-hidden" style={{ paddingTop: 0 }}>
        <div className="home-carousel-container">
          <HomeCarousel />
        </div>
        <section>
          <h1 className="section-title">Nilai Kami</h1>
          <div className="box-container">
            <Grid container spacing={2} alignItems="stretch">
              <Grid item xs={12} sm={6} md={3} height="100%" className="mb-2">
                <div
                  className="box"
                  style={{
                    backgroundImage: `url("/images/value1.png")`,
                  }}
                >
                  {/* <img src="image/image-1.png" alt="" />  */}
                  <div className="box-title">Kolaborasi</div>
                  <div className="box-content">
                    Dalam tiap proses pembuatan produk kami berkolaborasi dengan
                    konsumen, agar tiap ideasi yang dihasilkan sesuai dengan
                    kebutuhan.
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={3} height="100%">
                <div
                  className="box"
                  style={{
                    backgroundImage: `url("/images/value2.png")`,
                  }}
                >
                  {/* <img src="image/image-1.png" alt="" />  */}
                  <div className="box-title">Lingkungan</div>
                  <div className="box-content">
                    Keberlanjutan lingkungan adalah fokus kami. Kami berupaya
                    mengurangi limbah dengan menggunakannya sebagai material
                    pada produk kami.
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={3} height="100%">
                <div
                  className="box"
                  style={{
                    backgroundImage: `url("/images/value3.png")`,
                  }}
                >
                  {/* <img src="image/image-1.png" alt="" />  */}
                  <div className="box-title">Koneksi</div>
                  <div className="box-content">
                    Kami menghubungkan tiap stakeholder dalam proses bisnis
                    kami; mulai dari pengepul sampai dengan pengrajin.
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={3} height="100%">
                <div
                  className="box"
                  style={{
                    backgroundImage: `url("/images/value4.png")`,
                  }}
                >
                  {/* <img src="image/image-1.png" alt="" />  */}
                  <div className="box-title">Pemberdayaan Sosial</div>
                  <div className="box-content">
                    Pengrajin daerah sekitar kami berdayakan sebagai langkah
                    turut meningkatkan kesejahteraan masyarakat.
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </section>
        <div className="section-container">
          <section>
            <h1 className="section-title">Artikel Terbaru</h1>
            <Grid container spacing={4} className="mb-4">
              {props.profileArticles.slice(0, 3).map((article) => (
                <Grid item key={article.id} xs={12} sm={6} md={3}>
                  <div>
                    <div
                      className="a-image"
                      style={{ backgroundImage: `url(${article.thumbnail})` }}
                    ></div>
                    <Link href={`articles/${article.slug}`} className="a-title">
                      {article.title}
                    </Link>
                    <div className="a-content">{article.content}</div>
                    <Link href={`articles/${article.slug}`} className="a-link">
                      Baca Artikel
                    </Link>
                  </div>
                </Grid>
              ))}
            </Grid>
            <div className="text--center mt-4">
              <Link href="/articles">
                <button className="btn btn-secondary btn-secondary--active">
                  Lihat Artikel Lain
                </button>
              </Link>
            </div>
          </section>
        </div>
        <section>
          <h1 className="section-title">Produk</h1>
          <div className="home-gallery-container">
            {props.profileProducts.slice(0, 5).map((product, index) => (
              <Link
                key={"product-" + index}
                href={`products/${product.productId}`}
                className=""
              >
                <div
                  className="home-gallery"
                  style={{ backgroundImage: `url(${product.thumbnail})` }}
                ></div>
              </Link>
            ))}
          </div>
        </section>
        <div className="section-container">
          <section className="home-portfolio">
            <h1 className="section-title">Portofolio</h1>
            <Grid container>
              <Grid item container spacing={3} justify="center">
                <Grid item container lg={4} md={6} sm={12} justify="center">
                  <img
                    src="https://resources.loakarya.co/portfolio/original/lobby/4-min.jpg"
                    alt=""
                  />
                </Grid>
                <Grid item container lg={4} md={6} sm={12} justify="center">
                  <img
                    src="https://resources.loakarya.co/portfolio/original/office/3-min.jpg"
                    alt=""
                  />
                </Grid>
                <Grid item container lg={4} md={6} sm={12} justify="center">
                  <img
                    src="https://resources.loakarya.co/portfolio/original/kenko/15-min.jpg"
                    alt=""
                  />
                </Grid>
                <Grid item container lg={4} md={6} sm={12} justify="center">
                  <img
                    src="https://resources.loakarya.co/portfolio/original/yanies-cake/3-min.jpg"
                    alt=""
                  />
                </Grid>
                <Grid item container lg={4} md={6} sm={12} justify="center">
                  <img
                    src="https://resources.loakarya.co/portfolio/original/japandi/4-min.jpg"
                    alt=""
                  />
                </Grid>
              </Grid>
              <Grid item container justify="flex-end">
                {/* <HashLink to="/services#portfolio"> */}
                <Typography>
                  <LinkText component="button" variant="body2">
                    Lihat Selengkapnya &rarr;
                  </LinkText>
                </Typography>
                {/* </HashLink> */}
              </Grid>
            </Grid>
          </section>
        </div>
        <article
          className="testimoni-section"
          style={{
            backgroundImage: `url("/images/testimoni.jpg")`,
          }}
        >
          <div className="black-opacity">
            <div className="w-80">
              <h1 className="section-title">Testimoni</h1>
              <div className="row slider-testimoni">
                <div className="testimoni column">
                  <div className="head-testimoni">
                    Sampah rumah ternyata bisa dipakai lagi, puas sekali saya
                    menggunakan layanan on demand Loakarya!
                  </div>
                  <div className="content-testimoni">
                    Loakarya membantu saya mengolah limbah menjadi produk baru.
                    Prosesnya mudah, pelayananya menarik, dan saya puas dengan
                    hasilnya.
                  </div>
                  <div className="source-testimoni">Hanifan, Mahasiswa</div>
                </div>
                <div className="testimoni column">
                  <div className="head-testimoni">
                    Mejanya benar-benar elegan dan minimalis.
                  </div>
                  <div className="content-testimoni">
                    Loakarya memberi warna baru dalam gaya hidup saya. Saya
                    tidak perlu bingung lagi jika ingin membeli furniture sambil
                    menjaga lingkungan.
                  </div>
                  <div className="source-testimoni">Ray, Freelancer</div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API

  let profileProducts, profileArticles;

  await Axios.get("/profile/products")
    .then((response) => {
      if (response.data.status) {
        let respProfileProducts = [];

        response.data.data.map((resp) =>
          respProfileProducts.push({
            productId: resp.product_id,
            thumbnail: resp.product.thumbnail_url,
          })
        );

        profileProducts = respProfileProducts;
      }
    })
    .catch(function (error) {
      console.log(error);
    });

  await Axios.get("/article").then((response) => {
    if (response.data.status) {
      let respArticles = [];

      response.data.data.map((resp) =>
        respArticles.push({
          id: resp.id,
          thumbnail:
            "https://dev.api.loakarya.co/storage/article/" + resp.thumbnail_url,
          title: resp.title,
          slug: resp.slug,
          content: resp.content,
        })
      );

      profileArticles = getContentString(respArticles);
    }
  });

  // Pass data to the page via props
  return { props: { profileProducts, profileArticles } };
}

function getContentString(data) {
  const allArticles = [...data];

  for (var i = 0; i < allArticles.length; i++) {
    allArticles[i].content = allArticles[i].content.replace(
      /<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g,
      " "
    );
  }

  return allArticles;
}
