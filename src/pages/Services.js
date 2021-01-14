import React, { useState } from 'react';

import HeaderBar from '../components/HeaderBar/HeaderBar';
import Header from '../components/Header/Header';
import PageHeader from '../components/PageHeader/PageHeader';
import ServicesTitle from '../components/ServicesTitle/ServicesTitle';
import ReasonPoints from '../components/Reason/ReasonPoints';
import ReasonEffects from '../components/Reason/ReasonEffects';
import PortfolioCard from '../components/PortfolioCard/PortfolioCard';
import PortfolioModal from '../components/PortfolioModal/PortfolioModal';
import Footer from '../components/Footer/Footer';

import services1 from '../image/services-1.svg';

import { AnimatePresence } from 'framer-motion';

import {
  Grid,
  Typography,
  ThemeProvider,
  createMuiTheme,
  useMediaQuery,
} from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

const reasons = [
  { id: 1, reasonText: 'Menggunakan jasa profesional' },
  { id: 2, reasonText: 'Memberdayakan pengrajin lokal' },
  { id: 3, reasonText: 'Ketepatan waktu pengerjaan' },
  { id: 4, reasonText: 'Anggaran dapat disesuaikan' },
];

const reasonEffects = ['mudah', 'cepat', 'menyenangkan'];

const cardPortfolio = [
  {
    id: 1,
    title: 'Renovasi Kamar Billy',
    subtitles: ['Residental', 'Desain Interior', 'Furnitur'],
  },
  {
    id: 2,
    title: 'Japandi Bedroom Client',
    subtitles: ['Residental', 'Desain Interior'],
  },
  {
    id: 3,
    title: 'Kenko Rehabilitation Facility',
    subtitles: ['Fasilitas Publik', 'Desain Interior'],
  },
  {
    id: 4,
    title: 'Lobby Hotel Batik',
    subtitles: ['Fasilitas Gedung', 'Desain Interior'],
  },
  {
    id: 5,
    title: 'Office Paxel Jakarta',
    subtitles: ['Office', 'Desain Interior'],
  },
  {
    id: 6,
    title: `Yanie's Cake Tea and Patisserie`,
    subtitles: ['Toko Retail', 'Desain Interior'],
  },
];

export default function Services() {
  const isMediumDevice = useMediaQuery('(max-width:960px)');

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <div id="main">
        <HeaderBar />
        <Header />
        <div id="content" className="services-content">
          <PageHeader />

          <section className="services-section">
            <ServicesTitle
              titleText="Bagaimana Cara Kerjanya?"
              addSubtitle
              subtitleText="Berkolaborasi dengan desainer secara mudah dan menyenangkan"
            />
            <Grid
              container
              spacing={3}
              justify="center"
              className="howto-content"
              direction={isMediumDevice && 'column-reverse'}
            >
              <Grid
                container
                item
                xs={12}
                md={6}
                alignItems="center"
                justify="center"
              >
                <div className="left-text-wrapper">
                  <Typography align="center" className="services-mini-title">
                    Mari Mulai
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className="services-section-subtitle"
                  >
                    Bagikan inspirasi ruangan yang ingin anda miliki, sehingga{' '}
                    <span className="services-subtitle-bold">
                      kami dapat menyesuaikannya dengan anggaran dan selera
                      anda.
                    </span>
                  </Typography>
                  <div className="howto-button-wrapper">
                    <button className="btn btn-secondary btn-secondary--active">
                      Mulai Sekarang Juga!
                    </button>
                  </div>
                </div>
              </Grid>
              <Grid
                container
                item
                xs={12}
                md={6}
                justify="center"
                className="right-image-wrapper"
              >
                <img src={services1} alt="interior-design-1" />
              </Grid>
            </Grid>
            <hr />
          </section>

          <section className="services-section">
            <ServicesTitle titleText="Mengapa Loakarya?" />
            <div className="why-content">
              <ReasonPoints reasons={reasons} />
              <ReasonEffects reasonEffects={reasonEffects} />
            </div>
            <hr />
          </section>

          <section className="services-section collaboration-section">
            <div className="collaboration-header">
              <div className="collaboration-header-text">
                <ServicesTitle
                  titleText="Kolaborasi Bersama"
                  addSubtitle
                  subtitleText="Lebih Mudah dan Menyenangkan Bersama Kami"
                />
              </div>
            </div>
            <div className="collaboration-content">
              <Typography
                variant="subtitle2"
                className="services-section-subtitle"
                align="justify"
              >
                Setiap hari, ketika kita bangun dari tidur tentu ada harapan
                yang muncul. Harapan untuk menjalani hari dengan baik dan
                bersemangat. Harapan tersebut secara tidak sadar dipengaruhi
                juga oleh lingkungan tempat kita tinggal. Memiliki tempat
                tinggal yang nyaman dan dengan suasana yang positif dapat
                memunculkan perasaan menyenangkan. Oleh karena itu, kami
                Loakarya berusaha membantu anda mewujudkan hal tersebut.
                Wujudkan memiliki suasana tempat tinggal yang nyaman dengan
                layanan desain interior Loakarya!
              </Typography>
            </div>
            <hr />
          </section>

          <section className="services-section">
            <div className="portfolio-section">
              <ServicesTitle titleText="Portofolio" />
              <div className="portfolio-content">
                <Grid container spacing={4} justify="center">
                  {cardPortfolio.map((cardText, index) => (
                    <PortfolioCard
                      key={index}
                      cardText={cardText}
                      setSelectedImg={setSelectedImg}
                      setIsOpen={setIsOpen}
                    />
                  ))}
                </Grid>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
      <AnimatePresence>
        {isOpen && (
          <PortfolioModal
            setIsOpen={setIsOpen}
            selectedImg={selectedImg}
            setSelectedImg={setSelectedImg}
          />
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}
