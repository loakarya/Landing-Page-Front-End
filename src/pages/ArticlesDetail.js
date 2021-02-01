import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Loading/Loading';

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
    const [isLoading, setLoading] = useState(true);


    useEffect(() => {
        const endpoint = '/article/' + id;

        axios.get(endpoint)
        .then((response) => {
            
            if(response.data.status) {

                // console.log(response.data.data);
                const respArticle = response.data.data
                // let respArticle = []
                
                // response.data.data.map(a => {
                //     respArticle.push({
                //         category: a.category,
                //         content: a.content,
                //         deleted_at: a.deleted_at,
                //         id: a.id,
                //         slug: a.slug,
                //         subtitle: a.subtitle,
                //         thumbnail: a.thumbnail_url,
                //         title: a.title,
                //         updated_at: a.updated_at,
                //         user_id: a.user_id
                //     })
                // })

                // console.log(respArticle);
                setArticle(respArticle);
                getTimeStamp(response.data.data.updated_at);
                setLoading(false);
            }
        })
        .catch(function (error) {
            
        })
    }, [])

    function getTimeStamp (time) {
        var str_time, str_date, getDate, str_tahun, str_bulan, str_tanggal, str_jam, str_menit, date_str, time_str;
        var bulanIndo = ['', 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September' , 'Oktober', 'November', 'Desember'];

        getDate = time.split('T');
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

    let content = <div></div>
    
    if (isLoading) {
        content = <Loading />
    }
    else {
        content =  
        <article className="article">
            <h1 className="article__title">{article.title}</h1>
            <h3 className="article__subtitle">{article.subtitle}</h3>

            <p className="article__author">by Admin</p>
            {/* <p className="article__date">{article.updated_at}</p> */}
            <p className="article__date">{tanggal}  {bulan}  {tahun} | {jam}:{menit} WIB</p>

            <div className="article__content" dangerouslySetInnerHTML={{__html: `${article.content}` }} />
        </article>
    }

    return (
        <div id="main">
            <Header />
            <div id="content" className="account-container width--large">
            
                { content }
                
            </div>
            <Footer />
        </div>
    )
}
