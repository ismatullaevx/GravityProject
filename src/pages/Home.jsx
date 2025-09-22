import React from 'react';
import Company from '../components/Company';
import CryptoMarket from '../components/CryptoMarket';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className=''>
            <Header />
            <Company />
            <CryptoMarket />
            <Footer />
        </div>
    );
}

export default Home;
