import React, { useState, useEffect } from "react";
import Head from "next/head";

import HeaderBar from "../../components/HeaderBar/HeaderBar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductImage from "../../components/ProductImage/ProductImage";
import Loading from "../../components/Loading/Loading";

import Link from "next/link";
import Axios from "Axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [buttonClass, setButtonClass] = useState(
    "btn btn-secondary btn-secondary--active"
  );
  const [firstButtonClass, setFirstButtonClass] = useState("btn btn-secondary");
  const [secondButtonClass, setSecondButtonClass] = useState(
    "btn btn-secondary"
  );
  const [isLoading, setLoading] = useState(true);

  let loading = <div></div>;

  useEffect(() => {
    Axios.get("/product?data_per_page=9")
      .then((response) => {
        if (response.data.status) {
          let respProducts = [];

          response.data.data.data.map((resp) =>
            respProducts.push({
              id: resp.id,
              thumbnail: resp.thumbnail_url,
              category: resp.category,
              slug: resp.slug,
            })
          );

          setProducts(respProducts);
          setFilteredProducts(respProducts);
          // console.log(filteredProducts);
          setLoading(false);
        } else {
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (isLoading) {
    loading = <Loading />;
  }

  function showAllProduct() {
    setFilteredProducts(products);
    setButtonClass("btn btn-secondary btn-secondary--active");
    setFirstButtonClass("btn btn-secondary");
    setSecondButtonClass("btn btn-secondary");
  }

  function showAuthenticProduct() {
    setFilteredProducts(products.filter((e) => e.category === "0"));
    setFirstButtonClass("btn btn-secondary btn-secondary--active");
    setSecondButtonClass("btn btn-secondary");
    setButtonClass("btn btn-secondary");
  }

  function showOnDemandProduct() {
    setFilteredProducts(products.filter((e) => e.category === "1"));
    setSecondButtonClass("btn btn-secondary btn-secondary--active");
    setFirstButtonClass("btn btn-secondary");
    setButtonClass("btn btn-secondary");
  }

  return (
    <div id="main">
      <Head>
        <title>Produk | Loakarya Indonesia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          property="og:description"
          content="Ketahui berbagai produk dari Loakarya yang sesuai dengan keinginan anda. Beragam produk kami siap membantu kebutuhan anda."
        />
        <meta name="robots" content="index-follow" />
        <link rel="canonical" href="https://loakarya.co/products" />
        <meta property="og:title" content="Produk | Loakarya Indonesia" />
        <meta property="og:site_name" content="Loakarya Indonesia" />
        <meta
          property="og:image"
          content="https://resources.loakarya.co/loakarya-og-image.jpg"
        />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:url" content="https://loakarya.co/products" />
        <meta property="og:type" content="website" />
      </Head>
      <HeaderBar />
      <Header />
      <div id="content" className="width--large">
        <div className="text--center button-filter-wrapper">
          <button className={buttonClass} onClick={() => showAllProduct()}>
            All Product
          </button>
          <button
            className={firstButtonClass}
            onClick={() => showAuthenticProduct()}
          >
            Authentic Product
          </button>
          <button
            className={secondButtonClass}
            onClick={() => showOnDemandProduct()}
          >
            On Demand Product
          </button>
        </div>

        {loading}

        <div className="product-container">
          {filteredProducts &&
            filteredProducts.map((product) => (
              <Link href={`product/${product.id}`}>
                <ProductImage src={product.thumbnail} alt={product.id} />
              </Link>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
