import React from 'react';
// import Header from '../components/Header/Header';
import FormSignup from '../components/FormSignup/FormSignup';
import '../assets/default.css';


import axios from 'axios';
// import { CookiesProvider, useCookies } from 'react-cookie';

export default function Signup () {
    //const [cookies, setCookie] = useCookies();

    const handleDataParent = (data) => {
        //console.log(data);
        saveDataToAPI(data);
    }

    function saveDataToAPI(data) {
        const endpoint = '/user'
        console.log(data);
        axios.put(
            endpoint, 
            {
                username: data.username,
                password: data.password,
                email: data.email,
                first_name: data.firstName,
                last_name: data.lastName,
                address: data.address,
                zip_code: data.zipCode,
                city: data.city,
                province: data.province,
                country: data.country
            }
        )
        .then((response) => {
            console.log(response.data);
            if (response.data.status) {
                //buat alert true
            }
            else {
                
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    return (
        <div id="main">
            {/* <Header/> */}
            <div id="content" className="width--medium">
                <div className="container bg-shadow">
                    <h2 className="text--center">Daftar ke</h2>
                    <div className="logo-wrapper text--center">
                        <img src="../image/Logo Loak.png" alt=""/>
                    </div>
                    <FormSignup 
                        handleData={handleDataParent}
                    />
                </div>
            </div>
        </div>
    );
}