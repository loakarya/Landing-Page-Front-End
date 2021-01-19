import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Loading/Loading';

import axios from 'axios';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

export default function Articles () {
    
    const [articles, setArticles] = useState([]);
    const [content, setContent] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [contentString, setContentString] = useState();

    useEffect(() => {
        const endpoint = '/article';

        axios.get(endpoint)
        .then((response) => {
            let respArticles = [];
            
            response.data.data.map(resp => {
                respArticles.push({
                    id: resp.id,
                    thumbnail: 'https://dev.api.loakarya.co/storage/article/' + resp.thumbnail_url,
                    title: resp.title,
                    slug: resp.slug,
                    content: resp.content
                });
            });

            setArticles(respArticles);
            getContentString(respArticles);
            setLoading(false);
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [])

    function getContentString (data) {
        const allArticles = [...data];

        for (var i=0; i < allArticles.length ; i++) {
            allArticles[i].content = allArticles[i].content.replace(/<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g, ' ');
        }

        setArticles(allArticles);
    }

    let loading = <div></div>
    
    if (isLoading) {
        loading = <Loading />
    }

    return (
        <div id="main">
            <Header />
            <div id="content" className="width--large">

                { loading }

                <h1 className="font-color-primary mb-4">Mengenal Lingkunganmu</h1>
                <Grid container spacing={4}>
                    {articles.map((article) => 
                        <Grid item xs={12} sm={6} md={3}>
                            <div>
                                <div className="a-image" style={{ backgroundImage: `url(${article.thumbnail})` }}>
                                </div>
                                <Link to={`articles/${article.slug}`} className="a-title">{article.title}</Link>
                                <div className="a-content">{article.content}</div>
                                <Link to={`articles/${article.slug}`} className="a-link">Baca Artikel</Link>
                            </div>
                        </Grid>
                    )}
                </Grid>
            </div>
            <Footer />
        </div>
    )
}
