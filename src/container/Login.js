import React, { Component } from 'react';
import FormLogin from '../components/FormLogin/FormLogin';
import '../assets/default.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
          title: 'Masuk ke'
        };
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
                        <FormLogin/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;