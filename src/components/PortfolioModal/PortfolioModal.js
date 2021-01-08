import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ServicesPortfolio from './ServicesPortfolio';

import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { motion } from 'framer-motion';

function PortfolioModal(props) {
  const { selectedImg, setSelectedImg, setIsOpen } = props;
  const [indexGallery, setIndexGallery] = useState(0);

  const imgSrc = ServicesPortfolio();
  const indexLength = imgSrc[selectedImg - 1].length - 1;

  const handleCloseOnClick = (e) => {
    if (e.target.classList.contains('modal-content')) {
      setIsOpen(false);
      setIndexGallery(0);
      setSelectedImg(0);
    }
  };

  return (
    <motion.div
      className="portfolio-modal-backdrop"
      onClick={handleCloseOnClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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
          initial={{ y: '-100vh' }}
          animate={{ y: 0 }}
        />
        {indexGallery <= indexLength - 1 && (
          <IconButton
            className="next-button"
            onClick={() => setIndexGallery(indexGallery + 1)}
          >
            <ArrowForwardIosIcon fontSize="large" />
          </IconButton>
        )}
      </div>
    </motion.div>

    // <Dialog
    //   open={isOpen}
    //   maxWidth="md"
    //   className="portfolio-modal"
    //   onClick={handleCloseOnClick}
    // >
    //   <DialogTitle>
    //     <Typography variant="h4" component="div">
    //       Portfolio
    //     </Typography>
    //   </DialogTitle>
    //   <DialogContent dividers>
    //     <div className="modal-content">
    //       <img src={imgSrc[selectedImg - 1][indexGallery]} alt="enlarged pic" />
    //     </div>
    //   </DialogContent>
    // </Dialog>
  );
}

PortfolioModal.propTypes = {
  selectedImg: PropTypes.number,
  setIsOpen: PropTypes.func,
};

export default PortfolioModal;
