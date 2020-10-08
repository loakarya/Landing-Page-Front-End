import React, { Component } from 'react';
// import Header from '../components/Header/Header';
import FormSignup from '../components/FormSignup/FormSignup';
import '../assets/default.css';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
          title: 'Daftar ke'
        };
    }
    
    render() {
        return (
            <div id="main">
                {/* <Header/> */}
                <div id="content" className="width--medium">
                    <div className="container bg-shadow">
                        <h2 className="text--center">{this.state.title}</h2>
                        <div className="logo-wrapper text--center">
                            <img src="../image/Logo Loak.png" alt=""/>
                        </div>
                        <FormSignup/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;