import React from 'react';
import Grid from '@material-ui/core/Grid';

import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Card() {
  const cards = [
    {
      id: 1,
      src: '/images/team-kami/hillman.jpg',
      name: 'Hillman Hirmansyah',
      position: 'Chief Executive Officer',
      socmed: {
        linkedin: 'https://www.linkedin.com/in/hillman-hirmansyah/',
      },
    },
    {
      id: 2,
      src: '/images/team-kami/akhyar.png',
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
      src: '/images/team-kami/fikri.jpg',
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
      src: '/images/team-kami/sakagala.jpg',
      name: 'Sakagala Gema Lafadzagat',
      position: 'Product Developer',
      socmed: {
        linkedin: 'https://www.linkedin.com/in/sakagala-gema-l-b82958173/',
      },
    },
    {
      id: 7,
      src: '/images/team-kami/dummy.jpg',
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
      src: '/images/team-kami/dummy.jpg',
      name: 'Syahrul Hidayat',
      position: 'Supply Chain Specialist',
      socmed: {
        linkedin: 'https://www.linkedin.com/in/syahrul-hidayat-916371171/',
      },
    },
    {
      id: 10,
      src: '/images/team-kami/sami.jpg',
      name: 'Sami Fauzan Ramadhan',
      position: 'Hardware Engineer',
      socmed: {
        linkedin: 'https://www.linkedin.com/in/sami-f-8a6068109/',
      },
    },
    {
      id: 11,
      src: '/images/team-kami/adipati.jpeg',
      name: `Adipati Ma'ruf Alamsyah`,
      position: 'Website Developer',
      socmed: {
        linkedin:
          'https://www.linkedin.com/in/adipati-ma-ruf-alamsyah-5aa088172/',
        github: 'https://github.com/adipati27ma',
        website: 'https://adipatima.home.blog/',
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
              className="image-container"
              style={{
                backgroundImage: `url("${card.src}")`,
              }}
            ></div>
            <div className="detail-content">
              <p className="detail-content-title">{card.name}</p>
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
                    src="/images/team-kami/icons/ic-behance.svg"
                    alt="behance"
                    className="social-media-item"
                    onClick={() => handleSocmedClick(card.socmed.behance)}
                  />
                )}
                {card.socmed.medium && (
                  <img
                    src="/images/team-kami/icons/ic-medium.svg"
                    alt="medium"
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
