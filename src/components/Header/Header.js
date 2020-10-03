import React, { Component, Fragment } from 'react';
// import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="header-wrapper">
                <div className="logo-wrapper">
                    <a href="/">
                        <img src="./image/Logo Loak.png" alt=""/>
                    </a>
                </div>

                <div>
                    <ul>
                        <li><a href="/article">Artikel</a></li>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/products">Produk Kami</a></li>
                        <li><a href="/about">Tentang Kami</a></li>
                        <li><a href="/contact">Hubungi Kami</a></li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li><a href="/login">Login</a></li>
                        <li><a href="signup">Daftar</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;