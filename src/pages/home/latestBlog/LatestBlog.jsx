import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LatestBlog = () => {


    useEffect(()=>{
        AOS.init()
    },[])




    return (
        <div className='my-20'>
            <div className='my-10'>
                <h1 className='text-center text-4xl text-blue-600'>Latest Blogs</h1>
                <p className='text-center '>your ultimate source for the latest advancements in car toy technology!  In this blog section, we'll showcase the  newest and most <br /> exciting car toys that are revolutionizing the playtime experience for children.</p>
            </div>
            <div className='grid grid-cols-3'>
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" data-aos-offset="200" data-aos-easing="ease-in-out" className="card w-96 bg-base-100 shadow-lg rounded-xl hover:shadow-blue-500/50">
                    <figure className="px-10 pt-10">
                        <img src="https://www.mahardhi.com/prestashop/MT03/kiddle/blog/5-single-default/consectetur-adipiscing.jpg" alt="Shoes" className="rounded-xl w-[500px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p className='text-blue-500'>29 December 2023</p>
                        <h2 className="card-title">Happy Kids</h2>
                        <p>Welcome to "Speedy Wheels," the ultimate destination for all things fun and play! We're thrilled to bring you the most exciting and joyful experiences in the world of toys and games.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-down" data-aos-duration="1000" data-aos-delay="200" data-aos-offset="200" data-aos-easing="ease-in-out" className="card w-96 bg-base-100 shadow-lg rounded-xl hover:shadow-blue-500/50">
                    <figure className="px-10 pt-10">
                        <img src="https://www.mahardhi.com/prestashop/MT03/kiddle/blog/4-single-default/lorem-ipsum-dolo.jpg" alt="Shoes" className="rounded-xl w-[500px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p className='text-blue-500'>29 December 2023</p>
                        <h2 className="card-title">Christmas Day Gift</h2>
                        <p>Discover the hottest and most sought-after toys of the season! We'll provide an inside scoop on the top picks from Santa's workshop, highlighting the latest trends </p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" data-aos-offset="200" data-aos-easing="ease-in-out" className="card w-96 bg-base-100 shadow-lg rounded-xl hover:shadow-blue-500/50">
                    <figure className="px-10 pt-10">
                        <img src="https://www.mahardhi.com/prestashop/MT03/kiddle/blog/2-single-default/lorem-ipsum-dolor-sit-amet.jpg" alt="Shoes" className="rounded-xl w-[500px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p className='text-blue-500'>29 December 2023</p>
                        <h2 className="card-title">Kids knowledge</h2>
                        <p>Buckle up for an alphabet adventure! In this blog series, we'll explore the ABCs through the world of cars. Each letter will be associated with a car-related word</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestBlog;