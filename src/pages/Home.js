import React from 'react';
import Catalogue from '../components/Catalogue';
import Header from '../components/Header';
import Search from '../components/Search';
const Home = () => {
    return (
        <div>
            <Header/>
            <Search/>
            <Catalogue/>
        </div>
        
    );
};

export default Home;