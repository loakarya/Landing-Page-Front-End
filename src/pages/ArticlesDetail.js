import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import axios from 'axios';

export default function ArticlesDetail () {
    const { id } = useParams();
    const [article, setArticle] = useState([]);
    const [date, setDate] = useState();
    const [time, setTime] = useState([]);
    const [tanggal, setTanggal] = useState();
    const [bulan, setBulan] = useState();
    const [tahun, setTahun] = useState();
    const [jam, setJam] = useState();
    const [menit, setMenit] = useState();

    useEffect(() => {
        const endpoint = '/article/' + id;

        axios.get(endpoint)
        .then((response) => {

            if(response.data.status) {
                let respArticle = []

                response.data.data.map(a => {
                    respArticle.push({
                        id: a.id,
                        category: a.category,
                        content: a.content,
                        slug: a.slug,
                        subtitle: a.subtitle,
                        thumbnail: a.thumbnail_url,
                        title: a.title,
                        user_id: a.user_id,
                        updated_at: a.updated_at
                    })
                })
                setArticle(respArticle);
                getTimeStamp()
            }
        })
        .catch(function (error) {
            
        })
    }, [])

    var updated_at = "2020-10-12T09:56:16.000000Z";

    function getTimeStamp () {
        var str_time, str_date, getDate, str_tahun, str_bulan, str_tanggal, str_jam, str_menit, date_str, time_str;
        var bulanIndo = ['', 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September' , 'Oktober', 'November', 'Desember'];

        getDate = updated_at.split('T');
        str_date = getDate[0];
        str_tahun = str_date.split('-')[0];
        str_bulan = bulanIndo[Math.abs(str_date.split('-')[1])];
        str_tanggal = str_date.split('-')[2];

        setTahun(str_tahun);
        setBulan(str_bulan);
        setTanggal(str_tanggal);

        str_time = getDate[1].split('.');
        str_jam = str_time[0].split(':')[0];
        str_menit = str_time[0].split(':')[1];

        setJam(str_jam);
        setMenit(str_menit);
    }

    return (
        <div id="main">
            <Header />
            <div id="content" className="account-container width--large">
                {article.map((article) => 
                    <article className="article">
                    <h1 className="article__title">{article.title}</h1>
                    <h3 className="article__subtitle">{article.subtitle}</h3>

                    <p className="article__author">by Admin</p>
                    {/* <p className="article__date">{article.updated_at}</p> */}
                    <p className="article__date">{tanggal}  {bulan}  {tahun} | {jam}:{menit} WIB</p>

                    <div className="article__content" dangerouslySetInnerHTML={{__html: `${article.content}` }} />
                </article>
                    
                )}
                
            </div>
            <Footer />
        </div>
    )
}
