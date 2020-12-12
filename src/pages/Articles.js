import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Loading/Loading';

import axios from 'axios';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

export default function Articles () {
    
    const [articles, setArticles] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const endpoint = '/article';

        axios.get(endpoint)
        .then((response) => {
            let respArticles = [];
                
            response.data.data.map(resp => {
                respArticles.push({
                    id: resp.id,
                    thumbnail: resp.thumbnail_url,
                    title: resp.title,
                    slug: resp.slug
                });
            });

            setArticles(respArticles);
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [])

    return (
        <div id="main">
            <Header />
            <div id="content" className="width--large">
                <h1 className="font-color-primary mb-4">Mengenal Lingkunganmu</h1>
                <Grid container spacing={4}>
                    {articles.map((article) => 
                        <Grid item xs={12} sm={6} md={3}>
                            <div>
                                <div className="a-image" style={{ backgroundImage: `url(${article.thumbnail})` }}>
                                </div>
                                <h3 className="a-title">{article.title}</h3>
                                <Link to={`articles/${article.id}`} className="a-link">Lihat Selengkapnya</Link>
                            </div>
                        </Grid>
                    )}
                </Grid>
            </div>
            <Footer />
        </div>
    )
}
