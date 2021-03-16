import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';

function ReasonPoints(props) {
  const { reasons } = props;

  return (
    <Grid container spacing={5} className="reason-points">
      {reasons.map((reason) => (
        <Grid key={reason.id} container item md={3} sm={6} xs={12}>
          <Typography
            display="block"
            variant="subtitle2"
            className="services-section-subtitle"
          >
            0{reason.id}
          </Typography>
          <Typography
            display="block"
            variant="subtitle2"
            className="services-section-subtitle"
          >
            {reason.reasonText}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}

ReasonPoints.propTypes = {
  reasons: PropTypes.object,
};

export default ReasonPoints;
