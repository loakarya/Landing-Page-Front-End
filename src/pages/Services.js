import React from 'react';

import HeaderBar from '../components/HeaderBar/HeaderBar';
import Header from '../components/Header/Header';
import PageHeader from '../components/PageHeader/PageHeader';
import Footer from '../components/Footer/Footer';

import { Typography } from '@material-ui/core';

export default function Services() {
  return (
    <div id="main">
      <HeaderBar />
      <Header />
      <div id="content" className="services-content">
        <PageHeader />
        <section className="services-section">
          <Typography
            variant="h2"
            align="center"
            className="services-section-title"
          >
            Bagaimana Cara Kerjanya?
          </Typography>
          <Typography
            variant="subtitle2"
            align="center"
            className="services-section-subtitle"
          >
            Berkolaborasi dengan desainer secara mudah dan menyenangkan
          </Typography>
        </section>
      </div>
      <Footer />
    </div>
  );
}
