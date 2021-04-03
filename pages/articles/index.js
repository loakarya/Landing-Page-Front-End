import React, { useState, useEffect } from "react";
import Head from "next/head";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";

import Axios from "Axios";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get("/article")
      .then((response) => {
        let respArticles = [];

        response.data.data.map((resp) =>
          respArticles.push({
            id: resp.id,
            thumbnail:
              "https://dev.api.loakarya.co/storage/article/" +
              resp.thumbnail_url,
            title: resp.title,
            slug: resp.slug,
            content: resp.content,
          })
        );

        setArticles(respArticles);
        getContentString(respArticles);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function getContentString(data) {
    const allArticles = [...data];

    for (var i = 0; i < allArticles.length; i++) {
      allArticles[i].content = allArticles[i].content.replace(
        /<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g,
        " "
      );
    }

    setArticles(allArticles);
  }

  let loading = <div></div>;

  if (isLoading) {
    loading = <Loading />;
  }

  return (
    <div id="main">
      <Head>
        <title>Artikel | Loakarya Indonesia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          property="og:description"
          content="Lihat berbagai artikel yang menambah pengetahuanmu seputar eco-living, eco-lifestyle, dan berbagai informasi menarik mengenai produk serta layanan kami."
        />
        <meta name="robots" content="index-follow" />
        <link rel="canonical" href="https://loakarya.co/articles" />
        <meta property="og:title" content="Artikel | Loakarya Indonesia" />
        <meta property="og:site_name" content="Loakarya Indonesia" />
        <meta
          property="og:image"
          content="https://resources.loakarya.co/loakarya-og-image.jpg"
        />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:url" content="https://loakarya.co/articles" />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <div id="content" className="width--large">
        {loading}

        <h1 className="font-color-primary mb-4">Mengenal Lingkunganmu</h1>
        <Grid container spacing={4}>
          {articles.map((article) => (
            <Grid item xs={12} sm={6} md={3}>
              <div>
                <div
                  className="a-image"
                  style={{ backgroundImage: `url(${article.thumbnail})` }}
                ></div>
                <Link href={`article/${article.slug}`} className="a-title">
                  {article.title}
                </Link>
                <div className="a-content">{article.content}</div>
                <Link href={`article/${article.slug}`} className="a-link">
                  Baca Artikel
                </Link>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
