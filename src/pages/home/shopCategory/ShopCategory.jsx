import React, { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link, json } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopCategory = () => {

    const [ofRoads, setOfRoads] = useState([])
    const [electrics, setElectrics] = useState([])
    const [sports, setSports] = useState([])


    useEffect(() => {
        fetch('https://speedy-wheels-server.vercel.app/category/off-road')
            .then(res => res.json())
            .then(data => setOfRoads(data))

        fetch('https://speedy-wheels-server.vercel.app/category/electric')
            .then(res => res.json())
            .then(data => setElectrics(data))

        fetch('https://speedy-wheels-server.vercel.app/category/sports')
            .then(res => res.json())
            .then(data => setSports(data))
    }, [])


    return (
        <div className='mt-20 '>
            <div className='mb-10'>
                <h1 className='text-4xl text-blue-500 text-center'>Category</h1>
                <p className='text-center'>Here is some cars category. You can easily find your favorite car toys here</p>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Off-Road Vehicles</Tab>
                    <Tab>Electric Vehicles</Tab>
                    <Tab>Sports Cars</Tab>
                </TabList>

                <TabPanel>

                    <div className='grid lg:grid-cols-3 gap-4 mt-16'>
                        {
                            ofRoads.map(ofRoad => <div key={ofRoad._id} className="card card-compact max-w-96  bg-base-100 shadow-xl">
                                <figure><img className='h-[300px] w-[500px]' src={ofRoad.photo} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-blue-500">{ofRoad.name}</h2>
                                    <p className='text-xl'>Price: ${ofRoad.price}</p>
                                    <p className='text-xl'>Rating: {ofRoad.rating} <Rating
                                        readonly
                                        placeholderRating={ofRoad.rating}
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    /></p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/details/${ofRoad._id}`} className='btn'>Details</Link>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>


                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-3 gap-4 mt-16'>
                        {
                            electrics.map(electric => <div key={electric._id} className="card card-compact max-w-96  bg-base-100 shadow-xl">
                                <figure><img className='h-[300px] w-[500px]' src={electric.photo} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-blue-500">{electric.name}</h2>
                                    <p className='text-xl'>Price: ${electric.price}</p>
                                    <p className='text-xl'>Rating: {electric.rating} <Rating
                                        readonly
                                        placeholderRating={electric.rating}
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    /></p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/details/${electric._id}`} className='btn'>Details</Link>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-3 gap-4 mt-16'>
                        {
                            sports.map(sport => <div key={sport._id} className="card card-compact max-w-96  bg-base-100 shadow-xl">
                                <figure><img className='h-[300px] w-[500px]' src={sport.photo} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-blue-500">{sport.name}</h2>
                                    <p className='text-xl'>Price: ${sport.price}</p>
                                    <p className='text-xl'>Rating: {sport.rating} <Rating
                                        readonly
                                        placeholderRating={sport.rating}
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    /></p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/details/${sport._id}`} className='btn'>Details</Link>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopCategory;