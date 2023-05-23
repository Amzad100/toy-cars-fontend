import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Bannar from '../Bannar/Bannar';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import Galary from '../Gallery/Gallery';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Bannar></Bannar>
            <ShopByCategory></ShopByCategory>
            <Galary></Galary>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;