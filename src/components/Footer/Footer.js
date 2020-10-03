import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
// import './Footer.css';
// import '../../assets/style.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper grid">
                <div className="footer-side footer-side--one grid-4">
                    <div className="footer-title">Logo</div>
                    <p>
                        This is a wonderful footer designed by song, a CodePen user. Useful information and links have been presented through different columns. The first column contains the company logo and description of the company.
                    </p>
                    <br />
                    <p>Telepon:</p>
                    <p>Email:</p> 
                    <p>Alamat:</p>
                </div>
                <div className="footer-side footer-side--two grid-4">
                    <div className="footer-title text--center">Menu</div>
                    <ul className="row text--center">
                        <div className="col-6">
                            <li><a href="">Link 1</a></li>
                            <li><a href="">Link 2</a></li>
                            <li><a href="">Link 3</a></li>
                            <li><a href="">Link 4</a></li>
                        </div>
                        <div className="col-6">
                            <li><a href="">Link 5</a></li>
                            <li><a href="">Link 6</a></li>
                            <li><a href="">Link 7</a></li>
                        </div>
                    </ul>
                </div>
                <div className="footer-side footer-side--three grid-4">
                    <div className="footer-title">
                        Ikuti Kami
                    </div>
                    <p>
                        This is a wonderful footer designed by song, a CodePen user. Useful information and links have been presented through different columns. 
                    </p>
                </div>
            </div>
            <p className="text--center">&copy; Syaina Nur Fauziyah, 2020</p>
        </footer>
    );
}
export default Footer;