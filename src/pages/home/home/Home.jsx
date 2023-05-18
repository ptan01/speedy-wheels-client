import React from 'react';
import Header from '../header/Header';
import Gallery from '../gallery/Gallery';
import ShopCategory from '../shopCategory/ShopCategory';

const Home = () => {
    
    return (
        <div>
            <Header></Header>
            <Gallery></Gallery>
            <ShopCategory></ShopCategory>
        </div>
    );
};

export default Home;