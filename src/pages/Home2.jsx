import React from 'react';
import Join from '../components/Join.jsx';
import TeaM from "../components/Team.jsx";

import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

const Home2 = () => {
    return (
        <div>
            <Header/>
            <Join/>
            <TeaM/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default Home2;