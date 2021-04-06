import '../styles/default.css';

import '../styles/Carousel/HomeCarousel.css';
import '../styles/Carousel/ProductCarousel.css';
import '../styles/Carousel/SlickCustom.css';

import axios from 'axios';

axios.defaults.baseURL = 'https://dev.api.loakarya.co/api';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
