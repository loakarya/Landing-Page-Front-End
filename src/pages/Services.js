import React from 'react';

import HeaderBar from '../components/HeaderBar/HeaderBar';
import Header from '../components/Header/Header';
import PageHeader from '../components/PageHeader/PageHeader';
import ReasonPoints from '../components/Reason/ReasonPoints';
import ReasonEffects from '../components/Reason/ReasonEffects';
import Footer from '../components/Footer/Footer';
import services1 from '../image/services-1.svg';

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

export default function Services() {
  const isMediumDevice = useMediaQuery('(max-width:960px)');

  return (
    <ThemeProvider theme={theme}>
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
            <Typography
              variant="h2"
              align="center"
              className="services-section-title"
            >
              Mengapa Loakarya?
            </Typography>

            <div className="section-content">
              <ReasonPoints reasons={reasons} />
              <ReasonEffects reasonEffects={reasonEffects} />
            </div>
            <hr />
          </section>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
