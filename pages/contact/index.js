import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Contact() {
  return (
    <div id="main">
      <Header />
      <div
        id="content"
        className="account-container text--center  width--large"
      >
        <h1 className="font-color-primary mb-4">
          Tetaplah terhubung bersama kami
        </h1>
        <a href="https://api.whatsapp.com/send?phone=6285759332633">
          <div className="account account-whatsapp">
            <img src="/images/social-media/wa.png" alt="WhatsApp's Icon" />
            0857-5933-2633
          </div>
        </a>
        <a href="https://www.facebook.com/Loakarya.co/">
          <div className="account account-facebook">
            <img
              src="/images/social-media/facebook.png"
              alt="Facebook's Icon"
            />
            Loakarya Indonesia
          </div>
        </a>
        <a href="https://www.instagram.com/loakarya/">
          <div className="account account-instagram">
            <img
              src="/images/social-media/instagram.png"
              alt="Instagram's Icon"
            />
            loakarya
          </div>
        </a>
        <a href="https://www.linkedin.com/company/53214780">
          <div className="account account-linkedin">
            <img src="/images/social-media/linkedin.png" alt="LinkdIn's Icon" />
            Loakarya Indonesia
          </div>
        </a>
        <a href="mailto:halo@loakarya.co">
          <div className="account account-email">
            <img src="/images/social-media/email.png" alt="Email Icon" />
            halo@loakarya.co
          </div>
        </a>
      </div>
      <Footer />
    </div>
  );
}
