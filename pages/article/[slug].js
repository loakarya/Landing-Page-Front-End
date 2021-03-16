import React, { useState, useEffect } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import Head from "next/head";

import Axios from "Axios";

export default function ArticlesDetail(props) {
  const [tanggal, setTanggal] = useState();
  const [bulan, setBulan] = useState();
  const [tahun, setTahun] = useState();
  const [jam, setJam] = useState();
  const [menit, setMenit] = useState();

  useEffect(() => {
    getTimeStamp(props.article.updated_at);
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>{props.article.title} | Loakarya Indonesia</title>

        <link rel="icon" href="/favicon.ico" type="image/ico" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/favicon.ico" />

        <meta name="description" content={props.article.subtitle} />

        <meta
          property="og:title"
          content={`${props.article.title} | Loakarya Indonesia`}
        />
        <meta property="og:description" content={props.article.subtitle} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://loakarya.co/article/${props.article.slug}`}
        />
        <meta
          property="og:image"
          content={`https://dev.api.loakarya.co/storage/article/${props.article.thumbnail_url}`}
        />
      </Head>
      <div id="main">
        <Header />
        <div id="content" className="account-container width--large">
          <article className="article">
            <h1 className="article__title">{props.article.title}</h1>
            <h3 className="article__subtitle">{props.article.subtitle}</h3>

            <p className="article__author">by Admin</p>
            {/* <p className="article__date">{article.updated_at}</p> */}
            <p className="article__date">
              {tanggal} {bulan} {tahun} | {jam}:{menit} WIB
            </p>

            <div
              className="article__content"
              dangerouslySetInnerHTML={{ __html: `${props.article.content}` }}
            />
          </article>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );

  function getTimeStamp(time) {
    var str_time,
      str_date,
      getDate,
      str_tahun,
      str_bulan,
      str_tanggal,
      str_jam,
      str_menit;
    var bulanIndo = [
      "",
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    getDate = time.split("T");
    str_date = getDate[0];
    str_tahun = str_date.split("-")[0];
    str_bulan = bulanIndo[Math.abs(str_date.split("-")[1])];
    str_tanggal = str_date.split("-")[2];

    setTahun(str_tahun);
    setBulan(str_bulan);
    setTanggal(str_tanggal);

    str_time = getDate[1].split(".");
    str_jam = str_time[0].split(":")[0];
    str_menit = str_time[0].split(":")[1];

    setJam(str_jam);
    setMenit(str_menit);
  }
}

export async function getServerSideProps(context) {
  let article, timestamp;

  await Axios.get(`/article/${context.params.slug}`).then((response) => {
    if (response.data.status) {
      article = response.data.data;
      timestamp = response.data.data.updated_at;
    }
  });

  return { props: { article, timestamp } };
}
