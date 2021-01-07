import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid } from '@material-ui/core';

function ReasonEffects(props) {
  const { reasonEffects } = props;

  return (
    <Grid container justify="center" className="reason-effects">
      {reasonEffects.map((effect, index) => (
        <Grid container item key={index} md={4} xs={6} justify="center">
          <Button
            variant="outlined"
            size="large"
            disableFocusRipple
            className="services-section-subtitle"
          >
            {effect}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}

ReasonEffects.propTypes = {
  reasonEffects: PropTypes.array,
};

export default ReasonEffects;
