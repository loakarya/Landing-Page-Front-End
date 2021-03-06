import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ServicesPortfolio from './ServicesPortfolio';

import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const imageVariants = {
  hidden: { y: '-100vh' },
  visible: { y: 0, transition: { delay: 0.3 } },
};

function PortfolioModal(props) {
  const { selectedImg, setSelectedImg, setIsOpen } = props;
  const [indexGallery, setIndexGallery] = useState(0);

  const imgSrc = ServicesPortfolio();
  const indexLength = imgSrc[selectedImg - 1].length - 1;

  const handleCloseOnClick = (e) => {
    if (
      e.target.classList.contains('modal-content') ||
      e.target.classList.contains('thumbnails')
    ) {
      setIsOpen(false);
      setIndexGallery(0);
      setSelectedImg(0);
    }
  };

  const handleOnClickThumbnail = (index) => {
    setIndexGallery(index);
  };

  return (
    <motion.div
      className="portfolio-modal-backdrop"
      onClick={handleCloseOnClick}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      // transition={{ delay: 0.1 }}
    >
      <div className="modal-content">
        {indexGallery !== 0 && (
          <IconButton
            className="prev-button"
            onClick={() => setIndexGallery(indexGallery - 1)}
          >
            <ArrowBackIosIcon fontSize="large" />
          </IconButton>
        )}
        <motion.img
          src={imgSrc[selectedImg - 1][indexGallery]}
          alt="enlarged pic"
          variants={imageVariants}
        />
        {indexGallery <= indexLength - 1 && (
          <IconButton
            className="next-button"
            onClick={() => setIndexGallery(indexGallery + 1)}
          >
            <ArrowForwardIosIcon fontSize="large" />
          </IconButton>
        )}

        <motion.div className="thumbnails">
          {/* <motion.div drag="x" className="thumbnails"> */}
          {imgSrc[selectedImg - 1].map((item, index) => {
            const ref = React.createRef();

            const handleClick = () =>
              ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });

            return (
              <img
                key={index}
                ref={ref}
                src={item}
                alt="enlarged pic"
                onClick={() => {
                  handleOnClickThumbnail(index);
                  handleClick();
                }}
                className={indexGallery === index && 'active'}
              />
            );
          })}
          {/* </motion.div> */}
        </motion.div>

        <motion.div className="portfolio-pagination">
          {/* <p className="index-title">Portofolio</p> */}
          {imgSrc.map((src, index) => (
            <p
              className={
                selectedImg === index + 1
                  ? 'index-portfolio active'
                  : 'index-portfolio'
              }
              onClick={() => {
                setSelectedImg(index + 1);
                setIndexGallery(0);
              }}
            >
              {index + 1}
            </p>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

PortfolioModal.propTypes = {
  selectedImg: PropTypes.number,
  setIsOpen: PropTypes.func,
};

export default PortfolioModal;
