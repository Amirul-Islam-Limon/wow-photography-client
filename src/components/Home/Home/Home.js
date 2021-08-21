import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;