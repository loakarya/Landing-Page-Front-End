import React from 'react';
import { Link } from 'react-router-dom';
// import './Footer.css';
// import '../../assets/style.css';

import Grid from '@material-ui/core/Grid'
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
                                <img src="../image/Logo Loak.png"/>
                            </div>
                            <p>
                                Loakarya merupakan sebuah startup di bidang <i>waste management</i> yang mengubah limbah menjadi produk furniture dengan menggunakan metode <i>Upcyling</i>.
                            </p>
                            <br />
                            <p>Telepon:</p>
                            <p>Email:</p> 
                            <p>Alamat:</p>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <div className="footer-side footer-side--two ">
                            <div className="footer-title text--center">Menu</div>
                            <ul className="row text--center">
                                <div className="col-12">
                                    <li><Link to="/products">Produk Kami</Link></li>
                                    <li><Link to="/about">Tentang Kami</Link></li>
                                    <li><Link to="/faq">Frequnetly Asked Question</Link></li>
                                    <li><Link to="/contact">Hubungi Kami</Link></li>
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
                            <div className="footer-title">
                                Ikuti Kami
                            </div>
                            <div className="footer-contact-container">
                                <div><Link to="">Instagram: loak.co</Link></div>
                                <div><Link to="">Email: halo@loakarya.co</Link></div>
                                <div><Link to="">LinkedIn: loak.co</Link></div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <p className="text--center mb-4">&copy; Syaina Nur Fauziyah, 2020</p>
        </footer>
    );
}
export default Footer;