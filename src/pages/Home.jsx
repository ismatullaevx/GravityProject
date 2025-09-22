import React from 'react';
import Company from '../components/Company';
import CryptoMarket from '../components/CryptoMarket';

const Home = () => {
    return (
        <div className='px-[150px] py-[20px]'>
            <Company />
            <CryptoMarket />
        </div>
    );
}

export default Home;
