import React from 'react';

import HeaderBar from '../components/HeaderBar/HeaderBar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProductImage from '../components/ProductImage/ProductImage';

export default function Products () {
    return (
        <div id="main"> 
            <HeaderBar />
            <Header />
            <div id="content" className="width--large">
                <div className="text--center">
                    <button className="btn btn-secondary btn-secondary--active">Authentic Product</button>
                    <button className="btn btn-secondary">On Demand Product</button>
                </div>

                <div className="product-container">
                    <ProductImage 
                        src="https://picsum.photos/200/300?random=1"
                        alt="Product 1"
                    />
                    <ProductImage 
                        src="https://picsum.photos/200/300?random=2"
                        alt="Product 1"
                    />
                    <ProductImage 
                        src="https://picsum.photos/200/300?random=3"
                        alt="Product 1"
                    />
                    <ProductImage 
                        src="https://picsum.photos/200/300?random=4"
                        alt="Product 1"
                    />
                   
                </div>
            </div>
            <Footer />
        </div>
    )
}