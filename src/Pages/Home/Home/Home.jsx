import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Login from '../../Login/Login';
import SignUp from '../../SignUp/SignUp';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Login></Login>
            <SignUp></SignUp>
            <Footer></Footer>
        </div>
    );
};

export default Home;