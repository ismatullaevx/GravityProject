import React from 'react';
import Company from '../components/Company';
import CryptoMarket from '../components/CryptoMarket';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Join from '../components/Join';
import Team from '../components/Team';

const Home = () => {
    return (
        <div className=''>
            <Header />
            <Company />
            <CryptoMarket />
            <Join />
            <Team />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;
