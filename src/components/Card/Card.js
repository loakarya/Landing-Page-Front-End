import React from 'react';
import Grid from '@material-ui/core/Grid';

export default function Card () {
    const cards = [
        {
            src: 'https://picsum.photos/300/400?random=1',
            name: 'Hilman Hirmansyah',
            position: 'Chief Executive Officer'
        },
        {
            src: 'https://picsum.photos/300/400?random=2',
            name: 'Akhyar',
            position: 'Chief Marketing Officer'
        },
        {
            src: 'https://picsum.photos/300/400?random=3',
            name: 'Fikri',
            position: 'Chief Technology Officer'
        }
    ]

    console.log(cards);

    return (
        <Grid container spacing={4}>
            {cards.map((card) => 
                <Grid item xs={6} sm={3}>
                    <div class="image-container" style={{ backgroundImage: `url(${card.src})` }}></div>
                    <div class="detail-content">
                        <p class="detail-content-title">{card.name}</p>
                        <p>{card.position}</p>
                    </div>
                </Grid>
            )}
           
        </Grid>
    )
}