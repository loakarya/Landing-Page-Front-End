import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

import HeaderBar from '../components/HeaderBar/HeaderBar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProductCarousel from '../components/Carousel/ProductCarousel';


import Grid from '@material-ui/core/Grid';

export default function ProductDetail () {
    
    const { id } = useParams();
    //const [product, setProduct] = useState();
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

        axios.get(endpoint)
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
                controlPictures(p);
                getPriceBeforeDisc(p);
            }

            else {

            }
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [])

    function getPriceBeforeDisc (data) {
        const price = Number(data.price);
        const disc = Number(data.discount);
        const priceBefore = price + (price * disc/100);
        setPriceBeforeDisc(priceBefore);
    }

    function controlPictures (data) {
        let pictureArray = [];
        
        pictureArray = [
            data.thumbnail_url,
            data.picture_url_1,
            data.picture_url_2,
            data.picture_url_3,
            data.picture_url_4,
            data.picture_url_5
        ];

        setPicture(picture.push(pictureArray));
        console.log(pictureArray);
        console.log(picture);
    }

    let productCategory;
    if (category === "0") {
        productCategory = "Authentic Product";
    }
    else {
        productCategory = "On Demand Product";
    }

    return (
        <div id="main">
            <HeaderBar />
            <Header />
            <div id="content" class="width--large mb-4">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={5}>
                        <div className="carousel-container">
                            <ProductCarousel pictures={picture}/>
                        </div>
                        
                    </Grid>

                    <Grid item xs={12} sm={7}>
                        <p class="tag-category">{productCategory}</p>
                        <h1 class="product-name mb-10">{title}</h1>

                        <s class="product-price-before">Rp {priceBeforeDisc}</s> <span class="discount">(Diskon {discount}%)</span>
                        <p class="product-price ">Rp {price}</p>

                        <div class="detail">
                            <div class="detail__title">
                                Detail Produk
                            </div>
                            <div class="detail__content">
                                {detail}
                            </div>
                        </div>

                        <div class="detail">
                            <div class="detail__title">
                                Bahan Material
                            </div>
                            <div class="detail__content">
                                {material}
                            {/* <ul>
                                <li>Bahan 1</li>
                                <li>Bahan 2</li>
                                <li>Bahan 3</li>
                                <li>Bahan 4</li>
                            </ul> */}
                            </div>
                        </div>

                        <p class="marketplace-link">
                            Produk ini juga tersedia di <a href={shopee} target="_blank">Shopee, </a><a href={tokopedia} target="_blank">Tokopedia</a> dan <a href={bukalapak} target="_blank">Bukalapak</a>
                        </p>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </div>
    );
}