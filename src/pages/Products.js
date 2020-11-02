import React, { useState, useEffect } from 'react';

import HeaderBar from '../components/HeaderBar/HeaderBar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProductImage from '../components/ProductImage/ProductImage';

import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Products () {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [buttonClass, setButtonClass] = useState('btn btn-secondary btn-secondary--active');
    const [firstButtonClass, setFirstButtonClass] = useState('btn btn-secondary');
    const [secondButtonClass, setSecondButtonClass] = useState('btn btn-secondary');

    useEffect(() => {
        const endpoint = '/product?data_per_page=9';

        axios.get(endpoint)
        .then((response) => {
            console.log(response.data.data.data);
            // if (response.status === 200) {
            if (response.data.status) {
                let respProducts = [];
                
                response.data.data.data.map(resp => {
                    respProducts.push({
                        id: resp.id,
                        thumbnail: resp.thumbnail_url,
                        category: resp.category,
                        slug: resp.slug
                    });
                });

                setProducts(respProducts);
                setFilteredProducts(respProducts);
                console.log(filteredProducts);
                //console.log(products, [products]);
            }
            else {
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [])

    function showAllProduct () {
        setFilteredProducts(products);
        setButtonClass("btn btn-secondary btn-secondary--active");
        setFirstButtonClass("btn btn-secondary");
        setSecondButtonClass("btn btn-secondary");
    }

    function showAuthenticProduct () {
        setFilteredProducts(products.filter(e => e.category === "0"));
        setFirstButtonClass("btn btn-secondary btn-secondary--active");
        setSecondButtonClass("btn btn-secondary");
        setButtonClass("btn btn-secondary");
    }

    function showOnDemandProduct () {
        setFilteredProducts(products.filter(e => e.category === "1"));
        setSecondButtonClass("btn btn-secondary btn-secondary--active");
        setFirstButtonClass("btn btn-secondary");
        setButtonClass("btn btn-secondary");
    }

    return (
        <div id="main"> 
            <HeaderBar />
            <Header />
            <div id="content" className="width--large">
                <div className="text--center">
                    <button className={buttonClass} onClick={() => showAllProduct()}>All Product</button>
                    <button className={firstButtonClass} onClick={() => showAuthenticProduct()}>Authentic Product</button>
                    <button className={secondButtonClass} onClick={() => showOnDemandProduct()}>On Demand Product</button>
                </div>

                <div className="product-container">
                    {
                        products && filteredProducts.map((product) => (
                            <div>
                            <Link to="/products/${{product.id}}">
                                <ProductImage 
                                    src={product.thumbnail}
                                    alt={product.id}
                                />
                            </Link>
                            </div>
                            
                        ))
                    }
                   
                </div>
            </div>
            <Footer />
        </div>
    )
}