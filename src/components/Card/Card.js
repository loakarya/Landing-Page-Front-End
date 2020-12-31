import React from 'react';
import Grid from '@material-ui/core/Grid';

export default function Card () {
    const cards = [
        {
            id: 1,
            src: 'https://picsum.photos/300/400?random=1',
            name: 'Hillman Hirmansyah',
            position: 'Chief Executive Officer'
        },
        {
            id: 2,
            src: 'https://picsum.photos/300/400?random=2',
            name: 'Muhammad Nizamuddin Akhyar',
            position: 'Chief Marketing Officer'
        },
        {
            id: 3,
            src: 'https://picsum.photos/300/400?random=3',
            name: 'Fikri Rida Pebriansyah',
            position: 'Chief Technology Officer'
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
            src: 'https://picsum.photos/300/400?random=6',
            name: 'Sakagala Gema Lafadzagat',
            position: 'On-Demand Product Designer'
        },
        {
            id: 7,
            src: 'https://picsum.photos/300/400?random=7',
            name: 'Naufal Taqi Athallah',
            position: 'Graphic Designer'
        },
        {
            id: 8,
            src: 'https://picsum.photos/300/400?random=8',
            name: 'Mirrah Fairuzsilmi Aliah',
            position: 'Social Media Specialist'
        }
    ]

    return (
        <Grid container spacing={4}>
            {cards.map((card) => 
                <Grid item xs={12} sm={6} md={3}>
                    <div style={{ flex: 1 }}>
                        <div class="image-container" style={{ backgroundImage: `url(${card.src})` }}></div>
                        <div class="detail-content">
                            <p class="detail-content-title">{card.name}</p>
                            <p>{card.position}</p>
                        </div>
                    </div>
                </Grid>
            )}
           
        </Grid>
    )
}