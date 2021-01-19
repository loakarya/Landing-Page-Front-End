import React, { useState } from 'react';
//import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
//import React, { Component, Fragment } from 'react';
// import './Header.css';

function Header (props) {
    //const [setCookie, removeCookie] = useCookies(['token']);
    //let buttons;

    // useEffect(() => {
    //     setCookie('token', null)
    // }, []) 

    // if (props.isLoggedIn) {
    //     buttons = (
    //         <div>
    //             <ul>
    //                 <li><Link onClick={ () => handleLogout}>Logout</Link></li>
    //             </ul>
    //         </div>
    //     )
        
    // } else {
    //     buttons = (
    //         <div>
    //             <ul>
    //                 <li><a href="/login">Login</a></li>
    //                 <li><a href="signup">Daftar</a></li>
    //             </ul>
    //         </div>
    //     )
    // }

    // const handleLogout = () => {
    //     removeCookie('token');
    //     console.log("handleLogout")
    // };
    const [isHamburger, setHamburger] = useState(false);

    function openHamburger () {
        isHamburger ? setHamburger(false) : setHamburger(true)
    }

    return (
        <header>
            <div className="header-wrapper">
                <div className="logo-wrapper">
                    <Link to="/">
                        <img src="../image/logo.png" alt=""/>
                    </Link>
                </div>

                <div className="web-menu">
                    <ul>
                        <li><Link to="/products">Produk</Link></li>
                        <li><Link to="#">Layanan</Link></li>
                        <li><Link to="/articles">Artikel</Link></li>
                        <li><Link to="/about">Tentang Kami</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/contact">Hubungi Kami</Link></li>
                    </ul>
                </div>

                <div className="hamburger" onClick={() => openHamburger()}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className={(isHamburger ? "mobile-menu-active" : "") + " mobile-menu"}>
                    <ul>
                        <li><Link to="/products">Produk</Link></li>
                        <li><Link to="#">Layanan</Link></li>
                        <li><Link to="/articles">Artikel</Link></li>
                        <li><Link to="/about">Tentang Kami</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/contact">Hubungi Kami</Link></li>
                    </ul>
                </div>

                {/* {buttons} */}
                
            </div>
        </header>
    );
}

export default Header;