import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Details = () => {

    const toy = useLoaderData()

    useTitle('Details')



    return (
        <div className="hero min-h-[50vh] bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={toy.photo} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{toy.name}</h1>
                    <p className="py-2"><span className='text-blue-500'>Price</span>: ${toy.price}</p>
                    <p className="py-2"><span className='text-blue-500'>Category</span>:{toy.category}</p>
                    <p className="py-2"><span className='text-blue-500'>Available Quantity</span>:{toy.quantity}</p>
                    <p className="py-2"><span className='text-blue-500'>Seller Name</span>:{toy.sellerName}</p>
                    <p className="py-2"><span className='text-blue-500'>Rating</span>:{toy.rating}</p>
                    <p className="py-2"><span className='text-blue-500'>About This Toy</span>:{toy.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;