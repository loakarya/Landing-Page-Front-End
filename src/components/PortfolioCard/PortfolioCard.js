import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';

const portfolio1 =
  'https://resources.loakarya.co/portfolio/icon/portfolio1.jpg';
const portfolio2 =
  'https://resources.loakarya.co/portfolio/icon/portfolio2.jpg';
const portfolio3 =
  'https://resources.loakarya.co/portfolio/icon/portfolio3.jpg';
const portfolio4 =
  'https://resources.loakarya.co/portfolio/icon/portfolio4.jpg';
const portfolio5 =
  'https://resources.loakarya.co/portfolio/icon/portfolio5.jpg';
const portfolio6 =
  'https://resources.loakarya.co/portfolio/icon/portfolio6.jpg';

function PortfolioCard(props) {
  const { cardText, setSelectedImg, setIsOpen } = props;
  const imgSrc = [
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
    portfolio5,
    portfolio6,
  ];

  const handleImgOnClick = () => {
    setSelectedImg(cardText.id);
    setIsOpen(true);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <div className="portfolio-item" style={{ flex: 1 }}>
        <img
          src={imgSrc[cardText.id - 1]}
          alt=""
          className="portfolio-image"
          onClick={handleImgOnClick}
        />
        <div class="detail-content">
          <p class="detail-content-title">{cardText.title}</p>
          <ul>
            {cardText.subtitles.map((subtitle, index) => (
              <li key={index}>-{subtitle}</li>
            ))}
          </ul>
          <Typography
            className="text-selanjutnya"
            align="right"
            onClick={handleImgOnClick}
          >
            Lihat Selanjutnya...
          </Typography>
        </div>
      </div>
    </Grid>
  );
}

PortfolioCard.propTypes = {
  cardText: PropTypes.array,
  setSelectedImg: PropTypes.func,
  setIsOpen: PropTypes.func,
};

export default PortfolioCard;
