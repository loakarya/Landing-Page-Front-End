import React from "react";
import Head from "next/head";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Contact() {
  return (
    <div id="main">
      <Head>
        <title>Hubungi Kami | Loakarya Indonesia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          property="og:description"
          content="Hubungi kami untuk mengetahui lebih banyak terkait produk dan layanan yang kami miliki. Kami siap melayani dan membantu anda sepenuh hati."
        />
        <meta name="robots" content="index-follow" />
        <link rel="canonical" href="https://loakarya.co/contact" />
        <meta property="og:title" content="Hubungi Kami | Loakarya Indonesia" />
        <meta property="og:site_name" content="Loakarya Indonesia" />
        <meta
          property="og:image"
          content="https://resources.loakarya.co/loakarya-og-image.jpg"
        />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:url" content="https://loakarya.co/contact" />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <div
        id="content"
        className="account-container text--center  width--large"
      >
        <h1 className="font-color-primary mb-4">
          Tetaplah terhubung bersama kami
        </h1>
        <a href="https://api.whatsapp.com/send?phone=6285759332633">
          <div className="account account-whatsapp">
            <img src="/images/social-media/wa.png" alt="WhatsApp's Icon" />
            0857-5933-2633
          </div>
        </a>
        <a href="https://www.facebook.com/Loakarya.co/">
          <div className="account account-facebook">
            <img
              src="/images/social-media/facebook.png"
              alt="Facebook's Icon"
            />
            Loakarya Indonesia
          </div>
        </a>
        <a href="https://www.instagram.com/loakarya/">
          <div className="account account-instagram">
            <img
              src="/images/social-media/instagram.png"
              alt="Instagram's Icon"
            />
            loakarya
          </div>
        </a>
        <a href="https://www.linkedin.com/company/53214780">
          <div className="account account-linkedin">
            <img src="/images/social-media/linkedin.png" alt="LinkdIn's Icon" />
            Loakarya Indonesia
          </div>
        </a>
        <a href="mailto:halo@loakarya.co">
          <div className="account account-email">
            <img src="/images/social-media/email.png" alt="Email Icon" />
            halo@loakarya.co
          </div>
        </a>
      </div>
      <Footer />
    </div>
  );
}
