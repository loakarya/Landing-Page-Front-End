import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';

function ServicesTitle(props) {
  const { titleText, subtitleText, addSubtitle } = props;

  return (
    <>
      <Typography
        variant="h2"
        align="center"
        className="services-section-title"
      >
        {titleText}
      </Typography>

      {addSubtitle && (
        <Typography
          variant="subtitle2"
          align="center"
          className="services-section-subtitle"
        >
          {subtitleText}
        </Typography>
      )}
    </>
  );
}

ServicesTitle.propTypes = {
  titleText: PropTypes.string,
  subtitleText: PropTypes.string,
  addSubtitle: PropTypes.bool,
};

export default ServicesTitle;
