import React from 'react';

import { Typography } from '@material-ui/core';

export default function PageHeader() {
  return (
    <div className="page-header-container">
      <div className="title-wrapper">
        <Typography
          align="center"
          variant="subtitle2"
          className="header-subtitle"
        >
          Ruangan impian yang anda inginkan akan kami wujudkan.
        </Typography>
        <Typography align="center" variant="h1" className="header-title">
          Layanan Desain Interior
        </Typography>
        <Typography align="center" className="header-link">
          <a target="blank" href="https://form.typeform.com/to/c6DBijku">
            Wujudkan Sekarang Juga!
          </a>
        </Typography>
      </div>
    </div>
  );
}
