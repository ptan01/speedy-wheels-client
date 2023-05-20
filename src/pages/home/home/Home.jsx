import React from 'react';
import Header from '../header/Header';
import Gallery from '../gallery/Gallery';
import ShopCategory from '../shopCategory/ShopCategory';
import LatestBlog from '../latestBlog/LatestBlog';
import useTitle from '../../../hooks/useTitle';

const Home = () => {

    useTitle('Home')
    
    return (
        <div>
            <Header></Header>
            <Gallery></Gallery>
            <ShopCategory></ShopCategory>
            <LatestBlog></LatestBlog>
        </div>
    );
};

export default Home;