import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Bannar from '../Bannar/Bannar';
import ShopByCategory from '../ShopByCategory/ShopByCategory';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Bannar></Bannar>
            <ShopByCategory></ShopByCategory>
            <Footer></Footer>
        </div>
    );
};

export default Home;