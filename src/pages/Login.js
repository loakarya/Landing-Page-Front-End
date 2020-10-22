import React, { useState } from 'react';
import FormLogin from '../components/FormLogin/FormLogin';

import axios from 'axios';
import { CookiesProvider, useCookies } from 'react-cookie';

import '../assets/default.css';
import { Redirect } from 'react-router-dom';

export default function Login() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);

    const [cookies, setCookie] = useCookies();

    const handleDataParent = (data) => {
        // console.log(data);
        saveDataToAPI(data);
    }

    function saveDataToAPI(data) {
        const endpoint = '/user/login'
        //console.log(data.password);
        axios.post(
            endpoint, 
            {
                username: data.email,
                password: data.password
            }
        )
        .then((response) => {
            console.log(response.data);
            if (response.status === 200) {
                handleCookies(response.data.data.api_token);
                setLoggedIn(true);
            }
            else {
                setIsError(true);
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    function handleCookies(data) {
        setCookie('token', data);
        // console.log(cookies.token)
    }

    if (isLoggedIn) {
        return <Redirect to="/" />
    }

    return (
        <CookiesProvider>
            <div id="main">
                <div id="content" className="width--medium">
                    <div className="container bg-shadow">
                        <h2 className="text--center">Masuk ke</h2>
                        <div className="logo-wrapper text--center">
                            <img src="../image/Logo Loak.png" alt=""/>
                        </div>
                        <FormLogin handleData={handleDataParent} />
                    </div>
                </div>
            </div>
        </CookiesProvider>
    );
}