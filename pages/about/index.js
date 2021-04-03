import React, { Component } from "react";
import Head from "next/head";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";

class About extends Component {
  render() {
    return (
      <div id="main">
        <Head>
          <title>Tentang Kami | Loakarya Indonesia</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            property="og:description"
            content="Solusi mudah dan menyenangkan untuk mengelola limbah anorganik dengan metode upcycling dan recycling juga mengedepankan konsep eco smart-living."
          />
          <meta name="robots" content="index-follow" />
          <link rel="canonical" href="https://loakarya.co/about" />
          <meta
            property="og:title"
            content="Tentang Kami | Loakarya Indonesia"
          />
          <meta property="og:site_name" content="Loakarya Indonesia" />
          <meta
            property="og:image"
            content="https://resources.loakarya.co/loakarya-og-image.jpg"
          />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:url" content="https://loakarya.co/about" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:type" content="website" />
        </Head>
        <Header />
        <div id="content" style={{ paddingTop: 0 }}>
          <div
            className="image-heading"
            style={{ backgroundImage: `url("/images/about.jpg")` }}
          >
            <h1 className="image-heading-title">Tentang Kami</h1>
          </div>

          <div className="width--large compro-section">
            <h1 className="pt-2rem font-color-primary">Siapa Kami?</h1>
            <p>
              Loakarya menyediakan solusi mudah dengan pengalaman yang
              menyenangkan untuk mengelola limbah anorganik yang anda punya
              dengan metode <i>upcycling</i> dan <i>recycling</i> juga
              mengedepankan konsep eco <i>smartliving</i>.
            </p>
          </div>

          {/* <div className="width--large compro-section font-color-secondary">
            <p>
              <b>
                “We escalate the value of waste material by upcycling and
                repurposing for eco living.”
              </b>
            </p>
          </div> */}

          <div className="width--large compro-section">
            <h1 className="font-color-primary">Visi dan Misi</h1>
            <p>
              Visi kami adalah membantu Indonesia menekan pertambahan sampah
              sebesar 70% di tahun 2025.
            </p>
            <p>
              Misi kami adalah sebagai startup yang menyediakan solusi mudah dan
              menyenangkan bagi permasalahan limbah di masyarakat.
            </p>
          </div>

          <article className="testimoni-section">
            <div className="bg-white pt-2rem ">
              <div className="w-80">
                <h1 className="section-title font-black">Our Team</h1>

                <Card />
              </div>
            </div>
          </article>
        </div>
        <Footer />
      </div>
    );
  }
}
export default About;
