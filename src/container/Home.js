import React, { Component } from 'react';
import HeaderBar from '../components/HeaderBar/HeaderBar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../assets/default.css';

class Home extends Component {
    state = {}
    
    render() {
        return (
            <div id="main">
                <HeaderBar />
                <Header />
                <div id="content" className="width--large">
                    Hollysheet
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;