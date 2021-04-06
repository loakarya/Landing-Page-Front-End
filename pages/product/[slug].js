import React, { useEffect, useState } from 'react';
import Axios from 'Axios';

import HeaderBar from '../../components/HeaderBar/HeaderBar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductCarousel from '../../components/Carousel/ProductCarousel';

import Head from 'next/head';

import Grid from '@material-ui/core/Grid';
import NumberFormat from 'react-number-format';

export default function ProductDetail(props) {
  const [priceBeforeDisc, setPriceBeforeDisc] = useState();

  useEffect(() => {
    // console.table(props.product);
    getPriceBeforeDisc();
  }, []);

  const getPriceBeforeDisc = () => {
    const price = Number(props.product.price);
    const disc = Number(props.product.discount);
    const priceBefore = price + (price * disc) / 100;
    setPriceBeforeDisc(priceBefore);
  };

  const productCategory = (index) => {
    switch (parseInt(index)) {
      case 0:
        return 'Authentic Product';
      case 1:
        return 'On Demand Product';
    }
  };

  return (
    <React.Fragment>
      <Head>
        <title>Jual Produk {props.product.title} | Loakarya Indonesia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          property="og:description"
          content={props.product.trimmed_detail}
        />
        <meta name="robots" content="index-follow" />
        <link
          rel="canonical"
          href={`https://loakarya.co/product/${props.product.id}`}
        />
        <meta
          property="og:title"
          content={`Jual Produk ${props.product.title} | Loakarya Indonesia`}
        />
        <meta property="og:site_name" content="Loakarya Indonesia" />
        <meta property="og:image" content={props.product.thumbnail_url} />
        <meta
          property="og:url"
          content={`https://loakarya.co/product/${props.product.id}`}
        />
        <meta property="og:type" content="product" />
      </Head>

      <div id="main">
        <HeaderBar />
        <Header />
        <div id="content" className="width--large mb-4">
          <Grid container spacing={4} className="detail-grid-container">
            <Grid item xs={12} sm={12} md={5}>
              <div className="carousel-container">
                <ProductCarousel pictures={props.pictures} />
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={7}>
              <p className="tag-category">
                {productCategory(props.product.category)}
              </p>
              <h1 className="product-name mb-10">{props.product.title}</h1>
              <s className="product-price-before">
                <NumberFormat
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'Rp '}
                  value={priceBeforeDisc}
                />
              </s>
              <span className="discount">
                (Diskon {props.product.discount}%)
              </span>
              <p className="product-price ">
                <NumberFormat
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'Rp '}
                  value={props.product.price}
                />
              </p>
              <div className="detail">
                <div className="detail__title">Detail Produk</div>
                <div className="detail__content">{props.product.detail}</div>
              </div>
              <div className="detail">
                <div className="detail__title">Bahan Material</div>
                <div className="detail__content">{props.product.material}</div>
              </div>
              <a
                target="blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSe9N7FTD9w9KamQm-Q90ZR1vBSox6A8RvH95irLOlpicDswAg/viewform"
              >
                <button className="btn btn-secondary btn-secondary--active btn-can-hover-green">
                  Pesan Sekarang
                </button>
              </a>
              <p className="marketplace-link">
                Produk ini juga tersedia di{' '}
                <a
                  href={props.product.shopee_order_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shopee,{' '}
                </a>
                <a
                  href={props.product.tokopedia_order_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tokopedia
                </a>{' '}
                dan{' '}
                <a
                  href={props.product.bukalapak_order_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bukalapak
                </a>
              </p>
            </Grid>
          </Grid>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  let product = {};
  let pictures = [];

  await Axios.get(`/product/${context.params.slug}`).then((response) => {
    if (response.data.status) {
      product = response.data.data;

      if (product.detail.length > 55)
        product.trimmed_detail = product.detail.substring(0, 167) + '...';

      pictures = [
        product.thumbnail_url,
        product.picture_url_1,
        product.picture_url_2,
        product.picture_url_3,
        product.picture_url_4,
        product.picture_url_5,
      ];

      let pictBuff = [];

      pictures.map((data, i) => {
        if (data !== null) {
          return pictBuff.push({
            id: i,
            src: data,
          });
        }
        return null;
      });

      pictures = pictBuff;
    }
  });

  return { props: { product, pictures } };
}
