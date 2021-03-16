import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";

class About extends Component {
  render() {
    return (
      <div id="main">
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
