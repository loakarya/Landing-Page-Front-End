import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Contact () {

    return (
        <div id="main">
            <Header />
            <div id="content" className="account-container text--center  width--large">
                <h1 className="font-color-primary mb-4">Tetaplah terhubung bersama kami</h1>
                <a href="https://api.whatsapp.com/send?phone=6285759332633"><div className="account account-whatsapp"><img src="../image/wa.png" />0857-5933-2633</div></a>
                <a href="https://www.facebook.com/Loakarya.co/"><div className="account account-facebook"><img src="../image/facebook.png" />Loakarya Indonesia</div></a>
                <a href="https://www.instagram.com/loakarya/"><div className="account account-instagram"><img src="../image/instagram.png" />loakarya</div></a>
                <a href="https://www.linkedin.com/company/53214780"><div className="account account-linkedin"><img src="../image/linkedin.png" />Loakarya Indonesia</div></a>
                <a href="#"><div className="account account-email"><img src="../image/email.png" />halo@loakarya.co</div></a>
            </div>
            <Footer />
        </div>
    )
}
