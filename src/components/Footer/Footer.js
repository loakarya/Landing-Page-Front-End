import React from "react";
import { Link } from "react-router-dom";
// import './Footer.css';
// import '../../assets/style.css';

import Grid from "@material-ui/core/Grid";
//import { faInstagram } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <div className="footer-side footer-side--one ">
              <div className="footer-title">
                <img src="../image/logo.png" />
              </div>
              <p>
                Loakarya menyediakan solusi mudah dengan pengalaman yang
                menyenangkan untuk mengelola limbah anorganik yang anda punya
                dengan metode <i>upcycling</i> dan <i>recycling</i> juga
                mengedepankan konsep <i>eco smartliving</i>.
              </p>
              <br />
              <p>
                Alamat: Jalan Raya Soreang - Banjaran No. 223 RT05/RW01 Ds.
                Ciluncat, Kec. Cangkuang, Kab. Bandung, 40377
              </p>
            </div>
          </Grid>

          <Grid item xs={12} sm={4}>
            <div className="footer-side footer-side--two ">
              <div className="footer-title text--center">Menu</div>
              <ul className="row text--center">
                <div className="col-12">
                  <li>
                    <Link to="/products">Produk Kami</Link>
                  </li>
                  <li>
                    <Link to="/about">Tentang Kami</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/contact">Hubungi Kami</Link>
                  </li>
                </div>
                {/* <div className="col-6">
                                    <li><a href="/">Link 5</a></li>
                                    <li><a href="/">Link 6</a></li>
                                    <li><a href="/">Link 7</a></li>
                                </div> */}
              </ul>
            </div>
          </Grid>

          <Grid item xs={12} sm={4}>
            <div className="footer-side footer-side--three">
              <div className="footer-title">Kontak</div>
              <div className="footer-contact-container">
                <a href="https://api.whatsapp.com/send?phone=6285759332633">
                  <img className="contact-icon" src="../image/wa.png" />
                </a>
                <a href="https://www.facebook.com/Loakarya.co/">
                  <img className="contact-icon" src="../image/facebook.png" />
                </a>
                <a href="https://www.instagram.com/loakarya/">
                  <img className="contact-icon" src="../image/instagram.png" />
                </a>
                <a href="https://www.linkedin.com/company/53214780/">
                  <img className="contact-icon" src="../image/linkedin.png" />
                </a>
                {/* <a href="#"><img className="contact-icon" src="../image/email.png"/></a> */}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <p className="text--center mb-4">Loakarya Indonesia &copy; 2020</p>
    </footer>
  );
};
export default Footer;
