import React, { Component } from 'react';
import FormLogin from '../components/FormLogin/FormLogin';

import axios from 'axios';

import '../assets/default.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
          title: 'Masuk ke'
        };
    }

    handleDataParent = (data) => {
        this.setState(
            {...data},
            // ()=>alert(JSON.stringify(this.state))
        );
        console.log(this.state);
    }

    saveDataToAPI () {
        // const url = ''
        // const data = {data}
        // console.log(data);
        // axios.post(url, data)
        // .then(function (response) {
        // console.log(response);
        // })
        // .catch(function (error) {
        // console.log(error);
        // });
    }
    
    render() {
        return (
            <div id="main">
                <div id="content" className="width--medium">
                    <div className="container bg-shadow">
                        <h2 className="text--center">{this.state.title}</h2>
                        <div className="logo-wrapper text--center">
                            <img src="../image/Logo Loak.png" alt=""/>
                        </div>
                        <FormLogin handleData={this.handleDataParent} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;