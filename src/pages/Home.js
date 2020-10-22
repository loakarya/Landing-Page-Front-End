import React, { useEffect, useState } from 'react';
import HeaderBar from '../components/HeaderBar/HeaderBar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../assets/default.css';

import { useCookies } from 'react-cookie';

export default function Home () { 
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    
    useEffect(() => {
       if(cookies.token) {
           setLoggedIn(true);
       }
       else {
           setLoggedIn(false);
       }
    }, [])

    console.log(cookies.token);

    return (
        <div id="main">
            <HeaderBar 
                 
            />
            <Header isLoggedIn={isLoggedIn} />
            <div id="content" className="width--large">
                { isLoggedIn ? 'Logged In' : 'Logged Out' }
            </div>
            <Footer />
        </div>
    );
}
