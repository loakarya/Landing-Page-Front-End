import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Card from '../components/Card/Card';

class About extends Component {
    state = {  }
    render() {
        return (
            <div id="main">
                <Header />
                <div id="content" style={{paddingTop: 0}}>
                    <div class="image-heading" style={{backgroundImage: `url(${'https://picsum.photos/600/200?grayscale'})`}}>
                        <h1 class="image-heading-title">Tentang Kami</h1>
                    </div>

                    <div class="width--large compro-section">
                        <h1 className="pt-2rem">Siapa Kami?</h1>
                        <p>Loakarya merupakan sebuah startup di bidang waste management yang mengubah limbah menjadi produk furniture dengan menggunakan metode upcyling.</p>
                    </div>

                    <div class="width--large compro-section">
                        <p><b>“We escalate the value of waste material by upcycling and repurposing for eco living.”</b></p>
                    </div>

                    <div class="width--large compro-section">
                        <h1>Visi dan Misi</h1>
                        <p>Visi Kami adalah mengurangi limbah dalam sebuah kota sebanyak 100 ton dalam setahun di 2030.</p>
                        <p>Dan misi Loakarya adalah untuk menuntaskan permasalahan limbah di masyarakat.</p>
                    </div>

                    <article class="testimoni-section">
                        <div class="bg-white pt-2rem ">
                            <div class="w-80">
                                <h1 class="section-title font-black" >Our Team</h1>

                                <Card/>
                            </div>
                        </div>
                    </article>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default About;