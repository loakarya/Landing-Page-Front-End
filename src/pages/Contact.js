import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Contact () {

    return (
        <div id="main">
            <Header />
            <div id="content" className="account-container text--center">
                <h1 className="font-color-primary mb-4">Tetaplah terhubung bersama kami</h1>
                <Link><div className="account account-whatsapp">via WhatsApp</div></Link>
                <Link><div className="account account-instagram">viaInstagram</div></Link>
                <Link><div className="account account-linkedin">via LinkedIn</div></Link>
                <Link><div className="account account-email">via Email</div></Link>
            </div>
            <Footer />
        </div>
    )
}
