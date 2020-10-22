import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
//import React, { Component, Fragment } from 'react';
// import './Header.css';

function Header (props) {
    const [setCookie, removeCookie] = useCookies(['token']);
    let buttons;

    // useEffect(() => {
    //     setCookie('token', null)
    // }, []) 

    if (props.isLoggedIn) {
        buttons = (
            <div>
                <ul>
                    <li><Link onClick={ () => handleLogout}>Logout</Link></li>
                </ul>
            </div>
        )
        
    } else {
        buttons = (
            <div>
                <ul>
                    <li><a href="/login">Login</a></li>
                    <li><a href="signup">Daftar</a></li>
                </ul>
            </div>
        )
    }

    const handleLogout = () => {
        removeCookie('token');
        console.log("handleLogout")
    };

    return (
        <header>
            <div className="header-wrapper">
                <div className="logo-wrapper">
                    <a href="/">
                        <img src="../image/Logo Loak.png" alt=""/>
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

                {buttons}
                
            </div>
        </header>
    );
}

export default Header;