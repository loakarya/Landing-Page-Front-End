import React, { useState, useEffect } from 'react';
import { useParams, Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import HeaderBar from '../components/HeaderBar/HeaderBar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProductCarousel from '../components/Carousel/ProductCarousel';
import Loading from '../components/Loading/Loading';

import Grid from '@material-ui/core/Grid';
import NumberFormat from 'react-number-format';

export default function ProductDetail() {
  const { id } = useParams();
  const [isRedirect, setRedirect] = useState(false);
  //const [product, setProduct] = useState();
  const [isLoading, setLoading] = useState(true);
  const [category, setCategory] = useState();
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [discount, setDiscount] = useState();
  const [priceBeforeDisc, setPriceBeforeDisc] = useState();
  const [detail, setDetail] = useState();
  const [material, setMaterial] = useState();
  const [shopee, setShopee] = useState();
  const [tokopedia, setTokopedia] = useState();
  const [bukalapak, setBukalapak] = useState();
  const [picture, setPicture] = useState([]);
  const [filteredPicture, setFilteredPicture] = useState([]);
  // const [product, setProduct] = useState([
  //     category: "",
  //     title: "",
  //     price: "",
  //     discount: "",
  //     price_before_disc: "",
  //     detail: "",
  //     material: "",
  //     shopee_order_link: "",
  //     tokopedia_order_link: "",
  //     bukalapak_order_link: "",
  //     picture : [],
  //     isDeleted: null
  // ]);

  useEffect(() => {
    const endpoint = '/product/' + id;

    axios
      .get(endpoint)
      .then((response) => {
        // if (response.status === 200) {
        if (response.data.status) {
          let p = response.data.data;
          console.log(p);
          setCategory(p.category);
          setTitle(p.title);
          setPrice(p.price);
          setDiscount(p.discount);
          setDetail(p.detail);
          setMaterial(p.material);
          setShopee(p.shopee_order_link);
          setTokopedia(p.tokopedia_order_link);
          setBukalapak(p.bukalapak_order_link);
          getPriceBeforeDisc(p);
          let pictureArray = [];

          pictureArray = [
            p.thumbnail_url,
            p.picture_url_1,
            p.picture_url_2,
            p.picture_url_3,
            p.picture_url_4,
            p.picture_url_5,
          ];

          console.log(pictureArray);

          // pictureArray.map((data, i) => {
          //     if(data !== null){
          //         picture.push({
          //             id: i,
          //             src: data
          //         });
          //     }
          // });

          let pictBuff = [];

          pictureArray.map((data, i) => {
            if (data !== null) {
              pictBuff.push({
                id: i,
                src: data,
              });
            }
          });

          setPicture(pictBuff);
          setLoading(false);
        } else {
          setRedirect(true);
          setLoading(false);
        }
      })
      .catch(function (error) {});
  }, []);

  function getPriceBeforeDisc(data) {
    const price = Number(data.price);
    const disc = Number(data.discount);
    const priceBefore = price + (price * disc) / 100;
    setPriceBeforeDisc(priceBefore);
  }

  let productCategory;
  if (category === '0') {
    productCategory = 'Authentic Product';
  } else {
    productCategory = 'On Demand Product';
  }

  if (isLoading) return <Loading />;

  if (isRedirect) return <Redirect to="/" />;

  return (
    <div id="main">
      <HeaderBar />
      <Header />
      <div id="content" class="width--large mb-4">
        <Grid container spacing={4} className="detail-grid-container">
          <Grid item xs={12} sm={12} md={5}>
            <div className="carousel-container">
              {/* {
                                picture.map((item) => 
                                    <ProductCarousel src={item.src}
                                        id={item.id}
                                    />
                                ) 
                            } */}
              <ProductCarousel pictures={picture} />
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={7}>
            <p class="tag-category">{productCategory}</p>
            <h1 class="product-name mb-10">{title}</h1>
            <s class="product-price-before">
              <NumberFormat
                displayType={'text'}
                thousandSeparator={true}
                prefix={'Rp '}
                value={priceBeforeDisc}
              />
            </s>{' '}
            <span class="discount">(Diskon {discount}%)</span>
            <p class="product-price ">
              <NumberFormat
                displayType={'text'}
                thousandSeparator={true}
                prefix={'Rp '}
                value={price}
              />
            </p>
            <div class="detail">
              <div class="detail__title">Detail Produk</div>
              <div class="detail__content">{detail}</div>
            </div>
            <div class="detail">
              <div class="detail__title">Bahan Material</div>
              <div class="detail__content">{material}</div>
            </div>
            <a
              target="blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSe9N7FTD9w9KamQm-Q90ZR1vBSox6A8RvH95irLOlpicDswAg/viewform"
            >
              <button className="btn btn-secondary btn-secondary--active">
                Pesan Sekarang
              </button>
            </a>
            <p class="marketplace-link">
              Produk ini juga tersedia di{' '}
              <a href={shopee} target="_blank">
                Shopee,{' '}
              </a>
              <a href={tokopedia} target="_blank">
                Tokopedia
              </a>{' '}
              dan{' '}
              <a href={bukalapak} target="_blank">
                Bukalapak
              </a>
            </p>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
