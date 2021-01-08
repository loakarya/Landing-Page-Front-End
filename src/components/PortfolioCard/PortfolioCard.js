import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';

import portfolio1 from '../../image/portfolio/icon/portfolio1.svg';
import portfolio2 from '../../image/portfolio/icon/portfolio2.svg';
import portfolio3 from '../../image/portfolio/icon/portfolio3.svg';
import portfolio4 from '../../image/portfolio/icon/portfolio4.svg';
import portfolio5 from '../../image/portfolio/icon/portfolio5.svg';
import portfolio6 from '../../image/portfolio/icon/portfolio6.svg';

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
          <Typography className="text-selanjutnya" align="right">
            <a href="#">Lihat Selanjutnya...</a>
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
