import React, { useState } from "react";
import Link from "next/link";

function Header(props) {
  const [isHamburger, setHamburger] = useState(false);

  function openHamburger() {
    isHamburger ? setHamburger(false) : setHamburger(true);
  }

  return (
    <header>
      <div className="header-wrapper">
        <div className="logo-wrapper">
          <Link href="/">
            <img src="/images/logo.png" alt="" />
          </Link>
        </div>

        <div className="web-menu">
          <ul>
            <li>
              <Link href="/products">Produk</Link>
            </li>
            <li>
              <Link href="/services">Layanan</Link>
            </li>
            <li>
              <Link href="/articles">Artikel</Link>
            </li>
            <li>
              <Link href="/about">Tentang Kami</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/contact">Hubungi Kami</Link>
            </li>
            {/* <li>
              <Link href="#">
                <IconButton>
                  <img
                    src="../../image/ic-search.svg"
                    className="search-icon"
                    alt="Search Icon"
                  />
                </IconButton>
              </Link>
            </li> */}
          </ul>
        </div>

        <div
          className={(isHamburger ? "mobile-menu-active" : "") + " mobile-menu"}
        >
          <ul>
            <li>
              <Link href="/products">Produk</Link>
            </li>
            <li>
              <Link href="/services">Layanan</Link>
            </li>
            <li>
              <Link href="/articles">Artikel</Link>
            </li>
            <li>
              <Link href="/about">Tentang Kami</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/contact">Hubungi Kami</Link>
            </li>
            {/* <li>
              <Link href="#">
                <IconButton>
                  <img
                    src="../../image/ic-search.svg"
                    className="search-icon"
                    alt="Search Icon"
                  />
                </IconButton>
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="hamburger" onClick={() => openHamburger()}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
