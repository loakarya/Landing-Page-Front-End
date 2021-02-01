import React from 'react';
import Grid from '@material-ui/core/Grid';

import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Card() {
  const cards = [
    {
      id: 1,
      src: 'hillman.jpg',
      name: 'Hillman Hirmansyah',
      position: 'Chief Executive Officer',
      socmed: {
        linkedin: 'https://www.linkedin.com/in/hillman-hirmansyah/',
      },
    },
    {
      id: 2,
      src: 'akhyar.png',
      name: 'M Nizamuddin Akhyar',
      position: 'Chief Marketing Officer',
      socmed: {
        linkedin: 'https://www.linkedin.com/in/mnakhyar/',
        behance: 'https://www.behance.net/mnakhyar',
        medium: 'https://medium.com/@mnakhyar',
      },
    },
    {
      id: 3,
      src: 'fikri.jpg',
      name: 'Fikri Rida Pebriansyah',
      position: 'Chief Technology Officer',
      socmed: {
        linkedin:
          'https://www.linkedin.com/in/fikri-rida-pebriansyah-0453b3115/',
        github: 'https://github.com/friansh',
        website: 'https://www.fikrirp.com/',
      },
    },
    // {
    //     id: 4,
    //     src: 'https://picsum.photos/300/400?random=5',
    //     name: 'Muhammad Rivaldi Pratama',
    //     position: 'Head of Authentic Product'
    // },
    // {
    //     id: 5,
    //     src: 'https://picsum.photos/300/400?random=5',
    //     name: 'Nadhira Qinthara',
    //     position: 'Interior Designer'
    // },
    {
      id: 6,
      src: 'sakagala.jpg',
      name: 'Sakagala Gema Lafadzagat',
      position: 'On-Demand Product Designer',
      socmed: {
        linkedin: 'https://www.linkedin.com/in/sakagala-gema-l-b82958173/',
      },
    },
    {
      id: 7,
      src: 'dummy.jpg',
      name: 'Naufal Taqi Athallah',
      position: 'Graphic Designer',
      socmed: {
        linkedin: 'https://www.linkedin.com/in/naufal-taqi-athallah-b710771a5/',
        behance: 'https://www.behance.net/naufaltaqi',
      },
    },
    // {
    //     id: 8,
    //     src: 'https://picsum.photos/300/400?random=8',
    //     name: 'Mirrah Fairuzsilmi Aliah',
    //     position: 'Social Media Specialist'
    // }
    {
      id: 9,
      src: 'dummy.jpg',
      name: 'Syahrul Hidayat',
      position: 'Supply Chain Specialist',
      socmed: {
        linkedin: 'https://www.linkedin.com/in/syahrul-hidayat-916371171/',
      },
    },
  ];

  const handleSocmedClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <Grid container spacing={4}>
      {cards.map((card) => (
        <Grid item xs={12} sm={6} md={3}>
          <div style={{ flex: 1 }}>
            <div
              class="image-container"
              style={{
                backgroundImage: `url(${require(`../../image/team_kami/${card.src}`)})`,
              }}
            ></div>
            <div class="detail-content">
              <p class="detail-content-title">{card.name}</p>
              <p>{card.position}</p>
              <div className="social-media-wrapper">
                {card.socmed.linkedin && (
                  <LinkedInIcon
                    className="social-media-item"
                    onClick={() => handleSocmedClick(card.socmed.linkedin)}
                  />
                )}
                {card.socmed.behance && (
                  <img
                    src={require('../../image/icons/ic-behance.svg')}
                    alt="linkedin"
                    className="social-media-item"
                    onClick={() => handleSocmedClick(card.socmed.behance)}
                  />
                )}
                {card.socmed.medium && (
                  <img
                    src={require('../../image/icons/ic-medium.svg')}
                    alt="linkedin"
                    className="social-media-item"
                    onClick={() => handleSocmedClick(card.socmed.medium)}
                  />
                )}
                {card.socmed.github && (
                  <GitHubIcon
                    className="social-media-item"
                    onClick={() => handleSocmedClick(card.socmed.github)}
                  />
                )}
                {card.socmed.website && (
                  <LanguageIcon
                    className="social-media-item"
                    onClick={() => handleSocmedClick(card.socmed.website)}
                  />
                )}
              </div>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}
