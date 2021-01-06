import React from 'react';

import HeaderBar from '../components/HeaderBar/HeaderBar';
import Header from '../components/Header/Header';
import PageHeader from '../components/PageHeader/PageHeader';
import Footer from '../components/Footer/Footer';

export default function Services() {
  return (
    <div id="main">
      <HeaderBar />
      <Header />
      <div id="content" className="services-content">
        <PageHeader />
      </div>
      <Footer />
    </div>
  );
}
