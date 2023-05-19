import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/34560-404-error.json";
import { useRouteError } from 'react-router-dom';

const Erorr = () => {

    const error = useRouteError()
    console.log(error)


    return (
        <div>
            <h1 className='text-4xl text-center'>{error.message}</h1>
            <h1 className='text-4xl text-center'>{error.status}</h1>
           <div className='w-full h-full'>
           <Lottie animationData={groovyWalkAnimation} loop={true}></Lottie>
           </div>
            
        </div>
    );
};

export default Erorr;